import { describe, expect, it } from "vitest"

import {
  createBlogHref,
  filterPosts,
  getSearchParamValue,
} from "./post-filtering"
import type { Post } from "./post-queries"

function createPost(overrides: Partial<Post> = {}): Post {
  return {
    slug: "example",
    title: "Example article",
    date: "2026-01-01",
    tag: "Frontend",
    summary: "A practical React guide",
    content: "",
    draft: false,
    _meta: { path: "example" },
    ...overrides,
  }
}

describe("filterPosts", () => {
  const posts = [
    createPost(),
    createPost({
      slug: "terminal",
      title: "Terminal setup",
      tag: ["Tools", "Dotfiles"],
      summary: "A fast shell workflow",
      _meta: { path: "terminal" },
    }),
  ]

  it("preserves input order when filters are empty", () => {
    expect(filterPosts(posts, "", "")).toEqual(posts)
  })

  it("matches scalar and array tags without case or surrounding whitespace", () => {
    expect(filterPosts(posts, " frontend ", "")).toEqual([posts[0]])
    expect(filterPosts(posts, "DOTFILES", "")).toEqual([posts[1]])
  })

  it.each([
    ["example", posts[0]],
    ["shell", posts[1]],
    ["tools", posts[1]],
  ])("matches %s across title, summary, and tags", (query, post) => {
    expect(filterPosts(posts, "", query)).toEqual([post])
  })

  it("requires both the tag and query to match", () => {
    expect(filterPosts(posts, "Tools", "shell")).toEqual([posts[1]])
    expect(filterPosts(posts, "Frontend", "shell")).toEqual([])
  })

  it("returns no posts for unknown filters", () => {
    expect(filterPosts(posts, "Backend", "")).toEqual([])
    expect(filterPosts(posts, "", "database")).toEqual([])
  })
})

describe("getSearchParamValue", () => {
  it("uses the first value when Next.js provides an array", () => {
    expect(getSearchParamValue(["first", "second"])).toBe("first")
    expect(getSearchParamValue(undefined)).toBe("")
  })
})

describe("createBlogHref", () => {
  it("returns the blog route when no filters are present", () => {
    expect(createBlogHref({})).toBe("/blog")
  })

  it("encodes and preserves tag and query filters", () => {
    expect(createBlogHref({ tag: "React & Next", query: "RSC patterns" })).toBe(
      "/blog?tag=React+%26+Next&q=RSC+patterns"
    )
  })
})
