import { BlogsList } from '@/components/posts-list'
import { PresentationBanner } from '@/components/presentation-banner'
import { ProjectsList } from '@/components/projects-list'
import { fetchProjects } from 'lib/notion-api'
import { Suspense } from 'react'
import { Project } from 'types/types'

// TODO: [X] Add a latest blog section
// TODO: [X] Add a projects section
// TODO: [X] Add a footer
// TODO: [X] Setup Notion Api
// TODO: [] Add Dark Mode https://tailwindcss.com/docs/dark-mode
// TODO: [] Create a burger menu for the nave when we are on mobile
// TODO: [] Add monolisa font for web + fallback

export default async function HomePage() {
  const projects = (await fetchProjects()) as any as Project[] // Reset notion type which can always be different

  return (
    <section>
      <PresentationBanner />
      <div className="py-16 md:py-20">
        <Suspense>
          <BlogsList />
          <ProjectsList projects={projects} />
        </Suspense>
      </div>
    </section>
  )
}
