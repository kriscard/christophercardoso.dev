import Link from "next/link"
import { projects } from "@/data/projects"

import { ArrowIcon } from "./icons"

interface ProjectListProps {
  hideHeading?: boolean
}

export function ProjectsList({ hideHeading }: ProjectListProps) {
  if (projects.length <= 0) return null

  return (
    <section id="projects">
      {hideHeading ? null : (
        <h2 className="font-heading text-2xl tracking-tight md:text-3xl">
          Projects
        </h2>
      )}
      <div className="mt-2">
        {projects.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block cursor-pointer rounded-lg py-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark"
            aria-label={`Open ${project.title} project`}
          >
            <h3 className="inline-flex items-center gap-2 text-balance font-heading text-xl leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-purple-600 dark:text-ctp-text dark:group-hover:text-purple-300 md:text-2xl">
              {project.title}
              <ArrowIcon className="size-4 text-gray-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-300" />
            </h3>
            <p className="mt-2 max-w-prose text-base leading-relaxed text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
