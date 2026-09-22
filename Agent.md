<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 项目文档：react-resume

## 1. 项目简介
基于 Next.js (App Router) + React 19 + Tailwind CSS 4 构建的个人简历项目。支持通过本地 TOML 配置文件进行数据驱动渲染，并具备完全的无配置容错能力。

## 2. 目录架构与数据层设计
- `app/content/resume.toml`: 本地真实简历数据文件（建议在 `.gitignore` 中忽略，防止隐私泄露）。
- `app/content/resume.example.toml`: 开源示例与模板数据文件（提供给开源仓库展示和克隆后的使用者参考）。
- `app/content/tool.ts`: 数据加载工具模块。负责读取并解析 TOML 数据（`getResumeContent()`），具备多层容错机制：
  1. 优先尝试读取 `resume.toml`；
  2. 若不存在，降级读取 `resume.example.toml`；
  3. 若两者均不存在或解析失败，安全返回 `{}`，防止构建与服务端渲染崩溃。
- `app/components/`: 包含各个简历板块组件（`SinHeader`, `SinEducation`, `SinPraise`, `SinTechnicalStack`, `SinProject`, `SinOpen`, `SinEvaluation` 等）。每个组件均必须使用可选链和 `||` 运算符定义兜底默认数据。

## 3. 开发与维护规范
- **数据驱动**：新添加的简历模块或字段需在 `app/content/tool.ts` 的 `ResumeContent` 中声明类型，并同步更新 `resume.toml` 与 `resume.example.toml`。
- **容错要求**：所有组件在消费 TOML 数据时，必须保留默认值兜底（`||` 操作符），保证在无数据配置下页面正常渲染。
- **Git 提交**：严格遵守 Conventional Commits 规范，提交描述信息必须使用中文。

