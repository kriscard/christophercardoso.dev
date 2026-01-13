import { format, parseISO } from "date-fns"

import { allPosts } from "@/lib/posts"
import { MDXContent } from "@/components/mdx-components"
import MdxLayout from "@/components/mdx-layout"

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._meta.path }))

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>
}) => {
  const params = await props.params
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
  const params = await props.params
  const post = allPosts.find((post) => post._meta.path === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className="w-full py-12 md:py-20">
      <div className="mb-12 space-y-4">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <time
          dateTime={post.date}
          className="block text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400"
        >
          {format(parseISO(post.date), "MMMM d, yyyy")} · {Math.ceil(post.content.split(/\s+/).length / 200)} min read
        </time>
      </div>
      <MdxLayout>
        <MDXContent source={post.content} />
      </MdxLayout>
    </article>
  )
}

export default PostLayout
