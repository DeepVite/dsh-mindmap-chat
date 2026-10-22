# dsh-mindmap-chat

> 聊天分支树插件 · DeepSeek Harness 对话分支思维导图
>
> Chat branch tree plugin · Mind-map of conversation branches for DeepSeek Harness

**中文** | [English](README.en.md)

---

**dsh-mindmap-chat（聊天分支树）是一款 DeepSeek Harness 对话分支管理插件：它把同一棵对话树上的所有分支以思维导图方式实时展出——主干是一条贯穿所有轮次的主线，分叉在同一水平线上发芽，每个分支占用独立一列；新分支只显示分叉后的内容，兄妹分支完全并行时对齐在同一水平线上。它还支持按「组」归档管理、分支归属到组、压缩前内容回看、关键词搜索与会话归档/删除。**

**dsh-mindmap-chat (Chat Branch Tree) is a conversation-branch manager for DeepSeek Harness: it renders every branch of the same conversation tree as a live mind-map. The trunk is the main vertical line spanning all rounds; forks sprout on the same horizontal line; each branch occupies its own column and a new branch shows only its post-fork content; fully-parallel siblings align on the same horizontal line. It also features group-level archiving, re-parenting branches into groups, pre-compaction review, keyword search, and session archive/delete.**

---

## ✨ 功能介绍

### 1. 思维导图视图（Flowith 风格实时树）
- 主干 = 主线，贯穿所有轮次；分叉在**同一水平线**上生长
- 分支一列只占一列，列头显示分支编号，按创建时间排布
- 新分支只显示**分叉后的内容**；主干归档后最原生的分支自动成为新主干
- 完全平行的兄妹分支对齐在同一水平线；重叠时后面的分支自动下移
- **嵌入式布局（push 而非遮盖）**：导图打开时真实占用外壳栅格的一条轨道，会话列被挤到右侧并自适应宽度；只有宽度确实变化时才写一次宿主样式，因此不存在「测量→改布局→再测量」的反馈环。窄窗口放不下时自动退化为覆盖模式（标题会标注「覆盖模式」）

### 2. 会话看板主页（按项目）
- 顶部工具栏固定为「主页 / + / 导图 / 详情」
- 点击「主页」在右侧打开会话看板；每个项目（工作区）一列，横向排列、可滚动
- **每个看板复用左侧栏同一棵树**：分支层级、组文件夹、颜色标记、运行状态、子代理、行内「⋯」菜单（重命名 / 分叉 / 选择分叉点 / 归属到组 / 标记强调 / 归档 / 删除）全部一致
- 点击树节点会关闭主页并直接打开该会话；项目看板头支持新建会话与选择目录「添加项目」；看板顺序跟随左栏的自定义项目排序

### 3. 左侧会话管理树（组 / 项目导航）
- **官方列表 / 分支树一键切换**：DSH 0.2 的 `sidebar.workspaces` 是单座、且已被官方会话浏览器占用，插件改把自己这份列表作为「左栏面板」（挂在 `shell.overlay` 上、覆盖左栏显示）。会话头部的「会话列表 / 分支树」按钮与面板头部的「官方列表」按钮来回切换，选择记忆在浏览器本地
- 会话按「组」聚合，两个成员以上的组显示为可折叠的组文件夹
- 「更多」菜单可将任意会话**归属到组**：选择合并全部相关分支（是）或仅移动当前会话（否），子会话自动顶替原位
- 支持归档、删除（终端软删除）、颜色标记与压缩前内容折叠块（默认展开/折叠可切换）
- **项目自定义排序**：拖拽项目前的 `⋮⋮` 手柄，或用项目行内的 `↑` / `↓`；顺序保存在浏览器本地，主页看板同步
- **折叠区**：项目行 `⋯` →「收入折叠区」；折叠项目集中到列表底部，可展开查看，也仍以「折」标记出现在顶部项目目录中
- **项目目录吸顶**：列表顶部显示全部项目胶囊（自动换行、可滚动），当前项目文件夹行固定在目录下方；点胶囊会展开并滚动到对应项目，折叠区项目会先打开折叠区

### 4. 压缩支持
- 压缩后的历史以「压缩前摘要」折叠块展示，默认展开还是折叠可配置
- 「压缩这个节点」可在导图中直接触发会话压缩（需对话环境已挂载压缩服务）

### 5. 搜索与提示
- 关键词搜索会话，快速定位并跳转
- 导图提供加载性能提示：分支越多，加载与渲染越慢；约 7–8 个分支时完整加载渲染可能长达 20 秒

---

## 🚀 安装（一键）

要求：已安装 DSH 且使用 web profile。

```bash
# 通过 npm（推荐）
npm exec -- dsh plugin --profile web add dsh-mindmap-chat

# 或通过 GitHub 仓库
npm exec -- dsh plugin --profile web add https://github.com/DeepVite/dsh-mindmap-chat.git
```

安装后**刷新页面**即可看到效果（桌面客户端如无法刷新，关闭并重新打开窗口）。若 git 安装提示 pnpm 拦截构建脚本，按提示把包名加入 profile 的 `pnpm-workspace.yaml` 的 `allowBuilds` 后再试。

> **实际加载的是 `lib/`**（`package.json` 的 `exports["./client"]` / `main` 分别指向 `lib/client.js` 与 `lib/host.js`）。v0.2.2 的会话看板与运行时改动只在 `lib/` 中维护；`src/` 保留 dynamic-plugin 模块体写法，可能滞后于 `lib/`，未同步本次看板改动。本仓库不提供构建步骤，`lib/` 即产物。

## 🔄 更新

```bash
npm exec -- dsh plugin --profile web update dsh-mindmap-chat
```

---

## 📸 界面预览

- **侧栏**：会话管理树，含组文件夹、分叉标记与运行状态圆点
- **导图**：顶栏「放大」旁点击可打开思维导图画布；点击「提示」可查看加载性能说明
- **对话头部**：「导图视图」与「对话详情」按钮分别打开画布和详情抽屉

---

## 📄 许可证

本项目采用 **Apache License 2.0**，详情见 [LICENSE](LICENSE)。

© 2026 DeepVite · ibronfree@gmail.com
