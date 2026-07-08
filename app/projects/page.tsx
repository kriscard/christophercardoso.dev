import type { Metadata } from "next"

import { siteConfig } from "@/lib/config"
import { PageHeader } from "@/components/page-header"
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
      <PageHeader
        title="Projects"
        className="mb-10 md:mb-12"
        titleClassName="max-w-[11ch] text-balance"
      >
        Side projects, learning projects, open-source work, SaaS ideas, and
        experiments. Some are practical, some are just for fun, all are things I
        wanted to build.
      </PageHeader>
      <ProjectsList hideHeading />
    </div>
  )
}
