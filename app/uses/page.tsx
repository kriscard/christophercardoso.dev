import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { Banner } from "@/components/banner"
import { ArrowIcon } from "@/components/icons"
import { PhotoStack } from "@/components/photo-stack"

export const metadata = {
  title: "Uses",
  description:
    "The tools, software, and gear Christopher Cardoso uses for development.",
  alternates: {
    canonical: new URL("/uses", siteConfig.url).toString(),
  },
}

const keyboardPhotos = [
  { src: "/images/uses/keyboards/cloudnine.webp", alt: "Cloud Nine" },
  { src: "/images/uses/keyboards/daji.webp", alt: "Daji" },
  { src: "/images/uses/keyboards/lily.webp", alt: "Lily" },
  { src: "/images/uses/keyboards/mode-envoy.webp", alt: "Mode Envoy" },
  { src: "/images/uses/keyboards/neo-ergo.webp", alt: "Neo Ergo" },
]

const hardware = [
  {
    name: "Desktop",
    description: "AMD Ryzen 7 3800X, 32 GB RAM, RTX 3080",
  },
  {
    name: "Laptop",
    description: "Apple MacBook Air M2, 15 inch, 24 GB RAM, 1 TB SSD",
  },
  {
    name: "Monitor",
    description: "LG 27UP850N-W 27 inch UHD 4K",
  },
  {
    name: "Headset",
    description: "AirPods Pro 2, Sony WH-1000XM4, Razer BlackShark V2",
  },
]

const software: LinkedItem[] = [
  {
    name: "Terminal",
    description: "Ghostty config tuned around Catppuccin and fast startup.",
    href: "https://github.com/kriscard/dotfiles/tree/main/home/.config/ghostty",
  },
  {
    name: "Editor",
    description: "Neovim setup built around LazyVim, Snacks, LSPs, and tmux.",
    href: "https://github.com/kriscard/dotfiles/tree/main/home/.config/nvim",
  },
  {
    name: "Tmux",
    description: "Persistent terminal sessions for coding, agents, and notes.",
    href: "https://github.com/kriscard/dotfiles/blob/main/home/.config/tmux/tmux.conf",
  },
  {
    name: "Shell",
    description: "Zsh with Starship prompt and a small dotfiles structure.",
    href: "https://github.com/kriscard/dotfiles/tree/main/home/zsh",
  },
  {
    name: "Git",
    description:
      "LazyGit for reviewing commits, staging patches, and rebasing.",
    href: "https://github.com/kriscard/dotfiles/blob/main/home/.config/lazygit/config.yml",
  },
  {
    name: "Window Manager",
    description: "Raycast for fast window movement and app switching.",
    href: "https://github.com/kriscard/dotfiles/tree/main/home/.config/raycast/scripts",
  },
]

const keyboardCollection: Required<LinkedItem>[] = [
  {
    name: "Cloud Nine",
    description: "MX Blacks, GMK Classic Beige",
    href: "https://www.instagram.com/p/DFgZFi0vF3v",
  },
  {
    name: "Daji",
    description: "MX Browns 55g TX M springs, GMK Rubrehose",
    href: "https://www.instagram.com/p/DCcxncwPhAH",
  },
  {
    name: "Lily",
    description: "MX Blacks TX L 55g springs, GMK Hineybeige",
    href: "https://www.instagram.com/p/DIBx0o2spMt",
  },
  {
    name: "Mode Envoy",
    description: "Mode Obscura, GMK Striker",
    href: "https://www.instagram.com/p/DAoDXOZRE0g",
  },
  {
    name: "Neo Ergo",
    description: "HMX Hyacinth V2, GMK Dualshot 2",
    href: "https://www.instagram.com/p/DB_os-KxYQ5",
  },
  {
    name: "Horangi60",
    description: "MX Blacks XL springs 55g, GMK Black Snail",
    href: "https://www.instagram.com/p/DTx66ecgE1J",
  },
  {
    name: "Squid60",
    description: "Tangerines, GMK Hammerhead",
    href: "https://www.instagram.com/p/C_x2xOhxlZt",
  },
  {
    name: "Neo80",
    description: "Gateron Deepping, GMK Olivia",
    href: "https://www.instagram.com/p/C-rNhqOOcd1",
  },
  {
    name: "Mode65",
    description: "MX Black TX L 55g springs, GMK Redacted",
    href: "https://www.instagram.com/p/C_dxRrMvHNR",
  },
]

interface LinkedItem {
  name: string
  description: string
  href?: `https://${string}`
}

function SectionHeader({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="mb-4 max-w-2xl">
      <h2 className="font-heading text-2xl tracking-tight text-gray-900 dark:text-ctp-text md:text-3xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          {children}
        </p>
      ) : null}
    </div>
  )
}

function ItemRow({ name, description, href }: LinkedItem) {
  const body = (
    <>
      <h3 className="font-heading text-lg leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-purple-600 dark:text-ctp-text dark:group-hover:text-purple-300">
        <span className="inline-flex items-center gap-2">
          {name}
          {href ? (
            <ArrowIcon className="size-4 text-gray-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-300" />
          ) : null}
        </span>
      </h3>
      <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:mt-0">
        {description}
      </p>
    </>
  )

  if (!href) {
    return (
      <div className="py-4 sm:grid sm:grid-cols-[12rem_1fr] sm:gap-8">
        {body}
      </div>
    )
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${name}`}
      className="group -mx-4 block cursor-pointer rounded-lg p-4 transition-colors hover:bg-purple-600/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:hover:bg-white/[0.04] dark:focus-visible:ring-offset-dark sm:grid sm:grid-cols-[12rem_1fr] sm:gap-8"
    >
      {body}
    </Link>
  )
}

function ItemList({ items }: { items: LinkedItem[] }) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      {items.map((item) => (
        <ItemRow key={item.name} {...item} />
      ))}
    </div>
  )
}

export default function Uses() {
  return (
    <div className="space-y-10 py-8 md:space-y-12 md:py-12">
      <header>
        <div className="mb-8 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-ctp-text md:text-6xl">
            What I use
          </h1>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            A practical look at the desk, terminal, editor, and keyboard setup I
            use to build software every day. Inspired by{" "}
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
        <Banner
          src="/images/uses/desk-setup.jpg"
          alt="Christopher Cardoso desk setup with monitors, laptop, and keyboard"
          aspectRatio="16:9"
        />
      </header>

      <section>
        <SectionHeader title="Hardware">
          The core machine and desk gear I rely on for daily development.
        </SectionHeader>
        <ItemList items={hardware} />
      </section>

      <section>
        <SectionHeader title="Software">
          My working environment is terminal-first, version controlled, and easy
          to rebuild from dotfiles.
        </SectionHeader>
        <ItemList items={software} />
      </section>

      <section>
        <SectionHeader title="Keyboards">
          A few boards from the collection. More builds live on{" "}
          <Link
            href="https://www.instagram.com/kriscardtypes/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-purple-600 transition-colors hover:text-purple-400 dark:text-purple-400 dark:hover:text-purple-300"
          >
            Instagram
          </Link>
          .
        </SectionHeader>
        <div className="mt-8">
          <PhotoStack photos={keyboardPhotos} />
        </div>
        <div className="mt-8">
          <ItemList items={keyboardCollection} />
        </div>
      </section>
    </div>
  )
}
