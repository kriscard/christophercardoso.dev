export interface Project {
  id: string
  title: string
  description: string
  href: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Readme.ai",
    description: "Create your Readme file in seconds. I'm building this in public.",
    href: "https://github.com/kriscard/readme-ai",
  },
  {
    id: "2",
    title: "christophercardoso.dev",
    description: "My portfolio built with Next.js, Tailwind CSS, ContentLayer, and Vercel.",
    href: "https://github.com/kriscard/christophercardoso.dev",
  },
]
