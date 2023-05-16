import React from 'react'

import { GithubIcon, TwitterIcon, LinkedinIcon } from './icons'
import { name } from 'lib/info'

function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center p-10">
        <div className="mb-3 flex space-x-4">
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/kriscard">
            <TwitterIcon />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/kriscard">
            <GithubIcon />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/kriscard">
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

export default Footer
