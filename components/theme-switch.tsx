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
      className="relative inline-flex size-touch min-h-touch min-w-touch cursor-pointer items-center justify-center rounded-lg border-none bg-transparent text-gray-600 transition-colors hover:bg-purple-500/10 hover:text-purple-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:text-gray-400 dark:hover:bg-purple-400/10 dark:hover:text-purple-300 dark:focus-visible:ring-offset-dark"
      disabled={!mounted}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      {mounted ? (
        resolvedTheme === "dark" ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )
      ) : (
        <div className="size-5" />
      )}
    </button>
  )
}
