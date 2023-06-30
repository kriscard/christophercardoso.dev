import Image from 'next/image'
import Link from 'next/link'

import { name } from '@/lib/info'
import logo from '../public/logo.png'
import ThemeSwitch from '@/components/theme-switch'

const headerNavLinks = [
  { href: '/about', title: 'About' },
  { href: '/blog', title: 'Blog' },
  { href: 'https://github.com/kriscard', title: 'Github', target: 'blank' },
]

function Header() {
  return (
    <nav className='mx-auto w-full max-w-4xl pt-5'>
      <div className="flex w-full items-center justify-between text-base leading-5 ">
        <Link href="/" aria-label={'Christopher Cardoso'}>
          <div className="flex items-center">
            <div className="mr-3">
              <Image src={logo} alt="Christopher Cardoso" width={30} height={30} />
            </div>
            <div className="font-semibold text-2xl">{name}</div>
          </div>
        </Link>
        <div className='flex items-center'>
          <div className="hidden sm:block">
            {headerNavLinks.map(({ title, href, target }) => (
              <Link key={title} href={href} className="p-1 font-medium  sm:p-4" target={target}>
                {title}
              </Link>
            ))}
          </div>
          <div className="p-1 sm:p-4">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
