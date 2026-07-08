"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"

import { headerNavLinks, isNavLinkActive } from "./nav-links"

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex size-touch min-h-touch min-w-touch items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-purple-500/10 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:text-gray-400 dark:hover:bg-purple-400/10 dark:hover:text-purple-300 dark:focus-visible:ring-offset-dark"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-full z-50 mt-2 origin-top rounded-lg border border-gray-300/70 bg-lightGray/95 p-2 shadow-lg shadow-black/5 backdrop-blur dark:border-gray-800 dark:bg-dark/95 dark:shadow-black/20">
          {headerNavLinks.map(({ title, href }) => {
            const isActive = isNavLinkActive(pathname, href)

            return (
              <Link
                key={title}
                href={href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-touch items-center rounded-lg px-3 text-lg text-gray-700 transition-colors hover:bg-purple-500/10 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:text-gray-300 dark:hover:bg-purple-400/10 dark:hover:text-purple-300 dark:focus-visible:ring-offset-dark",
                  isActive && "text-purple-700 dark:text-purple-300"
                )}
              >
                {title}
              </Link>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
