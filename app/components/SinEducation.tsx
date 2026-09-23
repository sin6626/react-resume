import { getResumeContent } from "../content/tool"

export const SinEducation = () => {
  const content = getResumeContent()
  const education = content.SinEducation

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4">
        <h3 className="font-semibold text-base sm:text-lg">{education?.title || "教育经历"}</h3>
        <div className="w-full h-0.5 bg-gray-400 dark:bg-gray-600"></div>
        <p className="text-sm sm:text-base leading-relaxed break-words">{education?.content || "示例大学 计算机相关专业，本科在读"}</p>
      </div>
    </>
  )
}
