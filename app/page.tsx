import { projects } from "@/data/projects"
import { BlogsList } from "@/components/posts-list"
import { PresentationBanner } from "@/components/presentation-banner"
import { ProjectsList } from "@/components/projects-list"

export default function HomePage() {
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
