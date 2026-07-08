import Image from "next/image"

import { description, hi, name } from "@/lib/info"

import avatar from "../app/avatar.jpg"
import { SocialLinks } from "./social-links"

export function PresentationBanner() {
  return (
    <div className="flex flex-col items-start gap-10 py-8 sm:py-10 md:flex-row md:items-center md:gap-12 md:py-14">
      <div className="flex min-w-0 flex-1 flex-col gap-6 md:gap-8">
        <h1 className="max-w-[11ch] text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:max-w-none sm:text-5xl md:text-6xl">
          {hi}
        </h1>
        <p className="max-w-[54ch] text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
          {description}
        </p>
        <SocialLinks className="flex w-fit items-center gap-2 sm:gap-3" />
      </div>

      <div className="hidden shrink-0 md:block">
        <Image
          alt={name}
          className="rounded-full shadow-lg shadow-purple-500/25 transition-shadow duration-500 hover:shadow-purple-400/35"
          src={avatar}
          placeholder="blur"
          width={280}
          priority
        />
      </div>
    </div>
  )
}
