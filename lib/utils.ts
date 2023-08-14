import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const tagIcons = {
  React: "/images/tags/react.png",
  Typescript: "/images/tags/typescript.png",
  GraphQL: "/images/tags/graphql.png",
  Tailwind: "/images/tags/tailwind.png",
  Nextjs: "/images/tags/nextjs.png",
  Default: "/images/tags/terminal.png",
} as const

export const getTagIcon = (tag: string): string | undefined => {
  return tagIcons[tag]
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
