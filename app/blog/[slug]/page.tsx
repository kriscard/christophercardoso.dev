import { format, parseISO } from "date-fns"

import { allPosts } from "@/lib/posts"
import { MDXContent } from "@/components/mdx-components"
import MdxLayout from "@/components/mdx-layout"

// Called at module level to avoid ESLint react-hooks/rules-of-hooks error
// (useMDXComponents is not a real hook, just named with "use" prefix by convention)

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
    <article className="w-full py-16">
      <div className="mb-8 flex flex-col items-baseline justify-between gap-3">
        <h1 className="font-heading text-3xl md:text-4xl">{post.title}</h1>
        <time dateTime={post.date} className="mb-1 text-xs text-gray-400">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <MdxLayout>
        <MDXContent source={post.content} />
      </MdxLayout>
    </article>
  )
}

export default PostLayout
