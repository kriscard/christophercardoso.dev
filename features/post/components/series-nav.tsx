import type { Route } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface SeriesNavProps {
  series: string
  current: number
  parts: { title: string; href: Route }[]
  className?: string
}

export function SeriesNav({
  series,
  current,
  parts,
  className,
}: SeriesNavProps) {
  return (
    <nav
      aria-label={`${series} series`}
      className={cn(
        "my-8 rounded-lg border border-gray-200 p-4",
        "dark:border-ctp-surface1 dark:bg-ctp-surface0/30",
        className
      )}
    >
      <p className="mb-3 text-sm font-medium text-gray-500 dark:text-ctp-subtext0">
        {series} ({current} of {parts.length})
      </p>
      <ol className="space-y-2">
        {parts.map((part, i) => {
          const isCurrent = i + 1 === current
          return (
            <li key={part.href} className="flex items-center gap-2">
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                  isCurrent
                    ? "bg-purple-600 text-white dark:bg-ctp-blue dark:text-ctp-base"
                    : "bg-gray-100 text-gray-600 dark:bg-ctp-surface1 dark:text-ctp-subtext0"
                )}
              >
                {i + 1}
              </span>
              {isCurrent ? (
                <span className="font-medium text-gray-900 dark:text-ctp-text">
                  {part.title}
                </span>
              ) : (
                <Link
                  href={part.href}
                  className="text-gray-600 hover:text-purple-600 dark:text-ctp-subtext0 dark:hover:text-ctp-blue"
                >
                  {part.title}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
