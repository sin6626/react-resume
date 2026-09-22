import { getResumeContent } from "../content/tool"
import { SinList } from "./common/SinList"

export const SinPraise = () => {
  const content = getResumeContent()
  const praise = content.SinPraise

  const defaultItems: string[] = [
    "第16届蓝桥杯大赛(2025)湖南省软件赛B组C++省二等奖",
    "坚持算法训练, LeetCode累计532题, 覆盖多种常见题型"
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