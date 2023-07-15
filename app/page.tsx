import { BlogsList } from '@/components/posts-list'
import { PresentationBanner } from '@/components/presentation-banner'
import { ProjectsList } from '@/components/projects-list'
import { fetchProjects } from 'lib/notion-api'
import { Project } from 'types/types'

// TODO: [X] Add a latest blog section
// TODO: [X] Add a projects section
// TODO: [X] Add a footer
// TODO: [X] Setup Notion Api
// TODO: [X] Add Dark Mode https://tailwindcss.com/docs/dark-mode
// TODO: [X] Add new font for web + fallback
// TODO: [X] Make header responsive
// TODO: [X] Add a About me section
// TODO: [] Setup Meta Data per page
// TODO: [] Setup Analytics
// TODO: [] Create 3 articles
// TODO: [] deploy and match domain name

export default async function HomePage() {
  const projects = (await fetchProjects()) as any as Project[] // Reset notion type which can always be different

  return (
    <section>
      <PresentationBanner />
      <div className="py-16 md:py-20">
        <BlogsList />
        <ProjectsList projects={projects} />
      </div>
    </section>
  )
}
