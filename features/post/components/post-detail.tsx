import { ViewTransition } from "react"
import type { Route } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { calculateReadingTime } from "@/lib/reading-time"
import {
  createBlogHref,
  DraftBadge,
} from "@/features/post/components/blog-index"
import { SeriesNav } from "@/features/post/components/series-nav"
import {
  formatPostDate,
  getPostBySlug,
  getPostTags,
  getSeriesPosts,
} from "@/features/post/post-queries"
import { MDXContent } from "@/components/mdx-components"
import MdxLayout from "@/components/mdx-layout"

export function PostDetail({ slug }: { slug: string }) {
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const readingTime = calculateReadingTime(post.content)
  const tags = getPostTags(post.tag)
  const seriesPosts = post.series ? getSeriesPosts(post.series, post.draft) : []
  const currentSeriesIndex = seriesPosts.findIndex(
    (seriesPost) => seriesPost.slug === post.slug
  )

  return (
    <article className="mx-auto max-w-4xl py-8 md:py-12">
      <Link
        href="/blog"
        className="mb-8 inline-flex min-h-touch items-center rounded-lg text-sm text-gray-600 transition-colors hover:text-purple-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:text-gray-400 dark:hover:text-purple-300 dark:focus-visible:ring-offset-dark md:mb-10"
      >
        Back to articles
      </Link>

      <header className="mb-8 max-w-3xl md:mb-10">
        <p className="font-mono text-xs text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          {" · "}
          {readingTime} min read
          {post.draft && <DraftBadge />}
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
              className="rounded-full border border-purple-500/40 px-3 py-1 text-sm text-purple-700 transition-colors hover:border-purple-500 hover:bg-purple-500/10 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500/70 dark:border-purple-300/40 dark:text-purple-300 dark:hover:border-purple-300 dark:hover:bg-purple-300/10"
            >
              {tag}
            </Link>
          ))}
        </div>
      </header>

      {post.series && currentSeriesIndex !== -1 && seriesPosts.length > 1 && (
        <SeriesNav
          series={post.series}
          current={currentSeriesIndex + 1}
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
}

export function PostDetailSkeleton() {
  return (
    <article className="mx-auto max-w-4xl py-8 md:py-12">
      <div className="mb-8 h-5 w-28 rounded bg-gray-200/80 dark:bg-ctp-surface0/80 md:mb-10" />
      <header className="mb-8 max-w-3xl md:mb-10">
        <div className="h-4 w-40 rounded bg-gray-200/80 dark:bg-ctp-surface0/80" />
        <div className="mt-4 h-10 w-full max-w-2xl rounded bg-gray-200/80 dark:bg-ctp-surface0/80 md:h-14" />
        <div className="mt-3 h-10 w-full max-w-xl rounded bg-gray-200/80 dark:bg-ctp-surface0/80" />
        <div className="mt-5 flex gap-2">
          <div className="h-7 w-20 rounded-full bg-gray-200/80 dark:bg-ctp-surface0/80" />
          <div className="h-7 w-24 rounded-full bg-gray-200/80 dark:bg-ctp-surface0/80" />
        </div>
      </header>
      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-gray-200/80 dark:bg-ctp-surface0/80" />
        <div className="h-4 w-11/12 rounded bg-gray-200/80 dark:bg-ctp-surface0/80" />
        <div className="h-4 w-10/12 rounded bg-gray-200/80 dark:bg-ctp-surface0/80" />
      </div>
    </article>
  )
}
