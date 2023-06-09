import { PresentationBanner } from '@components/presentation-banner'
import { BlogsList } from '@components/posts-list'
import { ProjectsList } from '@components/projects-list'

// TODO: [X] Add a latest blog section
// TODO: [X] Add a projects section
// TODO: [X] Add a footer
// TODO: [] Add Dark Mode https://tailwindcss.com/docs/dark-mode
// TODO: [] Create a burger menu for the nave when we are on mobile
// TODO: [] Add monolisa font for web + fallback
// TODO: [] Setup Notion Api

export default function HomePage() {
  return (
    <section>
      <PresentationBanner />
      <div className="py-16 md:py-20">
        <BlogsList />
        <ProjectsList />
      </div>
    </section>
  )
}
