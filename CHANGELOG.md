# Changelog

## [0.2.0] - 2026-08-24

Static-plugin release: fixes the "loads with errors" problem of 0.1.x.

- **Root cause** of 0.1.x: `lib/` shipped dynamic-plugin source (function-body + `return {}` + injected `styles`/`host`/`harness`) inside a static npm bundle — the two plugin mechanisms are incompatible, so the ESM loader hit `Illegal return statement` / `window` / `styles` / `host` undefined errors.
- **Fix**: convert `lib/` to the static-plugin spec (same logic, new shells):
  - `lib/host.js`: `export default { name, inject:['webServer'], apply(ctx) }`; `harness.handle(method, fn)` is shimmed onto `webServer.register` HTTP routes `/dsh-mindmap-chat/<method>`.
  - `lib/client.js`: `window.__ModuleLoader__.load({ id, factory })`; `styles.insert` → `<style>` DOM injection; `host.call` → `fetch('/dsh-mindmap-chat/<method>?')`; `React` → `require('react')`.
  - `package.json`: `main`/`exports["."]` now point to node half `lib/host.js`; `exports["./client"]` → `lib/client.js`.
- The dynamic source stays in `src/` for agent-driven development (dual-track).

## [0.1.1] - 2026-08-24

First npm release.

- Added `.github/workflows/publish.yml`: `v*` tags publish to npm automatically.
- No source changes; bundled as `dsh-mindmap-chat@0.1.1`.

## [0.1.0] - 2026-08-24

Initial release.

- **Mind-map view (Flowith-style live tree)**: trunk = main line across all rounds; forks sprout on the same horizontal line; one column per branch; post-fork-only display; siblings align when fully parallel; overlapping siblings shift down; archived trunk promotes the most-original branch.
- **Sidebar conversation tree**: group folders (2+ members), re-parent branch into group (merge-all / move-self), run-status dots, keyword search, archive and terminal soft-delete.
- **Compaction support**: pre-compaction summary fold blocks (default open/collapsed configurable), "compress this node" action.
- **Load-performance tooltip** in the map header (more branches = slower; ~7–8 branches may take up to 20s).
- Bilingual README (English: [README.en.md](README.en.md)).
