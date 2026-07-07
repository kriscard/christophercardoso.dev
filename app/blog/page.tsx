import type { Metadata } from "next"

import { siteConfig } from "@/lib/config"
import { BlogIndex } from "@/features/post/components/blog-index"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Discover my latest articles and thoughts on software development",
  alternates: {
    canonical: new URL("/blog", siteConfig.url).toString(),
  },
}

export default function BlogPage({ searchParams }: PageProps<"/blog">) {
  return (
    <div className="py-10 md:py-16">
      <header className="mb-8 max-w-3xl md:mb-10">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Articles
        </h1>
        <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-gray-700 dark:text-gray-300">
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
