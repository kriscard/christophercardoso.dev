import type { Metadata } from "next"
import Link from "next/link"
import { format, parseISO } from "date-fns"

import { allPosts, Post } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Discover my latest articles and thoughts on software development",
}

function PostCard(post: Post) {
  return (
    <article className="mb-10 border-b border-gray-200 pb-10 last:border-0 dark:border-gray-800">
      <Link
        href={`blog/${post._meta.path}`}
        className="group block space-y-3 transition-opacity hover:opacity-75"
      >
        <h2 className="font-heading text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-50 md:text-3xl">
          {post.title}
        </h2>
        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
          {post.summary}
        </p>
        <time
          dateTime={post.date}
          className="block text-sm text-gray-500 dark:text-gray-500"
        >
          {format(parseISO(post.date), "MMMM d, yyyy")}
        </time>
      </Link>
    </article>
  )
}

export default function Blog() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      <h1 className="mb-16 font-heading text-4xl font-bold tracking-tight md:text-5xl">
        Articles
      </h1>
      <div className="space-y-0">
        {allPosts.map((post) => (
          <PostCard key={post._meta.path} {...post} />
        ))}
      </div>
    </div>
  )
}
