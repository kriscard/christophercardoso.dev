import { ViewTransition } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { formatPostDate, type Post } from "@/features/post/post-queries"

export function DraftBadge() {
  return (
    <span className="ml-2 rounded-sm bg-amber-500/15 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400">
      draft
    </span>
  )
}

function PostRow({
  post,
  title: TitleComponent,
  linkClassName,
}: {
  post: Post
  title: "h2" | "h3"
  linkClassName: string
}) {
  return (
    <article>
      <Link
        href={`/blog/${post._meta.path}`}
        className={cn(
          "group block cursor-pointer rounded-xl focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark",
          linkClassName
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

export function BlogPostListItem({ post }: { post: Post }) {
  return <PostRow post={post} title="h2" linkClassName="px-4 py-5" />
}

export function RecentPostListItem({ post }: { post: Post }) {
  return <PostRow post={post} title="h3" linkClassName="py-5" />
}
