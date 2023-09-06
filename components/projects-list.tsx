import React from "react"
import Link from "next/link"

import { Project } from "@/types/types"

import { Card } from "./card"
import { ArrowIcon } from "./icons"

interface ProjectListProps {
  projects: Project[]
}

interface ProjectCardProps {
  id: string
  title: string
  description: string
  href: string
}

function ProjectCard({ id, title, description, href }: ProjectCardProps) {
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
        {projects.map((project: Project) => (
          <ProjectCard
            id={project.id}
            title={project.properties.Name.title[0].plain_text}
            description={
              project.properties.Description.rich_text[0].text.content
            }
            href={project.properties.link.rich_text[0].href}
          />
        ))}
      </div>
    </div>
  )
}
