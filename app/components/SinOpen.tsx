import { getResumeContent } from "../content/tool"
import { SinList } from "./common/SinList"

export const SinOpen = () => {
  const content = getResumeContent()
  const open = content.SinOpen

  const defaultItems: string[] = [
    "参与开源项目并积累协作流程经验。",
    "持续维护个人技术博客与独立作品。"
  ]

  const items = (open?.items && open.items.length > 0) ? open.items : defaultItems

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4">
        <h3 className="font-semibold text-base sm:text-lg">{open?.title || "开源与个人实践"}</h3>
        <div className="w-full h-0.5 bg-gray-400 dark:bg-gray-600"></div>
        <SinList items={items} />
      </div>
    </>
  )
}
