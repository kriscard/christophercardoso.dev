import { allPosts } from "@/lib/posts"

export default async function sitemap() {
  const blogs = allPosts.map((post) => ({
    url: `https://christophercardoso.dev/blog/${post._meta.path}`,
    lastModified: post.date,
  }))

  const routes = ["", "/about", "/blog"].map((route) => ({
    url: `https://christophercardoso.dev${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
