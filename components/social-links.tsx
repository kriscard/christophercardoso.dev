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
      >
        <TwitterIcon aria-hidden="true" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={siteConfig.social.github}
        aria-label="View GitHub profile"
      >
        <GithubIcon aria-hidden="true" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={siteConfig.social.linkedin}
        aria-label="Connect on LinkedIn"
      >
        <LinkedinIcon aria-hidden="true" />
      </a>
    </div>
  )
}
