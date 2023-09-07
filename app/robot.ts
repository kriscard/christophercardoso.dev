import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://christophercardoso.dev/sitemap.xml",
    host: "https://christophercardoso.dev",
  }
}
