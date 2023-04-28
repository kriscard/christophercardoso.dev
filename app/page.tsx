import Image from 'next/image'

import { description, hi } from 'lib/info'
import avatar from '../app/avatar.jpg'
import { GitHubIcon, TwitterIcon, LinkedinIcon } from '@components/icons'

// TODO: Add a blog section
// TODO: Add a projects section
// TODO: Add Dark Mode https://tailwindcss.com/docs/dark-mode
export default function HomePage() {
  return (
    <section>
      <div className="flex items-center  justify-between p-10">
        <div>
          <h3 className="mb-5 text-5xl">{hi()}</h3>
          <p className="max-w-md text-2xl">{description()}</p>
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
              href="https://linkedin.com/in/christophercardoso"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <div>
          <Image
            // alt={name}
            alt="Christopher Cardoso"
            className="rounded-full"
            src={avatar}
            placeholder="blur"
            width={300}
            priority
          />
        </div>
      </div>
    </section>
  )
}
