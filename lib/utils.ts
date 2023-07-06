import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const tagIcons = {
  React: '/../public/images/tags/react.png',
  Typescript: '/../public/images/tags/typescript.png',
  Nextjs: '/../public/images/tags/nextjs.png',
  GraphQL: '/../public/images/tags/graphql.png',
} as const

export const getTagIcon = (tag: string): string | undefined => {
  return tagIcons[tag]
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
