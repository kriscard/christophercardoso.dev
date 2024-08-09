import { allPosts } from "content-collections"
import { format, parseISO } from "date-fns"

import { Mdx } from "@/components/mdx"

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._meta.path }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
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

const PostLayout = ({ params }: { params: { slug: string } }) => {
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
      <Mdx code={post.mdx} />
    </article>
  )
}

export default PostLayout
