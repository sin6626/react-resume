import { getResumeContent } from "../content/tool"
import { SinList } from "./common/SinList"

export const SinProject = () => {
  const content = getResumeContent()
  const project = content.SinProject
  const projects = project?.projects?.length ? project.projects : [project || {}]

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4">
        <h3 className="font-semibold text-base sm:text-lg">{project?.title || "项目经历/实习经历"}</h3>
        <div className="w-full h-0.5 bg-gray-400 dark:bg-gray-600"></div>
        {projects.map((item, index) => (
          <div className="flex flex-col gap-2" key={item?.projectName || index}>
            <p className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 break-words">
              {item?.projectName || "项目名称"}
            </p>
            <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 break-words leading-relaxed">
              技术栈：{item?.techStack || "Vue3、TypeScript"}
            </p>
            <SinList items={item?.items || []} />
            {item?.link && (
              <a className="text-xs sm:text-sm text-blue-600 hover:underline break-all" href={item.link} target="_blank" rel="noreferrer">
                项目地址：{item.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
