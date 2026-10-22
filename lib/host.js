/**
 * Host half of dsh-mindmap-chat.
 *
 * 0.1 paired this half's `harness.handle(method, fn)` with the client half's
 * global `host.call(method, args)`. DSH 0.2 removed that pairing for installed
 * plugins (the browser half receives `ctx`/`React`/`require` and no `host`), so
 * the same operations are served as plain HTTP routes — the carrier the shipped
 * dsh-alert plugin uses: POST /dsh-mindmap-chat/<method> with a JSON body
 * answers exactly the payload the old handlers returned.
 */
const PREFIX = '/dsh-mindmap-chat'

function json(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(payload))
}

export default {
  name: 'dsh-mindmap-chat',
  inject: ['webServer'],
  apply(ctx) {
    const webServer = ctx.webServer
    const sessionQuery = ctx.get('sessionQuery')
    if (sessionQuery === undefined) return

    /** Expose one host operation to the client half as a JSON route. */
    function route(name, handler) {
      ctx.effect(() => webServer.register({
        kind: 'exact',
        path: PREFIX + '/' + name,
        handler: (req, res) => {
          if (req.method !== 'POST' && req.method !== 'GET') {
            res.statusCode = 405
            res.setHeader('Allow', 'GET, POST')
            res.end('method not allowed')
            return
          }
          let body = ''
          req.on('data', (chunk) => {
            body += chunk
            if (body.length > 1000000) req.destroy()
          })
          req.on('end', async () => {
            let args = {}
            if (req.method === 'POST' && body.length > 0) {
              try {
                args = JSON.parse(body)
              } catch {
                json(res, 400, { ok: false, error: 'invalid JSON body' })
                return
              }
            } else {
              try {
                args = Object.fromEntries(new URL(req.url ?? '/', 'http://localhost').searchParams)
              } catch {
                args = {}
              }
            }
            try {
              json(res, 200, await handler(args))
            } catch (error) {
              json(res, 200, { ok: false, error: String((error && error.message) || error) })
            }
          })
          req.on('error', () => {})
        },
      }), 'dsh-mindmap-chat: ' + name + ' route')
    }

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

    route('get-lineage', async (args) => {
      const force = !!(args && args.refresh)
      if (!force && lineageCache) return lineageCache
      try {
        const records = await sessionQuery.listSessions()
        const entries = []
        for (const r of records || []) {
          const h = (r && r.header) || {}
          if (h.id == null) continue
          entries.push({
            id: String(h.id),
            parentId: h.parentSession != null ? String(h.parentSession) : null,
            seedLength: typeof h.seedLength === 'number' ? h.seedLength : null,
            createdAt: typeof h.createdAt === 'number' ? h.createdAt : 0,
          })
        }
        /* 0.2：这里原先会为每个会话调用 readTitleSnapshots 折叠标题 —— 81 个会话
           实测要 10–15 秒，而且是在宿主事件循环上跑，整个应用（含左侧栏）都会卡住；
           客户端的显示名其实全部来自会话快照（listState.byId），从不读这些标题。
           所以只回血缘结构，不再折叠标题，保持接口形状不变。 */
        const result = { ok: true, entries, titles: {} }
        lineageCache = result
        return result
      } catch (e) {
        return { ok: false, error: String((e && e.message) || e), entries: [], titles: {} }
      }
    })

    route('get-messages', async (args) => {
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

    route('get-compact-blocks', async (args) => {
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

    route('compact-session', async (args) => {
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

    route('search-sessions', async (args) => {
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

    /* 重命名会话：客户端半只能改「已保留」的会话（sessions.binding 对冷会话返回
       undefined），所以真正的写入放在宿主侧。sessionController.rename 是 DSH 的
       官方 Host API：它会先显式 resume 会话，再追加一条持久化的标题事件，因此
       未打开的分支、甚至归档会话都能改名，返回 { title, seq }。 */
    route('rename-session', async (args) => {
      const id = args && typeof args.id === 'string' ? args.id : ''
      const title = args && typeof args.title === 'string' ? args.title.trim() : ''
      if (!id) return { ok: false, error: '缺少会话 ID' }
      if (!title) return { ok: false, error: '名称不能为空' }
      try {
        const controller = ctx.get('sessionController')
        if (controller && typeof controller.rename === 'function') {
          const value = await controller.rename({ sessionId: id, title })
          const applied = value && typeof value.title === 'string' ? value.title : title
          return { ok: true, id, title: applied, seq: value && value.seq }
        }
        /* 宿主没有 sessionController（极旧版本）时的等价路径：仅当会话已在内存中
           （sessions.get 命中）时直接折叠标题。 */
        const titles = ctx.get('sessionTitle')
        const store = ctx.get('sessions')
        const session = store && typeof store.get === 'function' ? store.get(id) : null
        if (titles && typeof titles.rename === 'function' && session) {
          const snapshot = titles.rename(session, title)
          return { ok: true, id, title: (snapshot && snapshot.title) || title }
        }
        return { ok: false, error: '当前环境不支持重命名（宿主缺少 sessionController 服务）' }
      } catch (e) {
        return { ok: false, error: String((e && e.message) || e) }
      }
    })
  },
}