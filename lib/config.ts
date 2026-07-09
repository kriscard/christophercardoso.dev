export const siteConfig = {
  name: "Christopher Cardoso",
  url: "https://www.christophercardoso.dev",
  hi: "Hey! I'm Christopher",
  bio: "I'm a software developer based in Toronto who loves exploring and learning about software development while building cool projects.",
  description:
    "Frontend engineering notes, dotfiles, projects, and developer writing from Christopher Cardoso.",
  blogDescription:
    "Articles by Christopher Cardoso about frontend engineering, terminal workflows, dotfiles, and developer tools.",
  social: {
    twitter: "https://x.com/kris_card",
    github: "https://github.com/kriscard",
    linkedin: "https://www.linkedin.com/in/christophercardoso/",
  },
} as const

export type SiteConfig = typeof siteConfig
