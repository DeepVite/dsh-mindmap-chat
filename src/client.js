const CSS = `

.brm-browser, .brm-cv-backdrop, .brm-drawer, .brm-toast {
  --brm-bg: var(--dsw-specific-sidebar-fill, #f9fafb);
  --brm-bg2: var(--dsw-alias-bg-layer-2, #f0f2f7);
  --brm-bg3: var(--dsw-alias-bg-layer-3, #e4e8f0);
  --brm-overlay: var(--dsw-alias-bg-overlay, #ffffff);
  --brm-border: var(--dsw-alias-border-l1, rgba(0,0,0,.06));
  --brm-guide: var(--dsw-alias-border-l2, rgba(0,0,0,.12));
  --brm-text: var(--dsw-alias-label-primary, #1b2233);
  --brm-dim: var(--dsw-alias-label-secondary, #5c6780);
  --brm-faint: var(--dsw-alias-label-tertiary, #8a94ad);
  --brm-blue: var(--dsw-alias-state-business-primary, #2f7fd9);
  --brm-green: var(--dsw-alias-state-success-primary, #0da36b);
  --brm-amber: var(--dsw-alias-state-warn-primary, #c07f00);
  --brm-red: var(--dsw-alias-state-error-primary, #d94f4f);
  --brm-hover: var(--dsw-alias-interactive-bg-hover, rgba(38,49,72,.06));
  --brm-active: var(--dsw-alias-interactive-bg-hover-solid, #eef1f7);
  --brm-btn-fill: var(--dsw-alias-button-elevated-fill, #ffffff);
  --brm-btn-hover: var(--dsw-alias-button-ghost-active-hover, #eef1f7);
  --brm-primary-fill: var(--dsw-alias-button-primary-fill, #1b2233);
  --brm-primary-hover: var(--dsw-alias-button-primary-hover, #2c3340);
  --brm-primary-text: var(--dsw-alias-label-primary-inverted, #ffffff);
  --brm-toast-bg: var(--dsw-alias-toast-bg, #2c2c2e);
  --brm-toast-text: var(--dsw-alias-label-primary-foreground, #ffffff);
  --brm-mask: var(--dsw-alias-bg-mask-3, rgba(0,0,0,.48));
}
.brm-dark { color-scheme: dark; }
.brm-light { color-scheme: light; }
.brm-browser { display:flex; flex-direction:column; height:100%; overflow:hidden; background: var(--brm-bg); color: var(--brm-text); font-size:13px; }
.brm-rail { width:100%; padding:12px 0; font-size:13px; background:none; border:none; cursor:pointer; color: var(--brm-text); }
.brm-head { display:flex; align-items:center; gap:6px; padding:10px 10px 6px; }
.brm-title { flex:1; font-weight:700; font-size:14px; }
.brm-iconbtn { height:26px; min-width:26px; padding:0 5px; border-radius:4px; border:1px solid var(--brm-border); background: var(--brm-btn-fill); color: var(--brm-text); cursor:pointer; font-size:13px; line-height:1; }
.brm-iconbtn:hover { background: var(--brm-btn-hover); }
.brm-header-btn { height:26px; padding:0 10px; border-radius:4px; border:1px solid transparent; background: var(--brm-primary-fill); color: var(--brm-primary-text); cursor:pointer; font-size:12px; font-weight:600; }
.brm-header-btn:hover { background: var(--brm-primary-hover); }
.brm-header-btn-ghost { height:26px; padding:0 10px; border-radius:4px; border:1px solid var(--brm-guide); background: var(--brm-btn-fill); color: var(--brm-text); cursor:pointer; font-size:12px; }
.brm-header-btn-ghost:hover { background: var(--brm-btn-hover); }
.brm-chips { display:flex; gap:2px; padding:0 10px; border-bottom:1px solid var(--brm-border); overflow-x:auto; scrollbar-width:none; }
.brm-chips::-webkit-scrollbar { display:none; }
.brm-chip { flex:none; padding:5px 9px 6px; background:none; border:none; border-bottom:2px solid transparent; border-radius:0; color: var(--brm-dim); cursor:pointer; font-size:12px; white-space:nowrap; }
.brm-chip:hover { color: var(--brm-text); }
.brm-chip.brm-active { color: var(--brm-text); border-bottom-color: var(--brm-text); font-weight:600; }
.brm-search-wrap { position:relative; padding:8px 10px 6px; }
.brm-search { width:100%; padding:5px 8px; border-radius:4px; border:1px solid var(--brm-border); background: var(--brm-bg2); color: var(--brm-text); font:inherit; outline:none; }
.brm-search::placeholder { color: var(--brm-faint); }
.brm-search-results { position:absolute; left:10px; right:10px; top:36px; z-index:30; background: var(--brm-overlay); border:1px solid var(--brm-guide); border-radius:4px; box-shadow:0 8px 24px rgba(0,0,0,.3); max-height:240px; overflow-y:auto; }
.brm-sr-item { padding:7px 10px; cursor:pointer; border-bottom:1px solid var(--brm-border); }
.brm-sr-item:last-child { border-bottom:none; }
.brm-sr-item:hover { background: var(--brm-btn-hover); }
.brm-sr-title { font-weight:600; font-size:12px; }
.brm-sr-snippet { color: var(--brm-dim); font-size:12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.brm-sr-empty { padding:8px 10px; color: var(--brm-dim); font-size:12px; }
.brm-tree { flex:1; overflow-y:auto; padding:0 6px 10px; }
.brm-empty { padding:14px 10px; color: var(--brm-dim); font-size:12px; line-height:1.7; }
.brm-row { display:flex; align-items:center; padding:0 8px; height:32px; border-radius:8px; cursor:pointer; gap:0; }
.brm-row:hover { background: var(--brm-hover); }
.brm-row.brm-current { background: var(--brm-hover); }
.brm-chevron { width:16px; height:16px; flex:none; border:none; background:none; color: var(--brm-dim); cursor:pointer; border-radius:3px; font-size:9px; padding:0; }
.brm-chevron.brm-empty { visibility:hidden; }
.brm-chevron:hover { background: var(--brm-btn-hover); color: var(--brm-text); }
.brm-row-title { flex:1; min-width:0; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin:0 6px 0 4px; }
.brm-row-tags { flex:none; display:inline-flex; gap:6px; align-items:center; margin-left:2px; }
.brm-tag { font-size:11px; color: var(--brm-faint); background:none; border:none; padding:0; border-radius:0; line-height:1; }
.brm-tag.brm-fork { color: var(--brm-blue); }
.brm-tag.brm-rep { color: var(--brm-amber); font-weight:600; }
.brm-tag.brm-sub { color: var(--brm-dim); }
.brm-tag.brm-group { color: var(--brm-green); font-weight:600; }
.brm-row.brm-grouprow { background: var(--brm-bg2); border:1px solid var(--brm-border); border-radius:4px; margin:2px 0; }
.brm-grouprow > .brm-row-title { font-weight:600; }
.brm-wsrow { background: var(--brm-bg2); border:1px solid var(--brm-border); border-radius:4px; margin:3px 0; font-weight:600; }
.brm-ws-actions { display:none; gap:2px; margin-left:4px; }
.brm-wsrow:hover .brm-ws-actions { display:inline-flex; }
.brm-ws-act { height:20px; min-width:20px; padding:0 4px; border-radius:4px; border:1px solid var(--brm-border); background: var(--brm-btn-fill); color: var(--brm-text); cursor:pointer; font-size:11px; line-height:1; }
.brm-ws-act:hover { background: var(--brm-btn-hover); }
.brm-ws-act.brm-on { background: var(--brm-active); font-weight:700; }
.brm-addrow { width:100%; justify-content:flex-start; color: var(--brm-dim); border:1px dashed var(--brm-guide); margin-top:6px; background:none; }
.brm-addrow:hover { color: var(--brm-text); background: var(--brm-hover); }
.brm-empty-inline { padding:6px 10px; }
.brm-dot { width:7px; height:7px; border-radius:50%; flex:none; display:inline-block; }
.brm-dot.brm-run { background: var(--brm-blue); animation: brmPulse 1.4s ease-in-out infinite; }
.brm-dot.brm-wait { background: var(--brm-amber); }
.brm-dot.brm-done { background: var(--brm-green); }
@keyframes brmPulse { 0%,100% { opacity:1; } 50% { opacity:.35; } }
.brm-time { flex:none; margin-left:auto; padding-left:6px; color: var(--brm-faint); font-size:12px; white-space:nowrap; }
.brm-row:hover .brm-time { display:none; }
.brm-overflow { display:none; margin-left:auto; width:22px; height:22px; flex:none; border:none; background:none; color: var(--brm-dim); cursor:pointer; border-radius:5px; font-size:14px; padding:0; }
.brm-row:hover .brm-overflow { display:inline-flex; align-items:center; justify-content:center; }
.brm-overflow:hover { background: var(--brm-btn-hover); color: var(--brm-text); }
.brm-children { margin-left:14px; padding-left:6px; border-left:1px solid var(--brm-guide); }
.brm-children.brm-hidden { display:none; }
.brm-flash { animation: brmFlash 1.4s ease; }
@keyframes brmFlash { 0% { background: var(--brm-active); } 100% { background: transparent; } }
.brm-rename { margin:2px 0 6px 22px; display:flex; gap:6px; align-items:center; }
.brm-rename-input { flex:1; min-width:0; padding:5px 8px; border-radius:4px; border:1px solid var(--brm-border); background: var(--brm-bg2); color: var(--brm-text); font:inherit; outline:none; }
.brm-menu-backdrop { position:fixed; inset:0; z-index:40; }
.brm-menu { position:fixed; z-index:41; min-width:150px; background: var(--brm-overlay); border:1px solid var(--brm-guide); border-radius:6px; box-shadow:0 8px 24px rgba(0,0,0,.25); padding:4px; color: var(--brm-text); font-size:13px; }
.brm-menu-item { display:flex; align-items:center; gap:8px; padding:7px 12px; border-radius:4px; cursor:pointer; border:none; background:none; color: var(--brm-text); font-size:12px; width:100%; text-align:left; }
.brm-menu-item:hover { background: var(--brm-hover); }
.brm-menu-item.brm-danger { color: var(--brm-red); }
.brm-menu-title { padding:7px 12px 3px; font-size:12px; font-weight:600; color: var(--brm-dim); }
.brm-menu-note { padding:7px 12px; color: var(--brm-faint); font-size:12px; }
.brm-btn { display:inline-flex; align-items:center; gap:4px; padding:4px 9px; border-radius:4px; border:1px solid var(--brm-border); background: var(--brm-btn-fill); color: var(--brm-text); cursor:pointer; font-size:12px; }
.brm-btn:hover { background: var(--brm-btn-hover); }
.brm-btn:disabled { opacity:.5; cursor:default; }
.brm-btn.brm-primary { background: var(--brm-primary-fill); border-color: transparent; color: var(--brm-primary-text); font-weight:600; }
.brm-btn.brm-primary:hover { background: var(--brm-primary-hover); }
.brm-foot { padding:7px 10px; border-top:1px solid var(--brm-border); color: var(--brm-faint); font-size:11px; line-height:1.6; }
.brm-cv-backdrop { position:absolute; top:0; bottom:0; z-index:60; display:flex; flex-direction:column; background: var(--brm-bg); color: var(--brm-text); font-size:13px; border-left:1px solid var(--brm-guide); border-right:1px solid var(--brm-guide); }
.brm-cv-head { flex:none; display:flex; align-items:center; gap:8px; padding:8px 12px; border-bottom:1px solid var(--brm-border); position:relative; }
.brm-cv-title { flex:1; font-weight:700; }
.brm-cv-tools { display:inline-flex; gap:6px; align-items:center; flex-wrap:wrap; justify-content:flex-end; }
.brm-cv-toggle { background:none; border:1px solid var(--brm-guide); border-radius:4px; padding:3px 8px; cursor:pointer; font-size:12px; color: var(--brm-dim); }
.brm-cv-toggle:hover { background: var(--brm-btn-hover); color: var(--brm-text); }
.brm-cv-toggle.brm-on { background: var(--brm-active); color: var(--brm-text); font-weight:600; }
.brm-cv-body { flex:1; position:relative; min-height:0; }
.brm-cv-canvas { position:absolute; inset:0; overflow:hidden; cursor:grab; background-image: radial-gradient(var(--brm-guide) 1px, transparent 1px); background-size:26px 26px; touch-action:none; }
.brm-cv-canvas.brm-dragging { cursor:grabbing; }
.brm-cv-inner { position:absolute; left:0; top:0; transform-origin:0 0; }
.brm-cv-edges { position:absolute; left:0; top:0; overflow:visible; pointer-events:none; }
.brm-cv-colhead { position:absolute; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; font-size:11px; color: var(--brm-dim); max-width:240px; display:inline-flex; gap:6px; align-items:center; }
.brm-cv-colnum { font-weight:600; color: var(--brm-blue); flex:none; }
.brm-cv-card { position:absolute; width:240px; box-sizing:border-box; background: var(--brm-bg2); border:1px solid var(--brm-border); border-radius:6px; padding:7px 10px 9px; cursor:pointer; overflow:hidden; }
.brm-cv-card:hover { border-color: var(--brm-faint); }
.brm-cv-card.brm-cv-current { border:2px solid var(--brm-text); }
.brm-cv-card.brm-cv-dim { opacity:.55; }
.brm-cv-card.brm-cv-blank { border-style:dashed; }
.brm-cv-card.brm-cv-compact { border-color: var(--brm-amber); background: var(--brm-bg3); }
.brm-cv-card.brm-cv-compact:hover { border-color: var(--brm-amber); }
.brm-cv-role { display:flex; align-items:center; gap:6px; font-size:11px; color: var(--brm-faint); }
.brm-cv-role.brm-user { color: var(--brm-blue); }
.brm-cv-role.brm-ai { color: var(--brm-green); }
.brm-cv-text { margin-top:4px; font-size:12px; line-height:16.5px; display:-webkit-box; -webkit-line-clamp:6; -webkit-box-orient:vertical; overflow:hidden; word-break:break-all; white-space:pre-wrap; }
.brm-cv-acts { margin-top:6px; display:none; gap:5px; }
.brm-cv-card:hover .brm-cv-acts { display:inline-flex; }
.brm-cv-forktag { font-size:11px; color: var(--brm-blue); margin-left:auto; flex:none; }
.brm-cv-hint { position:absolute; left:12px; bottom:8px; color: var(--brm-faint); font-size:11px; pointer-events:none; }
.brm-tooltip { position:absolute; right:12px; top:40px; z-index:70; width:280px; background: var(--brm-overlay); border:1px solid var(--brm-guide); border-radius:6px; box-shadow:0 8px 24px rgba(0,0,0,.28); padding:9px 11px; color: var(--brm-text); font-size:12px; line-height:1.7; pointer-events:none; }
.brm-tooltip .brm-tip-title { font-weight:700; margin-bottom:2px; }
.brm-cv-empty { padding:16px 12px; color: var(--brm-dim); font-size:12px; line-height:1.7; }
.brm-cv-rolerow { display:flex; align-items:center; gap:6px; font-size:11px; color: var(--brm-dim); }
.brm-cv-usertext { margin-top:4px; font-size:12px; line-height:16.5px; display:-webkit-box; -webkit-line-clamp:5; -webkit-box-orient:vertical; overflow:hidden; word-break:break-all; white-space:pre-wrap; }
.brm-cv-meta { margin-top:5px; font-size:11px; color: var(--brm-faint); display:flex; gap:6px; align-items:center; }
.brm-cv-items { margin-top:6px; border-top:1px dashed var(--brm-guide); padding-top:6px; display:flex; flex-direction:column; gap:7px; }
.brm-cv-item-label { font-size:11px; color: var(--brm-faint); }
.brm-cv-item-label.brm-user { color: var(--brm-blue); }
.brm-cv-item-label.brm-ai { color: var(--brm-green); }
.brm-cv-itemtext { margin-top:2px; font-size:12px; line-height:16.5px; display:-webkit-box; -webkit-line-clamp:4; -webkit-box-orient:vertical; overflow:hidden; word-break:break-all; white-space:pre-wrap; }
.brm-cv-item-acts { display:none; margin-top:5px; gap:5px; }
.brm-cv-item:hover .brm-cv-item-acts { display:inline-flex; }
.brm-cv-round-foot { margin-top:8px; display:flex; }
.brm-cv-resize { position:absolute; top:0; bottom:0; right:-4px; width:8px; cursor:col-resize; z-index:61; }
.brm-cv-resize::after { content:''; position:absolute; top:0; bottom:0; left:3px; width:2px; background: var(--brm-blue); opacity:0; }
.brm-cv-resize:hover::after, .brm-cv-resize.brm-dragging::after { opacity:.5; }
.brm-drawer { position:fixed; top:70px; bottom:10px; z-index:62; width:300px; display:flex; flex-direction:column; background: var(--brm-bg); border:1px solid var(--brm-guide); border-radius:6px; box-shadow:0 12px 32px rgba(0,0,0,.25); overflow:hidden; color: var(--brm-text); font-size:13px; }
.brm-drawer-head { display:flex; align-items:center; gap:6px; padding:8px 10px; border-bottom:1px solid var(--brm-border); }
.brm-drawer-title { flex:1; font-weight:700; font-size:13px; }
.brm-drawer-note { padding:6px 10px; border-bottom:1px solid var(--brm-border); color: var(--brm-faint); font-size:11px; line-height:1.5; }
.brm-drawer-list { flex:1; overflow-y:auto; }
.brm-drawer-foot { padding:8px 10px; border-top:1px solid var(--brm-border); }
.brm-round { border-bottom:1px solid var(--brm-border); }
.brm-round-head { display:flex; align-items:center; gap:4px; padding:7px 10px; cursor:pointer; }
.brm-round-head:hover { background: var(--brm-hover); }
.brm-turn-idx { color: var(--brm-blue); flex:none; font-weight:600; }
.brm-tu-text { display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden; min-width:0; flex:1; }
.brm-round-head:hover .brm-tu-text { display:block; -webkit-line-clamp:unset; }
.brm-round-actions { display:none; align-items:center; gap:6px; padding:4px 10px 8px 26px; }
.brm-round:hover .brm-round-actions { display:flex; }
.brm-round-children { margin-left:20px; padding-left:8px; border-left:1px solid var(--brm-guide); padding-bottom:2px; }
.brm-subturn { padding:5px 8px; border-radius:3px; cursor:pointer; margin-top:2px; }
.brm-subturn:hover { background: var(--brm-hover); }
.brm-subturn-label { color: var(--brm-faint); font-size:11px; margin-bottom:2px; }
.brm-subturn .brm-tu-text { font-size:12px; font-weight:400; }
.brm-subturn:hover .brm-tu-text { -webkit-line-clamp:unset; }
.brm-subturn .brm-turn-acts { display:none; margin-top:4px; }
.brm-subturn:hover .brm-turn-acts { display:block; }
.brm-subturn-end { display:flex; }
.brm-subturn-end .brm-btn { margin:2px 0; }
.brm-picker-note { padding:10px; color: var(--brm-dim); font-size:12px; }
.brm-picker-note.brm-err { color: var(--brm-red); }
.brm-panel { position:fixed; z-index:55; display:flex; flex-direction:column; overflow:hidden; background: var(--brm-bg); color: var(--brm-text); border-right:1px solid var(--brm-guide); font-size:13px; }
.brm-panel .brm-browser { flex:1; min-height:0; }
.brm-panel-head { flex:none; display:flex; align-items:center; gap:6px; padding:6px 8px; border-bottom:1px solid var(--brm-border); }
.brm-panel-title { flex:1; font-weight:700; font-size:13px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.brm-toggle { height:26px; padding:0 10px; border-radius:4px; border:1px solid var(--brm-guide); background: var(--brm-btn-fill); color: var(--brm-text); cursor:pointer; font-size:12px; white-space:nowrap; }
.brm-toggle:hover { background: var(--brm-btn-hover); }
.brm-toggle.brm-on { background: var(--brm-active); font-weight:600; }
.brm-toast { position:fixed; left:50%; bottom:26px; transform:translateX(-50%); background: var(--brm-toast-bg); border:1px solid var(--brm-border); color: var(--brm-toast-text); padding:8px 16px; border-radius:4px; box-shadow:0 4px 16px rgba(0,0,0,.25); z-index:70; animation: brmToastIn .18s ease; max-width:70vw; font-size:13px; pointer-events:none; }
@keyframes brmToastIn { from { opacity:0; transform:translateX(-50%) translateY(8px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
`;
return {
  inject: ['timer'],
  apply(ctx) {
    const slots = ctx.get('slots')
    if (slots === undefined) return
    const sessions = ctx.get('sessions')
    const workspaces = ctx.get('workspaces')
    /* 0.2.0-rc.2：会话/子代理的“打开”已经从 ISessions 搬到工作区面
       （ctx.uiWorkspace.openSession(target)），sessions.open 与
       sessions.openSubagent 在这版运行时里不存在 —— 直接调用就是静默无效，
       所以侧边栏/导图/对话详情里点会话没有反应。旧名字保留为回退，兼容更早的宿主。
       0.2.1：ui-workspace 的 apply 不再保证早于本插件，apply 时一次性探测会永久
       拿到 undefined（报「未挂载 uiWorkspace」），因此改为点击时惰性解析。 */
    const getSessionNavigation = () => {
      const navigation = ctx.get('uiWorkspace')
      return navigation && typeof navigation.openSession === 'function' ? navigation : null
    }

    styles.insert(CSS)

    /* ---------- 主题感知 ---------- */
    const theme = ctx.get('theme')
    const isDark = (snap) => !!(snap && snap.active && snap.active.colorScheme === 'dark')

    /* ---------- 共享状态 ---------- */
    const ui = {
      dark: theme ? isDark(theme.getTheme()) : true,
      canvasOpen: false,
      canvasGeom: null,
      canvasWidth: null,
      drawer: { open: false, sessionId: null },
      sidebarEl: null,
      toast: null,
      toastSeq: 0,
      lineage: null,
      lineageLoading: false,
      deletedIds: new Set(),
      orderById: {},
      /* 归属映射：独立会话 → { group: 目标组根, mode: 'all'|'self' }（浏览器本地持久化） */
      reparent: (function () {
        try {
          const v = JSON.parse(localStorage.getItem('dsh-branch-reparent') || 'null')
          return (v && typeof v === 'object') ? v : {}
        } catch (e) { /* 本地存储不可用时回退 */ }
        return {}
      })(),
      /* 压缩前内容默认展开/折叠（浏览器本地记忆，初始默认折叠） */
      blocksDefaultOpen: (function () {
        try {
          const v = localStorage.getItem('dsh-branch-blocks-open')
          if (v === '1') return true
          if (v === '0') return false
        } catch (e) { /* 本地存储不可用时回退 */ }
        return false
      })(),
      /* 左栏「官方会话列表 / 分支树」切换：0.2 的 sidebar.workspaces 是单座且已被官方
         浏览器占用，插件树改挂在 shell.overlay 上、覆盖左栏显示；默认开（装了插件就该
         看到树），关掉即回到官方列表。浏览器本地持久化。 */
      branchListOpen: (function () {
        try {
          const v = localStorage.getItem('dsh-branch-list')
          if (v === '1') return true
          if (v === '0') return false
        } catch (e) { /* 本地存储不可用时回退 */ }
        return true
      })(),
      /* 工作区置顶/置底：{ [workspaceId]: { pos: 'top'|'bottom', at: number } }，浏览器本地持久化 */
      wsPins: (function () {
        try {
          const v = JSON.parse(localStorage.getItem('dsh-branch-ws-pins') || 'null')
          return (v && typeof v === 'object') ? v : {}
        } catch (e) { /* 本地存储不可用时回退 */ }
        return {}
      })(),
      branchPanelWidth: null,
      pendingWorkspaceId: null,
      listeners: new Set(),
    }
    if (theme) {
      ctx.on('theme/change', (snap) => {
        ui.dark = isDark(snap)
        notify()
      })
    }
    const notify = () => { for (const fn of ui.listeners) fn() }
    const setReparent = (sid, rec) => {
      if (rec) ui.reparent[String(sid)] = rec
      else delete ui.reparent[String(sid)]
      try { localStorage.setItem('dsh-branch-reparent', JSON.stringify(ui.reparent)) } catch (e) { /* noop */ }
    }
    const subscribe = (fn) => { ui.listeners.add(fn); return () => { ui.listeners.delete(fn) } }
    const useUi = () => {
      const [, force] = React.useState(0)
      React.useEffect(() => subscribe(() => force(n => n + 1)), [])
      return ui
    }
    const themeClass = () => (ui.dark ? 'brm-dark' : 'brm-light')

    /* ---------- 左栏几何（分支树面板用）：按左栏根节点的实际盒子定位 ---------- */
    const MIN_BRANCH_PANEL_WIDTH = 240
    const MAX_BRANCH_PANEL_WIDTH = 460
    /* 左栏根节点：优先用 slot 锚点（data-slot="sidebar"，跨版本稳定）。
       锚点是 display:contents 没有盒模型，所以量它里面第一个元素子节点。
       0.2.1 的 [data-sidebar-collapsed] 只在左栏「收起」时才存在，展开时匹配不到，
       旧写法会永远量不到左栏，面板被 856 行的兜底逻辑强制关闭。 */
    function sidebarRootEl() {
      try {
        const anchor = document.querySelector('[data-slot="sidebar"]')
        const child = anchor && anchor.firstElementChild
        if (child) return child
        if (anchor) return anchor
        return document.querySelector('[data-sidebar-collapsed], [data-dsh-sidebar]')
      } catch (e) {
        return null
      }
    }
    /* 读一次外壳的列几何。返回 null 表示此刻不该显示面板（左栏收起 / 找不到左栏）。
       顶部与底部带内边距，因此官方列表的样式与滚动条宽度不受影响。 */
    function measureBranchPanel(width, padTop, padBottom) {
      let el = sidebarRootEl()
      let rect = null
      if (el) {
        try { rect = el.getBoundingClientRect() } catch (e) { rect = null }
      }
      /* 兜底：拿不到左栏根（样式/结构又变了）时，用会话区左边界反推左栏宽度。 */
      if (!rect || rect.width < 120) {
        el = null
        try {
          const conv = document.querySelector('[data-conversation-session]')
          if (conv) {
            const r = conv.getBoundingClientRect()
            if (r && r.left >= 120) rect = { left: 0, top: r.top, width: r.left, height: 0, bottom: r.bottom }
          }
        } catch (e) { rect = null }
      }
      if (!rect || rect.width < 120) return null
      let minW = MIN_BRANCH_PANEL_WIDTH
      let maxW = MAX_BRANCH_PANEL_WIDTH
      try {
        if (!el) throw new Error('no sidebar root')
        const cs = window.getComputedStyle(el)
        const lo = parseFloat(cs.getPropertyValue('--dsh-branch-panel-min-width'))
        const hi = parseFloat(cs.getPropertyValue('--dsh-branch-panel-max-width'))
        if (isFinite(lo) && lo > 0) minW = lo
        if (isFinite(hi) && hi > 0) maxW = hi
      } catch (e) { /* 计算样式不可用时用默认区间 */ }
      const w = Math.max(minW, Math.min(maxW, Math.round(width || rect.width)))
      const top = Math.max(0, Math.round(rect.top + padTop))
      return {
        left: Math.round(rect.left),
        top: top,
        width: w,
        height: Math.max(160, Math.round(rect.bottom - padBottom - top)),
      }
    }
    function setBranchList(open) {
      ui.branchListOpen = !!open
      try { localStorage.setItem('dsh-branch-list', open ? '1' : '0') } catch (e) { /* noop */ }
      if (open) ui.canvasOpen = false
      notify()
    }
    function toggleBranchList() {
      setBranchList(!ui.branchListOpen)
      setToast(ui.branchListOpen ? '已切到分支树（覆盖左栏列表）' : '已切回官方会话列表')
    }
    /* 工作区置顶 / 置底（再次点击同一位置即取消） */
    function setWsPin(id, pos) {
      const pins = ui.wsPins
      if (pins[id] && pins[id].pos === pos) delete pins[id]
      else pins[id] = { pos: pos, at: Date.now() }
      try { localStorage.setItem('dsh-branch-ws-pins', JSON.stringify(pins)) } catch (e) { /* noop */ }
      notify()
    }

    let toastDispose = null
    function setToast(text) {
      if (toastDispose) { toastDispose(); toastDispose = null }
      ui.toast = { key: ++ui.toastSeq, text: String(text) }
      notify()
      toastDispose = ctx.timeout(() => {
        ui.toast = null
        toastDispose = null
        notify()
      }, 2600)
    }

    function safeNow() {
      try { return Date.now() } catch (e) { return 0 }
    }
    function relTime(updatedAt, now) {
      const MIN = 60000, HOUR = 3600000, DAY = 86400000
      const diff = Math.max(0, now - (typeof updatedAt === 'number' ? updatedAt : 0))
      if (diff < MIN) return '刚刚'
      if (diff < HOUR) return Math.floor(diff / MIN) + '分钟'
      if (diff < DAY) return Math.floor(diff / HOUR) + '小时'
      if (diff < 30 * DAY) return Math.floor(diff / DAY) + '天'
      if (diff < 365 * DAY) return Math.floor(diff / (30 * DAY)) + '个月'
      return Math.floor(diff / (365 * DAY)) + '年'
    }

    /* ---------- 回合数据缓存（updatedAt 感知） ---------- */
    const roundCache = new Map()
    function getUpdatedAt(state, id) {
      const byId = (state && state.byId) || {}
      const s = byId[id]
      return s && typeof s.updatedAt === 'number' ? s.updatedAt : null
    }
    function fetchRounds(id) {
      const key = String(id)
      return host.call('get-messages', { id: key, refresh: true }).then(r => {
        if (r && r.ok) {
          const res = { ok: true, id: r.id, rounds: r.rounds || [], capturedThroughSeq: r.capturedThroughSeq }
          const prev = roundCache.get(key)
          roundCache.set(key, { updatedAt: prev ? prev.updatedAt : null, result: res })
          return res
        }
        return r || { ok: false, error: '读取失败', rounds: [] }
      }).catch(e => ({ ok: false, error: String((e && e.message) || e), id: key, rounds: [] }))
    }
    function loadRoundsCached(id) {
      const key = String(id)
      const hit = roundCache.get(key)
      if (hit) return Promise.resolve(hit.result)
      return fetchRounds(key)
    }
    function loadRounds(state, id) {
      const key = String(id)
      const up = getUpdatedAt(state, key)
      const hit = roundCache.get(key)
      if (hit && up !== null && hit.updatedAt === up) return Promise.resolve(hit.result)
      return fetchRounds(key).then(res => {
        if (res && res.ok && up !== null) {
          const cur = roundCache.get(key)
          if (cur) cur.updatedAt = up
        }
        return res
      })
    }

    function loadLineage(refresh) {
      if (ui.lineageLoading) return
      ui.lineageLoading = true
      host.call('get-lineage', { refresh: !!refresh }).then(r => {
        ui.lineageLoading = false
        if (r && r.ok) ui.lineage = { entries: r.entries || [], titles: r.titles || {} }
        notify()
      }).catch(() => { ui.lineageLoading = false; notify() })
    }
    loadLineage(false)

    function forkFrom(sessionId, atSeq) {
      if (!sessions || typeof sessions.fork !== 'function') return Promise.reject(new Error('当前环境不支持会话分叉'))
      return Promise.resolve(sessions.fork({ sessionId, atSeq: atSeq == null ? undefined : atSeq })).then(childId => {
        loadLineage(true)
        roundCache.delete(String(childId))
        roundCache.delete(String(sessionId))
        openConversation(childId)
        return childId
      })
    }
    /* 打开一个会话或子代理对话。target 可以是会话 id（字符串），
       也可以是子代理地址 { parentSessionId, childSessionId, mode }。
       返回 true 表示确实找到了可用的打开通道 —— 调用方据此提示失败，
       而不是静默无反应。 */
    function openConversation(target) {
      if (target == null) return false
      const sessionNavigation = getSessionNavigation()
      if (sessionNavigation) {
        sessionNavigation.openSession(target)
        return true
      }
      if (sessions && typeof sessions.open === 'function') {
        if (typeof target === 'string') { sessions.open(target); return true }
        if (typeof sessions.openSubagent === 'function') { sessions.openSubagent(target); return true }
        return false
      }
      return false
    }
    function openSession(id) {
      if (id == null) return
      if (!openConversation(String(id))) setToast('当前环境不支持打开会话（未挂载 uiWorkspace）')
    }
    function openSubagent(parentId, entry) {
      if (!entry || entry.id == null) return
      const address = { parentSessionId: String(parentId), childSessionId: String(entry.id), mode: entry.mode }
      if (openConversation(address)) return
      /* 回退：部分宿主只认裸会话 id，此时子代理对话也能按其自身会话打开 */
      if (!openConversation(String(entry.id))) setToast('当前环境不支持打开子代理对话')
    }
    function openDrawer(sessionId) {
      ui.drawer = { open: true, sessionId: sessionId }
      notify()
    }
    function closeDrawer() {
      ui.drawer = { open: false, sessionId: null }
      notify()
    }
    let drawerElRef = null
    function jumpToTurn(turn, anyEl) {
      const doc = (drawerElRef && drawerElRef.ownerDocument) || (anyEl && anyEl.ownerDocument)
      if (!doc) return
      let target = null
      let topAlign = false
      if (turn != null) {
        const tail = doc.querySelector('[data-turn-tail="' + turn + '"]')
        if (tail) {
          /* 聊天流中回合尾部之前最近的一个 user 座位 = 本轮用户消息（置顶目标） */
          let seat = tail.closest('[data-chat-flow-key]')
          while (seat) {
            if (seat.getAttribute && seat.getAttribute('data-chat-flow-kind') === 'user') {
              topAlign = true
              break
            }
            seat = seat.previousElementSibling
          }
          target = seat || tail
        }
      }
      if (!target) target = doc.querySelector('[data-composer-seat]')
      if (target && target.scrollIntoView) {
        target.scrollIntoView({ block: topAlign ? 'start' : 'center', behavior: 'smooth' })
      }
    }

    /* ---------- 树构建（排除归档与空白会话） ---------- */
    function buildTree(state, filterSet, excludeSet) {
      const byId = (state && state.byId) || {}
      const ids = Array.isArray(state && state.ids) ? state.ids : []
      const current = state ? state.current : undefined
      const subagents = (state && state.subagentsByParent) || {}
      const visible = new Set()
      for (const id of ids) {
        const s = byId[id]
        if (!s) continue
        if (s.blank && id !== current) continue
        if (filterSet && !filterSet.has(id)) continue
        if (excludeSet && excludeSet.has(id)) continue
        if (ui.deletedIds.has(String(id))) continue
        visible.add(id)
      }
      const children = new Map()
      const roots = []
      for (const id of ids) {
        if (!visible.has(id)) continue
        const s = byId[id]
        const p = s.parentId
        if (p && p !== id && byId[p] && visible.has(p)) {
          let arr = children.get(p)
          if (!arr) { arr = []; children.set(p, arr) }
          arr.push(id)
        } else {
          roots.push(id)
        }
      }
      return { byId, visible, children, roots, current, subagents }
    }

    /* ---------- 分叉点标签 ---------- */
    function ForkLabel(props) {
      const ui2 = useUi()
      const [info, setInfo] = React.useState(null)
      React.useEffect(() => {
        let alive = true
        const lineage = ui2.lineage
        if (!lineage) return () => { alive = false }
        let seed = null
        let found = false
        for (const e of lineage.entries) {
          if (e.id === props.childId) { seed = e.seedLength; found = true; break }
        }
        if (!found) return () => { alive = false }
        if (seed === null || seed === undefined) {
          setInfo({ k: null, text: '末尾分叉' })
          return () => { alive = false }
        }
        loadRoundsCached(props.childId).then(r => {
          if (!alive || !(r && r.ok)) return
          const rounds = r.rounds || []
          let k = 0
          for (const rd of rounds) if (rd.userSeq <= seed) k++
          setInfo(k === 0 ? { k: 0, text: '从头分叉' } : { k: k, text: '分叉于第 ' + k + ' 条消息' })
        })
        return () => { alive = false }
      }, [props.childId, ui2.lineage])
      if (!info) return null
      if (props.mode === 'edge') {
        return React.createElement('span', null, info.text)
      }
      return React.createElement('span', {
        className: 'brm-tag brm-fork',
        title: info.text,
      }, info.k === null ? '分叉' : '分叉·' + info.k)
    }

    /* ---------- 对话列表局部侧边栏（回合分组，跟随当前会话） ---------- */
    function DrawerPanel(props) {
      const ui2 = useUi()
      const [el, setEl] = React.useState(null)
      const [st, setSt] = React.useState({ loading: false, error: null, rounds: [], sessionId: null })
      const [busy, setBusy] = React.useState(null)
      const [expanded, setExpanded] = React.useState({})
      const [reloadSeq, setReloadSeq] = React.useState(0)
      const followHolder = React.useState({ following: false })[0]
      const lastSidHolder = React.useState({ sid: null })[0]
      const drawer = ui2.drawer
      const listState = props.listState
      const currentId = listState ? listState.current : null
      const curUpdated = drawer.open && drawer.sessionId ? getUpdatedAt(listState, drawer.sessionId) : null

      React.useEffect(() => {
        drawerElRef = el
        return () => { drawerElRef = null }
      }, [el])

      React.useEffect(() => {
        if (!drawer.open || !drawer.sessionId) return
        let alive = true
        const sid = drawer.sessionId
        if (lastSidHolder.sid !== sid) {
          lastSidHolder.sid = sid
          setExpanded({})
        }
        const key = String(sid)
        const hit = roundCache.get(key)
        if (hit && curUpdated !== null && hit.updatedAt === curUpdated) {
          setSt({ loading: false, error: null, rounds: hit.result.rounds || [], sessionId: sid })
          return
        }
        setSt({ loading: true, error: null, rounds: [], sessionId: sid })
        loadRounds(listState, sid).then(r => {
          if (!alive) return
          if (r && r.ok) setSt({ loading: false, error: null, rounds: r.rounds || [], sessionId: sid })
          else setSt({ loading: false, error: (r && r.error) || '读取消息失败', rounds: [], sessionId: sid })
        })
        return () => { alive = false }
      }, [drawer.open, drawer.sessionId, curUpdated, reloadSeq])

      React.useEffect(() => {
        if (!drawer.open || !drawer.sessionId) return
        const cur = currentId == null ? null : String(currentId)
        const target = String(drawer.sessionId)
        if (cur === target) {
          followHolder.following = true
        } else if (followHolder.following && cur != null) {
          ui.drawer = { open: true, sessionId: currentId }
          notify()
        }
      }, [currentId, drawer.open, drawer.sessionId])

      if (!drawer.open) return null

      const canvasGeom = ui2.canvasOpen ? ui2.canvasGeom : null
      const rect = ui2.sidebarEl && ui2.sidebarEl.getBoundingClientRect ? ui2.sidebarEl.getBoundingClientRect() : null
      const left = canvasGeom ? Math.round(canvasGeom.left + canvasGeom.width + 6) : (rect ? Math.round(rect.right + 6) : 320)
      const isCurrent = drawer.sessionId != null && String(drawer.sessionId) === String(currentId)

      const runSeq = (atSeq) => {
        if (busy !== null) return
        setBusy(atSeq)
        forkFrom(drawer.sessionId, atSeq).then(() => {
          setBusy(null)
          setToast('已创建新分支并打开')
          closeDrawer()
        }).catch(e => {
          setBusy(null)
          setToast('分叉失败：' + String((e && e.message) || e))
        })
      }
      const runTail = () => runSeq(null)
      const go = (rd) => {
        if (!isCurrent && drawer.sessionId) {
          openSession(drawer.sessionId)
          ctx.timeout(() => jumpToTurn(rd.turn), 260)
        } else {
          jumpToTurn(rd.turn)
        }
      }
      const toggleRound = (key) => setExpanded(e => { const n = Object.assign({}, e); n[key] = !n[key]; return n })

      const roundEls = st.rounds.map((rd, i) => {
        const key = String(rd.userSeq)
        const isOpen = !!expanded[key]
        const lastSeq = rd.items.length > 0 ? rd.items[rd.items.length - 1].seq : rd.userSeq
        const hasSubs = rd.items.length > 1
        const head = React.createElement('div', {
          className: 'brm-round-head',
          title: '点击跳转到该轮对话',
          onClick: () => go(rd),
        },
          React.createElement('span', { className: 'brm-turn-idx' }, (i + 1) + '.'),
          React.createElement('span', { className: 'brm-tu-text' }, rd.userText || '（无文本）'))
        const actions = React.createElement('div', { className: 'brm-round-actions' },
          hasSubs ? React.createElement('button', {
            className: 'brm-btn',
            title: isOpen ? '收起细分消息' : '展开细分消息',
            onClick: (e) => { e.stopPropagation(); toggleRound(key) },
          }, isOpen ? '收起' : '展开') : null,
          React.createElement('button', {
            className: 'brm-btn',
            onClick: (e) => { e.stopPropagation(); runSeq(lastSeq) },
          }, '本轮末尾分叉'))
        let subs = null
        if (isOpen) {
          const subEls = []
          let aiIdx = 0
          rd.items.forEach((it) => {
            if (it.kind === 'user') {
              subEls.push(React.createElement('div', {
                className: 'brm-subturn',
                key: 'u' + it.seq,
                title: '点击跳转到该轮对话',
                onClick: () => go(rd),
              },
                React.createElement('div', { className: 'brm-subturn-label' }, '用户消息'),
                React.createElement('span', { className: 'brm-tu-text' }, it.text || '（无文本）'),
                React.createElement('div', { className: 'brm-turn-acts' },
                  React.createElement('button', {
                    className: 'brm-btn',
                    onClick: (e) => { e.stopPropagation(); runSeq(it.seq) },
                  }, '在此分叉'))))
            } else {
              aiIdx += 1
              subEls.push(React.createElement('div', {
                className: 'brm-subturn',
                key: 'a' + it.seq,
                title: '点击跳转到该轮对话',
                onClick: () => go(rd),
              },
                React.createElement('div', { className: 'brm-subturn-label' }, 'AI消息' + aiIdx),
                React.createElement('span', { className: 'brm-tu-text' }, it.text || ''),
                React.createElement('div', { className: 'brm-turn-acts' },
                  React.createElement('button', {
                    className: 'brm-btn',
                    onClick: (e) => { e.stopPropagation(); runSeq(it.seq) },
                  }, '在此分叉'))))
            }
          })
          subEls.push(React.createElement('div', { className: 'brm-subturn brm-subturn-end', key: 'end' },
            React.createElement('button', {
              className: 'brm-btn',
              onClick: () => runSeq(lastSeq),
            }, '在本轮对话末尾分叉')))
          subs = React.createElement('div', { className: 'brm-round-children' }, subEls)
        }
        return React.createElement('div', { className: 'brm-round', key: key }, head, actions, subs)
      })

      return React.createElement('div', {
        ref: setEl,
        className: 'brm-drawer ' + themeClass(),
        style: { left: left },
      },
        React.createElement('div', { className: 'brm-drawer-head' },
          React.createElement('div', { className: 'brm-drawer-title' }, '对话详情'),
          React.createElement('button', {
            className: 'brm-iconbtn',
            title: '强制刷新',
            onClick: () => {
              roundCache.delete(String(drawer.sessionId))
              setReloadSeq(n => n + 1)
            },
          }, '刷新'),
          React.createElement('button', { className: 'brm-iconbtn', title: '关闭', onClick: closeDrawer }, '×')),
        !isCurrent ? React.createElement('div', { className: 'brm-drawer-note' }, '显示的是其它会话的对话；点击条目会打开该会话并跳转到对应位置。') : null,
        st.loading ? React.createElement('div', { className: 'brm-picker-note' }, '读取会话消息…')
          : st.error ? React.createElement('div', { className: 'brm-picker-note brm-err' }, st.error)
          : st.rounds.length === 0 ? React.createElement('div', { className: 'brm-picker-note' }, '该会话还没有对话')
          : React.createElement('div', { className: 'brm-drawer-list' }, roundEls),
        React.createElement('div', { className: 'brm-drawer-foot' },
          React.createElement('button', {
            className: 'brm-btn brm-primary',
            disabled: busy !== null,
            onClick: runTail,
          }, '在最后分叉')))
    }

    /* ---------- 会话头部「对话详情」按钮 ---------- */
    function HeaderDrawerButton(props) {
      const ui2 = useUi()
      const sessionId = props.sessionId
      const drawer = ui2.drawer
      const active = drawer.open && String(drawer.sessionId) === String(sessionId)
      return React.createElement('button', {
        className: 'brm-header-btn',
        title: '对话详情（锚点跳转 / 分叉）',
        onClick: () => {
          if (active) closeDrawer()
          else openDrawer(sessionId)
        },
      }, '对话详情')
    }

    /* ---------- 会话头部「导图 / 对话」视图切换 ---------- */
    function HeaderCanvasToggle(props) {
      const ui2 = useUi()
      const open = !!ui2.canvasOpen
      return React.createElement('button', {
        className: 'brm-header-btn-ghost',
        title: open ? '返回对话视图' : '在对话区左侧嵌入消息级分支导图',
        onClick: () => {
          ui.canvasOpen = !ui.canvasOpen
          notify()
        },
      }, open ? '对话' : '导图')
    }

    /* ---------- 左栏「官方列表 / 分支树」切换 ---------- */
    /* 0.2 的 sidebar.workspaces 是单座且已被官方会话浏览器占用，插件无法再占它，
       所以分支树改挂 shell.overlay：定位在左栏列上、覆盖官方列表显示，切换按钮同时
       出现在面板头部与会话头部。 */
    function HeaderBranchListToggle(props) {
      const ui2 = useUi()
      const open = !!ui2.branchListOpen
      return React.createElement('button', {
        className: 'brm-header-btn-ghost',
        title: open ? '切回官方会话列表' : '用插件分支树替换左栏会话列表',
        onClick: toggleBranchList,
      }, open ? '分支树' : '会话列表')
    }

    /* 面板自身的容器：负责定位、跟随左栏几何，以及顶部「切回官方列表」入口。 */
    function BranchListPanel(props) {
      const ui2 = useUi()
      const [geom, setGeom] = React.useState(null)
      const geomRef = React.useRef(null)

      const measure = React.useCallback(() => {
        const next = measureBranchPanel(ui.branchPanelWidth, 6, 76)
        const prev = geomRef.current
        const same = prev && next &&
          prev.left === next.left && prev.top === next.top &&
          prev.width === next.width && prev.height === next.height
        if (same) return
        if (!prev && !next) return
        geomRef.current = next
        setGeom(next)
      }, [])

      React.useEffect(() => {
        measure()
        let timer = null
        const schedule = () => {
          if (timer) return
          timer = ctx.timeout(() => { timer = null; measure() }, 60)
        }
        window.addEventListener('resize', schedule)
        let ro = null
        const el = sidebarRootEl()
        if (el && typeof ResizeObserver === 'function') {
          ro = new ResizeObserver(schedule)
          try { ro.observe(el) } catch (e) { ro = null }
        }
        if (ui.branchListOpen && !geomRef.current) ui.branchListOpen = false
        return () => {
          window.removeEventListener('resize', schedule)
          if (timer) timer()
          if (ro) ro.disconnect()
        }
      }, [measure])

      const onResizeDown = (e) => {
        e.preventDefault()
        const startX = e.clientX
        const startW = (geomRef.current && geomRef.current.width) || 260
        const move = (ev) => {
          const w = Math.max(MIN_BRANCH_PANEL_WIDTH, Math.min(MAX_BRANCH_PANEL_WIDTH, Math.round(startW + (ev.clientX - startX))))
          ui.branchPanelWidth = w
          const next = measureBranchPanel(w, 6, 76)
          if (next) { geomRef.current = next; setGeom(next) }
        }
        const up = () => {
          window.removeEventListener('pointermove', move)
          window.removeEventListener('pointerup', up)
          window.removeEventListener('pointercancel', up)
        }
        window.addEventListener('pointermove', move)
        window.addEventListener('pointerup', up)
        window.addEventListener('pointercancel', up)
      }

      if (!geom) return null

      return React.createElement('div', {
        className: 'brm-panel ' + themeClass(),
        style: { left: geom.left, top: geom.top, width: geom.width, height: geom.height },
      },
        React.createElement('div', { className: 'brm-panel-head' },
          React.createElement('div', { className: 'brm-panel-title' }, '分支树'),
          React.createElement('button', {
            className: 'brm-toggle',
            title: '切回官方会话列表',
            onClick: () => setBranchList(false),
          }, '官方列表')),
        React.createElement(SidebarBrowser, {
          wide: true,
          panel: true,
          listState: props.listState,
          wsState: props.wsState,
        }),
        React.createElement('div', {
          className: 'brm-cv-resize',
          title: '拖拽调整左栏面板宽度',
          onPointerDown: onResizeDown,
        }))
    }

    /* ---------- 会话/分支列表本体（两种挂载方式共用同一份渲染） ---------- */
    /* 1) 官方 sidebar.workspaces 座位（0.2 已被官方浏览器占用，通常注册不上）；
       2) BranchListPanel 在 shell.overlay 上的左栏面板（当前生效路径），
          这时列表状态由面板传入，所以不调用插槽钩子。 */
    function SidebarBrowser(props) {
      const isPanel = !!(props && props.panel)
      const wide = isPanel ? true : !!props.wide
      const useSessions = isPanel ? null : props.useSessions
      const useWorkspaces = isPanel ? null : props.useWorkspaces
      const storeListState = useSessions ? useSessions(s => s) : null
      const storeWsState = useWorkspaces ? useWorkspaces(s => s) : null
      const listState = isPanel ? (props.listState || null) : storeListState
      const wsState = isPanel ? (props.wsState || null) : storeWsState
      const ui2 = useUi()

      const [collapsed, setCollapsed] = React.useState({})
      const [wsFilter, setWsFilter] = React.useState(null)
      const [query, setQuery] = React.useState('')
      const [results, setResults] = React.useState(null)
      const [flashId, setFlashId] = React.useState(null)
      const [menu, setMenu] = React.useState(null)
      const [renamingFor, setRenamingFor] = React.useState(null)
      const [renameText, setRenameText] = React.useState('')
      const [nowTick, setNowTick] = React.useState(0)
      const holder = React.useState({ n: 0, db: null, cb: null })[0]
      const archiveHolder = React.useState({ set: null })[0]

      React.useEffect(() => ctx.interval(() => setNowTick(n => n + 1), 60000), [])

      React.useEffect(() => {
        const db = ctx.debounce((value) => {
          const n = ++holder.n
          if (!value) { if (holder.cb) holder.cb(null); return }
          host.call('search-sessions', { query: value }).then(r => {
            if (holder.n !== n) return
            if (holder.cb) {
              const items = r && r.ok ? (r.items || []) : []
              const ex = archiveHolder.set
              holder.cb(ex ? items.filter(it => !ex.has(String(it.id))) : items)
            }
          }).catch(() => {
            if (holder.n === n && holder.cb) holder.cb([])
          })
        }, 180)
        holder.db = db
        return () => { if (db && db.dispose) db.dispose() }
      }, [])

      const wsItems = (wsState && Array.isArray(wsState.items)) ? wsState.items : []
      const archivedIds = (wsState && Array.isArray(wsState.archivedSessionIds)) ? wsState.archivedSessionIds : []
      const archivedSet = new Set(archivedIds.map(String))
      React.useEffect(() => { archiveHolder.set = archivedSet }, [wsState])

      let filterSet = null
      if (wsFilter) {
        for (const w of wsItems) {
          if (w.workspaceId === wsFilter && Array.isArray(w.sessionIds)) {
            filterSet = new Set(w.sessionIds.map(String))
            break
          }
        }
      }
      const tree = buildTree(listState, filterSet, archivedSet)
      const byId = tree.byId
      const now = safeNow()

      const toggle = (key) => setCollapsed(c => { const n = Object.assign({}, c); n[key] = !n[key]; return n })
      const expandNode = (key) => setCollapsed(c => { if (!c[key]) return c; const n = Object.assign({}, c); delete n[key]; return n })
      const doFork = (id, atSeq) => {
        forkFrom(id, atSeq).then(child => {
          expandNode(String(id))
          setFlashId(String(child))
          ctx.timeout(() => setFlashId(null), 1600)
          setToast('已创建新分支，挂在源会话下方')
        }).catch(e => {
          setToast('分叉失败：' + String((e && e.message) || e))
        })
      }
      const doArchive = (id) => {
        if (!workspaces || typeof workspaces.archiveSession !== 'function') {
          setToast('当前环境不支持归档')
          return
        }
        Promise.resolve(workspaces.archiveSession(id)).then(() => {
          setToast('已归档会话')
        }).catch(e => {
          setToast('归档失败：' + String((e && e.message) || e))
        })
      }
      const openAfterDelete = (id) => {
        const st = (listState && listState.byId) || {}
        let p = st[id] ? (st[id].parentId || null) : null
        const seen = new Set([String(id)])
        while (p && !seen.has(String(p))) {
          seen.add(String(p))
          if (st[p] && !archivedSet.has(String(p)) && !ui.deletedIds.has(String(p))) {
            openSession(String(p))
            return
          }
          p = st[p] ? st[p].parentId : null
        }
        const idsAll = (listState && Array.isArray(listState.ids)) ? listState.ids : []
        for (const i of idsAll) {
          if (!archivedSet.has(String(i)) && !ui.deletedIds.has(String(i))) {
            openSession(String(i))
            return
          }
        }
      }
      const doHardDelete = (id) => {
        const key = String(id)
        const curSid = listState ? listState.current : null
        if (curSid != null && String(curSid) === key) openAfterDelete(key)
        ui.deletedIds.add(key)
        notify()
        setToast('已终态删除分支：其后代顶替其位置（DSH 暂无彻底清除接口，数据保留在磁盘）')
      }
      const doReparent = (sid, target, mode) => {
        const key = String(sid)
        if (key === String(target)) { setToast('不能归属到自身'); return }
        const isSelfRep = ui.reparent[key] != null
        setReparent(key, { group: String(target), mode: mode === 'self' ? 'self' : 'all' })
        ui.orderById = {}
        notify()
        setMenu(null)
        const tS = listState && listState.byId && listState.byId[target]
        const tTitle = tS ? (tS.displayTitle || tS.title || String(target)) : String(target)
        const sS = listState && listState.byId && listState.byId[sid]
        const sTitle = sS ? (sS.displayTitle || sS.title || String(sid)) : String(sid)
        if (isSelfRep) setToast('已更新归属：' + sTitle + ' → ' + tTitle + '（侧边栏出现 →组 标记）')
        else if (mode === 'self') setToast('已归属：' + sTitle + ' 并入「' + tTitle + '」，其余分支留在原处顶替（打开目标组查看）')
        else setToast('已归属：' + sTitle + ' 连同相关分支并入「' + tTitle + '」，成为其第二个根级分支（打开目标组查看）')
      }
      const startRename = (id) => {
        const s = byId[id]
        setRenamingFor(id)
        setRenameText(s ? (s.title || s.displayTitle || '') : '')
      }
      const commitRename = () => {
        const id = renamingFor
        if (id == null) return
        const title = renameText.trim()
        if (!title) { setToast('名称不能为空'); return }
        const binding = sessions && sessions.binding ? sessions.binding(id) : null
        const face = binding && binding.session
        if (!face || typeof face.rename !== 'function') {
          setToast('当前环境不支持重命名')
          setRenamingFor(null)
          return
        }
        Promise.resolve(face.rename(title)).then(r => {
          setRenamingFor(null)
          if (r && r.ok) setToast('已重命名')
          else setToast('重命名失败：' + String((r && r.error && r.error.message) || (r && r.error) || '未知错误'))
        }).catch(e => {
          setRenamingFor(null)
          setToast('重命名失败：' + String((e && e.message) || e))
        })
      }
      const openMenu = (id, btnEl) => {
        const r = btnEl.getBoundingClientRect()
        setMenu({ id: id, x: Math.round(r.right - 10), y: Math.round(r.bottom + 4) })
      }
      const onSearchInput = (e) => {
        const v = e.target.value
        setQuery(v)
        holder.cb = (items) => setResults(items)
        if (holder.db) holder.db(v.trim())
      }
      const onPickResult = (item) => {
        openSession(item.id)
        setResults(null)
        setQuery('')
        setToast('搜索命中，已打开会话')
      }
      const subEntries = (pid) => {
        const cat = tree.subagents[pid]
        if (!cat || !Array.isArray(cat.entries)) return []
        const out = []
        for (const e of cat.entries) if (e && e.kind === 'child') out.push(e)
        return out
      }

      /* ---------- 组（group）视图：≥2 会话的组 → 可折叠“组”文件夹 ---------- */
      const repOfG = (id) => {
        const r = ui.reparent[String(id)]
        return (r && typeof r.group === 'string') ? r : null
      }
      const rawParentG = (id) => {
        const s = tree.byId[id] || {}
        const p = s.parentId ? String(s.parentId) : null
        return (p && p !== id) ? p : null
      }
      const groupOfG = (id) => {
        let cur = String(id)
        const seen = new Set()
        for (;;) {
          if (seen.has(cur)) break
          seen.add(cur)
          const rep = repOfG(cur)
          if (rep) return String(rep.group)
          let p = rawParentG(cur)
          while (p && repOfG(p) && repOfG(p).mode === 'self') p = rawParentG(p)
          if (!p) return cur
          cur = p
        }
        return cur
      }
      const subKidsG = new Set()
      Object.keys(tree.subagents || {}).forEach(pid => {
        const cat = tree.subagents[pid]
        if (cat && Array.isArray(cat.entries)) {
          cat.entries.forEach(en => { if (en && en.kind === 'child' && en.id) subKidsG.add(String(en.id)) })
        }
      })
      const inGroupG = (id, gid) => groupOfG(String(id)) === String(gid)
      const effParentG = (id, gid) => {
        let p = rawParentG(id)
        const seen = new Set([String(id)])
        while (p && !seen.has(p)) {
          seen.add(p)
          if (tree.visible.has(p) && !subKidsG.has(p) && inGroupG(p, gid)) return p
          p = rawParentG(p)
        }
        return null
      }
      const groupByTime = (a, b) => {
        const sa = tree.byId[a] || {}, sb = tree.byId[b] || {}
        return ((sa.createdAt || sa.updatedAt) || 0) - ((sb.createdAt || sb.updatedAt) || 0)
      }
      const groupFolderOf = new Map() /* gid -> { topNodes, kidsMap, memberCount } */
      tree.roots.forEach(r => {
        const gid = groupOfG(String(r))
        if (String(r) !== gid || groupFolderOf.has(gid)) return
        const members = []
        tree.visible.forEach(id => { if (!subKidsG.has(id) && inGroupG(id, gid)) members.push(String(id)) })
        if (members.length < 2) return
        const kidsMap = new Map()
        const topNodes = []
        members.forEach(id => {
          const pid = effParentG(id, gid)
          if (pid != null) {
            let arr = kidsMap.get(pid)
            if (!arr) { arr = []; kidsMap.set(pid, arr) }
            arr.push(id)
          } else {
            topNodes.push(id)
          }
        })
        topNodes.sort(groupByTime)
        const gi = topNodes.indexOf(String(gid))
        if (gi < 0) topNodes.unshift(String(gid))
        else if (gi > 0) { topNodes.splice(gi, 1); topNodes.unshift(String(gid)) }
        kidsMap.forEach(arr => arr.sort(groupByTime))
        groupFolderOf.set(String(gid), { topNodes: topNodes, kidsMap: kidsMap, memberCount: members.length })
      })
      const plainRoots = []
      tree.roots.forEach(r => {
        const gid = groupOfG(String(r))
        if (String(r) === gid && groupFolderOf.has(gid)) return
        if (String(r) !== gid && groupFolderOf.has(gid)) return
        plainRoots.push(r)
      })

      if (!wide) {
        return React.createElement('button', {
          ref: (n) => { ui.sidebarEl = n },
          className: 'brm-rail ' + themeClass(),
          title: '展开侧边栏（分支树）',
          onClick: () => { if (props.expandSidebar) props.expandSidebar() },
        }, '树')
      }

      const renderNode = (id, isSub, entry, kidsMap) => {
        const s = isSub ? null : byId[id]
        const key = isSub ? 'sub:' + id + ':' + entry.id : id
        const kids = isSub ? [] : ((kidsMap || tree.children).get(id) || [])
        const subs = isSub ? [] : subEntries(id)
        const hasKids = kids.length > 0 || subs.length > 0
        const isCollapsed = !!collapsed[key]
        const isCurrent = !isSub && tree.current === id
        const running = isSub ? entry.activity === 'running' : !!s.running
        const waiting = !isSub && !!s.pendingInteraction
        const done = !isSub && !!s.completed
        const title = isSub ? (entry.label || '子代理') : (s.displayTitle || s.title || String(id))

        const row = React.createElement('div', {
          className: 'brm-row' + (isCurrent ? ' brm-current' : '') + (flashId === String(id) ? ' brm-flash' : ''),
          onClick: () => {
            if (isSub) openSubagent(id, entry)
            else openSession(id)
          },
        },
          React.createElement('button', {
            className: 'brm-chevron' + (hasKids ? '' : ' brm-empty'),
            onClick: (e) => { e.stopPropagation(); if (hasKids) toggle(key) },
          }, isCollapsed ? '▸' : '▾'),
          React.createElement('span', { className: 'brm-row-title' }, title),
          React.createElement('span', { className: 'brm-row-tags' },
            !isSub && s.parentId ? React.createElement(ForkLabel, { childId: id, mode: 'tag', key: 'forklabel' }) : null,
            !isSub && ui.reparent[String(id)] ? React.createElement('span', {
              className: 'brm-tag brm-rep',
              key: 'reptag',
              title: '已归属到 group：' + (byId[ui.reparent[String(id)].group] ? (byId[ui.reparent[String(id)].group].displayTitle || byId[ui.reparent[String(id)].group].title || '') : ''),
            }, '→组') : null,
            isSub ? React.createElement('span', { className: 'brm-tag brm-sub' }, entry.mode === 'continuable' ? '子代理·可继续' : '子代理') : null,
            running ? React.createElement('span', { className: 'brm-dot brm-run' }) : null,
            waiting ? React.createElement('span', { className: 'brm-dot brm-wait' }) : null,
            done ? React.createElement('span', { className: 'brm-dot brm-done' }) : null),
          !isSub ? React.createElement('span', { className: 'brm-time', title: relTime(s.updatedAt, now) }, relTime(s.updatedAt, now)) : null,
          !isSub ? React.createElement('button', {
            className: 'brm-overflow',
            title: '更多操作',
            onClick: (e) => { e.stopPropagation(); openMenu(id, e.currentTarget) },
          }, '⋯') : null)

        const children = []
        if (!isSub && renamingFor === id) {
          children.push(React.createElement('div', { className: 'brm-rename', key: 'rename' },
            React.createElement('input', {
              className: 'brm-rename-input',
              value: renameText,
              autoFocus: true,
              onChange: (e) => setRenameText(e.target.value),
              onKeyDown: (e) => {
                if (e.key === 'Enter') commitRename()
                else if (e.key === 'Escape') setRenamingFor(null)
              },
            }),
            React.createElement('button', { className: 'brm-btn', onClick: commitRename }, '确定'),
            React.createElement('button', { className: 'brm-btn', onClick: () => setRenamingFor(null) }, '取消')))
        }
        if (hasKids) {
          const kidEls = []
          kids.forEach(k => kidEls.push(renderNode(k, false, null, kidsMap)))
          subs.forEach(en => kidEls.push(renderNode(id, true, en)))
          children.push(React.createElement('div', {
            className: 'brm-children' + (isCollapsed ? ' brm-hidden' : ''),
            key: 'kids',
          }, kidEls))
        }
        return React.createElement('div', { className: 'brm-node', key: key }, row, children)
      }

      const renderGroupFolder = (gid, g) => {
        const s = byId[gid] || {}
        const title = s.displayTitle || s.title || String(gid)
        const key = 'group:' + gid
        const isCollapsed = !!collapsed[key]
        const row = React.createElement('div', {
          className: 'brm-row brm-grouprow',
          onClick: () => openSession(gid),
        },
          React.createElement('button', {
            className: 'brm-chevron',
            onClick: (e) => { e.stopPropagation(); toggle(key) },
          }, isCollapsed ? '▸' : '▾'),
          React.createElement('span', { className: 'brm-row-title' }, title),
          React.createElement('span', { className: 'brm-row-tags' },
            React.createElement('span', { className: 'brm-tag brm-group' }, '组 · ' + g.memberCount + ' 会话')))
        const childEls = []
        if (!isCollapsed && g.topNodes) {
          g.topNodes.forEach(n => childEls.push(renderNode(n, false, null, g.kidsMap)))
        }
        return React.createElement('div', { className: 'brm-node', key: key }, row, React.createElement('div', {
          className: 'brm-children' + (isCollapsed ? ' brm-hidden' : ''),
          key: 'kids',
        }, childEls))
      }

      /* ---------- 工作区分组：列表里用文件夹分类（替代顶部 tab） ---------- */
      const wsOfSession = new Map()
      const wsMetaById = new Map()
      wsItems.forEach(w => {
        const wid = String(w.workspaceId)
        wsMetaById.set(wid, w)
        if (Array.isArray(w.sessionIds)) w.sessionIds.forEach(sid => { if (!wsOfSession.has(String(sid))) wsOfSession.set(String(sid), wid) })
      })
      const wsIdOf = (sid) => {
        const hit = wsOfSession.get(String(sid))
        if (hit) return hit
        /* 刚在某工作区里新建的空白会话，还没进 workspace.sessionIds —— 先按创建时的工作区归类 */
        if (ui.pendingWorkspaceId && tree && tree.current != null && String(sid) === String(tree.current)) {
          return String(ui.pendingWorkspaceId)
        }
        return '__none__'
      }
      const sections = new Map()
      const ensureSection = (id) => {
        let sec = sections.get(id)
        if (!sec) {
          const meta = wsMetaById.get(id)
          sec = { id: id, title: meta ? (meta.title || meta.cwd || id) : '未分组', rows: [] }
          sections.set(id, sec)
        }
        return sec
      }
      const pins = ui.wsPins || {}
      const baseOrder = wsItems.map(w => String(w.workspaceId))
      const topIds = baseOrder.filter(id => pins[id] && pins[id].pos === 'top').sort((a, b) => (pins[a].at || 0) - (pins[b].at || 0))
      const bottomIds = baseOrder.filter(id => pins[id] && pins[id].pos === 'bottom').sort((a, b) => (pins[b].at || 0) - (pins[a].at || 0))
      const midIds = baseOrder.filter(id => !pins[id])
      baseOrder.forEach(id => ensureSection(id))
      groupFolderOf.forEach((g, gid) => { ensureSection(wsIdOf(gid)).rows.push(renderGroupFolder(gid, g)) })
      plainRoots.forEach(r => { ensureSection(wsIdOf(r)).rows.push(renderNode(r, false, null)) })

      /* 在指定工作区里新建会话（不传则用默认工作区） */
      const startSessionIn = (workspaceId) => {
        ui.pendingWorkspaceId = workspaceId == null ? null : String(workspaceId)
        const navigation = getSessionNavigation()
        if (navigation && typeof navigation.startSession === 'function') {
          navigation.startSession(ui.pendingWorkspaceId || undefined)
          return
        }
        if (workspaces && typeof workspaces.startSession === 'function') {
          workspaces.startSession(ui.pendingWorkspaceId || undefined)
          return
        }
        setToast('当前环境不支持新建会话（未挂载 uiWorkspace）')
      }

      const renderWsSection = (sec) => {
        const key = 'ws:' + sec.id
        const isCollapsed = !!collapsed[key]
        const pinned = pins[sec.id]
        const row = React.createElement('div', {
          className: 'brm-row brm-wsrow',
          key: key + ':row',
          title: sec.title + '（点击折叠 / 展开）',
          onClick: () => toggle(key),
        },
          React.createElement('button', {
            className: 'brm-chevron',
            onClick: (e) => { e.stopPropagation(); toggle(key) },
          }, isCollapsed ? '▸' : '▾'),
          React.createElement('span', { className: 'brm-row-title' }, sec.title),
          React.createElement('span', { className: 'brm-row-tags' },
            React.createElement('span', { className: 'brm-tag' }, String(sec.rows.length) + ' 项'),
            pinned ? React.createElement('span', { className: 'brm-tag brm-rep' }, pinned.pos === 'top' ? '置顶' : '置底') : null),
          React.createElement('span', { className: 'brm-ws-actions' },
            React.createElement('button', {
              className: 'brm-ws-act',
              title: '在此工作区新建会话',
              onClick: (e) => { e.stopPropagation(); startSessionIn(sec.id) },
            }, '＋'),
            React.createElement('button', {
              className: 'brm-ws-act' + (pinned && pinned.pos === 'top' ? ' brm-on' : ''),
              title: pinned && pinned.pos === 'top' ? '取消置顶' : '置顶此工作区',
              onClick: (e) => { e.stopPropagation(); setWsPin(sec.id, 'top') },
            }, '↑'),
            React.createElement('button', {
              className: 'brm-ws-act' + (pinned && pinned.pos === 'bottom' ? ' brm-on' : ''),
              title: pinned && pinned.pos === 'bottom' ? '取消置底' : '置底此工作区',
              onClick: (e) => { e.stopPropagation(); setWsPin(sec.id, 'bottom') },
            }, '↓')))
        return React.createElement('div', { className: 'brm-node', key: key }, row,
          React.createElement('div', {
            className: 'brm-children' + (isCollapsed ? ' brm-hidden' : ''),
            key: 'kids',
          }, sec.rows.length === 0
            ? React.createElement('div', { className: 'brm-empty brm-empty-inline' }, '这个工作区还没有会话')
            : sec.rows))
      }

      const sectionEls = []
      ;[...topIds, ...midIds, ...bottomIds].forEach(id => {
        const sec = sections.get(id)
        if (sec) sectionEls.push(renderWsSection(sec))
      })
      const noneSec = sections.get('__none__')
      if (noneSec && noneSec.rows.length > 0) sectionEls.push(renderWsSection(noneSec))

      /* 添加工作区：官方入口在 ui-workspace 的 WorkspaceBrowser 里，本插件占了那个座位后
         就看不到了；这里用 uiWorkspace.pickDirectory()（宿主目录选择器）+ workspaces.create
         补一个等价入口。 */
      const addWorkspace = () => {
        const navigation = getSessionNavigation()
        if (!navigation || typeof navigation.pickDirectory !== 'function') {
          setToast('当前环境不支持添加工作区（未挂载目录选择器）')
          return
        }
        Promise.resolve(navigation.pickDirectory()).then((path) => {
          if (path == null || path === '') return null
          return Promise.resolve(workspaces.create({ path })).then((workspace) => {
            const id = workspace && workspace.workspaceId
            /* 和官方「添加工作区」一致：注册成功后直接在该工作区开一个新会话 */
            if (id != null && typeof navigation.startSession === 'function') navigation.startSession(id)
            setToast('已添加工作区：' + path)
          })
        }).catch((reason) => {
          setToast('添加工作区失败：' + String((reason && reason.message) || reason))
        })
      }
      sectionEls.push(React.createElement('button', {
        className: 'brm-row brm-addrow',
        key: '__add-workspace',
        title: '添加工作区（选择目录后注册，并新建会话）',
        onClick: addWorkspace,
      }, '+ 添加工作区'))

      return React.createElement('div', {
        ref: (n) => { ui.sidebarEl = n },
        className: 'brm-browser ' + themeClass(),
      },
        React.createElement('div', { className: 'brm-head' },
          React.createElement('div', { className: 'brm-title' }, '会话'),
          React.createElement('button', {
            className: 'brm-iconbtn',
            title: '新建会话（默认工作区）',
            onClick: () => startSessionIn(),
          }, '+'),
          isPanel ? React.createElement('button', {
            className: 'brm-toggle brm-on',
            title: '当前显示分支树；点击切回官方会话列表',
            onClick: () => setBranchList(false),
          }, '分支树') : null,
          React.createElement('button', {
            className: 'brm-iconbtn',
            title: '导图视图（消息级分支树）',
            onClick: () => { ui.canvasOpen = true; if (ui.branchListOpen) setBranchList(false); else notify() },
          }, '导图'),
          React.createElement('button', {
            className: 'brm-iconbtn',
            title: '对话详情（锚点跳转 / 分叉）',
            onClick: () => {
              const id = currentSessionIdOf(listState)
              if (id == null) { setToast('没有当前会话'); return }
              openDrawer(id)
            },
          }, '详情')),
        React.createElement('div', { className: 'brm-search-wrap' },
          React.createElement('input', {
            className: 'brm-search',
            placeholder: '搜索消息内容…',
            value: query,
            onChange: onSearchInput,
          }),
          results ? React.createElement('div', { className: 'brm-search-results' },
            results.length === 0
              ? React.createElement('div', { className: 'brm-sr-empty' }, '无结果')
              : results.map(it => React.createElement('div', { className: 'brm-sr-item', key: String(it.id), onClick: () => onPickResult(it) },
                React.createElement('div', { className: 'brm-sr-title' }, byId[it.id] ? (byId[it.id].displayTitle || String(it.id)) : String(it.id)),
                React.createElement('div', { className: 'brm-sr-snippet' }, it.snippet || '')))) : null),
        React.createElement('div', { className: 'brm-tree' },
          listState && listState.phase === 'pending' && sectionEls.length <= 1
            ? React.createElement('div', { className: 'brm-empty' }, '加载中…')
            : sectionEls),
        menu ? React.createElement('div', { className: 'brm-menu-backdrop', onClick: () => setMenu(null) },
          React.createElement('div', {
            className: 'brm-menu ' + themeClass(),
            style: { left: menu.x, top: menu.y },
            onClick: (e) => e.stopPropagation(),
          },
            menu.view === 'groups' ? [
              React.createElement('div', { className: 'brm-menu-title', key: 't' }, '归属到 group（选择目标组）'),
              (function () {
                const sel = menu.id
                const cands = []
                ;(listState && Array.isArray(listState.ids) ? listState.ids : []).forEach(i => {
                  if (String(i) === sel) return
                  const s = listState.byId && listState.byId[i]
                  if (!s) return
                  if (s.parentId) return
                  if (archivedSet.has(String(i))) return
                  if (ui.deletedIds.has(String(i))) return
                  if (ui.reparent[String(i)]) return /* 已归属的成员不作为目标 */
                  cands.push(i)
                })
                if (cands.length === 0) {
                  return React.createElement('div', { className: 'brm-menu-note' }, '暂无可归属的 group')
                }
                return cands.map(c => React.createElement('button', {
                  className: 'brm-menu-item',
                  key: String(c),
                  onClick: () => {
                    const target = String(c)
                    const kids = tree.children.get(sel) || []
                    if (kids.length > 0) {
                      setMenu({ view: 'confirm', id: sel, target: target, x: menu.x, y: menu.y })
                    } else {
                      doReparent(sel, target, 'all')
                    }
                  },
                }, (listState.byId[c] && (listState.byId[c].displayTitle || listState.byId[c].title)) || String(c)))
              })(),
              React.createElement('button', { className: 'brm-menu-item', key: 'back', onClick: () => setMenu(null) }, '取消'),
            ] : menu.view === 'confirm' ? [
              React.createElement('div', { className: 'brm-menu-title', key: 't' }, '该对话还有分支：'),
              React.createElement('button', {
                className: 'brm-menu-item',
                key: 'yes',
                onClick: () => doReparent(menu.id, menu.target, 'all'),
              }, '是：把相关分支全部合并到此 group'),
              React.createElement('button', {
                className: 'brm-menu-item',
                key: 'no',
                onClick: () => doReparent(menu.id, menu.target, 'self'),
              }, '否：仅合并此会话（其余分支留在原处并顶替）'),
              React.createElement('button', { className: 'brm-menu-item', key: 'cancel', onClick: () => setMenu(null) }, '取消'),
            ] : [
            React.createElement('button', { className: 'brm-menu-item', onClick: () => { setMenu(null); startRename(menu.id) } }, '重命名'),
            React.createElement('button', { className: 'brm-menu-item', onClick: () => { setMenu(null); doFork(menu.id, null) } }, '末尾分叉'),
            React.createElement('button', { className: 'brm-menu-item', onClick: () => { setMenu(null); openDrawer(menu.id) } }, '选择分叉点'),
            React.createElement('button', {
              className: 'brm-menu-item',
              onClick: () => {
                const s = byId[menu.id]
                if (s && s.parentId) {
                  setMenu(null)
                  setToast('只有独立（无父）对话可以归属到 group；该对话是分支，请先选择它上层的独立根对话')
                  return
                }
                setMenu({ view: 'groups', id: menu.id, x: menu.x, y: menu.y })
              },
            }, '归属到 group…'),
            React.createElement('button', { className: 'brm-menu-item', onClick: () => { setMenu(null); doArchive(menu.id) } }, '归档'),
            React.createElement('button', {
              className: 'brm-menu-item brm-danger',
              onClick: () => {
                if (menu.confirmDel) { setMenu(null); doHardDelete(menu.id) }
                else setMenu({ id: menu.id, x: menu.x, y: menu.y, confirmDel: true })
              },
            }, menu.confirmDel ? '再次点击确认删除' : '删除')])) : null)
    }

    /* ---------- 导图画布（P0.1：一轮对话节点 + 嵌入式布局，把聊天挤到右侧） ---------- */
    function CanvasPanel(props) {
      const ui2 = useUi()
      const listState = props.listState
      const [view, setView] = React.useState({ s: 1, tx: 24, ty: 20 })
      const [canvasEl, setCanvasEl] = React.useState(null)
      const [backdropEl, setBackdropEl] = React.useState(null)
      const [drag, setDrag] = React.useState(null)
      const [roundsMap, setRoundsMap] = React.useState({})
      const [blocksMap, setBlocksMap] = React.useState({})
      const [blocksExpanded, setBlocksExpanded] = React.useState({})
      const [collapsed, setCollapsed] = React.useState({})
      const [expanded, setExpanded] = React.useState({})
      const [reloadSeq, setReloadSeq] = React.useState(0)
      const [geom, setGeom] = React.useState(null)
      const [degraded, setDegraded] = React.useState(false)
      const [fitted, setFitted] = React.useState(false)
      const [resizingW, setResizingW] = React.useState(false)
      const [cW, setCW] = React.useState(typeof ui.canvasWidth === 'number' ? ui.canvasWidth : null)
      const [tipOn, setTipOn] = React.useState(false)
      const cWRef = React.useState({ w: typeof ui.canvasWidth === 'number' ? ui.canvasWidth : null })[0]
      const dragWRef = React.useState({ w: null, startX: 0 })[0]

      const tree = buildTree(listState, null, props.archivedSet || null)
      const current = tree.current

      /* 子代理会话不参与消息画布 */
      const subKids = new Set()
      Object.keys(tree.subagents || {}).forEach(pid => {
        const cat = tree.subagents[pid]
        if (cat && Array.isArray(cat.entries)) {
          cat.entries.forEach(en => { if (en && en.kind === 'child' && en.id) subKids.add(String(en.id)) })
        }
      })
      const lineage = (ui2.lineage && Array.isArray(ui2.lineage.entries)) ? ui2.lineage.entries : []
      const linById = {}
      lineage.forEach(e => { linById[String(e.id)] = e })
      const rawParent = (id) => {
        const e = linById[id] || {}
        const s = tree.byId[id] || {}
        const p = e.parentId != null ? String(e.parentId) : (s.parentId ? String(s.parentId) : null)
        return (p && p !== id) ? p : null
      }
      /* 归属（reparent）：独立会话 → { group, mode }。mode 'all' 后代跟随迁移；
         mode 'self' 该会话视为从原位置剔除（其后代留在原组并顶替其上移） */
      const repOf = (id) => {
        const r = ui.reparent[String(id)]
        return (r && typeof r.group === 'string') ? r : null
      }
      /* 会话所属组（返回组根 id）：被归属者直达目标组；后代跟随（all）或跳过（self）*/
      const groupOf = (id) => {
        let cur = String(id)
        const seen = new Set()
        for (;;) {
          if (seen.has(cur)) break
          seen.add(cur)
          const rep = repOf(cur)
          if (rep) return String(rep.group)
          let p = rawParent(cur)
          while (p && repOf(p) && repOf(p).mode === 'self') p = rawParent(p)
          if (!p) return cur
          cur = p
        }
        return cur
      }
      /* 当前会话所属组（画布显示整个组） */
      const curGroup = current == null ? null : groupOf(String(current))
      const inGroup = (id) => groupOf(String(id)) === curGroup
      /* 组内有效父：原始父链上最近的本组祖先（归属/归档/删除的分支被跳过，其后代顶替上移） */
      const effParent = (id) => {
        let p = rawParent(id)
        const seen = new Set([id])
        while (p && !seen.has(p)) {
          seen.add(p)
          if (tree.visible.has(p) && !subKids.has(p) && inGroup(p)) return p
          p = rawParent(p)
        }
        return null
      }
      /* 原始直接子索引（删除/归档后粘位顶替用） */
      const rawKidsMap = new Map()
      tree.visible.forEach(id => {
        const p = rawParent(id)
        if (!p) return
        let arr = rawKidsMap.get(p)
        if (!arr) { arr = []; rawKidsMap.set(p, arr) }
        arr.push(id)
      })
      const childrenOf = new Map()
      const roots = []
      tree.visible.forEach(id => {
        if (subKids.has(id)) return
        if (!inGroup(id)) return
        const pid = effParent(id)
        if (pid != null) {
          let arr = childrenOf.get(pid)
          if (!arr) { arr = []; childrenOf.set(pid, arr) }
          arr.push(id)
        } else {
          roots.push(id)
        }
      })

      /* 当前会话祖先路径（用于强调） */
      const pathSet = new Set()
      let cur = current == null ? null : String(current)
      const seenSet = new Set()
      while (cur && !seenSet.has(cur)) {
        seenSet.add(cur)
        pathSet.add(cur)
        const p = rawParent(cur)
        cur = (p && tree.visible.has(p) && !subKids.has(p)) ? p : null
      }
      /* group = 当前会话所属组；组显示 = 组根 + 归属根级成员 + 全部组内后代分支 */
      const groupRoot = curGroup
      let followSet = null
      if (groupRoot != null) {
        followSet = new Set([groupRoot])
        const queue2 = [groupRoot]
        /* 归属进来的根级成员（独立对话并入本组，作为 1 级根级分支） */
        roots.forEach(r => {
          if (r !== groupRoot && !followSet.has(r)) {
            followSet.add(r)
            queue2.push(r)
          }
        })
        while (queue2.length > 0) {
          const id2 = queue2.shift()
          const ch2 = childrenOf.get(id2) || []
          ch2.forEach(k => {
            if (!followSet.has(k)) {
              followSet.add(k)
              queue2.push(k)
            }
          })
        }
      }
      /* 展示顺序（列序）：初始为 group 成员按创建时间全序；被摘除（归档/删除）的分支
         其后代按创建时间粘到它的位置（顶替继承列与编号），新分支追加到末尾。按组根缓存。 */
      const byCreated = (a, b) => {
        const ea = linById[a] || {}
        const eb = linById[b] || {}
        const ca = typeof ea.createdAt === 'number' ? ea.createdAt : 9007199254740991
        const cb = typeof eb.createdAt === 'number' ? eb.createdAt : 9007199254740991
        if (ca !== cb) return ca - cb
        return a < b ? -1 : 1
      }
      const computeOrder = (gid) => {
        if (followSet == null) return []
        let order = ui.orderById[gid]
        if (!Array.isArray(order)) {
          order = []
          followSet.forEach(id => order.push(id))
          order.sort(byCreated)
          ui.orderById[gid] = order
        } else {
          /* 已摘除成员：从序列移除，其存活直接子按创建时间粘到原位置 */
          const gone = order.filter(id => !followSet.has(id))
          const goneSet = new Set(gone)
          const next = []
          for (const id of order) {
            if (goneSet.has(id)) {
              const subs = (rawKidsMap.get(id) || []).filter(c => followSet.has(c)).sort(byCreated)
              for (const c of subs) if (next.indexOf(c) < 0) next.push(c)
            } else if (next.indexOf(id) < 0) {
              next.push(id)
            }
          }
          const inNext = new Set(next)
          const fresh = []
          followSet.forEach(id => { if (!inNext.has(id)) fresh.push(id) })
          fresh.sort(byCreated)
          order = next.concat(fresh)
          ui.orderById[gid] = order
        }
        /* 归属根级成员紧跟组根之后（各自独立一列），其余顺序保持。
           注意：被归属者可能比组根更老，必须以组根（gid）显式打头。 */
        if (gid != null) {
          const reps = order.filter(id => id !== gid && repOf(id) && String(repOf(id).group) === String(gid))
          const rest = order.filter(id => id !== gid && !reps.includes(id))
          const repsSorted = reps.slice().sort(byCreated)
          order = [gid].concat(repsSorted).concat(rest)
        }
        return order.slice()
      }
      const displayOrder = groupRoot != null ? computeOrder(groupRoot) : []

      /* 拉取所有可见会话的回合数据（updatedAt 感知缓存） */
      const visibleIds = []
      tree.visible.forEach(id => { if (!subKids.has(id)) visibleIds.push(id) })
      React.useEffect(() => {
        let alive = true
        visibleIds.forEach(id => {
          const key = String(id)
          loadRounds(listState, key).then(r => {
            if (!alive) return
            setRoundsMap(prev => {
              const cur2 = prev[key]
              if (cur2 && cur2.status === 'ok' && r && r.ok && cur2.capturedThroughSeq === r.capturedThroughSeq) return prev
              const n = Object.assign({}, prev)
              n[key] = (r && r.ok) ? { status: 'ok', rounds: r.rounds || [], capturedThroughSeq: r.capturedThroughSeq } : { status: 'err', rounds: null }
              return n
            })
          })
        })
        return () => { alive = false }
      }, [ui2.lineage, reloadSeq])

      /* 压缩块（仅当前 group）：压缩前的历史以块展示 */
      React.useEffect(() => {
        let alive = true
        const blockIds = displayOrder.length > 0 ? displayOrder : []
        blockIds.forEach(id => {
          const key = String(id)
          host.call('get-compact-blocks', { id: key }).then(r => {
            if (!alive) return
            setBlocksMap(prev => {
              const cur2 = prev[key]
              if (cur2 && cur2.status === 'ok' && r && r.ok && (cur2.blocks || []).length === (r.blocks || []).length) return prev
              const n = Object.assign({}, prev)
              n[key] = (r && r.ok) ? { status: 'ok', blocks: r.blocks || [] } : { status: 'err', blocks: [] }
              return n
            })
          }).catch(() => {})
        })
        return () => { alive = false }
      }, [ui2.lineage, reloadSeq])

      /* 30 秒周期刷新（捕捉会话更新） */
      React.useEffect(() => ctx.interval(() => setReloadSeq(n => n + 1), 30000), [])

      /* 血缘随画布强制刷新（打开时 + 每 30 秒）：原生分叉不走插件按钮，
         必须刷新才能拿到新子会话的 seedLength，否则分支会显示全部继承轮次 */
      React.useEffect(() => { loadLineage(true) }, [reloadSeq])

      /* ---------- 嵌入式布局：真实占用栅格的一条轨道，把会话列挤到右侧 ----------
         只写三个已算好的像素值，并且写之前与当前计算值比对：值没变就一次 DOM 写入
         都不做，因此不存在"测量→改布局→再测量"的反馈环（200ms 无条件重写的写法
         正是左侧栏卡死的原因）。 */
      const CANVAS_MIN_W = 240
      const CANVAS_MAX_W = 760
      const CANVAS_MIN_CHAT_W = 320

      /* 定位外壳：会话列 = 框架第 2 个子元素（侧栏 / 会话 / 右侧栏）。 */
      const locateShell = () => {
        const src = backdropEl
        if (!src) return null
        const layer = src.closest('[data-shell-overlay]')
        const frame = layer && layer.parentElement
        const kids = frame && frame.children
        if (!frame || !kids || kids.length < 2) return null
        return { frame: frame, center: kids[1], details: kids[2] || null }
      }
      /* 计算目标宽度、必要时写一次栅格，返回 { left, top, height, width }。
         轨道语义：1=左栏，2=导图面板，3=会话列（自适应剩余宽度），4=右侧栏。 */
      const applyGrid = (widthPx) => {
        const r = locateShell()
        if (!r) return null
        const frameRect = r.frame.getBoundingClientRect()
        const frameW = Math.round(frameRect.width)
        const centerRect = r.center.getBoundingClientRect()
        const detailsW = r.details ? Math.round(r.details.getBoundingClientRect().width) : 0
        const sidebarW = Math.max(0, Math.round(centerRect.left - frameRect.left))
        /* 导图面板宽度：调用方给的目标值，或宽度的 42%；始终给会话列留下至少
           CANVAS_MIN_CHAT_W，放不下就退化为覆盖模式（返回 null）。 */
        const requested = widthPx != null ? Math.round(widthPx) : Math.round(frameW * 0.42)
        const chatMin = Math.min(CANVAS_MIN_CHAT_W, Math.max(160, Math.round(frameW * 0.2)))
        const maxForPanel = frameW - sidebarW - detailsW - chatMin
        if (maxForPanel < CANVAS_MIN_W) return null
        const want = Math.max(CANVAS_MIN_W, Math.min(CANVAS_MAX_W, Math.min(Math.max(240, requested), maxForPanel)))
        if (Math.abs(Math.round(centerRect.width) - want) > 1) {
          try {
            /* 列位置也要显式写：宿主渲染时会重排子元素顺序，只让轨道变宽而列不改位
               会把会话列压成 0 宽（聊天区消失）。 */
            r.frame.style.setProperty(
              'grid-template-columns',
              sidebarW + 'px ' + want + 'px minmax(' + chatMin + 'px, 1fr)' + (detailsW > 0 ? ' ' + detailsW + 'px' : ''),
              'important',
            )
            r.center.style.setProperty('grid-column', '3', 'important')
            if (r.details && detailsW > 0) r.details.style.setProperty('grid-column', '4', 'important')
          } catch (e) { /* 宿主拒绝写样式时按覆盖模式继续 */ }
        }
        return {
          left: sidebarW,
          top: Math.round(centerRect.top),
          height: Math.round(centerRect.height),
          width: want,
        }
      }
      /* 归还轨道：清掉插件写过的内联声明，宿主随即恢复自己的响应式栅格。 */
      const releaseGrid = () => {
        try {
          const layer = document.querySelector('[data-shell-overlay]')
          const frame = layer && layer.parentElement
          const kids = frame && frame.children
          if (!frame || !kids || kids.length < 2) return
          frame.style.removeProperty('grid-template-columns')
          if (kids[1]) kids[1].style.removeProperty('grid-column')
          if (kids[2]) kids[2].style.removeProperty('grid-column')
        } catch (e) { /* 页面已卸载 */ }
      }
      React.useEffect(() => {
        const el = backdropEl
        if (!el) return
        let stopped = false
        const applyShift = () => {
          if (stopped) return
          const fixedW = cWRef.current
          const want = fixedW != null ? fixedW : (ui.canvasWidth != null ? ui.canvasWidth : null)
          const res = applyGrid(want != null ? want : Math.min(480, Math.max(300, Math.round((window.innerWidth || 1280) * 0.44))))
          if (!res) {
            setGeom(null)
            setDegraded(true)
            if (ui.canvasGeom) { ui.canvasGeom = null; notify() }
            return
          }
          setDegraded(false)
          if (fixedW == null) cWRef.current = res.width
          setGeom(g => (g && g.left === res.left && g.top === res.top && g.height === res.height && g.width === res.width) ? g : res)
          if (!ui.canvasGeom || ui.canvasGeom.left !== res.left || ui.canvasGeom.width !== res.width || ui.canvasGeom.top !== res.top) {
            ui.canvasGeom = res
            notify()
          }
        }
        applyShift()
        /* 宿主布局变化由 ResizeObserver（框架 + 会话列）+ resize 事件驱动；另留
           1 秒兜底轮询，防止宿主重渲染时把内联栅格覆盖回去。只有宽度真的变了才写 DOM。 */
        const r0 = locateShell()
        const ro = (typeof ResizeObserver === 'function' && r0) ? new ResizeObserver(() => applyShift()) : null
        if (ro && r0) {
          try { ro.observe(r0.frame); ro.observe(r0.center) } catch (e) { /* 观测失败时靠轮询 */ }
        }
        window.addEventListener('resize', applyShift)
        const stopTimer = ctx.interval(applyShift, 1000)
        return () => {
          stopped = true
          stopTimer()
          if (ro) ro.disconnect()
          window.removeEventListener('resize', applyShift)
          releaseGrid()
          if (ui.canvasGeom) { ui.canvasGeom = null; notify() }
        }
      }, [backdropEl])

      /* ---------- 右缘拖拽调整画布宽度 ---------- */
      const onResizeDown = (e) => {
        e.preventDefault()
        dragWRef.w = geom ? geom.width : (cWRef.current || 420)
        dragWRef.startX = e.clientX
        if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId)
        setResizingW(true)
      }
      const onResizeMove = (e) => {
        if (dragWRef.w == null) return
        const next = Math.max(CANVAS_MIN_W, Math.min(CANVAS_MAX_W, Math.round(dragWRef.w + (e.clientX - dragWRef.startX))))
        const res = applyGrid(next)
        if (res) {
          setCW(res.width)
          cWRef.current = res.width
          ui.canvasWidth = res.width
          setGeom(g => (g && g.left === res.left && g.top === res.top && g.height === res.height && g.width === res.width) ? g : res)
          if (!ui.canvasGeom || ui.canvasGeom.left !== res.left || ui.canvasGeom.width !== res.width || ui.canvasGeom.top !== res.top) {
            ui.canvasGeom = res
            notify()
          }
        }
      }
      const onResizeUp = () => {
        dragWRef.w = null
        setResizingW(false)
      }

      /* ---------- 布局：每个会话一列，节点 = 一轮对话（一个来回） ---------- */
      const CW = 240, GX = 56, GY = 34, START_Y = 26, VGAP = 14
      const ROUND_HEAD = 22, META_H = 17, ITEM_LABEL = 15, LINE_H = 16.5, PAD_Y = 14, ITEM_GAP = 8, FOOT_H = 26
      function textLines(text, max) {
        const len = typeof text === 'string' ? text.length : 0
        return Math.max(1, Math.min(max, Math.ceil((len || 1) / 17)))
      }
      function roundHeight(rd, isOpen) {
        let h = ROUND_HEAD + textLines(rd.userText, 5) * LINE_H + META_H + PAD_Y
        if (isOpen) {
          rd.items.forEach(it => { h += ITEM_LABEL + textLines(it.text, 4) * LINE_H + ITEM_GAP })
          h += FOOT_H
        }
        return h
      }
      function compactBlockHeight(bl, isOpen) {
        const rounds = Array.isArray(bl && bl.rounds) ? bl.rounds : []
        const summary = (bl && bl.summaryText) || ''
        let h = 20 + textLines(summary, 3) * LINE_H + META_H + PAD_Y
        if (isOpen) {
          h += 6
          rounds.forEach(rd => {
            h += ITEM_LABEL + textLines(rd.userText, 2) * LINE_H + META_H + ITEM_GAP
          })
          h += FOOT_H
        }
        return Math.max(56, h)
      }
      function toggleBlockExpand(key) {
        setBlocksExpanded(e => {
          const n = Object.assign({}, e)
          if (n[key]) delete n[key]
          else n[key] = true
          return n
        })
      }
      /* 一键展开/折叠所有压缩块，并记忆为默认配置（浏览器本地） */
      const toggleAllBlocks = () => {
        const next = !ui.blocksDefaultOpen
        ui.blocksDefaultOpen = next
        try { localStorage.setItem('dsh-branch-blocks-open', next ? '1' : '0') } catch (e) { /* noop */ }
        setBlocksExpanded({})
        notify()
      }
      const compactNow = (sid) => {
        host.call('compact-session', { id: String(sid) }).then(r => {
          if (r && r.ok) {
            setToast('已触发压缩；完成后将显示压缩前的摘要块')
            setReloadSeq(n => n + 1)
          } else {
            setToast((r && r.error) || '压缩失败')
          }
        }).catch(e => setToast('压缩失败：' + String((e && e.message) || e)))
      }
      function roundSig(rd) {
        return (rd.userSeq == null ? '' : rd.userSeq) + '|' +
          (typeof rd.userText === 'string' ? rd.userText : '') + '|' +
          (rd.turn == null ? '' : rd.turn) + '|' + ((rd.items && rd.items.length) || 0)
      }
      /* 有效种子边界：优先用分叉记录；缺失时（原生分叉未刷新血缘/旧分叉）
         用与父会话回合的公共前缀比对推断：前 K 轮完全相同 = 继承内容 */
      function effectiveSeed(id) {
        const e = linById[id] || {}
        if (typeof e.seedLength === 'number') return e.seedLength
        const rm = roundsMap[id]
        const full = (rm && rm.status === 'ok' && Array.isArray(rm.rounds)) ? rm.rounds : null
        if (!full || full.length === 0) return null
        const s = tree.byId[id] || {}
        const pid = e.parentId != null ? String(e.parentId) : (s.parentId ? String(s.parentId) : null)
        if (!pid) return null
        const prm = roundsMap[pid]
        const pf = (prm && prm.status === 'ok' && Array.isArray(prm.rounds)) ? prm.rounds : null
        if (!pf || pf.length === 0) return null
        let k = 0
        while (k < full.length && k < pf.length) {
          if (roundSig(full[k]) !== roundSig(pf[k])) break
          k++
        }
        if (k >= full.length) return Number.MAX_SAFE_INTEGER /* 全部为继承内容 */
        return full[k].userSeq
      }
      function chainRounds(id) {
        const rm = roundsMap[id]
        const rounds = (rm && rm.status === 'ok' && Array.isArray(rm.rounds)) ? rm.rounds : null
        const L = effectiveSeed(id)
        const out = []
        if (rounds) {
          rounds.forEach(rd => {
            const items = rd.items || []
            if (items.length === 0) return
            let lastSeq = 0
            items.forEach(it => { if (typeof it.seq === 'number' && it.seq > lastSeq) lastSeq = it.seq })
            if (L !== null && lastSeq < L) return
            out.push({ turn: rd.turn, userSeq: rd.userSeq, userText: typeof rd.userText === 'string' ? rd.userText : '', items: items, lastSeq: lastSeq })
          })
        }
        return out
      }

      const placed = new Map()
      const edges = []
      const anchorKeys = new Set()
      const colBottom = new Map()
      /* 主干排序：原始根在前；孤儿（父被归档）在后，最原始者（分叉最早）优先作为新主干 */
      const sortedRoots = roots.slice().sort((a, b) => {
        const ea = linById[a] || {}
        const eb = linById[b] || {}
        const sa = tree.byId[a] || {}
        const sb = tree.byId[b] || {}
        const aOrphan = (ea.parentId != null || sa.parentId != null) ? true : false
        const bOrphan = (eb.parentId != null || sb.parentId != null) ? true : false
        if (aOrphan !== bOrphan) return aOrphan ? 1 : -1
        if (aOrphan && bOrphan) {
          const saSeed = typeof ea.seedLength === 'number' ? ea.seedLength : 9007199254740991
          const sbSeed = typeof eb.seedLength === 'number' ? eb.seedLength : 9007199254740991
          if (saSeed !== sbSeed) return saSeed - sbSeed
        }
        return (ea.createdAt || 0) - (eb.createdAt || 0)
      })
      {
        const queue = []
        sortedRoots.forEach((id, i) => {
          queue.push({ id: id, num: String(i + 1), depth: 0 })
        })
        while (queue.length > 0) {
          const item = queue.shift()
          const id = item.id
          const depth = item.depth
          if (followSet && !followSet.has(id)) continue
          const e = linById[id] || {}
          const s = tree.byId[id] || {}
          const pid = effParent(id)
          const L = effectiveSeed(id)
          const colIdx = displayOrder.indexOf(id)
          const colIdxFinal = colIdx >= 0 ? colIdx : depth
          const x = 20 + colIdxFinal * (CW + GX)
          let startY = START_Y
          let edgeRec = null
          if (pid && placed.has(pid)) {
            const parent = placed.get(pid)
            let anchor = null
            if (L !== null) {
              for (const n of parent.nodes) {
                if (typeof n.lastSeq === 'number' && n.lastSeq < L) anchor = n
              }
            }
            if (!anchor) anchor = parent.nodes[parent.nodes.length - 1] || null
            if (anchor) {
              /* 锚点键必须在折叠判定之前登记：折叠后子链不再放置，但展开按钮仍需存在 */
              anchorKeys.add(anchor.key)
              if (collapsed[anchor.key]) continue
              edgeRec = { anchor: anchor, first: null }
              /* 新枝与分叉节点同一水平线长出 */
              startY = anchor.y
            }
          }
          /* 同列重叠处理：不得低于同列已占用的底部（后出现的下移） */
          const prevBottom = colBottom.has(colIdxFinal) ? colBottom.get(colIdxFinal) : (START_Y - VGAP)
          if (startY < prevBottom + VGAP) startY = prevBottom + VGAP
          const rounds = chainRounds(id)
          const nodes = []
          let y = startY
          /* 压缩块（压缩前历史）排在分支链首，默认折叠，展开查看各回合 */
          const blkRec = blocksMap[id]
          const blks = (blkRec && blkRec.status === 'ok' && Array.isArray(blkRec.blocks)) ? blkRec.blocks : []
          blks.forEach((bl, bi) => {
            const bkey = 'c:' + id + ':' + bi
            const isOpenB = (blocksExpanded[bkey] === undefined) ? ui.blocksDefaultOpen : !!blocksExpanded[bkey]
            const bh = compactBlockHeight(bl, isOpenB)
            nodes.push({
              key: bkey,
              sessionId: id,
              seq: null,
              lastSeq: null,
              kind: 'compact',
              turn: null,
              userText: (bl.summaryText || '').slice(0, 1200),
              items: Array.isArray(bl.rounds) ? bl.rounds : [],
              blk: bl,
              idx: 0,
              x: x,
              y: y,
              w: CW,
              h: bh,
              first: nodes.length === 0,
              isOpen: isOpenB,
            })
            y += bh + VGAP
          })
          rounds.forEach((rd, i) => {
            const key = 'r:' + id + ':' + rd.userSeq
            const isOpen = !!expanded[key]
            const h = roundHeight(rd, isOpen)
            nodes.push({
              key: key,
              sessionId: id,
              seq: rd.userSeq,
              lastSeq: rd.lastSeq,
              kind: 'round',
              turn: rd.turn,
              userText: rd.userText,
              items: rd.items,
              idx: i + 1,
              x: x,
              y: y,
              w: CW,
              h: h,
              first: i === 0 && nodes.length === 0,
              isOpen: isOpen,
            })
            y += h + VGAP
          })
          if (nodes.length === 0) {
            nodes.push({ key: 'm:' + id + ':head', sessionId: id, seq: null, lastSeq: null, kind: 'blank', turn: null, userText: '', items: [], idx: 0, x: x, y: y, w: CW, h: 56, first: true, isOpen: false })
            y += 56 + VGAP
          }
          if (edgeRec) {
            edgeRec.first = nodes[0]
            edges.push(edgeRec)
          }
          const chainBottom = nodes[nodes.length - 1].y + nodes[nodes.length - 1].h
          placed.set(id, { id: id, x: x, top: nodes[0].y, nodes: nodes, bottom: y - VGAP, pid: pid, num: item.num })
          colBottom.set(colIdxFinal, chainBottom)
          /* 子会话：按展示顺序（列序）排列并编号（顶替后编号随树层级动态重算） */
          const ch = childrenOf.get(id) || []
          const ordered = ch.slice().sort((c1, c2) => {
            const i1 = displayOrder.indexOf(c1)
            const i2 = displayOrder.indexOf(c2)
            if (i1 >= 0 && i2 >= 0 && i1 !== i2) return i1 - i2
            return byCreated(c1, c2)
          })
          ordered.forEach((c, i) => {
            if (!followSet || followSet.has(c)) queue.push({ id: c, num: item.num + '.' + (i + 1), depth: depth + 1 })
          })
        }
      }

      /* ---------- 连线：链内竖线 + 分叉水平引出线 ---------- */
      const edgeEls = []
      edges.forEach((e2, i) => {
        const a = e2.anchor
        const f = e2.first
        if (!a || !f) return
        const x1 = a.x + CW
        const y1 = a.y + a.h / 2
        const x2 = f.x
        const y2 = f.y + f.h / 2
        const mid = (x1 + x2) / 2
        edgeEls.push(React.createElement('path', {
          key: 'f:' + i,
          d: 'M ' + x1 + ' ' + y1 + ' L ' + mid + ' ' + y1 + ' L ' + mid + ' ' + y2 + ' L ' + x2 + ' ' + y2,
          fill: 'none',
          stroke: 'var(--brm-blue)',
          strokeWidth: 1.6,
          opacity: 0.7,
        }))
      })
      placed.forEach(p => {
        p.nodes.forEach((n2, i) => {
          const nx = p.nodes[i + 1]
          if (!nx) return
          edgeEls.push(React.createElement('path', {
            key: 'v:' + n2.key,
            d: 'M ' + (p.x + CW / 2) + ' ' + (n2.y + n2.h) + ' L ' + (p.x + CW / 2) + ' ' + nx.y,
            fill: 'none',
            stroke: 'var(--brm-guide)',
            strokeWidth: 1.4,
          }))
        })
      })

      let layW = 400
      let layH = 300
      placed.forEach(p => {
        if (p.x + CW > layW) layW = p.x + CW
        if (p.bottom > layH) layH = p.bottom
      })
      layW += 24
      layH += 24

      /* ---------- 列头（会话标识） ---------- */
      const headEls = []
      placed.forEach(p => {
        const s = tree.byId[p.id] || {}
        const title = s.displayTitle || s.title || String(p.id)
        headEls.push(React.createElement('div', {
          key: 'h:' + p.id,
          className: 'brm-cv-colhead',
          style: { left: p.x, top: Math.max(4, p.top - 21) },
        },
          React.createElement('span', { className: 'brm-cv-colnum' }, p.num || ''),
          React.createElement('span', { style: { overflow: 'hidden', textOverflow: 'ellipsis' } }, title),
          p.pid ? React.createElement(ForkLabel, { childId: p.id, mode: 'edge' }) : null))
      })

      /* ---------- 节点卡片：一轮对话（可展开细分消息，同对话详情） ---------- */
      const toggleCollapse = (key) => setCollapsed(c => {
        const n = Object.assign({}, c)
        if (n[key]) delete n[key]
        else n[key] = true
        return n
      })
      const toggleExpand = (key) => setExpanded(c => {
        const n = Object.assign({}, c)
        if (n[key]) delete n[key]
        else n[key] = true
        return n
      })
      const forkAt = (n, atSeq) => {
        forkFrom(n.sessionId, atSeq == null ? null : atSeq).then(() => {
          setToast('已创建新分支并打开')
        }).catch(err => setToast('分叉失败：' + String((err && err.message) || err)))
      }
      const jumpToNode = (n, keepCanvas) => {
        const isCur = String(current) === String(n.sessionId)
        if (!keepCanvas) {
          ui.canvasOpen = false
          notify()
        }
        if (!isCur) {
          openSession(n.sessionId)
          ctx.timeout(() => jumpToTurn(n.turn, canvasEl), 320)
        } else {
          ctx.timeout(() => jumpToTurn(n.turn, canvasEl), 60)
        }
      }
      const cardEls = []
      placed.forEach(p => {
        p.nodes.forEach(n => {
          const isCurPath = pathSet.has(n.sessionId)
          const isAnchor = anchorKeys.has(n.key)
          const isCollapsed = !!collapsed[n.key]
          if (n.kind === 'blank') {
            cardEls.push(React.createElement('div', {
              key: n.key,
              className: 'brm-cv-card' + (isCurPath ? ' brm-cv-current' : ' brm-cv-dim') + ' brm-cv-blank',
              style: { left: n.x, top: n.y, height: n.h },
              title: '点击打开该会话',
              onClick: () => openSession(n.sessionId),
            },
              React.createElement('div', { className: 'brm-cv-role' },
                React.createElement('span', null, '空白分支'),
                n.first && p.pid ? React.createElement('span', { className: 'brm-cv-forktag' }, '分叉') : null),
              React.createElement('div', { className: 'brm-cv-text' }, '（尚未对话，点击打开）'),
              React.createElement('div', { className: 'brm-cv-acts' },
                React.createElement('button', {
                  className: 'brm-btn',
                  onClick: (e) => { e.stopPropagation(); jumpToNode(n) },
                }, '跳转'),
                isAnchor ? React.createElement('button', {
                  className: 'brm-btn',
                  onClick: (e) => { e.stopPropagation(); toggleCollapse(n.key) },
                }, isCollapsed ? '展开分支' : '折叠分支') : null)))
            return
          }
          if (n.kind === 'compact') {
            const innerRounds = Array.isArray(n.items) ? n.items : []
            cardEls.push(React.createElement('div', {
              key: n.key,
              className: 'brm-cv-card brm-cv-compact' + (isCurPath ? ' brm-cv-current' : ' brm-cv-dim'),
              style: { left: n.x, top: n.y, height: n.h },
              title: '压缩前内容（点击展开查看各回合）',
              onClick: () => toggleBlockExpand(n.key),
            },
              React.createElement('div', { className: 'brm-cv-rolerow' },
                React.createElement('span', null, '压缩前摘要 · ' + innerRounds.length + ' 个回合'),
                n.first && p.pid ? React.createElement('span', { className: 'brm-cv-forktag' }, '分叉') : null),
              React.createElement('div', { className: 'brm-cv-usertext' }, n.userText || '（无摘要）'),
              React.createElement('div', { className: 'brm-cv-meta' },
                React.createElement('span', null, n.isOpen ? '已展开' : '展开查看各回合')),
              n.isOpen ? React.createElement('div', { className: 'brm-cv-items' },
                innerRounds.map((rd, ri) => {
                  const aiN = (rd.items || []).filter(it => it.kind === 'assistant').length
                  return React.createElement('div', { className: 'brm-cv-item', key: 'c' + ri },
                    React.createElement('div', { className: 'brm-cv-item-label brm-user' }, '第 ' + (ri + 1) + ' 轮 · 用户'),
                    React.createElement('div', { className: 'brm-cv-itemtext' }, rd.userText || '（无文本）'),
                    React.createElement('div', { className: 'brm-cv-item-label' }, aiN + ' 条 AI 回复'))
                })) : null,
              React.createElement('div', { className: 'brm-cv-acts' },
                React.createElement('button', {
                  className: 'brm-btn',
                  onClick: (e) => { e.stopPropagation(); toggleBlockExpand(n.key) },
                }, n.isOpen ? '收起' : '展开'),
                React.createElement('button', {
                  className: 'brm-btn',
                  onClick: (e) => { e.stopPropagation(); jumpToNode(n) },
                }, '跳转'))))
            return
          }
          const aiCount = n.items.filter(it => it.kind === 'assistant').length
          const hasSubs = n.items.length > 1
          const kids = []
          if (n.isOpen) {
            let aiIdx = 0
            n.items.forEach(it => {
              const isUser = it.kind === 'user'
              const label = isUser ? '用户消息' : ('AI消息' + (++aiIdx))
              kids.push(React.createElement('div', {
                className: 'brm-cv-item',
                key: (isUser ? 'u' : 'a') + it.seq,
              },
                React.createElement('div', { className: 'brm-cv-item-label' + (isUser ? ' brm-user' : ' brm-ai') }, label),
                React.createElement('div', { className: 'brm-cv-itemtext' }, it.text || '（无文本）'),
                React.createElement('div', { className: 'brm-cv-item-acts' },
                  React.createElement('button', {
                    className: 'brm-btn',
                    onClick: () => forkAt(n, it.seq),
                  }, '在此分叉'))))
            })
            kids.push(React.createElement('div', { className: 'brm-cv-round-foot', key: 'foot' },
              React.createElement('button', {
                className: 'brm-btn',
                onClick: () => forkAt(n, n.lastSeq),
              }, '在本轮对话末尾分叉')))
          }
          cardEls.push(React.createElement('div', {
            key: n.key,
            className: 'brm-cv-card' + (isCurPath ? ' brm-cv-current' : ' brm-cv-dim'),
            style: { left: n.x, top: n.y, height: n.h },
            title: '点击跳转到该轮对话（锚点定位右侧聊天）',
            onClick: () => jumpToNode(n, true),
          },
            React.createElement('div', { className: 'brm-cv-rolerow' },
              React.createElement('span', null, '第 ' + n.idx + ' 轮 · 用户'),
              n.first && p.pid ? React.createElement('span', { className: 'brm-cv-forktag' }, '分叉') : null),
            React.createElement('div', { className: 'brm-cv-usertext' }, n.userText || '（无文本）'),
            React.createElement('div', { className: 'brm-cv-meta' },
              React.createElement('span', null, aiCount + ' 条 AI 回复'),
              !n.isOpen && hasSubs ? React.createElement('span', null, '· 展开看细节') : null),
            n.isOpen ? React.createElement('div', { className: 'brm-cv-items' }, kids) : null,
            React.createElement('div', { className: 'brm-cv-acts' },
              hasSubs ? React.createElement('button', {
                className: 'brm-btn',
                title: n.isOpen ? '收起细分消息' : '展开细分消息',
                onClick: (e) => { e.stopPropagation(); toggleExpand(n.key) },
              }, n.isOpen ? '收起' : '展开') : null,
              React.createElement('button', {
                className: 'brm-btn',
                onClick: (e) => { e.stopPropagation(); forkAt(n, n.lastSeq) },
              }, '本轮末尾分叉'),
              React.createElement('button', {
                className: 'brm-btn',
                title: '压缩该会话的历史为摘要块（此节点之前的对话）',
                onClick: (e) => { e.stopPropagation(); compactNow(n.sessionId) },
              }, '压缩'),
              React.createElement('button', {
                className: 'brm-btn',
                onClick: (e) => { e.stopPropagation(); jumpToNode(n) },
              }, '跳转'),
              isAnchor ? React.createElement('button', {
                className: 'brm-btn',
                onClick: (e) => { e.stopPropagation(); toggleCollapse(n.key) },
              }, isCollapsed ? '展开分支' : '折叠分支') : null)))
        })
      })

      /* ---------- 视图变换（缩放 / 平移） ---------- */
      const zoomView = (px, py, factor) => setView(v => {
        const s = Math.max(0.2, Math.min(2, v.s * factor))
        const nx = (px - v.tx) / v.s
        const ny = (py - v.ty) / v.s
        return { s: s, tx: px - nx * s, ty: py - ny * s }
      })
      const fitAll = () => {
        const el = canvasEl
        if (!el) return
        setView(v => {
          const s = Math.max(0.2, Math.min(1, (el.clientWidth - 60) / layW, (el.clientHeight - 60) / layH))
          return { s: s, tx: Math.max(12, (el.clientWidth - layW * s) / 2), ty: Math.max(12, (el.clientHeight - layH * s) / 2) }
        })
      }
      React.useEffect(() => {
        const el = canvasEl
        if (!el) return
        const onWheel = (e) => {
          e.preventDefault()
          const rect = el.getBoundingClientRect()
          zoomView(e.clientX - rect.left, e.clientY - rect.top, e.deltaY < 0 ? 1.12 : 1 / 1.12)
        }
        el.addEventListener('wheel', onWheel, { passive: false })
        return () => el.removeEventListener('wheel', onWheel)
      }, [canvasEl])
      /* 打开后：嵌入布局生效且全部会话数据就绪时，自动执行一次「适应」 */
      React.useEffect(() => {
        if (fitted || !geom) return
        if (visibleIds.length === 0) return
        let ready = true
        for (const id of visibleIds) {
          const st = roundsMap[id]
          if (!st || (st.status !== 'ok' && st.status !== 'err')) { ready = false; break }
        }
        if (!ready) return
        setFitted(true)
        ctx.timeout(() => fitAll(), 60)
      }, [geom, roundsMap, fitted, visibleIds.length])

      const closeCanvas = () => { ui.canvasOpen = false; notify() }
      const fbRect = ui2.sidebarEl && ui2.sidebarEl.getBoundingClientRect ? ui2.sidebarEl.getBoundingClientRect() : null
      const fbLeft = fbRect ? Math.round(fbRect.right) : 260
      const backdropStyle = geom
        ? { left: geom.left, width: geom.width }
        : { position: 'fixed', left: fbLeft, top: 64, bottom: 0, width: 420 }

      return React.createElement('div', {
        ref: setBackdropEl,
        className: 'brm-cv-backdrop ' + themeClass(),
        style: backdropStyle,
      },
        React.createElement('div', { className: 'brm-cv-head' },
          React.createElement('div', { className: 'brm-cv-title' }, '分支导图' + (degraded ? '（覆盖模式）' : '')),
          React.createElement('div', { className: 'brm-cv-tools' },
            React.createElement('button', { className: 'brm-btn', onClick: () => setReloadSeq(n => n + 1) }, '刷新'),
            React.createElement('button', {
              className: 'brm-btn' + (ui.blocksDefaultOpen ? ' brm-on' : ''),
              title: ui.blocksDefaultOpen ? '当前默认展开压缩前内容；点击改为默认折叠' : '当前默认折叠压缩前内容；点击改为默认展开',
              onClick: toggleAllBlocks,
            }, ui.blocksDefaultOpen ? '折叠压缩块' : '展开压缩块'),
            React.createElement('button', { className: 'brm-btn', onClick: () => zoomView(canvasEl ? canvasEl.clientWidth / 2 : 100, canvasEl ? canvasEl.clientHeight / 2 : 100, 1 / 1.2) }, '缩小'),
            React.createElement('button', { className: 'brm-btn', onClick: fitAll }, '适应'),
            React.createElement('button', { className: 'brm-btn', onClick: () => zoomView(canvasEl ? canvasEl.clientWidth / 2 : 100, canvasEl ? canvasEl.clientHeight / 2 : 100, 1.2) }, '放大'),
            React.createElement('button', {
              className: 'brm-btn',
              title: '加载性能说明',
              onMouseEnter: () => setTipOn(true),
              onMouseLeave: () => setTipOn(false),
              onFocus: () => setTipOn(true),
              onBlur: () => setTipOn(false),
            }, '提示'),
            React.createElement('button', { className: 'brm-btn brm-primary', onClick: closeCanvas }, '返回对话'))),
          tipOn ? React.createElement('div', { className: 'brm-tooltip' },
            React.createElement('div', { className: 'brm-tip-title' }, '加载性能提示'),
            '分支（会话）越多，加载和渲染越慢。每一组对话都需要单独加载并渲染；当有七八个分支需要全部加载渲染时，完整加载并渲染可能要长达 20 秒，请稍候。') : null,
        React.createElement('div', { className: 'brm-cv-body' },
          React.createElement('div', {
            className: 'brm-cv-canvas' + (drag ? ' brm-dragging' : ''),
            ref: setCanvasEl,
            onPointerDown: (e) => {
              if (e.target.closest('.brm-cv-card') || e.target.closest('.brm-cv-colhead')) return
              setDrag({ x: e.clientX, y: e.clientY, tx: view.tx, ty: view.ty })
              if (e.currentTarget.setPointerCapture) e.currentTarget.setPointerCapture(e.pointerId)
            },
            onPointerMove: (e) => {
              if (!drag) return
              setView(v => ({ s: v.s, tx: drag.tx + (e.clientX - drag.x), ty: drag.ty + (e.clientY - drag.y) }))
            },
            onPointerUp: () => setDrag(null),
            onPointerCancel: () => setDrag(null),
          },
            placed.size === 0
              ? React.createElement('div', { className: 'brm-cv-empty' }, '暂无可展示的会话树。新建会话，或在侧边栏 / 对话详情中对会话分叉后，即可在此看到按轮对话组织的分支树。')
              : React.createElement('div', {
                className: 'brm-cv-inner',
                style: {
                  width: layW,
                  height: layH,
                  transform: 'translate(' + view.tx + 'px,' + view.ty + 'px) scale(' + view.s + ')',
                },
              },
                React.createElement('svg', { className: 'brm-cv-edges', width: layW, height: layH }, edgeEls),
                headEls,
                cardEls),
            React.createElement('div', { className: 'brm-cv-hint' }, '仅显示当前会话及其相关分支 · 每卡=一轮对话 · 拖拽平移 · 滚轮缩放 · 悬停：展开 / 分叉 / 跳转 / 折叠分支'))),
        geom ? React.createElement('div', {
          className: 'brm-cv-resize' + (resizingW ? ' brm-dragging' : ''),
          title: '拖拽调整画布宽度',
          onPointerDown: onResizeDown,
          onPointerMove: onResizeMove,
          onPointerUp: onResizeUp,
          onPointerCancel: onResizeUp,
        }) : null)
    }

    /* ---------- 悬浮层入口 ---------- */
    function OverlayRoot(props) {
      const ui2 = useUi()
      const listState = props.useSessions ? props.useSessions(s => s) : null
      const wsState = props.useWorkspaces ? props.useWorkspaces(s => s) : null
      const archivedIds = (wsState && Array.isArray(wsState.archivedSessionIds)) ? wsState.archivedSessionIds : []
      const archivedSet = new Set(archivedIds.map(String))
      return [
        ui2.canvasOpen ? React.createElement(CanvasPanel, { key: 'canvas', listState: listState, archivedSet: archivedSet }) : null,
        React.createElement(DrawerPanel, { key: 'drawer', listState: listState }),
        ui2.branchListOpen ? React.createElement(BranchListPanel, { key: 'branchlist', listState: listState, wsState: wsState }) : null,
        ui2.toast ? React.createElement('div', { className: 'brm-toast ' + themeClass(), key: 'toast:' + ui2.toast.key }, ui2.toast.text) : null,
      ]
    }

    /* ---------- 插槽注册 ---------- */
    /* 0.2.1：ui-workspace 因为新增 remoteAccess 依赖而延迟 apply，官方 WorkspaceBrowser
       注册得比本插件晚，这个单座插槽实际由本插件占住 —— 也就是「分支树直接当左栏用」。
       保留这个座位，否则插件在左栏完全不可见（覆盖层面板依赖左栏 DOM，暂不可靠）。 */
    slots.inject('sidebar.workspaces', () => slots.register(
      { name: 'sidebar.workspaces' },
      (props) => React.createElement(SidebarBrowser, props),
    ))
    slots.inject('conversation.session.header.actions', () => slots.register(
      { name: 'conversation.session.header.actions', id: 'branch-list-toggle', order: 10, label: () => '分支树 / 官方列表' },
      (props) => React.createElement(HeaderBranchListToggle, props),
    ))
    slots.inject('shell.overlay', () => slots.register(
      { name: 'shell.overlay', id: 'branch-map-panel', order: 10 },
      (props) => React.createElement(OverlayRoot, props),
    ))
    slots.inject('conversation.session.header.actions', () => slots.register(
      { name: 'conversation.session.header.actions', id: 'branch-drawer', order: 30, label: () => '对话详情' },
      (props) => React.createElement(HeaderDrawerButton, props),
    ))
    slots.inject('conversation.session.header.actions', () => slots.register(
      { name: 'conversation.session.header.actions', id: 'branch-canvas-toggle', order: 20, label: () => '导图视图' },
      (props) => React.createElement(HeaderCanvasToggle, props),
    ))
  },
}