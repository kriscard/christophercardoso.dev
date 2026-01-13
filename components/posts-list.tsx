import Image from "next/image"
import Link from "next/link"

import { allPosts, Post } from "@/lib/posts"
import { getTagIcon } from "@/lib/utils"

import { Card } from "./card"
import { ArrowIcon } from "./icons"

interface BlogCardProps {
  title: Post["title"]
  tag: Post["tag"]
  summary: Post["summary"]
  url: Post["_meta"]["path"]
}

function BlogCard({ tag, title, summary, url }: BlogCardProps) {
  const icon = getTagIcon(tag)
  const tagLabel = Array.isArray(tag) ? tag[0] : tag

  return (
    <Card className="h-full">
      <div className="flex h-full flex-col gap-4 p-6">
        {icon && <Image src={icon} width={32} height={32} alt={tagLabel} />}
        <h3 className="font-heading text-xl leading-tight md:text-2xl text-gray-900 dark:text-gray-50">
          {title}
        </h3>
        <p className="flex-1 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {summary}
        </p>
        <div className="flex items-center gap-1">
          <Link
            href={url}
            className="font-mono text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            aria-label={`Read more about ${title}`}
          >
            Read more
          </Link>
          <ArrowIcon />
        </div>
      </div>
    </Card>
  )
}

export function BlogsList() {
  const recentPosts = allPosts.slice(0, 3)

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
            url={`blog/${_meta.path}`}
          />
        ))}
      </div>
    </section>
  )
}
