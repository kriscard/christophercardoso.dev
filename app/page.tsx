import { projects } from "@/data/projects"

import { PostsList } from "@/components/posts-list"
import { PresentationBanner } from "@/components/presentation-banner"
import { ProjectsList } from "@/components/projects-list"

export default function HomePage() {
  return (
    <section>
      <PresentationBanner />
      <div className="space-y-16 py-8">
        <PostsList />
        <ProjectsList projects={projects} />
      </div>
    </section>
  )
}
