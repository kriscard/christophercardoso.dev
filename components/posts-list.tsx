import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Card } from './card'
import { ArrowIcon } from './icons'

const dummyData = [
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    imageAlt: 'generics',
    tag: 'Typescript',
    title: 'How to use generics in Typescript',
  },
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    imageAlt: 'generics',
    tag: 'Typescript',
    title: 'How to use generics in Typescript',
  },
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    imageAlt: 'generics',
    tag: 'Typescript',
    title: 'How to use generics in Typescript',
  },
]

export function BlogsList() {
  return (
    <>
      <h4 className="text-3xl font-semibold underline-offset-auto">Latest Posts</h4>
      <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {dummyData.map(({ imageAlt, image, tag, title }, index) => (
          <Card key={index}>
            <div>
              <Image
                alt={imageAlt}
                className="w-[100%] rounded-lg object-contain"
                src={image}
                height={274}
                width={405}
              />
              <div className="flex flex-col gap-4 p-5">
                <p className="text-md max-w-2xl text-purple-500/40">{tag}</p>
                <p className="max-w-2xl text-2xl">{title}</p>
                <div className="flex items-center">
                  <Link
                    href="#"
                    className="font-medium text-blue-600 duration-500 hover:underline dark:text-blue-500"
                  >
                    Read more
                  </Link>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
