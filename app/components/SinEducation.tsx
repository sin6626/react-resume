import { getResumeContent } from "../content/tool"

export const SinEducation = () => {
  const content = getResumeContent()
  const education = content.SinEducation

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">{education?.title || "教育经历"}</h3>
        <div className="w-200 h-0.5 bg-gray-500"></div>
        <p>{education?.content || "湖南工程学院 软件工程专业，本科在读"}</p>
      </div>
    </>
  )
}