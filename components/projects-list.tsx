import Link from "next/link"
import { projects, type Project } from "@/data/projects"

import { ArrowIcon } from "./icons"

interface ProjectListProps {
  hideHeading?: boolean
  compact?: boolean
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block cursor-pointer py-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark"
      aria-label={`Open ${project.title} project`}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-purple-600 dark:text-purple-300">
            {project.focus}
          </p>
          <h3 className="mt-3 text-balance font-heading text-2xl leading-snug tracking-tight text-gray-950 transition-colors group-hover:text-purple-600 dark:text-ctp-text dark:group-hover:text-purple-300 md:text-3xl">
            {project.title}
          </h3>
        </div>
        <ArrowIcon className="mt-2 size-4 shrink-0 text-gray-500 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-300" />
      </div>

      <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-gray-600 dark:text-gray-400">
        {project.description}
      </p>

      <p className="mt-4 font-mono text-xs leading-relaxed text-gray-500 dark:text-gray-400">
        {project.details.join(" / ")}
      </p>
    </Link>
  )
}

export function ProjectsList({ hideHeading }: ProjectListProps) {
  if (projects.length <= 0) return null

  return (
    <section id="projects">
      {hideHeading ? null : (
        <div className="mb-6 max-w-2xl">
          <h2 className="font-heading text-3xl tracking-tight text-gray-950 dark:text-ctp-text md:text-4xl">
            Projects
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            A tighter look at the tools and spaces I am shaping outside of work.
          </p>
        </div>
      )}
      <div className="divide-y divide-gray-200/80 border-b border-gray-200/80 dark:divide-ctp-surface0/80 dark:border-ctp-surface0/80">
        {projects.map((project) => (
          <ProjectCard key={project.href} project={project} />
        ))}
      </div>
    </section>
  )
}
