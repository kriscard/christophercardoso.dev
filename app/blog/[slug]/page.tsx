import { Suspense } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { siteConfig } from "@/lib/config"
import {
  PostDetail,
  PostDetailSkeleton,
} from "@/features/post/components/post-detail"
import { getAllPosts, getPostBySlug } from "@/features/post/post-queries"

export const dynamicParams = false

export const generateStaticParams = async () =>
  getAllPosts().map((post) => ({ slug: post._meta.path }))

export const generateMetadata = async (
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> => {
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

export default function PostPage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <Suspense fallback={<PostDetailSkeleton />}>
      {params.then(({ slug }) => (
        <PostDetail slug={slug} />
      ))}
    </Suspense>
  )
}
