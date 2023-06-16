import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Card } from './card'
import { ArrowIcon } from './icons'
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
          <ArrowIcon />
        </div>
      </div>
    </Card>
  )
}

export function BlogsList() {
  return (
    <>
      <h3 className="text-4xl font-semibold underline-offset-auto mb-6">Latest Posts</h3>
      <div className="flex flex-row w-full gap-8">
        {allPosts.map(({ title, tag, summary }: Post) => (
          <BlogCard tag={tag} title={title} summary={summary} />
        ))}
      </div>
    </>
  )
}
