import { Mdx } from '@/components/mdx'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className="w-full py-16">
      <div className="mb-8 flex flex-col items-baseline justify-between gap-3">
        <h1 className="text-3xl font-heading md:text-4xl">{post.title}</h1>
        <time dateTime={post.date} className="mb-1 text-xs text-gray-400">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <Mdx code={post.body.code} />
    </article>
  )
}

export default PostLayout
