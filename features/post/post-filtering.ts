import type { Route } from "next"

import type { Post } from "@/features/post/post-queries"

export function getSearchParamValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : (value ?? "")
}

function getPostTags(tag: Post["tag"]) {
  return Array.isArray(tag) ? tag : [tag]
}

export function normalizePostFilter(value: string) {
  return value.trim().toLowerCase()
}

export function createBlogHref({
  tag,
  query,
}: {
  tag?: string
  query?: string
}) {
  const searchParams = new URLSearchParams()

  if (tag) searchParams.set("tag", tag)
  if (query) searchParams.set("q", query)

  const queryString = searchParams.toString()
  return (queryString ? `/blog?${queryString}` : "/blog") as Route
}

export function filterPosts(
  posts: readonly Post[],
  activeTag: string,
  query: string
) {
  const normalizedTag = normalizePostFilter(activeTag)
  const normalizedQuery = normalizePostFilter(query)

  return posts.filter((post) => {
    const tags = getPostTags(post.tag)
    const matchesTag = normalizedTag
      ? tags.some((tag) => normalizePostFilter(tag) === normalizedTag)
      : true

    if (!matchesTag) return false
    if (!normalizedQuery) return true

    const searchableText = [post.title, post.summary, ...tags]
      .join(" ")
      .toLowerCase()

    return searchableText.includes(normalizedQuery)
  })
}
