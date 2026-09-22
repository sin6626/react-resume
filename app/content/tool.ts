import fs from 'fs'
import path from 'path'
import {parse} from 'smol-toml'

export interface ResumeContent {
  SinHeader?: {
    name?: string,
    direction?: string,
    desc?: string,
    github?: string
  }
  // todo 补充其他的模块
}

export const getResumeContent = () => {
  // cwd: current working directory(当前工作目录, 也就是我们的项目目录)
  const filePath = path.join(process.cwd(), 'app/content/resume.toml')
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const obj = parse(fileContent) // soml-toml 提供的 parse方法可以解析toml文件成Ts对象
  
  return obj as ResumeContent
}

