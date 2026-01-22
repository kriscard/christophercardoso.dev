"use client"

import { useTheme } from "next-themes"

import { useMounted } from "@/lib/hooks/use-mounted"
import { MoonIcon, SunIcon } from "./icons"

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex size-10 cursor-pointer items-center justify-center border-none bg-transparent text-gray-600 focus:outline-none dark:text-gray-400"
      disabled={!mounted}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      {mounted ? (
        resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />
      ) : (
        <div className="size-5" />
      )}
    </button>
  )
}
