import "server-only"

import fs from "fs"
import path from "path"
import { cache } from "react"
import { format, parseISO } from "date-fns"
import matter from "gray-matter"

import {
  parsePostFrontmatter,
  type PostFrontmatter,
} from "@/features/post/post-frontmatter"

export { getPostTags } from "@/features/post/post-frontmatter"

export interface Post extends PostFrontmatter {
  slug: string
  content: string
  _meta: {
    path: string
  }
}

const POSTS_PATH = path.join(process.cwd(), "content")

export function formatPostDate(date: string) {
  return format(parseISO(date), "MMM d, yyyy")
}

function isDraft(post: Post) {
  return post.draft === true
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
        ...parsePostFrontmatter(data, file),
        content,
        _meta: {
          path: slug,
        },
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

const includeDraftsByDefault = process.env.NODE_ENV === "development"

export const getAllPosts = cache(
  (includeDrafts: boolean = includeDraftsByDefault): Post[] => {
    const posts = readAllPosts()
    return includeDrafts ? posts : posts.filter((post) => !isDraft(post))
  }
)

export const getSeriesPosts = cache(
  (series: string, includeDrafts = false): Post[] => {
    return getAllPosts(includeDrafts)
      .filter((post) => post.series === series)
      .sort((a, b) => (a.seriesPart ?? 0) - (b.seriesPart ?? 0))
  }
)

export const getPostBySlug = cache(
  (slug: string, includeDrafts = includeDraftsByDefault): Post | undefined => {
    return getAllPosts(includeDrafts).find((post) => post.slug === slug)
  }
)
