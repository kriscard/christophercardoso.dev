import Link from "next/link"
import { Project } from "@/data/projects"

import { Card } from "./card"
import { ArrowIcon } from "./icons"

interface ProjectListProps {
  projects: Project[]
}

function ProjectCard({ title, description, href }: Project) {
  return (
    <Card className="h-full">
      <div className="flex h-full flex-col gap-4 p-6">
        <h3 className="font-heading text-xl leading-tight md:text-2xl text-gray-900 dark:text-gray-50">
          {title}
        </h3>
        <p className="flex-1 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>
        <div className="flex items-center gap-1">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            aria-label={`Discover ${title} project`}
          >
            Discover
          </Link>
          <ArrowIcon />
        </div>
      </div>
    </Card>
  )
}

export function ProjectsList({ projects }: ProjectListProps) {
  if (projects.length <= 0) return null

  return (
    <section id="projects">
      <h2 className="mb-6 font-heading text-2xl md:text-3xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} />
        ))}
      </div>
    </section>
  )
}
