import { getResumeContent } from "../content/tool"
import { SinList } from "./common/SinList"

export const SinTechnicalStack = () => {
  const content = getResumeContent()
  const tech = content.SinTechnicalStack

  const defaultItems: string[] = [
    "熟悉 JavaScript、ES6+，了解 TypeScript 基础，能够处理常见前端交互与异步逻辑。",
    "熟悉 Vue3 生态，能够使用 Vue Router、Pinia、Element Plus 开发中后台与数据展示类页面。",
    "熟悉 Vite、Axios、ECharts，具备接口联调、图表可视化与基础前端工程化能力。",
    "了解 Node.js、Express、MySQL、MQTT、WebSocket，能够参与实时数据类系统开发与前后端联调。",
    "日常使用 Codex 等 AI 编程工具辅助代码实现、调试排错与文档整理，能够利用 AI 工具提升开发效率。"
  ]

  const items = (tech?.items && tech.items.length > 0) ? tech.items : defaultItems

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4">
        <h3 className="font-semibold text-base sm:text-lg">{tech?.title || "技术栈"}</h3>
        <div className="w-full h-0.5 bg-gray-400 dark:bg-gray-600"></div>
        <SinList items={items} />
      </div>
    </>
  )
}