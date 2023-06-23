import React from 'react'
import Image from 'next/image'

import { description, hi, name } from 'lib/info'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './icons'
import avatar from '../app/avatar.jpg'

export function PresentationBanner() {
  return (
    <div className="flex items-center py-14">
      <div className="flex flex-col">
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
  )
}
