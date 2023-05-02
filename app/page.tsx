import Image from 'next/image'

import { description, hi, name } from 'lib/info'
import avatar from '../app/avatar.jpg'
import { GitHubIcon, TwitterIcon, LinkedinIcon, ArrowIcon } from '@components/icons'
import { Card } from '@components/Card'
import Link from 'next/link'
import SectionContainer from '@components/SectionContainer'

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

// TODO: Add a latest blog section
// TODO: Add a projects section
// TODO: Add Dark Mode https://tailwindcss.com/docs/dark-mode
// TODO: Create a burger menu for the nave when we are on mobile
// TODO: Setup Notion Api

export default function HomePage() {
  return (
    <section>
      <div className="flex items-center">
        <div className="flex flex-col py-16 md:py-20">
          <h3 className="mb-5 text-2xl md:text-5xl">{hi()}</h3>
          <p className="max-w-2xl text-base lg:text-2xl">{description()}</p>
          <div
            className="mt-6 flex w-fit items-center justify-between
            gap-3"
          >
            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/kris_card">
              <TwitterIcon />
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/kriscard">
              <GitHubIcon />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://ca.linkedin.com/in/christophercardoso"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <div>
          <Image
            alt={name}
            className="hidden rounded-full shadow-xl shadow-purple-500/40 duration-500 hover:shadow-indigo-500/40 md:block"
            src={avatar}
            placeholder="blur"
            width={300}
            priority
          />
        </div>
      </div>
      <div className="py-16 md:py-20">
        <h4 className="mb-5 text-3xl underline underline-offset-auto">Latest Posts</h4>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* TODO: Display blog list with a card component*/}
          {dummyData.map((data, index) => (
            <Card key={index}>
              <div>
                <Image
                  alt={data.imageAlt}
                  className="w-[100%] rounded-lg object-contain"
                  src={data.image}
                  height={274}
                  width={405}
                />
                <div className="flex flex-col gap-4 p-5">
                  <p className="text-md max-w-2xl text-purple-500/40">{data.tag}</p>
                  <p className="max-w-2xl text-2xl">{data.title}</p>
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
      </div>
    </section>
  )
}
