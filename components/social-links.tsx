import { siteConfig } from "@/lib/config"

import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons"

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={className}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={siteConfig.social.twitter}
        aria-label="Follow on Twitter"
        className="min-h-touch min-w-touch flex items-center justify-center"
      >
        <TwitterIcon aria-hidden="true" className="size-icon-lg" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={siteConfig.social.github}
        aria-label="View GitHub profile"
        className="min-h-touch min-w-touch flex items-center justify-center"
      >
        <GithubIcon aria-hidden="true" className="size-icon-lg" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={siteConfig.social.linkedin}
        aria-label="Connect on LinkedIn"
        className="min-h-touch min-w-touch flex items-center justify-center"
      >
        <LinkedinIcon aria-hidden="true" className="size-icon-lg" />
      </a>
    </div>
  )
}
