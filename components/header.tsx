import Image from "next/image"
import Link from "next/link"

import { name } from "@/lib/info"

import logo from "../public/logo.png"
import { MobileNav } from "./mobile-nav"
import { NavLinks } from "./nav-links"
import { ThemeSwitch } from "./theme-switch"

export function Header() {
  return (
    <nav className="view-transition-persistent-nav relative mx-auto w-full max-w-4xl pt-5">
      <div className="flex w-full items-center justify-between gap-3 leading-5">
        <div className="shrink-0">
          <Link
            href="/"
            aria-label="Christopher Cardoso"
            className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark"
          >
            <div className="flex items-center">
              <div className="mr-3">
                <Image
                  src={logo}
                  alt="Christopher Cardoso"
                  width={40}
                  height={40}
                />
              </div>
              <div className="hidden font-heading text-2xl md:block">
                {name}
              </div>
            </div>
          </Link>
        </div>
        <div className="flex min-w-0 items-center gap-1 sm:gap-2 md:gap-0">
          <NavLinks />
          <div className="p-1 sm:p-4">
            <ThemeSwitch />
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}
