import { getResumeContent } from "../content/tool"


export const SinHeader = () => {
  const content = getResumeContent()
  // console.log(content);
  

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-6xl font-bold">{content.SinHeader?.name}</h1>
        <h2 className="text-4xl font-medium">求职方向：{content.SinHeader?.direction}</h2>
        <p>{content.SinHeader?.desc}</p>
        <p>github: {content.SinHeader?.github}</p>
      </div>
    </>
  )
}