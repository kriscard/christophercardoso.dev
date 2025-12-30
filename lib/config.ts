export const siteConfig = {
  name: "Christopher Cardoso",
  url: "https://christophercardoso.dev",
  social: {
    twitter: "https://x.com/kris_card",
    github: "https://github.com/kriscard",
    linkedin: "https://www.linkedin.com/in/christophercardoso/",
  },
} as const

export type SiteConfig = typeof siteConfig
