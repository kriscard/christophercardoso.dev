import { siteConfig } from "@/lib/config"

import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons"

interface SocialLinksProps {
  className?: string
}

const socialLinkClass =
  "flex min-h-touch min-w-touch items-center justify-center rounded-lg text-gray-800 transition-colors duration-200 hover:bg-purple-500/10 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:text-gray-100 dark:hover:bg-purple-400/10 dark:hover:text-purple-300 dark:focus-visible:ring-offset-dark"

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={className}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={siteConfig.social.twitter}
        aria-label="Follow on Twitter"
        className={socialLinkClass}
      >
        <TwitterIcon aria-hidden="true" className="size-icon-lg" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={siteConfig.social.github}
        aria-label="View GitHub profile"
        className={socialLinkClass}
      >
        <GithubIcon aria-hidden="true" className="size-icon-lg" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={siteConfig.social.linkedin}
        aria-label="Connect on LinkedIn"
        className={socialLinkClass}
      >
        <LinkedinIcon aria-hidden="true" className="size-icon-lg" />
      </a>
    </div>
  )
}
