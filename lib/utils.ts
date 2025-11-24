import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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
