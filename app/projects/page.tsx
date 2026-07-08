import type { Metadata } from "next"

import { siteConfig } from "@/lib/config"
import { ProjectsList } from "@/components/projects-list"

const description =
  "Projects by Christopher Cardoso, including developer tools and this Next.js portfolio system."

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: {
    canonical: new URL("/projects", siteConfig.url).toString(),
  },
  openGraph: {
    title: "Projects by Christopher Cardoso",
    description,
    url: new URL("/projects", siteConfig.url).toString(),
    type: "website",
  },
  twitter: {
    title: "Projects by Christopher Cardoso",
    description,
    card: "summary_large_image",
  },
}

export default function Projects() {
  return (
    <div className="py-8 md:py-12">
      <header className="mb-10 border-b border-gray-200/80 pb-10 pt-4 dark:border-ctp-surface0/80 md:mb-12 md:pb-12 md:pt-8">
        <h1 className="max-w-[11ch] text-balance font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-gray-950 dark:text-ctp-text md:text-7xl">
          Projects
        </h1>
        <p className="mt-6 w-full text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Side projects, learning projects, open-source work, SaaS ideas, and
          experiments. Some are practical, some are just for fun, all are things
          I wanted to build.
        </p>
      </header>
      <ProjectsList hideHeading />
    </div>
  )
}
