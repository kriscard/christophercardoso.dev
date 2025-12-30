import { siteConfig } from "@/lib/config"

import { SocialLinks } from "./social-links"

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mt-auto flex flex-col items-center p-10">
        <SocialLinks className="mb-3 flex space-x-4" />
        <div className="align-center mb-8 flex flex-row gap-2 text-sm text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{siteConfig.name}</div>
        </div>
      </div>
    </footer>
  )
}
