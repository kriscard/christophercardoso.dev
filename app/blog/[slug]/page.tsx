import { allPosts } from "@/lib/posts"
import { format, parseISO } from "date-fns"

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._meta.path }))

export const generateMetadata = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = allPosts.find((post) => post._meta.path === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  const { title, summary: description, date: publishedTime } = post

  const ogUrl = new URL("https://christophercardoso.dev/api/og")
  ogUrl.searchParams.set("title", title)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://www.christophercardoso.dev/blog/${params.slug}`,
      images: [
        {
          url: ogUrl.toString(),
          alt: title,
        },
      ],
      twitter: {
        title,
        description,
        card: "summary_large_image",
        images: [ogUrl.toString()],
      },
    },
  }
}

const PostLayout = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = allPosts.find((post) => post._meta.path === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  // Dynamic import of the MDX file
  const { default: MDXContent } = await import(`@/content/${post.slug}.mdx`)

  return (
    <article className="w-full py-16">
      <div className="mb-8 flex flex-col items-baseline justify-between gap-3">
        <h1 className="font-heading text-3xl md:text-4xl">{post.title}</h1>
        <time dateTime={post.date} className="mb-1 text-xs text-gray-400">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <MDXContent />
      </div>
    </article>
  )
}

export default PostLayout
