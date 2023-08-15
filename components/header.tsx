import Image from "next/image"
import Link from "next/link"

import { name } from "@/lib/info"
import ThemeSwitch from "@/components/theme-switch"

import logo from "../public/logo.png"

const headerNavLinks = [
  { href: "/about", title: "About" },
  { href: "/blog", title: "Blog" },
  { href: "https://github.com/kriscard", title: "Github", target: "blank" },
]

function Header() {
  return (
    <nav className="mx-auto w-full max-w-4xl pt-5">
      <div className="flex w-full items-center justify-between leading-5">
        <div className="hidden md:block">
          <Link href="/" aria-label={"Christopher Cardoso"}>
            <div className="flex items-center">
              <div className="mr-3">
                <Image
                  src={logo}
                  alt="Christopher Cardoso"
                  width={40}
                  height={40}
                />
              </div>
              <div className="font-heading text-2xl">{name}</div>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-3 md:gap-0">
          <>
            {headerNavLinks.map(({ title, href, target }) => (
              <Link
                key={title}
                href={href}
                className="p-1 text-xl md:p-4 lg:text-lg "
                target={target}
              >
                {title}
              </Link>
            ))}
          </>
          <div className="p-1 sm:p-4">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
