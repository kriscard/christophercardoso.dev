import { siteConfig } from "@/lib/config"
import { getAllPosts } from "@/lib/posts"

const staticRoutes = ["", "/about", "/blog", "/projects", "/uses"]

export default async function sitemap() {
  const blogs = getAllPosts().map((post) => ({
    url: new URL(`/blog/${post._meta.path}`, siteConfig.url).toString(),
    lastModified: post.date,
  }))

  const routes = staticRoutes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
  }))

  return [...routes, ...blogs]
}
