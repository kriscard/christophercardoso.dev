import type { Metadata } from "next"

import { siteConfig } from "@/lib/config"
import { BlogIndex } from "@/features/post/components/blog-index"

const description =
  "Articles by Christopher Cardoso about frontend engineering, terminal workflows, dotfiles, and developer tools."

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: {
    canonical: new URL("/blog", siteConfig.url).toString(),
  },
  openGraph: {
    title: "Blog by Christopher Cardoso",
    description,
    url: new URL("/blog", siteConfig.url).toString(),
    type: "website",
  },
  twitter: {
    title: "Blog by Christopher Cardoso",
    description,
    card: "summary_large_image",
  },
}

export default function BlogPage({ searchParams }: PageProps<"/blog">) {
  return (
    <div className="mx-auto max-w-5xl py-8 md:py-12">
      <header className="mb-8 border-b border-gray-200/80 pb-10 pt-4 dark:border-ctp-surface0/80 md:mb-10 md:pb-12 md:pt-8">
        <h1 className="font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-gray-950 dark:text-ctp-text md:text-7xl">
          Articles
        </h1>
        <p className="mt-6 w-full text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Notes on frontend engineering, terminal workflows, and the tools I use
          to build software.
        </p>
      </header>

      {searchParams.then((sp) => (
        <BlogIndex tag={sp.tag} q={sp.q} />
      ))}
    </div>
  )
}
