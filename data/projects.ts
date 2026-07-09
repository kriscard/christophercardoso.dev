export interface Project {
  title: string
  description: string
  href: `https://${string}`
  focus: string
}

export const projects: Project[] = [
  {
    title: "Readme.ai",
    description:
      "A developer tool for turning a project idea into a usable README draft without starting from a blank file.",
    focus: "Developer tooling",
    href: "https://github.com/kriscard/readme-ai",
  },
  {
    title: "christophercardoso.dev",
    description:
      "The site you are reading now, built as a small Next.js system for MDX writing, project notes, and a Catppuccin theme.",
    focus: "Personal site",
    href: "https://github.com/kriscard/christophercardoso.dev",
  },
]
