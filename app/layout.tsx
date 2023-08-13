import { PT_Sans as FontHeading } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Analytics } from '@/components/analytics'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/global.css'
import { Providers } from './providers'

const fontHeading = FontHeading({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-heading',
})

export const metadata = {
  title: {
    default: 'Christopher Cardoso',
    template: '%s | Christopher Cardoso',
  },
  description: 'A software developer who loves to build things',
  authors: [
    {
      name: 'Christopher Cardoso',
      url: 'https://christophercardoso.dev',
    },
  ],
  creator: 'Christopher Cardoso',
  keywords: [
    'Christopher Cardoso',
    'Christopher',
    'Cardoso',
    'full stack developer',
    'software developer',
    'web developer',
    'frontend developer',
    'backend developer',
    'fullstack developer',
  ],
  openGraph: {
    title: 'Christopher Cardoso',
    description: 'A software developer who loves to build things',
    url: 'https://christophercardoso.dev',
    type: 'website',
    siteName: 'Christopher Cardoso',
    locale: 'en_US',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  twitter: {
    title: 'Christopher Cardoso',
    card: 'summary_large_image',
    description: 'A software developer who loves to build things',
    creator: '@kris_card',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn('dark h-full scroll-smooth', fontHeading.variable)}>
      <Providers>
        <body className="flex min-h-screen flex-col bg-lightGray p-4 text-black dark:bg-dark dark:text-white">
          <Header />
          <main className="mt-5 w-full max-w-4xl antialiased lg:mx-auto">
            {children}
            <Analytics />
          </main>
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
