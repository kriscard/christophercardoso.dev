import { ViewTransition } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { format, parseISO } from "date-fns"

import { siteConfig } from "@/lib/config"
import { getAllPosts, getPostBySlug, Post } from "@/lib/posts"
import { calculateReadingTime } from "@/lib/reading-time"
import { MDXContent } from "@/components/mdx-components"
import MdxLayout from "@/components/mdx-layout"

export const dynamicParams = false

export const generateStaticParams = async () =>
  getAllPosts(false).map((post) => ({ slug: post._meta.path }))

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
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

function getPostTags(tag: Post["tag"]) {
  return Array.isArray(tag) ? tag : [tag]
}

const PostLayout = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const readingTime = calculateReadingTime(post.content)
  const tags = getPostTags(post.tag)

  return (
    <article className="py-8 md:py-16">
      <Link
        href="/blog"
        className="focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark mb-8 inline-flex min-h-touch items-center rounded-lg text-sm text-gray-600 transition-colors hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 dark:text-gray-400 dark:hover:text-purple-300 md:mb-10"
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
          name={`post-title-${params.slug}`}
          share="text-morph"
          default="none"
        >
          <h1 className="text-wrap font-heading text-[2rem] font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-50 md:text-6xl">
            {post.title}
          </h1>
        </ViewTransition>
        <p className="text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg md:leading-relaxed">
          {post.summary}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>
            Published {format(parseISO(post.date), "MMM d, yyyy")}
          </time>
          <span>{readingTime} min read</span>
        </div>
      </header>

      <MdxLayout>
        <MDXContent source={post.content} />
      </MdxLayout>
    </article>
  )
}

export default PostLayout
