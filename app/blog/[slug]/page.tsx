import type { Metadata } from "next"
import { ViewTransition } from "react"
import { notFound } from "next/navigation"
import { format, parseISO } from "date-fns"

import { siteConfig } from "@/lib/config"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { calculateReadingTime } from "@/lib/reading-time"
import { MDXContent } from "@/components/mdx-components"
import MdxLayout from "@/components/mdx-layout"

export const dynamicParams = false

export const generateStaticParams = async () =>
  getAllPosts(false).map((post) => ({ slug: post._meta.path }))

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const params = await props.params
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const { title, summary: description, date: publishedTime, ogImage } = post

  const ogUrl = new URL("/api/og", siteConfig.url)
  ogUrl.searchParams.set("title", title)

  const imageUrl = ogImage
    ? new URL(ogImage, siteConfig.url).toString()
    : ogUrl.toString()
  const postUrl = new URL(`/blog/${params.slug}`, siteConfig.url).toString()

  return {
    title,
    description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: postUrl,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: [imageUrl],
    },
  }
}

const PostLayout = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article className="w-full py-12 md:py-20">
      <div className="mb-12 space-y-4">
        <ViewTransition
          name={`post-title-${params.slug}`}
          share="text-morph"
          default="none"
        >
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {post.title}
          </h1>
        </ViewTransition>
        <time
          dateTime={post.date}
          className="block text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400"
        >
          {format(parseISO(post.date), "MMMM d, yyyy")} · {calculateReadingTime(post.content)} min read
        </time>
      </div>
      <MdxLayout>
        <MDXContent source={post.content} />
      </MdxLayout>
    </article>
  )
}

export default PostLayout
