import { Suspense } from "react"
import type { Metadata } from "next"

import { siteConfig } from "@/lib/config"
import {
  BlogIndex,
  BlogIndexSkeleton,
} from "@/features/post/components/blog-index"
import { PageHeader } from "@/components/page-header"

const description = siteConfig.blogDescription

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: {
    canonical: new URL("/blog", siteConfig.url).toString(),
  },
  openGraph: {
    title: `Blog by ${siteConfig.name}`,
    description,
    url: new URL("/blog", siteConfig.url).toString(),
    type: "website",
  },
  twitter: {
    title: `Blog by ${siteConfig.name}`,
    description,
    card: "summary_large_image",
  },
}

export default function BlogPage({ searchParams }: PageProps<"/blog">) {
  return (
    <div className="mx-auto max-w-5xl py-8 md:py-12">
      <PageHeader title="Articles" className="mb-8 md:mb-10">
        Notes on frontend engineering, terminal workflows, and the tools I use
        to build software.
      </PageHeader>

      <Suspense fallback={<BlogIndexSkeleton />}>
        {searchParams.then((sp) => (
          <BlogIndex tag={sp.tag} q={sp.q} />
        ))}
      </Suspense>
    </div>
  )
}
