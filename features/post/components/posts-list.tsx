import Link from "next/link"

import { PostListItem } from "@/features/post/components/blog-index"
import { getAllPosts } from "@/features/post/post-queries"
import { ArrowIcon } from "@/components/icons"

export function PostsList() {
  const recentPosts = getAllPosts(false).slice(0, 3)

  return (
    <section>
      <h2 className="font-heading text-2xl tracking-tight md:text-3xl">
        My Recent Posts
      </h2>
      <div className="mt-2 divide-y divide-gray-200 dark:divide-gray-800">
        {recentPosts.map((post) => (
          <PostListItem key={post._meta.path} post={post} titleAs="h3" />
        ))}
      </div>
      <Link
        href="/blog"
        className="mt-2 inline-flex min-h-touch items-center gap-1 rounded-lg font-mono text-sm text-purple-600 transition-colors hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:text-purple-300 dark:hover:text-purple-200 dark:focus-visible:ring-offset-dark"
      >
        All articles
        <ArrowIcon className="size-4" />
      </Link>
    </section>
  )
}
