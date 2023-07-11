import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h3 className="max-w-2xl font-heading text-xl md:text-2xl">
        <Link href={post.url} className="text-white-700 dark:text-white-400 hover:underline">
          {post.title}
        </Link>
      </h3>
      <time dateTime={post.date} className="mb-2 block font-mono text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mt-16 max-w-xl py-8">
      <h1 className="mb-8 font-heading text-3xl md:text-4xl">Articles</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
