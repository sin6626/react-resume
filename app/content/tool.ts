import fs from 'fs'
import path from 'path'
import { parse } from 'smol-toml'

export interface ResumeHeader {
  name?: string
  direction?: string
  desc?: string
  github?: string
}

export interface ResumeEducation {
  title?: string
  content?: string
}

export interface ResumeSectionWithItems {
  title?: string
  items?: string[]
}

export interface ResumeProject {
  title?: string
  projectName?: string
  techStack?: string
  items?: string[]
}

export interface ResumeContent {
  SinHeader?: ResumeHeader
  SinEducation?: ResumeEducation
  SinPraise?: ResumeSectionWithItems
  SinTechnicalStack?: ResumeSectionWithItems
  SinProject?: ResumeProject
  SinOpen?: ResumeSectionWithItems
  SinEvaluation?: ResumeSectionWithItems
}

export const getResumeContent = (): ResumeContent => {
  try {
    const resumePath = path.join(process.cwd(), 'app/content/resume.toml')
    const examplePath = path.join(process.cwd(), 'app/content/resume.example.toml')

    let targetPath = ''
    if (fs.existsSync(resumePath)) {
      targetPath = resumePath
    } else if (fs.existsSync(examplePath)) {
      targetPath = examplePath
    } else {
      return {}
    }

    const fileContent = fs.readFileSync(targetPath, 'utf-8')
    const obj = parse(fileContent)
    return (obj as unknown as ResumeContent) || {}
  } catch (error) {
    console.error('读取或解析简历 TOML 失败，已降级为空数据:', error)
    return {}
  }
}
