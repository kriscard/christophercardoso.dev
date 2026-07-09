import type { Route } from "next"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/lib/config"

import avatar from "../app/avatar.jpg"
import { ArrowIcon } from "./icons"
import { SocialLinks } from "./social-links"

const heroLinks: { href: Route; label: string }[] = [
  { href: "/blog", label: "Read articles" },
  { href: "/projects", label: "View projects" },
]

export function PresentationBanner() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-6 md:gap-8">
          <div className="max-w-3xl">
            <h1 className="max-w-[11ch] text-balance font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-gray-950 dark:text-ctp-text sm:max-w-[13ch] sm:text-6xl lg:text-7xl">
              {siteConfig.hi}
            </h1>
            <p className="mt-6 max-w-[58ch] text-pretty text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
              {siteConfig.bio}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-3">
              {heroLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    index === 0
                      ? "inline-flex min-h-touch items-center justify-center rounded-lg bg-purple-600 px-5 font-mono text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-purple-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray active:translate-y-0 dark:bg-purple-300 dark:text-ctp-crust dark:hover:bg-purple-200 dark:focus-visible:ring-offset-dark"
                      : "inline-flex min-h-touch items-center justify-center rounded-lg border border-gray-300/80 px-5 font-mono text-sm font-medium text-gray-800 transition duration-200 hover:-translate-y-0.5 hover:border-purple-500/50 hover:text-purple-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray active:translate-y-0 dark:border-ctp-surface1 dark:text-ctp-text dark:hover:border-purple-300/50 dark:hover:text-purple-300 dark:focus-visible:ring-offset-dark"
                  }
                >
                  {link.label}
                  {index === 0 ? <ArrowIcon className="ml-2 size-4" /> : null}
                </Link>
              ))}
            </div>
            <SocialLinks className="flex w-fit items-center gap-2 sm:ml-1" />
          </div>
        </div>

        <div className="hidden lg:block">
          <Image
            alt={siteConfig.name}
            className="aspect-square rounded-2xl object-cover"
            src={avatar}
            placeholder="blur"
            width={288}
            priority
          />
          <p className="mt-5 border-l border-purple-500/40 pl-4 font-mono text-xs uppercase tracking-[0.18em] text-purple-600 dark:text-purple-300">
            Based in Toronto
          </p>
          <p className="mt-2 max-w-68 pl-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            I write about tech, tools I like, side projects, and what I’m
            learning along the way.
          </p>
        </div>
      </div>
    </section>
  )
}
