import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../public/logo.png'

const headerNavLinks = [
  { href: '/about', title: 'About' },
  { href: '/blog', title: 'Blog' },
  { href: '/projects', title: 'Projects' },
]

function Header() {
  return (
    <div>
      <div className="flex w-full items-center justify-between text-base leading-5">
        <Link href="/" aria-label={'Christopher Cardoso'}>
          <div className="flex items-center">
            <div className="mr-3">
              <Image src={logo} alt="Christopher Cardoso" width={30} height={30} />
            </div>
            <div className="font-medium">Christopher Cardoso</div>
          </div>
        </Link>

        <nav className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href} className="p-1 font-medium  sm:p-4">
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Header
