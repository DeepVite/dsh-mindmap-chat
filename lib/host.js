return {
  apply(ctx) {
    const sessionQuery = ctx.get('sessionQuery')
    if (sessionQuery === undefined) return

    const surfaceCache = new Map()
    const compactCache = new Map()
    let lineageCache = null

    function extractText(content) {
      if (!Array.isArray(content)) return ''
      let out = ''
      for (const b of content) {
        if (b == null) continue
        if (typeof b === 'string') out += b
        else if (typeof b === 'object') {
          if (typeof b.text === 'string') out += b.text
          else if (typeof b.content === 'string') out += b.content
        }
      }
      return out
    }

    harness.handle('get-lineage', async (args) => {
      const force = !!(args && args.refresh)
      if (!force && lineageCache) return lineageCache
      try {
        const records = await sessionQuery.listSessions()
        const entries = []
        const ids = []
        for (const r of records || []) {
          const h = (r && r.header) || {}
          if (h.id == null) continue
          ids.push(String(h.id))
          entries.push({
            id: String(h.id),
            parentId: h.parentSession != null ? String(h.parentSession) : null,
            seedLength: typeof h.seedLength === 'number' ? h.seedLength : null,
            createdAt: typeof h.createdAt === 'number' ? h.createdAt : 0,
          })
        }
        const titles = {}
        if (ids.length > 0) {
          try {
            const batch = await sessionQuery.readTitleSnapshots(ids)
            for (const t of batch || []) {
              if (t && t.status === 'fulfilled' && t.value && t.value.title && typeof t.value.title.title === 'string') {
                titles[String(t.sessionId)] = t.value.title.title
              }
            }
          } catch (e) {
            /* 标题尽力而为 */
          }
        }
        const result = { ok: true, entries, titles }
        lineageCache = result
        return result
      } catch (e) {
        return { ok: false, error: String((e && e.message) || e), entries: [], titles: {} }
      }
    })

    harness.handle('get-messages', async (args) => {
      const id = args && typeof args.id === 'string' ? args.id : ''
      const refresh = !!(args && args.refresh)
      if (!id) return { ok: false, error: '缺少会话 ID', rounds: [] }
      if (!refresh) {
        const hit = surfaceCache.get(id)
        if (hit) return hit
      }
      try {
        const snap = await sessionQuery.readSurface(id)
        const events = Array.isArray(snap && snap.events) ? snap.events : []
        const rounds = []
        for (const ev of events) {
          if (!ev || typeof ev.seq !== 'number') continue
          if (ev.type === 'user/message') {
            const srcKind = (ev.data && ev.data.source && ev.data.source.kind) || ''
            if (srcKind !== 'user') continue
            const text = extractText(ev.data && ev.data.content)
            rounds.push({
              turn: null,
              userSeq: ev.seq,
              userText: typeof text === 'string' ? text.slice(0, 200) : '',
              items: [{ kind: 'user', seq: ev.seq, text: typeof text === 'string' ? text.slice(0, 200) : '' }],
            })
          } else if (ev.type === 'assistant/message') {
            if (rounds.length === 0) continue
            if (ev.data && typeof ev.data.turn === 'number') {
              for (let i = rounds.length - 1; i >= 0; i--) {
                if (rounds[i].turn === null) rounds[i].turn = ev.data.turn
                else break
              }
            }
            const r = rounds[rounds.length - 1]
            const text = extractText(ev.data && ev.data.message && ev.data.message.content)
            if (typeof text === 'string' && text) {
              r.items.push({ kind: 'assistant', seq: ev.seq, text: text.slice(0, 200) })
            }
          }
        }
        const result = {
          ok: true,
          id,
          rounds,
          capturedThroughSeq: (snap && typeof snap.capturedThroughSeq === 'number') ? snap.capturedThroughSeq : null,
        }
        surfaceCache.set(id, result)
        return result
      } catch (e) {
        surfaceCache.delete(id)
        return { ok: false, error: String((e && e.message) || e), id, rounds: [] }
      }
    })

    /* 压缩块：从持久层原始日志解析 compaction 边界，还原压缩前的轮次与摘要 */
    function roundsFromEvents(events) {
      const rounds = []
      for (const ev of events) {
        if (!ev || typeof ev.seq !== 'number') continue
        if (ev.type === 'user/message') {
          const srcKind = (ev.data && ev.data.source && ev.data.source.kind) || ''
          if (srcKind !== 'user') continue
          const text = extractText(ev.data && ev.data.content)
          rounds.push({
            turn: null,
            userSeq: ev.seq,
            userText: typeof text === 'string' ? text.slice(0, 200) : '',
            items: [{ kind: 'user', seq: ev.seq, text: typeof text === 'string' ? text.slice(0, 200) : '' }],
          })
        } else if (ev.type === 'assistant/message') {
          if (rounds.length === 0) continue
          if (ev.data && typeof ev.data.turn === 'number') {
            for (let i = rounds.length - 1; i >= 0; i--) {
              if (rounds[i].turn === null) rounds[i].turn = ev.data.turn
              else break
            }
          }
          const r = rounds[rounds.length - 1]
          const text = extractText(ev.data && ev.data.message && ev.data.message.content)
          if (typeof text === 'string' && text) {
            r.items.push({ kind: 'assistant', seq: ev.seq, text: text.slice(0, 200) })
          }
        }
      }
      return rounds
    }

    harness.handle('get-compact-blocks', async (args) => {
      const id = args && typeof args.id === 'string' ? args.id : ''
      if (!id) return { ok: false, error: '缺少会话 ID', blocks: [] }
      try {
        const persist = ctx.get('sessionPersistence')
        if (!persist || typeof persist.readFrom !== 'function') {
          return { ok: false, error: '当前环境不支持读取原始日志', blocks: [] }
        }
        const win = await persist.readFrom(id, 0)
        const events = Array.isArray(win && win.events) ? win.events : []
        /* 逐段聚合：遇到 compaction/start..end 边界，把已累积轮次打包为块 */
        const blocks = []
        let accum = []
        let pendSummary = ''
        let pendStart = null
        let pendEnd = null
        let inBand = false
        for (const ev of events) {
          if (!ev || typeof ev.seq !== 'number') continue
          if (ev.type === 'compaction/start') {
            if (accum.length > 0) {
              blocks.push({ compStartSeq: pendStart, compEndSeq: pendEnd, summaryText: pendSummary.slice(0, 1200), rounds: roundsFromEvents(accum) })
            }
            accum = []
            inBand = true
            pendStart = ev.seq
            pendEnd = null
            pendSummary = ''
            continue
          }
          if (ev.type === 'compaction/summary') {
            pendSummary = extractText(ev.data && ev.data.summary)
            continue
          }
          if (ev.type === 'compaction/end') {
            pendEnd = ev.seq
            inBand = false
            if (accum.length > 0) {
              blocks.push({ compStartSeq: pendStart, compEndSeq: pendEnd, summaryText: pendSummary.slice(0, 1200), rounds: roundsFromEvents(accum) })
            }
            accum = []
            continue
          }
          if (inBand) continue /* 压缩区间内的中间事件不参与轮次 */
          if (ev.type === 'user/message' || ev.type === 'assistant/message') accum.push(ev)
        }
        /* 尾部：最后一次压缩后的事件不打包（它们已由 surface 提供） */
        const result = { ok: true, id, blocks }
        compactCache.set(id, result)
        return result
      } catch (e) {
        compactCache.delete(id)
        return { ok: false, error: String((e && e.message) || e), id, blocks: [] }
      }
    })

    harness.handle('compact-session', async (args) => {
      const id = args && typeof args.id === 'string' ? args.id : ''
      if (!id) return { ok: false, error: '缺少会话 ID' }
      try {
        const compaction = ctx.get('compaction')
        if (!compaction || typeof compaction.compactNow !== 'function') {
          return { ok: false, error: '当前环境未挂载压缩服务，请在对话界面使用压缩' }
        }
        const sessionsSvc = ctx.get('sessions')
        const agentsSvc = ctx.get('agents')
        const session = sessionsSvc && typeof sessionsSvc.get === 'function' ? sessionsSvc.get(id) : null
        if (!session) return { ok: false, error: '会话不存在' }
        let runMaintenance = null
        let options = {}
        if (agentsSvc && typeof agentsSvc.get === 'function') {
          const a = agentsSvc.get(id)
          if (a && typeof a.runMaintenance === 'function') runMaintenance = a.runMaintenance.bind(a)
          if (a && a.options && typeof a.options === 'object') options = a.options
        }
        if (!runMaintenance) return { ok: false, error: '会话没有可用的压缩执行体（agent 未运行），请在对话界面使用压缩' }
        const res = await compaction.compactNow({ session, options, runMaintenance }, undefined, undefined)
        compactCache.delete(id)
        return { ok: true, compacted: !!res }
      } catch (e) {
        return { ok: false, error: String((e && e.message) || e) }
      }
    })

    harness.handle('search-sessions', async (args) => {
      const query = args && typeof args.query === 'string' ? args.query.trim() : ''
      if (!query) return { ok: true, items: [] }
      try {
        const page = await sessionQuery.searchSessions({ query, limit: 8 })
        const items = []
        for (const hit of (page && page.items) || []) {
          const h = (hit && hit.header) || {}
          if (h.id == null) continue
          items.push({
            id: String(h.id),
            snippet: (hit && hit.bestMatch && typeof hit.bestMatch.snippet === 'string') ? hit.bestMatch.snippet : '',
          })
        }
        return { ok: true, items }
      } catch (e) {
        return { ok: false, error: String((e && e.message) || e), items: [] }
      }
    })
  },
}