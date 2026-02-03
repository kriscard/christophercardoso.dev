import { type ReactNode } from "react"
import clsx from "clsx"

interface CardProps {
  className?: string
  children?: ReactNode
}
export function Card({ className, children }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg border transition-[border-color,background-color,box-shadow] duration-200",
        // Light mode
        "border-gray-300/60 bg-white/60 shadow-sm",
        "hover:border-purple-400/70 hover:bg-white/80 hover:shadow-md hover:shadow-purple-200/20",
        // Dark mode
        "dark:border-gray-700/50 dark:bg-gray-800/50 dark:shadow-lg dark:shadow-black/20",
        "dark:hover:border-purple-500/50 dark:hover:shadow-xl dark:hover:shadow-purple-500/10",
        // Focus
        "focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-500/60",
        className
      )}
    >
      {children}
    </div>
  )
}
