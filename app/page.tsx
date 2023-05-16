import Image from 'next/image'

import { description, hi, name } from 'lib/info'
import avatar from '../app/avatar.jpg'
import { GithubIcon, TwitterIcon, LinkedinIcon, ArrowIcon } from '@components/icons'
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

const dummyProjects = [
  {
    title: 'Crypto Price Viewer',
    description: 'An app to visualize the current price of your favorite crypto',
    link: 'https://www.google.com/',
  },
  {
    title: 'Vinyl finder',
    description: 'Find your favorites vinyles with ease',
    link: 'https://www.google.com/',
  },
  {
    title: 'Coming soon',
    description: 'TBD',
    link: 'https://www.google.com/',
  },
]

// TODO: [X] Add a latest blog section
// TODO: [] Add a projects section
// TODO: [] Add a footer
// TODO: [] Add Dark Mode https://tailwindcss.com/docs/dark-mode
// TODO: [] Create a burger menu for the nave when we are on mobile
// TODO: [] Add monolisa font for web + fallback
// TODO: [] Setup Notion Api

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
              <GithubIcon />
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
        <h4 className="text-3xl font-semibold underline-offset-auto">Projects</h4>
        <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {dummyProjects.map(({ title, description, link }, index) => (
            <Card key={index}>
              <div className="p-5 ">
                <div className="max-w-xl text-xl font-bold">{title}</div>
                <div className="py-5">{description}</div>
                <div className="flex items-center">
                  <Link
                    href={link}
                    target="_blank"
                    className="font-medium text-blue-600 duration-500 hover:underline dark:text-blue-500"
                  >
                    Discover
                  </Link>
                  <ArrowIcon />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
