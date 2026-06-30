import "server-only"

import fs from "fs"
import path from "path"
import { cache } from "react"
import matter from "gray-matter"

export interface Post {
  slug: string
  title: string
  date: string
  tag: string | string[]
  summary: string
  content: string
  ogImage?: string
  _meta: {
    path: string
  }
}

const POSTS_PATH = path.join(process.cwd(), "content")

function isDraft(post: Post): boolean {
  const tags = Array.isArray(post.tag) ? post.tag : [post.tag]
  return tags.some((tag) => tag.toLowerCase() === "draft")
}

const readAllPosts = cache((): Post[] => {
  const files = fs.readdirSync(POSTS_PATH)

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "")
      const fullPath = path.join(POSTS_PATH, file)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date:
          typeof data.date === "string"
            ? data.date
            : data.date?.toISOString().split("T")[0] ?? "",
        tag: data.tag,
        summary: data.summary,
        content,
        ogImage: data.ogImage,
        _meta: {
          path: slug,
        },
      } as Post
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

export const getAllPosts = cache((includeDrafts = false): Post[] => {
  const posts = readAllPosts()
  return includeDrafts ? posts : posts.filter((post) => !isDraft(post))
})

export const getPostBySlug = cache(
  (slug: string, includeDrafts = false): Post | undefined => {
    return getAllPosts(includeDrafts).find((post) => post.slug === slug)
  }
)
