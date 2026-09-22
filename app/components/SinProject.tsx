import { getResumeContent } from "../content/tool"
import { SinList } from "./common/SinList"

export const SinProject = () => {
  const content = getResumeContent()
  const project = content.SinProject

  const defaultItems: string[] = [
    "面向比赛/课程场景开发生鲜储运系统应用层，完成实时监测、历史查询、异常展示、远程控制等核心功能。",
    "完成实时监测页面开发，采用 HTTP 首次拉取 + WebSocket 增量推送的方式更新设备状态与传感器数据。",
    "基于 ECharts 实现温度、光照等实时/历史趋势图表展示，支持按设备切换、按时间查询和分钟级数据更新。",
    "完成指令控制页面开发，支持全局与单设备参数配置、时间同步、控制项动态渲染，并配合后端接口实现远程操作。",
    "参与后端接口与数据流实现，基于 Express + MySQL + MQTT 完成设备数据接入、存储、查询与指令下发。"
  ]

  const items = (project?.items && project.items.length > 0) ? project.items : defaultItems

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4">
        <h3 className="font-semibold text-base sm:text-lg">{project?.title || "项目经历/实习经历"}</h3>
        <div className="w-full h-0.5 bg-gray-400 dark:bg-gray-600"></div>
        <p className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 break-words">
          {project?.projectName || "基于物联网的生鲜品储运监测与控制系统｜应用层前后端独立负责"}
        </p>
        <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 break-words leading-relaxed">
          技术栈：{project?.techStack || "Vue3、Vite、Element Plus、ECharts、Pinia、Node.js、Express、MySQL、MQTT、WebSocket"}
        </p>
        <SinList items={items} />
      </div>
    </>
  )
}