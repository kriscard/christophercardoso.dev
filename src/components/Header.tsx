import React from "react"
import Link from "next/link"
import Image from "next/image"

import logo from "../../public/logo.jpg"

const headerNavLinks = [
  { href: "/about", title: "About" },
  { href: "/blog", title: "Blog" },
  { href: "/projects", title: "Projects" },
]

const Header = () => {
  return (
    <header>
      <div className="flex w-full items-center justify-between text-base leading-5">
        <Link href="/" aria-label={"Christopher Cardoso"}>
          <div className="flex items-center">
            <div className="mr-3">
              <Image
                src={logo}
                alt="Christopher Cardoso"
                width={100}
                height={100}
              />
            </div>
            <div>christopher Cardoso</div>
          </div>
        </Link>

        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-black  sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
