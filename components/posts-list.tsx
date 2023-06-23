import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { compareDesc } from 'date-fns'

import { Card } from './card'
import { allPosts, Post } from 'contentlayer/generated'
import { getTagIcon } from '@/lib/utils'

interface BlogCardProps {
  title: Post['title'],
  tag: Post['tag']
  summary: Post['summary']
}

function BlogCard({ tag, title, summary }: BlogCardProps) {

  const icon = getTagIcon(tag)

  return (
    <Card key={crypto.randomUUID()}>
      <div className="flex flex-col gap-4 p-5">
        {icon && <Image src={icon} width={30} height={30} alt={tag} />}
        <h3 className="max-w-2xl text-2xl font-semibold">{title}</h3>
        <p className="max-w-2xl text-md">{summary}</p>
        <div className="flex items-center">
          <Link
            href="#"
            className="font-medium text-blue-600 duration-500 hover:underline dark:text-blue-500 hidden md:block"
          >
            Read more
          </Link>
        </div>
      </div>
    </Card>
  )
}

export function BlogsList() {

  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
      {recentPosts.map(({ title, tag, summary }: Post) => (
        <BlogCard tag={tag} title={title} summary={summary} />
      ))}
    </div>
  )
}
