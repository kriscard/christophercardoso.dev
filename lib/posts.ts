import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface Post {
  slug: string
  title: string
  date: string
  tag: string
  summary: string
  _meta: {
    path: string
  }
}

const POSTS_PATH = path.join(process.cwd(), "content")

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_PATH)
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "")
      const fullPath = path.join(POSTS_PATH, file)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: typeof data.date === "string" ? data.date : data.date?.toISOString().split("T")[0] ?? "",
        tag: data.tag,
        summary: data.summary,
        _meta: {
          path: slug
        }
      } as Post
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts()
  return posts.find((post) => post.slug === slug)
}

// For backward compatibility with content-collections
export const allPosts = getAllPosts()