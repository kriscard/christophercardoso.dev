import { Inter as FontMono } from "next/font/google"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/global.css"

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})
const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: {
    default: "Christopher Cardoso",
    template: "%s | Christopher Cardoso",
  },
  description: "A software developer who loves to build things",
  authors: [
    {
      name: "Christopher Cardoso",
      url: "https://christophercardoso.dev",
    },
  ],
  creator: "Christopher Cardoso",
  keywords: [
    "Christopher Cardoso",
    "Christopher",
    "Cardoso",
    "full stack developer",
    "software developer",
    "web developer",
    "frontend developer",
    "backend developer",
    "fullstack developer",
  ],
  openGraph: {
    title: "Christopher Cardoso",
    description: "A software developer who loves to build things",
    url: "https://christophercardoso.dev",
    type: "website",
    siteName: "Christopher Cardoso",
    locale: "en_US",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    title: "Christopher Cardoso",
    card: "summary_large_image",
    description: "A software developer who loves to build things",
    creator: "@kris_card",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark h-full scroll-smooth",
        fontHeading.variable,
        fontMono.variable
      )}
    >
      <body className="flex min-h-screen flex-col bg-lightGray p-4 text-black dark:bg-dark dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="mt-5 w-full max-w-4xl antialiased lg:mx-auto">
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
