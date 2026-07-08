"use client"

import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const headerNavLinks: { href: Route; title: string }[] = [
  { href: "/about", title: "About" },
  { href: "/blog", title: "Blog" },
  { href: "/projects", title: "Projects" },
  { href: "/uses", title: "Uses" },
]

export function NavLinks() {
  const pathname = usePathname()

  return (
    <div className="flex items-center">
      {headerNavLinks.map(({ title, href }) => {
        const isActive = pathname === href || pathname.startsWith(`${href}/`)

        return (
          <Link
            key={title}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex min-h-touch items-center whitespace-nowrap rounded-lg px-2 text-sm transition-colors duration-200 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:hover:text-purple-300 dark:focus-visible:ring-offset-dark sm:px-3 sm:text-base md:px-4 md:text-lg",
              isActive && "text-purple-700 dark:text-purple-300"
            )}
          >
            {title}
          </Link>
        )
      })}
    </div>
  )
}
