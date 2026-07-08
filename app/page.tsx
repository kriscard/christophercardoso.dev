import { PostsList } from "@/features/post/components/posts-list"
import { PresentationBanner } from "@/components/presentation-banner"
import { ProjectsList } from "@/components/projects-list"

export default function HomePage() {
  return (
    <section>
      <PresentationBanner />
      <div className="space-y-10 pb-10 pt-2 md:space-y-12 md:pb-12">
        <PostsList />
        <ProjectsList />
      </div>
    </section>
  )
}
