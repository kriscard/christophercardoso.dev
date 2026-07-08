"use client"

import type { Route } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export const headerNavLinks: { href: Route; title: string }[] = [
  { href: "/about", title: "About" },
  { href: "/blog", title: "Blog" },
  { href: "/projects", title: "Projects" },
  { href: "/uses", title: "Uses" },
]

export function isNavLinkActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function NavLinks() {
  const pathname = usePathname()

  return (
    <div className="hidden items-center sm:flex md:gap-0">
      {headerNavLinks.map(({ title, href }) => {
        const isActive = isNavLinkActive(pathname, href)

        return (
          <Link
            key={title}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex min-h-touch items-center rounded-lg px-3 text-lg transition-colors hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:hover:text-purple-300 dark:focus-visible:ring-offset-dark md:px-4",
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
