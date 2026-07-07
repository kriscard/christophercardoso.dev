import { siteConfig } from "@/lib/config"
import { getAllPosts } from "@/features/post/post-queries"

const staticRoutes = ["/", "/about", "/blog", "/projects", "/uses"]

function getSiteUrl(route: string) {
  if (route === "/") return siteConfig.url

  return new URL(route, siteConfig.url).toString()
}

export default async function sitemap() {
  const blogs = getAllPosts(false).map((post) => ({
    url: new URL(`/blog/${post._meta.path}`, siteConfig.url).toString(),
    lastModified: post.date,
  }))

  const routes = staticRoutes.map((route) => ({
    url: getSiteUrl(route),
  }))

  return [...routes, ...blogs]
}
