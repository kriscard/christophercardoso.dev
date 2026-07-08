import { siteConfig } from "@/lib/config"
import { ProjectsList } from "@/components/projects-list"

export const metadata = {
  title: "Projects",
  description: "Projects built by Christopher Cardoso.",
  alternates: {
    canonical: new URL("/projects", siteConfig.url).toString(),
  },
}

export default function Projects() {
  return (
    <div className="py-8 md:py-12">
      <header className="mb-8 max-w-3xl md:mb-10">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Projects
        </h1>
        <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Things I build outside of work, mostly in public.
        </p>
      </header>
      <ProjectsList hideHeading />
    </div>
  )
}
