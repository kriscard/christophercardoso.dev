import './global.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={'bg-white text-black dark:bg-dark dark:text-white'}>
      <body className="mx-4 mt-2 flex max-w-4xl flex-col antialiased lg:mx-auto min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
