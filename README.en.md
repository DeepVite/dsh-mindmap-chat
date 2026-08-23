# dsh-mindmap-chat

> Chat branch tree plugin · Mind-map of conversation branches for DeepSeek Harness
>
> 聊天分支树插件 · DeepSeek Harness 对话分支思维导图

**English** | [中文](README.md)

---

**dsh-mindmap-chat (Chat Branch Tree) is a conversation-branch manager for DeepSeek Harness: it renders every branch of the same conversation tree as a live mind-map. The trunk is the main vertical line spanning all rounds; forks sprout on the same horizontal line; each branch occupies its own column and a new branch shows only its post-fork content; fully-parallel siblings align on the same horizontal line. It also features group-level archiving, re-parenting branches into groups, pre-compaction review, keyword search, and session archive/delete.**

---

## ✨ Features

### 1. Mind-map view (Flowith-style live tree)
- Trunk = the main line spanning all rounds; forks sprout on the **same horizontal line**
- Each branch occupies exactly one column; column headers show branch numbers in creation order
- A new branch shows only its **post-fork content**; after the trunk is archived the most-original branch becomes the new trunk
- Fully-parallel siblings align on the same horizontal line; overlapping siblings shift down automatically

### 2. Left sidebar conversation tree (groups)
- Sessions are aggregated into **groups**; groups with 2+ members render as collapsible group folders
- The "More" menu can re-parent any session **into a group**: choose to merge all related branches (Yes) or move only the current session (No); child sessions take its original place
- Archive, delete (terminal soft-delete), and pre-compaction fold blocks (default open/collapsed is configurable)

### 3. Compaction support
- Compaction history is shown as a folded "pre-compaction summary" block; default open/collapsed is configurable
- "Compress this node" can trigger session compaction directly from the map (requires a mounted compaction service)

### 4. Search & hints
- Keyword search across sessions to locate and jump quickly
- The map shows a loading-performance hint: more branches = slower load/render; with ~7–8 branches full load + render may take up to 20 seconds

---

## 🚀 Install (one command)

Requires DSH with the web profile.

```bash
# via npm (recommended)
npm exec -- dsh plugin --profile web add dsh-mindmap-chat

# or via GitHub repo
npm exec -- dsh plugin --profile web add https://github.com/DeepVite/dsh-mindmap-chat.git
```

**Refresh the browser** after install. If git install warns about pnpm blocking build scripts, add the package name to `allowBuilds` in your profile's `pnpm-workspace.yaml` and retry.

> The plugin source is plain JavaScript single-file (one client + one host, no build step); `src/` and `lib/` carry identical content.

## 🔄 Update

```bash
npm exec -- dsh plugin --profile web update dsh-mindmap-chat
```

---

## 📸 Preview

- **Sidebar**: session management tree with group folders, fork markers, and running-status dots
- **Map**: click the button next to "zoom" in the top bar to open the mind-map canvas; hover "hint" for load-performance info
- **Conversation header**: "map view" and "conversation details" buttons open the canvas and the details drawer

---

## 📄 License

Licensed under **Apache License 2.0** — see [LICENSE](LICENSE).

© 2026 DeepVite · ibronfree@gmail.com
