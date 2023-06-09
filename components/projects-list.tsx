import React from 'react'
import Link from 'next/link'

import { Card } from './card'
import { ArrowIcon } from './icons'
import { fetchProjects } from 'lib/notion-api'

interface Project {
  id: string
  properties: {
    Name: {
      title: [
        {
          plain_text: string
        }
      ]
    }
    Description: {
      rich_text: [
        {
          text: {
            content: string
          }
        }
      ]
    }
    link: {
      rich_text: [
        {
          href: string
        }
      ]
    }
  }
}

export async function ProjectsList() {
  const allProjects = (await fetchProjects()) as any as Project[] // Reset notion type which can always be different

  if (allProjects.length <= 0) return null

  return (
    <>
      <h4 className="text-3xl font-semibold underline-offset-auto">Projects</h4>
      <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((project: Project) => (
          <Card key={project.id}>
            <div className="p-5 ">
              <div className="max-w-xl text-xl font-bold">
                {project.properties.Name.title[0].plain_text}
              </div>
              <div className="py-5">{project.properties.Description.rich_text[0].text.content}</div>
              <div className="flex items-center">
                <Link
                  href={project.properties.link.rich_text[0].href}
                  target="_blank"
                  className="font-medium text-blue-600 duration-500 hover:underline dark:text-blue-500"
                >
                  Discover
                </Link>
                <ArrowIcon />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
