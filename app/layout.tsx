import { Lora as FontHeading, DM_Mono as FontMono } from 'next/font/google'

import Footer from '@/components/footer'
import Header from '@/components/header'
import './global.css'
import { Providers } from './providers'
import { cn } from '@/lib/utils'

const fontHeading = FontHeading({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-heading',
})

const fontMono = FontMono({
  weight: ["300", "400", "500"],
  subsets: ['latin'],
  variable: '--font-mono',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark h-full scroll-smooth", fontHeading.variable, fontMono.variable)}>
      <Providers>
        <body className="bg-lightGray p-4 text-black dark:bg-dark dark:text-white min-h-screen flex flex-col">
          <Header />
          <main className='max-w-4xl w-full antialiased lg:mx-auto'>{children}</main>
          <Footer />
        </body>
      </Providers>
    </html >
  )
}
