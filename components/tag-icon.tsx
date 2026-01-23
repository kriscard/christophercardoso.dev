import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiGraphql,
} from "@icons-pack/react-simple-icons"
import { Terminal } from "lucide-react"
import { ComponentType } from "react"

type IconComponent = ComponentType<{ size?: number; className?: string }>

const tagIconMap: Record<string, IconComponent> = {
  React: SiReact,
  Typescript: SiTypescript,
  GraphQL: SiGraphql,
  Tailwind: SiTailwindcss,
  Nextjs: SiNextdotjs,
}

interface TagIconProps {
  tag: string | string[]
  size?: number
  className?: string
}

export function TagIcon({ tag, size = 32, className }: TagIconProps) {
  const tagToCheck = Array.isArray(tag) ? tag[0] : tag
  const Icon = tagIconMap[tagToCheck] ?? Terminal

  return <Icon size={size} className={className} />
}
