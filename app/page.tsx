import Image from 'next/image'

import { description, hi, name } from 'lib/info'
import avatar from '../app/avatar.jpg'
import { GitHubIcon, TwitterIcon, LinkedinIcon } from '@components/icons'
import { Card } from '@components/Card'

// TODO: Add a blog section
// TODO: Add a projects section
// TODO: Add Dark Mode https://tailwindcss.com/docs/dark-mode
export default function HomePage() {
  return (
    <section>
      <div className="flex items-center justify-between py-20">
        <div>
          <h3 className="mb-5 text-5xl">{hi()}</h3>
          <p className="max-w-2xl text-2xl">{description()}</p>
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
            className="invisible rounded-full md:visible md:w-60 lg:visible xl:visible"
            src={avatar}
            placeholder="blur"
            width={300}
            priority
          />
        </div>
      </div>
      <div>
        <h4 className="mb-5 text-3xl underline underline-offset-auto">Latest Posts</h4>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* TODO: Display blog list with a card component*/}
          <Card>
            <p className="max-w-2xl text-2xl">Hello World</p>
          </Card>
          <Card>
            <p className="max-w-2xl text-2xl">Hello World</p>
          </Card>
          <Card>
            <p className="max-w-2xl text-2xl">Hello World</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
