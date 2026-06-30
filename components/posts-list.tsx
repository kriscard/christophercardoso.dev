import { ViewTransition } from "react"
import Link from "next/link"

import { getAllPosts, Post } from "@/lib/posts"

import { ArrowIcon } from "./icons"
import { TagIcon } from "./tag-icon"
import {
  TeaserCard,
  TeaserCardAction,
  TeaserCardBody,
  TeaserCardDescription,
  TeaserCardTitle,
} from "./teaser-card"

interface BlogCardProps {
  title: Post["title"]
  tag: Post["tag"]
  summary: Post["summary"]
  slug: Post["_meta"]["path"]
  url: Post["_meta"]["path"]
}

function BlogCard({ tag, title, summary, slug, url }: BlogCardProps) {
  return (
    <TeaserCard>
      <TeaserCardBody>
        <TagIcon tag={tag} size={32} className="text-purple-600 dark:text-purple-400" />
        <ViewTransition
          name={`post-title-${slug}`}
          share="text-morph"
          default="none"
        >
          <TeaserCardTitle className="text-xl md:text-2xl">
            {title}
          </TeaserCardTitle>
        </ViewTransition>
        <TeaserCardDescription className="flex-1">
          {summary}
        </TeaserCardDescription>
        <TeaserCardAction>
          <Link
            href={url}
            className="font-mono text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            aria-label={`Read more about ${title}`}
          >
            Read more
          </Link>
          <ArrowIcon />
        </TeaserCardAction>
      </TeaserCardBody>
    </TeaserCard>
  )
}

export function PostsList() {
  const recentPosts = getAllPosts(false).slice(0, 3)

  return (
    <section>
      <h2 className="mb-6 font-heading text-2xl md:text-3xl">
        My Recent Posts
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map(({ title, tag, summary, _meta }: Post) => (
          <BlogCard
            key={_meta.path}
            tag={tag}
            title={title}
            summary={summary}
            slug={_meta.path}
            url={`/blog/${_meta.path}`}
          />
        ))}
      </div>
    </section>
  )
}
