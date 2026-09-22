import { getResumeContent } from "../content/tool"

export const SinHeader = () => {
  const content = getResumeContent()
  const header = content.SinHeader

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">{header?.name || "冯李宁"}</h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl font-medium">求职方向：{header?.direction || "前端开发日常实习"}</h2>
        <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl break-words leading-relaxed">
          {header?.desc || "湖南工程学院｜软件工程｜本科在读（2024.09 - 至今） | 13319575334 | 3554989283@qq.com | sin6626.me | "}
        </p>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 break-all">github: {header?.github || "github.com/sin6626"}</p>
      </div>
    </>
  )
}