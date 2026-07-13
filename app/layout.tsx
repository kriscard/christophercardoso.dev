import type { Metadata } from "next"
import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"

import { siteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/global.css"

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      sameAs: [
        siteConfig.social.twitter,
        siteConfig.social.github,
        siteConfig.social.linkedin,
      ],
      jobTitle: "Software Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressCountry: "CA",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Blog",
      "@id": `${siteConfig.url}/blog#blog`,
      name: `${siteConfig.name} Blog`,
      url: `${siteConfig.url}/blog`,
      description: siteConfig.blogDescription,
      author: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
}

function serializeStructuredData(data: typeof structuredData) {
  return JSON.stringify(data).replace(/[<>&\u2028\u2029]/g, (character) => {
    switch (character) {
      case "<":
        return "\\u003c"
      case ">":
        return "\\u003e"
      case "&":
        return "\\u0026"
      case "\u2028":
        return "\\u2028"
      case "\u2029":
        return "\\u2029"
      default:
        return character
    }
  })
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  keywords: [
    siteConfig.name,
    "Christopher",
    "Cardoso",
    "full stack developer",
    "software developer",
    "web developer",
    "frontend developer",
    "backend developer",
    "fullstack developer",
    "developer blog",
    "dotfiles",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
  },
  robots: {
    index: true,
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
    title: siteConfig.name,
    card: "summary_large_image",
    description: siteConfig.description,
    creator: siteConfig.social.twitterHandle,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full scroll-smooth",
        fontHeading.variable,
        fontSans.variable,
        fontMono.variable
      )}
    >
      <body className="relative flex min-h-dvh flex-col overflow-x-hidden bg-lightGray p-4 text-gray-900 antialiased dark:bg-dark dark:text-ctp-text">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: serializeStructuredData(structuredData),
            }}
          />
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-50 -translate-y-24 rounded-lg bg-lightGray px-4 py-3 text-sm font-medium text-gray-900 shadow-lg transition-transform focus-visible:translate-y-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500/70 dark:bg-ctp-mantle dark:text-ctp-text"
          >
            Skip to main content
          </a>
          <Header />
          <main
            id="main-content"
            tabIndex={-1}
            className="relative z-10 mx-auto mt-6 w-full max-w-6xl px-5 sm:px-8 md:px-10 focus:outline-none"
          >
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
