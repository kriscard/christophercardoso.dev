import clsx from "clsx"
import { type ReactNode } from "react"

interface CardProps {
  className?: string
  children?: ReactNode
}
export function Card({ className, children }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-gray-500 bg-transparent shadow-none duration-500 hover:shadow-xl hover:shadow-purple-500/40",
        className
      )}
    >
      {children}
    </div>
  )
}
