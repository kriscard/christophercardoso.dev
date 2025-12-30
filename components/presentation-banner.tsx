import Image from "next/image"

import { description, hi, name } from "@/lib/info"

import avatar from "../app/avatar.jpg"
import { SocialLinks } from "./social-links"

export function PresentationBanner() {
  return (
    <div className="flex items-center py-14">
      <div className="flex flex-col">
        <h1 className="mb-5 font-heading text-3xl md:text-4xl">{hi()}</h1>
        <p className="max-w-xl text-xl lg:text-xl">{description()}</p>
        <SocialLinks className="mt-6 flex w-fit items-center justify-between gap-3" />
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
