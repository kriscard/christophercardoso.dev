import './global.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Providers } from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className='dark h-full scroll-smooth'>
      <Providers>
        <body className="bg-lightGray text-black dark:bg-dark dark:text-white min-h-screen flex flex-col">
          <Header />
          <main className='max-w-4xl w-full antialiased lg:mx-auto'>{children}</main>
          <Footer />
        </body>
      </Providers>
    </html >
  )
}
