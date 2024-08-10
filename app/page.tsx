import { Project } from "@/types/types"
import { fetchProjects } from "@/lib/notion-api"
import { BlogsList } from "@/components/posts-list"
import { PresentationBanner } from "@/components/presentation-banner"
import { ProjectsList } from "@/components/projects-list"

export default async function HomePage() {
  // const projects = (await fetchProjects()) as any as Project[] // Reset notion type which can always be different

  const projects = []
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
