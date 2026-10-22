# 注意：`src/` 是 dynamic-plugin 快照

v0.2.1 的运行时以 `../lib/client.js` 与 `../lib/host.js` 为准（`lib/client.js` 是带 `window.__ModuleLoader__.load` 包装的单文件客户端）。

本目录保留 dynamic-plugin 的模块体写法，便于 agent-driven 开发；自 v0.2.1 起的「会话看板主页」只在 `lib/` 维护，`src/` 可能滞后于 `lib/`，不要从这里构建或部署。
