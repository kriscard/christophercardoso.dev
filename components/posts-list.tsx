import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { compareDesc } from 'date-fns'

import { Card } from './card'
import { allPosts, Post } from 'contentlayer/generated'
import { getTagIcon } from '@/lib/utils'
import { ArrowIcon } from './icons'

interface BlogCardProps {
  title: Post['title'],
  tag: Post['tag']
  summary: Post['summary']
  url: Post['url']
}

function BlogCard({ tag, title, summary, url }: BlogCardProps) {

  const icon = getTagIcon(tag)

  return (
    <Card key={crypto.randomUUID()}>
      <div className="flex flex-col gap-4 p-5 h-auto">
        {icon && <Image src={icon} width={30} height={30} alt={tag} />}
        <h3 className="max-w-2xl text-xl font-heading md:tex-2xl">{title}</h3>
        <p className="max-w-2xl text-md font-mono">{summary}</p>
        <div className="flex items-center">
          <Link
            href={url}
            className="text-blue-600 duration-500 hover:underline dark:text-blue-500 font-mono" >
            Read more
          </Link>
          <ArrowIcon />
        </div>
      </div>
    </Card>
  )
}

export function BlogsList() {

  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="py-5">
      <h2 className="text-2xl font-heading md:text-3xl">My Recent Posts</h2>
      <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map(({ _id, title, tag, summary, url }: Post) => (
          <BlogCard key={_id} tag={tag} title={title} summary={summary} url={url} />
        ))}
      </div>
    </div>
  )
}
