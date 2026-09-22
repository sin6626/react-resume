import { getResumeContent } from "../content/tool"
import { SinList } from "./common/SinList"

export const SinEvaluation = () => {
  const content = getResumeContent()
  const evaluation = content.SinEvaluation

  const defaultItems: string[] = [
    "主攻前端方向，具备基础全栈协作能力，对实时数据展示、业务系统和可视化场景有较强兴趣。",
    "能够独立完成中小型项目页面开发、接口联调与基础后端配合，适合日常实习场景下快速上手。"
  ]

  const items = (evaluation?.items && evaluation.items.length > 0) ? evaluation.items : defaultItems

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">{evaluation?.title || "个人评价"}</h3>
        <div className="w-200 h-0.5 bg-gray-500"></div>
        <SinList items={items} />
      </div>
    </>
  )
}