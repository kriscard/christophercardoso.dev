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
      className="relative inline-flex h-10 w-10 items-center justify-center cursor-pointer text-gray-600 focus:outline-none dark:text-gray-400"
      disabled={!mounted}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      {mounted ? (
        resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />
      ) : (
        <div className="h-5 w-5" />
      )}
    </button>
  )
}
