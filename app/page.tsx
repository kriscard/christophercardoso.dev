import { PostsList } from "@/features/post/components/posts-list"
import { ProjectsSection } from "@/features/project/components/projects-list"
import { PresentationBanner } from "@/components/presentation-banner"

export default function HomePage() {
  return (
    <div className="pb-12 pt-2 md:pb-16">
      <PresentationBanner />
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start lg:gap-8 xl:gap-10">
        <PostsList />
        <div className="lg:sticky lg:top-8">
          <ProjectsSection />
        </div>
      </div>
    </div>
  )
}
