import "server-only"

import fs from "fs"
import path from "path"
import { cache } from "react"
import { format, parseISO } from "date-fns"
import matter from "gray-matter"

export interface Post {
  slug: string
  title: string
  date: string
  tag: string | string[]
  summary: string
  content: string
  ogImage?: string
  series?: string
  seriesPart?: number
  draft?: boolean
  _meta: {
    path: string
  }
}

const POSTS_PATH = path.join(process.cwd(), "content")

export function getPostTags(tag: Post["tag"]) {
  return Array.isArray(tag) ? tag : [tag]
}

export function formatPostDate(date: string) {
  return format(parseISO(date), "MMM d, yyyy")
}

function isDraft(post: Post): boolean {
  return post.draft === true
}

function parsePostDate(date: unknown, file: string) {
  const parsedDate =
    typeof date === "string"
      ? new Date(date)
      : date instanceof Date
        ? date
        : undefined

  if (!parsedDate || Number.isNaN(parsedDate.getTime())) {
    throw new Error(`Missing or invalid date frontmatter in ${file}`)
  }

  return parsedDate.toISOString().split("T")[0]
}

function requireStringField(
  value: unknown,
  field: string,
  file: string
): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Missing or invalid ${field} frontmatter in ${file}`)
  }

  return value
}

function parsePostTag(tag: unknown, file: string): string | string[] {
  if (typeof tag === "string" && tag.trim() !== "") return tag

  if (
    Array.isArray(tag) &&
    tag.length > 0 &&
    tag.every((item) => typeof item === "string" && item.trim() !== "")
  ) {
    return tag
  }

  throw new Error(`Missing or invalid tag frontmatter in ${file}`)
}

function parseSeries(
  data: Record<string, unknown>,
  file: string
): { series?: string; seriesPart?: number } {
  const { series, seriesPart } = data

  if (series === undefined && seriesPart === undefined) return {}

  if (
    typeof series !== "string" ||
    series.trim() === "" ||
    typeof seriesPart !== "number" ||
    !Number.isInteger(seriesPart) ||
    seriesPart < 1
  ) {
    throw new Error(`Invalid series/seriesPart frontmatter in ${file}`)
  }

  return { series, seriesPart }
}

function parseDraft(draft: unknown, file: string): boolean {
  if (draft === undefined) return false

  if (typeof draft !== "boolean") {
    throw new Error(`Invalid draft frontmatter in ${file}`)
  }

  return draft
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
        title: requireStringField(data.title, "title", file),
        date: parsePostDate(data.date, file),
        tag: parsePostTag(data.tag, file),
        summary: requireStringField(data.summary, "summary", file),
        content,
        ogImage: typeof data.ogImage === "string" ? data.ogImage : undefined,
        ...parseSeries(data, file),
        draft: parseDraft(data.draft, file),
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
  (
    slug: string,
    includeDrafts = includeDraftsByDefault
  ): Post | undefined => {
    return getAllPosts(includeDrafts).find((post) => post.slug === slug)
  }
)
