import Link from "next/link"

import { cn } from "@/lib/utils"

interface SeriesNavProps {
  series: string
  current: number
  parts: { title: string; href: string }[]
  className?: string
}

export function SeriesNav({ series, current, parts, className }: SeriesNavProps) {
  return (
    <nav
      className={cn(
        "my-8 rounded-lg border border-gray-200 p-4",
        "dark:border-[#494d64] dark:bg-[#363a4f]/30",
        className
      )}
    >
      <p className="mb-3 text-sm font-medium text-gray-500 dark:text-[#a5adcb]">
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
                    ? "bg-purple-600 text-white dark:bg-[#8aadf4] dark:text-[#24273a]"
                    : "bg-gray-100 text-gray-600 dark:bg-[#494d64] dark:text-[#a5adcb]"
                )}
              >
                {i + 1}
              </span>
              {isCurrent ? (
                <span className="font-medium text-gray-900 dark:text-[#cad3f5]">
                  {part.title}
                </span>
              ) : (
                <Link
                  href={part.href}
                  className="text-gray-600 hover:text-purple-600 dark:text-[#a5adcb] dark:hover:text-[#8aadf4]"
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
