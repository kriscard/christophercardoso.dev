import { ViewTransition } from "react"
import type { Route } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  formatPostDate,
  getAllPosts,
  getPostTags,
  type Post,
} from "@/features/post/post-queries"
import { ArrowIcon } from "@/components/icons"

function getSearchParamValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : (value ?? "")
}

function normalizeFilter(value: string) {
  return value.trim().toLowerCase()
}

function getTags(posts: Post[]) {
  const counts = new Map<string, number>()

  posts.forEach((post) => {
    getPostTags(post.tag).forEach((tag) => {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    })
  })

  return Array.from(counts.entries()).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  )
}

// Show the five most-used tags; keep the active tag visible even if a
// deep link points at a rarer one
function getVisibleTags(tags: [string, number][], activeTag: string) {
  const visible = tags.slice(0, 5).map(([tag]) => tag)
  const isKnownTag = tags.some(
    ([tag]) => normalizeFilter(tag) === normalizeFilter(activeTag)
  )

  if (
    activeTag &&
    isKnownTag &&
    !visible.some((tag) => normalizeFilter(tag) === normalizeFilter(activeTag))
  ) {
    visible.push(activeTag)
  }

  return visible
}

export function createBlogHref({ tag, query }: { tag?: string; query?: string }) {
  const searchParams = new URLSearchParams()

  if (tag) searchParams.set("tag", tag)
  if (query) searchParams.set("q", query)

  const queryString = searchParams.toString()
  return (queryString ? `/blog?${queryString}` : "/blog") as Route
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

function TagLink({
  href,
  isActive,
  children,
}: {
  href: Route
  isActive: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex min-h-touch shrink-0 items-center rounded-lg px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark md:min-h-9",
        isActive
          ? "font-medium text-purple-600 dark:text-purple-300"
          : "text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-300"
      )}
    >
      {children}
    </Link>
  )
}

function BlogFilters({
  activeTag,
  query,
  tags,
}: {
  activeTag: string
  query: string
  tags: string[]
}) {
  const hasActiveFilters = Boolean(activeTag || query)

  return (
    <div className="mb-8 flex flex-col gap-5 rounded-2xl border border-gray-200/70 bg-white/35 p-4 shadow-sm shadow-purple-950/5 dark:border-ctp-surface0/80 dark:bg-ctp-mantle/25 dark:shadow-black/10 md:mb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
      <nav
        aria-label="Filter articles by topic"
        className="-mx-1 flex items-center gap-x-2 overflow-x-auto overscroll-x-contain p-1 [scrollbar-width:none] lg:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        <span className="shrink-0 text-sm text-gray-500 dark:text-gray-400">
          Filter:
        </span>
        <TagLink href={"/blog" as Route} isActive={!activeTag}>
          All
        </TagLink>
        {tags.map((tag) => {
          const isActive = normalizeFilter(activeTag) === normalizeFilter(tag)
          const href = isActive ? ("/blog" as Route) : createBlogHref({ tag })

          return (
            <TagLink key={tag} href={href} isActive={isActive}>
              {tag}
            </TagLink>
          )
        })}
      </nav>

      <form
        action="/blog"
        className="w-full max-w-sm lg:w-72 lg:max-w-none lg:shrink-0"
      >
        <label htmlFor="blog-search" className="sr-only">
          Search articles
        </label>
        <div className="flex items-center gap-3 rounded-xl border border-gray-200/80 bg-lightGray/70 px-3 transition-colors focus-within:border-purple-500/70 dark:border-ctp-surface0 dark:bg-dark/50 dark:focus-within:border-purple-400/70">
          <input
            id="blog-search"
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search articles"
            className="min-h-touch min-w-0 flex-1 appearance-none bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500 dark:text-ctp-text dark:[color-scheme:dark] dark:placeholder:text-gray-500 md:min-h-9"
          />
          <button
            type="submit"
            className="min-h-touch cursor-pointer rounded-lg px-2 text-sm text-purple-600 transition-colors hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 dark:text-purple-300 dark:hover:text-purple-200 md:min-h-9"
          >
            Search
          </button>
        </div>
        {hasActiveFilters ? (
          <Link
            href="/blog"
            className="mt-2 inline-flex min-h-touch items-center rounded-lg text-sm text-gray-500 transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:text-gray-400 dark:hover:text-purple-300 dark:focus-visible:ring-offset-dark md:min-h-0"
          >
            Clear filters
          </Link>
        ) : null}
      </form>
    </div>
  )
}

export function DraftBadge() {
  return (
    <span className="ml-2 rounded bg-amber-500/15 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400">
      draft
    </span>
  )
}

export function PostListItem({
  post,
  titleAs: TitleComponent = "h2",
  dense = false,
}: {
  post: Post
  titleAs?: "h2" | "h3"
  dense?: boolean
}) {
  return (
    <article>
      <Link
        href={`/blog/${post._meta.path}`}
        className={cn(
          "group block cursor-pointer rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark",
          dense ? "py-5" : "px-4 py-5"
        )}
        aria-label={`Read ${post.title}`}
      >
        <time
          dateTime={post.date}
          className="font-mono text-xs text-gray-500 dark:text-gray-400"
        >
          {formatPostDate(post.date)}
        </time>
        <ViewTransition
          name={`post-title-${post._meta.path}`}
          share="text-morph"
          default="none"
        >
          <TitleComponent className="mt-2 text-balance font-heading text-xl leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-purple-600 dark:text-ctp-text dark:group-hover:text-purple-300 md:text-2xl">
            {post.title}
            {post.draft && <DraftBadge />}
          </TitleComponent>
        </ViewTransition>
        <p className="mt-2 max-w-prose text-base leading-relaxed text-gray-600 dark:text-gray-400">
          {post.summary}
        </p>
      </Link>
    </article>
  )
}

function LatestPost({ post }: { post: Post }) {
  return (
    <article className="mb-5">
      <Link
        href={`/blog/${post._meta.path}`}
        className="group block cursor-pointer rounded-3xl border border-gray-200/70 bg-white/45 p-5 shadow-sm shadow-purple-950/5 transition duration-200 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray active:translate-y-0 dark:border-ctp-surface0/80 dark:bg-ctp-mantle/35 dark:shadow-black/10 dark:hover:border-purple-300/30 dark:hover:bg-ctp-mantle/60 dark:focus-visible:ring-offset-dark sm:p-7"
        aria-label={`Read ${post.title}`}
      >
        <p className="font-mono text-xs uppercase tracking-widest text-purple-600 dark:text-purple-300">
          Latest
        </p>
        <ViewTransition
          name={`post-title-${post._meta.path}`}
          share="text-morph"
          default="none"
        >
          <h2 className="mt-3 max-w-2xl text-balance font-heading text-3xl leading-tight tracking-tight text-gray-900 transition-colors group-hover:text-purple-600 dark:text-ctp-text dark:group-hover:text-purple-300 md:text-4xl">
            {post.title}
            {post.draft && <DraftBadge />}
          </h2>
        </ViewTransition>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg">
          {post.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 font-mono text-sm text-purple-600 dark:text-purple-300">
          Read the article
          <ArrowIcon className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
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
  const context =
    activeTag && query
      ? `tagged ${activeTag} match "${query}"`
      : activeTag
        ? `tagged ${activeTag}`
        : `match "${query}"`

  return (
    <div className="rounded-2xl border border-gray-200/70 bg-white/35 p-6 shadow-sm shadow-purple-950/5 dark:border-ctp-surface0/80 dark:bg-ctp-mantle/25 dark:shadow-black/10">
      <p className="max-w-prose text-base leading-relaxed text-gray-600 dark:text-gray-400">
        No articles {context}. Try a broader search or a different topic.
      </p>
      <Link
        href="/blog"
        className="mt-4 inline-flex min-h-touch items-center gap-1 rounded-lg font-mono text-sm text-purple-600 transition-colors hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:text-purple-300 dark:hover:text-purple-200 dark:focus-visible:ring-offset-dark"
      >
        View all articles
        <ArrowIcon className="size-4" />
      </Link>
    </div>
  )
}

export function BlogIndex({
  tag,
  q,
}: {
  tag?: string | string[]
  q?: string | string[]
}) {
  const posts = getAllPosts()
  const query = getSearchParamValue(q).trim()
  const requestedTag = getSearchParamValue(tag).trim()
  const tags = getTags(posts)
  const activeTag =
    tags.find(
      ([candidate]) =>
        normalizeFilter(candidate) === normalizeFilter(requestedTag)
    )?.[0] ?? requestedTag
  const visibleTags = getVisibleTags(tags, activeTag)
  const filteredPosts = getFilteredPosts(posts, activeTag, query)
  const hasActiveFilters = Boolean(activeTag || query)
  const [latestPost, ...remainingPosts] = filteredPosts
  const listPosts = hasActiveFilters ? filteredPosts : remainingPosts

  return (
    <>
      <BlogFilters activeTag={activeTag} query={query} tags={visibleTags} />

      {filteredPosts.length > 0 ? (
        <>
          {hasActiveFilters ? (
            <p className="mb-2 font-mono text-xs text-gray-500 dark:text-gray-400">
              {getResultsLabel({
                count: filteredPosts.length,
                activeTag,
                query,
              })}
            </p>
          ) : null}
          {!hasActiveFilters && latestPost ? (
            <LatestPost post={latestPost} />
          ) : null}
          <div className="space-y-1">
            {listPosts.map((post) => (
              <PostListItem key={post._meta.path} post={post} />
            ))}
          </div>
        </>
      ) : (
        <EmptyState activeTag={activeTag} query={query} />
      )}
    </>
  )
}
