import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

import { Mdx } from '@/components/mdx'
import { getTagIcon } from '@/lib/utils'

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  const { title, summary: description, date: publishedTime, tag } = post
  const ogImage = getTagIcon(tag)
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://www.christophercardoso.dev/${params.slug}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
      twitter: {
        title,
        description,
        card: 'summary_large_image',
        image: ogImage,
      },
    },
  }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className="w-full py-16">
      <div className="mb-8 flex flex-col items-baseline justify-between gap-3">
        <h1 className="font-heading text-3xl md:text-4xl">{post.title}</h1>
        <time dateTime={post.date} className="mb-1 text-xs text-gray-400">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <Mdx code={post.body.code} />
    </article>
  )
}

export default PostLayout
