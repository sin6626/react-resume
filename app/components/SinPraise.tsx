import { getResumeContent } from "../content/tool"
import { SinList } from "./common/SinList"

export const SinPraise = () => {
  const content = getResumeContent()
  const praise = content.SinPraise

  const defaultItems: string[] = [
    "示例奖项或竞赛经历。",
    "示例学习成果或补充信息。"
  ]

  const items = (praise?.items && praise.items.length > 0) ? praise.items : defaultItems

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4">
        <h3 className="font-semibold text-base sm:text-lg">{praise?.title || "获奖与补充信息"}</h3>
        <div className="w-full h-0.5 bg-gray-400 dark:bg-gray-600"></div>
        <SinList items={items} />
      </div>
    </>
  )
}
