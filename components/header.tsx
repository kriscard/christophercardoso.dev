import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../public/logo.png'
import { name } from '@/lib/info'

const headerNavLinks = [
  { href: '/about', title: 'About' },
  { href: '/blog', title: 'Blog' },
  { href: 'https://github.com/kriscard', title: 'Github', target: 'blank' },
]

function Header() {
  return (
    <nav>
      <div className="flex w-full items-center justify-between text-base leading-5 mt-2">
        <Link href="/" aria-label={'Christopher Cardoso'}>
          <div className="flex items-center">
            <div className="mr-3">
              <Image src={logo} alt="Christopher Cardoso" width={30} height={30} />
            </div>
            <div className="font-semibold text-2xl">{name}</div>
          </div>
        </Link>

        <nav className="hidden sm:block">
          {headerNavLinks.map(({ title, href, target }) => (
            <Link key={title} href={href} className="p-1 font-medium  sm:p-4" target={target}>
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  )
}

export default Header
