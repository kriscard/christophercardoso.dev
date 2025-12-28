import Image from "next/image"

import { description, hi, name } from "@/lib/info"

import avatar from "../app/avatar.jpg"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons"

export function PresentationBanner() {
  return (
    <div className="flex items-center py-14">
      <div className="flex flex-col">
        <h1 className="mb-5 font-heading text-3xl md:text-4xl">{hi()}</h1>
        <p className="max-w-xl text-xl lg:text-xl">{description()}</p>
        <div
          className="mt-6 flex w-fit items-center justify-between
            gap-3"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/kris_card"
          >
            <TwitterIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/kriscard"
          >
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
