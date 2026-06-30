import { ViewTransition } from "react"
import Link from "next/link"

import { formatPostDate, getAllPosts, type Post } from "@/lib/posts"
import { cn } from "@/lib/utils"

import { ArrowIcon } from "./icons"
import { TagIcon } from "./tag-icon"
import {
  TeaserCard,
  TeaserCardAction,
  TeaserCardBody,
  TeaserCardDescription,
  TeaserCardMeta,
  TeaserCardTitle,
} from "./teaser-card"

interface BlogCardProps {
  title: Post["title"]
  tag: Post["tag"]
  summary: Post["summary"]
  date: Post["date"]
  slug: Post["_meta"]["path"]
  url: Post["_meta"]["path"]
  isFeatured?: boolean
}

function BlogCard({
  tag,
  title,
  summary,
  date,
  slug,
  url,
  isFeatured,
}: BlogCardProps) {
  return (
    <Link
      href={url}
      className="group/card focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2"
      aria-label={`Read ${title}`}
    >
      <TeaserCard
        className={cn(
          "md:min-h-72",
          isFeatured &&
            "border-purple-400/70 bg-purple-50/40 dark:border-purple-500/60 dark:bg-purple-500/5"
        )}
      >
        <TeaserCardBody>
          <div className="flex items-center justify-between gap-4">
            <TagIcon
              tag={tag}
              size={32}
              className="text-purple-600 dark:text-purple-400"
            />
            <TeaserCardMeta as="time" dateTime={date}>
              {formatPostDate(date)}
            </TeaserCardMeta>
          </div>
          <ViewTransition
            name={`post-title-${slug}`}
            share="text-morph"
            default="none"
          >
            <TeaserCardTitle className="text-xl md:text-2xl">
              {title}
            </TeaserCardTitle>
          </ViewTransition>
          <TeaserCardDescription>{summary}</TeaserCardDescription>
          <TeaserCardAction className="font-mono text-sm text-purple-600 dark:text-purple-400">
            <span>Read more</span>
            <ArrowIcon className="size-5 text-gray-500 transition-transform duration-200 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:text-purple-600 dark:group-hover/card:text-purple-300" />
          </TeaserCardAction>
        </TeaserCardBody>
      </TeaserCard>
    </Link>
  )
}

export function PostsList() {
  const recentPosts = getAllPosts(false).slice(0, 3)

  return (
    <section>
      <h2 className="mb-6 font-heading text-2xl md:text-3xl">
        My Recent Posts
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[1.08fr_1fr_1fr]">
        {recentPosts.map(
          ({ title, tag, summary, date, _meta }: Post, index) => (
            <BlogCard
              key={_meta.path}
              tag={tag}
              title={title}
              summary={summary}
              date={date}
              slug={_meta.path}
              url={`/blog/${_meta.path}`}
              isFeatured={index === 0}
            />
          )
        )}
      </div>
    </section>
  )
}
