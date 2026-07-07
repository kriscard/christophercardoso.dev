import { ViewTransition } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { siteConfig } from "@/lib/config"
import { calculateReadingTime } from "@/lib/reading-time"
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getPostTags,
} from "@/features/post/post-queries"
import { MDXContent } from "@/components/mdx-components"
import MdxLayout from "@/components/mdx-layout"

export const dynamicParams = false

export const generateStaticParams = async () =>
  getAllPosts(false).map((post) => ({ slug: post._meta.path }))

export const generateMetadata = async (
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> => {
  const params = await props.params
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const { title, summary: description, date: publishedTime, ogImage } = post

  const ogUrl = new URL("/api/og", siteConfig.url)
  ogUrl.searchParams.set("title", title)

  const imageUrl = ogImage
    ? new URL(ogImage, siteConfig.url).toString()
    : ogUrl.toString()
  const postUrl = new URL(`/blog/${params.slug}`, siteConfig.url).toString()

  return {
    title,
    description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: postUrl,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: [imageUrl],
    },
  }
}

export default function PostPage({ params }: PageProps<"/blog/[slug]">) {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug)
    if (!post) notFound()

    const readingTime = calculateReadingTime(post.content)
    const tags = getPostTags(post.tag)

    return (
      <article className="py-10 md:py-16">
        <Link
          href="/blog"
          className="mb-8 inline-flex min-h-touch items-center rounded-lg text-sm text-gray-600 transition-colors hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:text-gray-400 dark:hover:text-purple-300 dark:focus-visible:ring-offset-dark md:mb-10"
        >
          Back to articles
        </Link>

        <header className="mb-8 max-w-3xl space-y-4 md:mb-12 md:space-y-5">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-purple-500/30 px-3 py-1 text-xs text-purple-700 dark:text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <ViewTransition
            name={`post-title-${slug}`}
            share="text-morph"
            default="none"
          >
            <h1 className="text-balance font-heading text-[2rem] font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-50 md:text-6xl">
              {post.title}
            </h1>
          </ViewTransition>
          <p className="text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg md:leading-relaxed">
            {post.summary}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>
              Published {formatPostDate(post.date)}
            </time>
            <span>{readingTime} min read</span>
          </div>
        </header>

        <MdxLayout>
          <MDXContent source={post.content} />
        </MdxLayout>
      </article>
    )
  })
}
