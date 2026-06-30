import type { Metadata } from "next"
import { ViewTransition } from "react"
import Link from "next/link"
import { format, parseISO } from "date-fns"

import { siteConfig } from "@/lib/config"
import { getAllPosts, Post } from "@/lib/posts"
import {
  TeaserCardDescription,
  TeaserCardMeta,
  TeaserCardTitle,
} from "@/components/teaser-card"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Discover my latest articles and thoughts on software development",
  alternates: {
    canonical: new URL("/blog", siteConfig.url).toString(),
  },
}

function PostCard(post: Post) {
  return (
    <article className="border-b border-gray-200 pb-10 last:border-0 dark:border-gray-800">
      <Link
        href={`/blog/${post._meta.path}`}
        className="group block space-y-3 transition-opacity duration-150 hover:opacity-75"
      >
        <ViewTransition
          name={`post-title-${post._meta.path}`}
          share="text-morph"
          default="none"
        >
          <TeaserCardTitle
            as="h2"
            className="text-2xl font-semibold md:text-3xl"
          >
            {post.title}
          </TeaserCardTitle>
        </ViewTransition>
        <TeaserCardDescription className="text-gray-600 dark:text-gray-400">
          {post.summary}
        </TeaserCardDescription>
        <TeaserCardMeta as="time" dateTime={post.date}>
          {format(parseISO(post.date), "MMMM d, yyyy")}
        </TeaserCardMeta>
      </Link>
    </article>
  )
}

export default function Blog() {
  const posts = getAllPosts(false)

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
      <h1 className="mb-16 font-heading text-4xl font-bold tracking-tight md:text-5xl">
        Articles
      </h1>
      <div className="space-y-0">
        {posts.map((post) => (
          <PostCard key={post._meta.path} {...post} />
        ))}
      </div>
    </div>
  )
}
