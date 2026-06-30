import { ViewTransition } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/lib/config"
import {
  formatPostDate,
  getAllPosts,
  getPostTags,
  type Post,
} from "@/lib/posts"
import { cn } from "@/lib/utils"
import { ArrowIcon } from "@/components/icons"
import { TagIcon } from "@/components/tag-icon"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Discover my latest articles and thoughts on software development",
  alternates: {
    canonical: new URL("/blog", siteConfig.url).toString(),
  },
}

const postImages: Record<string, { src: string; alt: string }> = {
  "dotfiles-part-2-my-neovim-setup": {
    src: "/images/blog/neovim-dashboard.png",
    alt: "Neovim dashboard using the Catppuccin Macchiato theme",
  },
}

type BlogSearchParams = {
  tag?: string | string[]
  q?: string | string[]
}

type TagCount = {
  tag: string
  count: number
}

const VISIBLE_TOPIC_LIMIT = 6
const TOPIC_OVERFLOW_THRESHOLD = 8

function getSearchParamValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : (value ?? "")
}

function normalizeFilter(value: string) {
  return value.trim().toLowerCase()
}

function getTagCounts(posts: Post[]) {
  const counts = new Map<string, number>()

  posts.forEach((post) => {
    getPostTags(post.tag).forEach((tag) => {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    })
  })

  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
}

function getVisibleTagCounts(tagCounts: TagCount[], activeTag: string) {
  if (tagCounts.length <= TOPIC_OVERFLOW_THRESHOLD) {
    return { visibleTags: tagCounts, hiddenTags: [] }
  }

  const activeTagCount = tagCounts.find(
    ({ tag }) => normalizeFilter(tag) === normalizeFilter(activeTag)
  )
  const visibleTags = tagCounts.slice(0, VISIBLE_TOPIC_LIMIT)
  const shouldIncludeActiveTag =
    activeTagCount &&
    !visibleTags.some(
      ({ tag }) => normalizeFilter(tag) === normalizeFilter(activeTagCount.tag)
    )

  if (shouldIncludeActiveTag) {
    visibleTags.push(activeTagCount)
  }

  const hiddenTags = tagCounts.filter(
    ({ tag }) =>
      !visibleTags.some(
        (visibleTag) => normalizeFilter(visibleTag.tag) === normalizeFilter(tag)
      )
  )

  return { visibleTags, hiddenTags }
}

function createBlogHref({ tag, query }: { tag?: string; query?: string }) {
  const searchParams = new URLSearchParams()

  if (tag) searchParams.set("tag", tag)
  if (query) searchParams.set("q", query)

  const queryString = searchParams.toString()
  return queryString ? `/blog?${queryString}` : "/blog"
}

function getFilteredPosts(posts: Post[], activeTag: string, query: string) {
  const normalizedTag = normalizeFilter(activeTag)
  const normalizedQuery = normalizeFilter(query)

  return posts.filter((post) => {
    const tags = getPostTags(post.tag)
    const matchesTag = normalizedTag
      ? tags.some((tag) => normalizeFilter(tag) === normalizedTag)
      : true

    if (!matchesTag) return false
    if (!normalizedQuery) return true

    const searchableText = [post.title, post.summary, ...tags]
      .join(" ")
      .toLowerCase()

    return searchableText.includes(normalizedQuery)
  })
}

function getResultsLabel({
  count,
  activeTag,
  query,
}: {
  count: number
  activeTag: string
  query: string
}) {
  const articleLabel = count === 1 ? "article" : "articles"

  if (activeTag && query) {
    return `${count} ${articleLabel} tagged ${activeTag} matching "${query}"`
  }

  if (activeTag) {
    return `${count} ${articleLabel} tagged ${activeTag}`
  }

  if (query) {
    return `${count} ${articleLabel} matching "${query}"`
  }

  return `${count} ${articleLabel}`
}

function BlogFilters({
  activeTag,
  query,
  postsCount,
  tagCounts,
}: {
  activeTag: string
  query: string
  postsCount: number
  tagCounts: TagCount[]
}) {
  const hasActiveFilters = Boolean(activeTag || query)
  const { visibleTags, hiddenTags } = getVisibleTagCounts(tagCounts, activeTag)
  const topicLinkClass =
    "inline-flex min-h-touch items-center rounded-full border px-3 py-1.5 text-sm transition-[background-color,border-color,color,transform] duration-200 active:translate-y-px md:min-h-9 md:px-2.5 md:py-1 md:text-xs"
  const inactiveTopicClass =
    "border-gray-300/70 text-gray-600 hover:border-purple-500/40 hover:text-purple-700 dark:border-gray-700 dark:text-gray-400 dark:hover:border-purple-400/40 dark:hover:text-purple-300"
  const activeTopicClass =
    "border-purple-500/50 bg-purple-500/10 text-purple-700 dark:border-purple-400/45 dark:bg-purple-400/10 dark:text-purple-200"
  const countClass = "ml-1.5 font-mono text-[11px] opacity-55"

  return (
    <section
      className="mb-8 border-y border-gray-300/70 py-5 dark:border-gray-800/80"
      aria-label="Filter articles"
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_18rem] lg:items-start">
        <div className="space-y-3">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Filter by topic
          </p>
          <div className="flex flex-wrap gap-2" aria-label="Article topics">
            <Link
              href={createBlogHref({ query })}
              className={cn(
                topicLinkClass,
                !activeTag ? activeTopicClass : inactiveTopicClass
              )}
              aria-current={!activeTag ? "page" : undefined}
            >
              <span>All</span>
              <span className={countClass}>{postsCount}</span>
            </Link>
            {visibleTags.map(({ tag, count }) => {
              const isActive =
                normalizeFilter(activeTag) === normalizeFilter(tag)
              const href = isActive
                ? createBlogHref({ query })
                : createBlogHref({ tag, query })

              return (
                <Link
                  key={tag}
                  href={href}
                  className={cn(
                    topicLinkClass,
                    isActive ? activeTopicClass : inactiveTopicClass
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{tag}</span>
                  <span className={countClass}>{count}</span>
                </Link>
              )
            })}
            {hiddenTags.length > 0 ? (
              <details className="group basis-full md:basis-auto">
                <summary
                  className={cn(
                    topicLinkClass,
                    inactiveTopicClass,
                    "w-fit cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                  )}
                >
                  <span>More topics</span>
                  <span className={countClass}>{hiddenTags.length}</span>
                </summary>
                <div className="mt-2 flex flex-wrap gap-2 rounded-lg border border-gray-300/70 p-2 dark:border-gray-800">
                  {hiddenTags.map(({ tag, count }) => {
                    const isActive =
                      normalizeFilter(activeTag) === normalizeFilter(tag)
                    const href = isActive
                      ? createBlogHref({ query })
                      : createBlogHref({ tag, query })

                    return (
                      <Link
                        key={tag}
                        href={href}
                        className={cn(
                          topicLinkClass,
                          isActive ? activeTopicClass : inactiveTopicClass
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span>{tag}</span>
                        <span className={countClass}>{count}</span>
                      </Link>
                    )
                  })}
                </div>
              </details>
            ) : null}
          </div>
        </div>

        <form action="/blog" className="lg:pt-7">
          {activeTag ? (
            <input type="hidden" name="tag" value={activeTag} />
          ) : null}
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <div className="flex items-center gap-3 border-b border-gray-300/80 transition-colors focus-within:border-purple-500/70 dark:border-gray-700 dark:focus-within:border-purple-400/70">
            <input
              id="blog-search"
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search articles"
              className="min-h-touch min-w-0 flex-1 appearance-none bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500 dark:text-gray-100 dark:[color-scheme:dark] dark:placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="min-h-touch rounded-lg text-sm text-purple-700 transition-[color,transform] duration-200 hover:text-purple-900 active:translate-y-px dark:text-purple-300 dark:hover:text-purple-200"
            >
              Search
            </button>
          </div>
          {hasActiveFilters ? (
            <Link
              href="/blog"
              className="focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark mt-3 inline-flex min-h-touch items-center rounded-lg text-sm text-gray-500 transition-colors hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 dark:text-gray-400 dark:hover:text-purple-300"
            >
              Clear filters
            </Link>
          ) : null}
        </form>
      </div>
    </section>
  )
}

function FeaturedPostCard({ post }: { post: Post }) {
  const image = postImages[post._meta.path]
  const tags = getPostTags(post.tag).slice(0, 3)

  return (
    <article>
      <Link
        href={`/blog/${post._meta.path}`}
        className={cn(
          "group/card focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark grid overflow-hidden rounded-lg border border-purple-400/70 bg-purple-50/40 shadow-lg shadow-purple-200/20 transition-[border-color,background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 dark:border-purple-500/60 dark:bg-purple-500/5 dark:shadow-purple-500/10 dark:hover:bg-purple-500/10",
          image && "md:grid-cols-[1.05fr_0.95fr]"
        )}
        aria-label={`Read ${post.title}`}
      >
        <div className="flex flex-col gap-5 p-6 sm:p-8 md:min-h-80">
          <div className="flex items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
            <TagIcon
              tag={post.tag}
              size={32}
              className="text-purple-600 dark:text-purple-400"
            />
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          </div>
          <ViewTransition
            name={`post-title-${post._meta.path}`}
            share="text-morph"
            default="none"
          >
            <h2 className="max-w-xl text-wrap font-heading text-3xl leading-tight tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl">
              {post.title}
            </h2>
          </ViewTransition>
          <p className="max-w-[58ch] text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {post.summary}
          </p>
          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-purple-500/30 px-3 py-1 text-xs text-purple-700 dark:text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1 font-mono text-sm text-purple-600 dark:text-purple-400">
            <span>Read latest</span>
            <ArrowIcon className="size-5 text-gray-500 transition-transform duration-200 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:text-purple-600 dark:group-hover/card:text-purple-300" />
          </div>
        </div>
        {image ? (
          <div className="relative min-h-64 border-t border-purple-500/20 md:border-l md:border-t-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 430px"
              className="object-cover"
            />
          </div>
        ) : null}
      </Link>
    </article>
  )
}

function PostCard({ post, className }: { post: Post; className?: string }) {
  const tags = getPostTags(post.tag).slice(0, 2)

  return (
    <article className={className}>
      <Link
        href={`/blog/${post._meta.path}`}
        className="group/card focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark flex h-full flex-col rounded-lg border border-gray-300/70 bg-white/70 p-5 shadow-sm transition-[border-color,background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-purple-400/70 hover:bg-white/90 hover:shadow-md hover:shadow-purple-200/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 dark:border-gray-700/60 dark:bg-gray-800/45 dark:shadow-lg dark:shadow-black/20 dark:hover:border-purple-500/60 dark:hover:bg-gray-800/70 dark:hover:shadow-xl dark:hover:shadow-purple-500/10 sm:p-6 md:min-h-64"
        aria-label={`Read ${post.title}`}
      >
        <div className="flex items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <TagIcon
            tag={post.tag}
            size={28}
            className="text-purple-600 dark:text-purple-400"
          />
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </div>
        <ViewTransition
          name={`post-title-${post._meta.path}`}
          share="text-morph"
          default="none"
        >
          <h2 className="mt-5 text-wrap font-heading text-2xl leading-tight text-gray-900 dark:text-gray-50">
            {post.title}
          </h2>
        </ViewTransition>
        <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {post.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-300/70 px-3 py-1 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-1 pt-6 font-mono text-sm text-purple-600 dark:text-purple-400">
          <span>Read more</span>
          <ArrowIcon className="size-5 text-gray-500 transition-transform duration-200 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:text-purple-600 dark:group-hover/card:text-purple-300" />
        </div>
      </Link>
    </article>
  )
}

function EmptyState({
  activeTag,
  query,
}: {
  activeTag: string
  query: string
}) {
  const filterLabel =
    activeTag && query
      ? "filters"
      : activeTag
        ? "topic filter"
        : "search filter"

  return (
    <div className="rounded-lg border border-dashed border-gray-300/80 bg-white/45 p-8 text-center dark:border-gray-700 dark:bg-gray-800/25">
      <h2 className="font-heading text-2xl text-gray-900 dark:text-gray-50">
        No articles found
      </h2>
      <p className="mx-auto mt-3 max-w-[48ch] text-base leading-relaxed text-gray-600 dark:text-gray-300">
        Try a broader search or clear the {filterLabel} to browse everything.
      </p>
      <Link
        href="/blog"
        className="focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark mt-5 inline-flex min-h-touch items-center rounded-lg border border-purple-500/50 px-4 py-2 text-sm text-purple-700 transition-colors hover:bg-purple-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 dark:text-purple-300 dark:hover:bg-purple-500/10"
      >
        View all articles
      </Link>
    </div>
  )
}

export default async function Blog(props: {
  searchParams?: Promise<BlogSearchParams>
}) {
  const searchParams = props.searchParams ? await props.searchParams : {}
  const posts = getAllPosts(false)
  const query = getSearchParamValue(searchParams.q).trim()
  const requestedTag = getSearchParamValue(searchParams.tag).trim()
  const tagCounts = getTagCounts(posts)
  const activeTag =
    tagCounts.find(
      ({ tag }) => normalizeFilter(tag) === normalizeFilter(requestedTag)
    )?.tag ?? requestedTag
  const filteredPosts = getFilteredPosts(posts, activeTag, query)
  const [featuredPost, ...remainingPosts] = filteredPosts

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

      <BlogFilters
        activeTag={activeTag}
        query={query}
        postsCount={posts.length}
        tagCounts={tagCounts}
      />

      <div className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>
          {getResultsLabel({ count: filteredPosts.length, activeTag, query })}
        </p>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="space-y-5 md:space-y-6">
          {featuredPost ? <FeaturedPostCard post={featuredPost} /> : null}
          <div
            className={cn(
              "grid grid-cols-1 gap-5 md:grid-cols-2",
              remainingPosts.length === 1 && "md:grid-cols-1"
            )}
          >
            {remainingPosts.map((post) => (
              <PostCard key={post._meta.path} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyState activeTag={activeTag} query={query} />
      )}
    </div>
  )
}
