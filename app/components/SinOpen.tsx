import { SinList } from "./common/SinList"

export const SinOpen = () => {
  const items: string[] = [
    "阅读 webadderallorg/Recordly 项目代码并尝试提交 Pull Request，积累真实开源协作流程经验。",
    "持续维护个人网站 sin6626.me，用于展示项目成果与学习记录。"
  ]

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">开源与个人实践</h3>
        <div className="w-200 h-0.5 bg-gray-500"></div>
        <SinList items={items} ></SinList>
      </div>
    </>
  )
}