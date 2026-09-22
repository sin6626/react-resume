import { getResumeContent } from "../content/tool"

export const SinHeader = () => {
  const content = getResumeContent()
  const header = content.SinHeader

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-6xl font-bold">{header?.name || "冯李宁"}</h1>
        <h2 className="text-4xl font-medium">求职方向：{header?.direction || "前端开发日常实习"}</h2>
        <p>{header?.desc || "湖南工程学院｜软件工程｜本科在读（2024.09 - 至今） | 13319575334 | 3554989283@qq.com | sin6626.me | "}</p>
        <p>github: {header?.github || "github.com/sin6626"}</p>
      </div>
    </>
  )
}