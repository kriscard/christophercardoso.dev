import React from "react"

import { name } from "@/lib/info"

import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons"

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mt-auto flex flex-col items-center p-10">
        <div className="mb-3 flex space-x-4">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/kris_card"
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
            href="https://www.linkedin.com/in/christophercardoso/"
          >
            <LinkedinIcon />
          </a>
        </div>
        <div className="align-center mb-8 flex flex-row gap-2 text-sm text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{name}</div>
        </div>
      </div>
    </footer>
  )
}
