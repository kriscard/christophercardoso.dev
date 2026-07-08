import Link from "next/link"

import { PostListItem } from "@/features/post/components/blog-index"
import { getAllPosts } from "@/features/post/post-queries"
import { ArrowIcon } from "@/components/icons"

export function PostsList() {
  const recentPosts = getAllPosts(false).slice(0, 3)

  return (
    <section>
      <div className="mb-4 flex flex-col gap-3 border-b border-gray-200/80 pb-6 dark:border-ctp-surface0/80 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-heading text-3xl tracking-tight text-gray-950 dark:text-ctp-text md:text-4xl">
            Recent writing
          </h2>
          <p className="mt-3 max-w-[56ch] text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Practical notes on frontend work, terminal setups, and the small
            details that make development nicer.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex min-h-touch shrink-0 items-center gap-1 rounded-lg font-mono text-sm text-purple-600 transition duration-200 hover:-translate-y-0.5 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray active:translate-y-0 dark:text-purple-300 dark:hover:text-purple-200 dark:focus-visible:ring-offset-dark"
        >
          All articles
          <ArrowIcon className="size-4" />
        </Link>
      </div>
      <div className="divide-y divide-gray-200/80 dark:divide-ctp-surface0/80">
        {recentPosts.map((post) => (
          <PostListItem key={post._meta.path} post={post} titleAs="h3" dense />
        ))}
      </div>
    </section>
  )
}
