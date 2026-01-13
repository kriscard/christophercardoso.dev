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
      <div className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-4 p-5">
        {icon && <Image src={icon} width={30} height={30} alt={tagLabel} />}
        <h3 className="max-w-2xl font-heading text-2xl md:text-xl">{title}</h3>
        <p className="max-w-2xl text-xl lg:text-lg">{summary}</p>
        <div className="mt-auto flex items-center">
          <Link
            href={url}
            className="font-mono text-blue-600 duration-500 hover:underline dark:text-blue-500"
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
    <div className="py-5">
      <h2 className="font-heading text-2xl md:text-3xl">My Recent Posts</h2>
      <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  )
}
