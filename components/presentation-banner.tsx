import Image from "next/image"

import { description, hi, name } from "@/lib/info"

import avatar from "../app/avatar.jpg"
import { SocialLinks } from "./social-links"

export function PresentationBanner() {
  return (
    <div className="flex items-center gap-16 py-16 md:py-24">
      <div className="flex flex-1 flex-col gap-8">
        <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          {hi}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <SocialLinks className="flex w-fit items-center gap-4" />
      </div>

      <div className="hidden md:block">
        <Image
          alt={name}
          className="rounded-full shadow-xl shadow-purple-500/40 transition-shadow duration-500 hover:shadow-indigo-500/40"
          src={avatar}
          placeholder="blur"
          width={300}
          priority
        />
      </div>
    </div>
  )
}
