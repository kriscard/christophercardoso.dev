import { ViewTransition } from "react"
import type { Metadata, Route } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { siteConfig } from "@/lib/config"
import { calculateReadingTime } from "@/lib/reading-time"
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getPostTags,
  getSeriesPosts,
} from "@/features/post/post-queries"
import { createBlogHref } from "@/features/post/components/blog-index"
import { SeriesNav } from "@/features/post/components/series-nav"
import { MDXContent } from "@/components/mdx-components"
import MdxLayout from "@/components/mdx-layout"

export const dynamicParams = false

export const generateStaticParams = async () =>
  getAllPosts().map((post) => ({ slug: post._meta.path }))

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
    const seriesPosts = post.series ? getSeriesPosts(post.series) : []
    const isPublishedSeriesPart = seriesPosts.some(
      (seriesPost) => seriesPost.slug === post.slug
    )

    return (
      <article className="mx-auto max-w-4xl py-8 md:py-12">
        <Link
          href="/blog"
          className="mb-8 inline-flex min-h-touch items-center rounded-lg text-sm text-gray-600 transition-colors hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:text-gray-400 dark:hover:text-purple-300 dark:focus-visible:ring-offset-dark md:mb-10"
        >
          Back to articles
        </Link>

        <header className="mb-8 max-w-3xl md:mb-10">
          <p className="font-mono text-xs text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            {" · "}
            {readingTime} min read
            {post.draft && (
              <span className="ml-2 rounded bg-amber-500/15 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400">
                draft
              </span>
            )}
          </p>
          <ViewTransition
            name={`post-title-${slug}`}
            share="text-morph"
            default="none"
          >
            <h1 className="mt-4 text-balance font-heading text-[2rem] font-bold leading-tight tracking-tight text-gray-900 dark:text-ctp-text md:text-5xl">
              {post.title}
            </h1>
          </ViewTransition>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg">
            {post.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={createBlogHref({ tag })}
                className="rounded-full border border-purple-500/40 px-3 py-1 text-sm text-purple-700 transition-colors hover:border-purple-500 hover:bg-purple-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 dark:border-purple-300/40 dark:text-purple-300 dark:hover:border-purple-300 dark:hover:bg-purple-300/10"
              >
                {tag}
              </Link>
            ))}
          </div>
        </header>

        {post.series && isPublishedSeriesPart && seriesPosts.length > 1 && (
          <SeriesNav
            series={post.series}
            current={post.seriesPart ?? 1}
            parts={seriesPosts.map((seriesPost) => ({
              title: seriesPost.title,
              href: `/blog/${seriesPost.slug}` as Route,
            }))}
          />
        )}

        <MdxLayout>
          <MDXContent source={post.content} />
        </MdxLayout>
      </article>
    )
  })
}
