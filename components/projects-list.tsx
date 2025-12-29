import Link from "next/link"

import { Project } from "@/data/projects"

import { Card } from "./card"
import { ArrowIcon } from "./icons"

interface ProjectListProps {
  projects: Project[]
}

function ProjectCard({ id, title, description, href }: Project) {
  return (
    <Card key={id} className="p-0">
      <div className="p-5">
        <h3 className="max-w-2xl font-heading text-lg md:text-xl">{title}</h3>
        <p className="max-w-2x text-md py-5 text-xl lg:text-lg">
          {description}
        </p>
        <div className="flex items-center">
          <Link
            href={href}
            target="_blank"
            className="font-mono text-blue-600 duration-500 dark:text-blue-500"
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
    <div className="py-4" id="projects">
      <h2 className="font-heading text-2xl md:text-3xl">Projects</h2>
      <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}
