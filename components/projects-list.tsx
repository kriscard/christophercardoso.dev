import Link from "next/link"
import { Project } from "@/data/projects"

import { ArrowIcon } from "./icons"
import {
  TeaserCard,
  TeaserCardAction,
  TeaserCardBody,
  TeaserCardDescription,
  TeaserCardTitle,
} from "./teaser-card"

interface ProjectListProps {
  projects: Project[]
}

function ProjectCard({ title, description, href }: Project) {
  return (
    <TeaserCard>
      <TeaserCardBody>
        <TeaserCardTitle className="text-xl md:text-2xl">
          {title}
        </TeaserCardTitle>
        <TeaserCardDescription className="flex-1">
          {description}
        </TeaserCardDescription>
        <TeaserCardAction>
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
        </TeaserCardAction>
      </TeaserCardBody>
    </TeaserCard>
  )
}

export function ProjectsList({ projects }: ProjectListProps) {
  if (projects.length <= 0) return null

  return (
    <section id="projects">
      <h2 className="mb-6 font-heading text-2xl md:text-3xl">Projects</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} />
        ))}
      </div>
    </section>
  )
}
