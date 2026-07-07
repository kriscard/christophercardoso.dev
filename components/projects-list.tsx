import Link from "next/link"
import { projects, type Project } from "@/data/projects"

import { ArrowIcon } from "./icons"
import {
  TeaserCard,
  TeaserCardAction,
  TeaserCardBody,
  TeaserCardDescription,
  TeaserCardTitle,
} from "./teaser-card"

interface ProjectListProps {
  hideHeading?: boolean
}

function ProjectCard({ title, description, href }: Project) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/card focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2"
      aria-label={`Open ${title} project`}
    >
      <TeaserCard className="md:min-h-52">
        <TeaserCardBody>
          <TeaserCardTitle className="text-xl md:text-2xl">
            {title}
          </TeaserCardTitle>
          <TeaserCardDescription>{description}</TeaserCardDescription>
          <TeaserCardAction className="font-mono text-sm text-purple-600 dark:text-purple-400">
            <span>Discover</span>
            <ArrowIcon className="size-5 text-gray-500 transition-transform duration-200 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:text-purple-600 dark:group-hover/card:text-purple-300" />
          </TeaserCardAction>
        </TeaserCardBody>
      </TeaserCard>
    </Link>
  )
}

export function ProjectsList({ hideHeading }: ProjectListProps) {
  if (projects.length <= 0) return null

  return (
    <section id="projects">
      {hideHeading ? null : (
        <h2 className="mb-6 font-heading text-2xl md:text-3xl">Projects</h2>
      )}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} />
        ))}
      </div>
    </section>
  )
}
