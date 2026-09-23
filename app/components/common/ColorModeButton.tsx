"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState, type MouseEvent } from "react"

type Theme = "light" | "dark"
type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> }
}

const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark")
  document.documentElement.style.colorScheme = theme
  localStorage.setItem("theme", theme)
}

export const ColorModeButton = () => {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const initialTheme: Theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

    applyTheme(initialTheme)
    const frame = requestAnimationFrame(() => setTheme(initialTheme))
    return () => cancelAnimationFrame(frame)
  }, [])

  if (!theme) return <span className="block size-8" aria-hidden="true" />

  const nextTheme: Theme = theme === "dark" ? "light" : "dark"

  const switchTheme = () => {
    applyTheme(nextTheme)
    setTheme(nextTheme)
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const transitionDocument = document as ViewTransitionDocument

    if (!transitionDocument.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      switchTheme()
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )
    const root = document.documentElement
    const transitionClass = "sinui-theme-reveal-expand"

    root.style.setProperty("--sinui-theme-transition-x", `${x}px`)
    root.style.setProperty("--sinui-theme-transition-y", `${y}px`)
    root.style.setProperty("--sinui-theme-transition-radius", `${endRadius}px`)
    root.classList.add(transitionClass)

    const transition = transitionDocument.startViewTransition(switchTheme)
    transition.finished.finally(() => {
      root.classList.remove(transitionClass)
      root.style.removeProperty("--sinui-theme-transition-x")
      root.style.removeProperty("--sinui-theme-transition-y")
      root.style.removeProperty("--sinui-theme-transition-radius")
    })
  }

  const Icon = nextTheme === "dark" ? Sun : Moon

  return (
    <button
      type="button"
      className="flex size-8 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
      aria-label={`切换到${nextTheme === "dark" ? "暗色" : "亮色"}模式`}
      title={`切换到${nextTheme === "dark" ? "暗色" : "亮色"}模式`}
      onClick={handleClick}
    >
      {/* 动态组件变量，可以动态变为Sun和Moon组件 */}
      <Icon className="size-5" aria-hidden="true" />
    </button>
  )
}
