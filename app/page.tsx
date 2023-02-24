import Image from 'next/image'

import { description, hi } from 'lib/info'
import avatar from '../app/avatar.jpg'

// TODO: Add social media links (github, linkedin, twitter)
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
