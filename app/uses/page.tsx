import Link from "next/link"
import {
  Monitor,
  Laptop,
  Headphones,
  Terminal,
  Code,
  Keyboard,
  Layers,
  GitBranch,
  Layout,
  Command,
} from "lucide-react"

import { Card } from "@/components/card"

export const metadata = {
  title: "Uses",
  description:
    "The tools, software, and gear Christopher Cardoso uses for development.",
}

interface UseItemProps {
  icon?: React.ReactNode
  label: string
  description: string
  href?: string
}

function UseItem({ icon, label, description, href }: UseItemProps) {
  const content = (
    <div className="flex items-start gap-3 py-3">
      {icon && (
        <div className="mt-0.5 text-purple-500 dark:text-purple-400">{icon}</div>
      )}
      <div>
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {label}
        </span>
        <span className="text-gray-600 dark:text-gray-400"> - {description}</span>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-colors hover:text-purple-600 dark:hover:text-purple-400"
      >
        {content}
      </Link>
    )
  }

  return content
}

function UsesSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Card className="p-6 md:p-8">
      <h2 className="mb-4 font-heading text-2xl">{title}</h2>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {children}
      </div>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <div className="py-8 md:py-16">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          What I use
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          A collection of the hardware, software, and tools I use daily for
          development. Inspired by{" "}
          <Link
            href="https://uses.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-purple-600 transition-colors hover:text-purple-400 dark:text-purple-400 dark:hover:text-purple-300"
          >
            uses.tech
          </Link>
          .
        </p>
      </div>

      <div className="space-y-10 md:space-y-12">
        <UsesSection title="Hardware">
          <UseItem
            icon={<Monitor size={20} />}
            label="Desktop"
            description="AMD Ryzen 7 3800X, 32GB RAM, RTX 3080"
          />
          <UseItem
            icon={<Laptop size={20} />}
            label="Laptop"
            description="Apple Macbook Air M2, 15 inch, 24 GB RAM, 1TB SSD"
          />
          <UseItem
            icon={<Monitor size={20} />}
            label="Monitor"
            description="LG 27UP850N-W 27 inch UHD 4k"
          />
          <UseItem
            icon={<Headphones size={20} />}
            label="Headset"
            description="Airpods Pro 2nd gen, Sony WH-1000XM4, Razer Blackshark V2"
          />
        </UsesSection>

        <UsesSection title="Software">
          <UseItem
            icon={<Terminal size={20} />}
            label="Terminal"
            description="Kitty"
            href="https://github.com/kriscard/dotfiles/tree/main/.config/kitty"
          />
          <UseItem
            icon={<Code size={20} />}
            label="Editor"
            description="Neovim"
            href="https://github.com/kriscard/dotfiles/tree/main/.config/nvim"
          />
          <UseItem
            icon={<Layers size={20} />}
            label="Tmux"
            description="Terminal multiplexer for session management"
            href="https://github.com/kriscard/dotfiles/tree/main/.config/tmux"
          />
          <UseItem
            icon={<Command size={20} />}
            label="Shell"
            description="zsh with Starship prompt"
            href="https://github.com/kriscard/dotfiles"
          />
          <UseItem
            icon={<GitBranch size={20} />}
            label="Git"
            description="Fugitive and LazyGit for version control"
          />
          <UseItem
            icon={<Layout size={20} />}
            label="Window Manager"
            description="Yabai and Skhd for tiling and hotkeys"
          />
        </UsesSection>

        <UsesSection title="Keyboards">
          <p className="pb-3 text-gray-600 dark:text-gray-400">
            As a fan and collector of mechanical keyboards, I&apos;ve tried many
            switches and layouts. Here are some favorites:
          </p>
          <UseItem
            icon={<Keyboard size={20} />}
            label="Space80 Apollo"
            description="Lavender switches, GMK Laser"
          />
          <UseItem
            icon={<Keyboard size={20} />}
            label="Think65 V2"
            description="Alpaca switches, GMK Bento R2"
          />
          <UseItem
            icon={<Keyboard size={20} />}
            label="Squid60"
            description="Tangerine switches, GMK Hammerhead"
          />
          <UseItem
            icon={<Keyboard size={20} />}
            label="Time80 Re"
            description="Alpaca switches, Tx springs long, GMK Sumi"
          />
          <UseItem
            icon={<Keyboard size={20} />}
            label="Vega"
            description="Banana switches, GMK Hallyu"
          />
        </UsesSection>
      </div>

      <p className="mt-12 pb-16 text-gray-600 dark:text-gray-400">
        Find more details about my configuration in my{" "}
        <Link
          href="https://github.com/kriscard/dotfiles"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-purple-600 transition-colors hover:text-purple-400 dark:text-purple-400 dark:hover:text-purple-300"
        >
          dotfiles repository
        </Link>
        .
      </p>
    </>
  )
}
