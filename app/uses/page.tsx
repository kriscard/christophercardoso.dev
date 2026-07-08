import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { Banner } from "@/components/banner"
import { ArrowIcon } from "@/components/icons"

const description =
  "The development tools, software, desk gear, and keyboards Christopher Cardoso uses."

export const metadata: Metadata = {
  title: "Uses",
  description,
  alternates: {
    canonical: new URL("/uses", siteConfig.url).toString(),
  },
  openGraph: {
    title: "Uses by Christopher Cardoso",
    description,
    url: new URL("/uses", siteConfig.url).toString(),
    type: "website",
  },
  twitter: {
    title: "Uses by Christopher Cardoso",
    description,
    card: "summary_large_image",
  },
}

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

const software: SoftwareItem[] = [
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

const keyboards: KeyboardItem[] = [
  {
    name: "Cloud Nine",
    description: "MX Blacks, GMK Classic Beige",
    href: "https://www.instagram.com/p/DFgZFi0vF3v",
    photo: "/images/uses/keyboards/cloudnine.webp",
  },
  {
    name: "Daji",
    description: "MX Browns 55g TX M springs, GMK Rubrehose",
    href: "https://www.instagram.com/p/DCcxncwPhAH",
    photo: "/images/uses/keyboards/daji.webp",
  },
  {
    name: "Lily",
    description: "MX Blacks TX L 55g springs, GMK Hineybeige",
    href: "https://www.instagram.com/p/DIBx0o2spMt",
    photo: "/images/uses/keyboards/lily.webp",
  },
  {
    name: "Mode Envoy",
    description: "Mode Obscura, GMK Striker",
    href: "https://www.instagram.com/p/DAoDXOZRE0g",
    photo: "/images/uses/keyboards/mode-envoy.webp",
  },
  {
    name: "Neo Ergo",
    description: "HMX Hyacinth V2, GMK Dualshot 2",
    href: "https://www.instagram.com/p/DB_os-KxYQ5",
    photo: "/images/uses/keyboards/neo-ergo.webp",
  },
  {
    name: "Neo80",
    description: "Gateron Deepping, GMK Olivia",
    href: "https://www.instagram.com/p/C-rNhqOOcd1",
    photo: "/images/uses/keyboards/neo80.png",
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
    name: "Mode65",
    description: "MX Black TX L 55g springs, GMK Redacted",
    href: "https://www.instagram.com/p/C_dxRrMvHNR",
  },
]

interface SoftwareItem {
  name: string
  description: string
  href: `https://${string}`
}

interface KeyboardItem extends SoftwareItem {
  photo?: string
}

function SectionHeader({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="mb-6 max-w-2xl">
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

function SoftwareRow({ name, description, href }: SoftwareItem) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name}: ${description.replace(/\.$/, "")}. Opens in a new tab`}
      className="group block cursor-pointer rounded-lg py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark sm:grid sm:grid-cols-[12rem_1fr] sm:gap-8"
    >
      <h3 className="font-heading text-lg leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-purple-600 dark:text-ctp-text dark:group-hover:text-purple-300">
        <span className="inline-flex items-center gap-2">
          {name}
          <ArrowIcon className="size-4 text-gray-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-300" />
        </span>
      </h3>
      <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:mt-0">
        {description}
      </p>
    </Link>
  )
}

function KeyboardCard({ name, description, href, photo }: KeyboardItem) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name}: ${description.replace(/\.$/, "")}. Opens on Instagram in a new tab`}
      className="group block cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-lightGray dark:focus-visible:ring-offset-dark"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={photo!}
          alt={`${name} keyboard`}
          fill
          sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-3 font-heading text-lg leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-purple-600 dark:text-ctp-text dark:group-hover:text-purple-300">
        <span className="inline-flex items-center gap-2">
          {name}
          <ArrowIcon className="size-4 text-gray-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-300" />
        </span>
      </h3>
      <p className="mt-1 font-mono text-xs leading-relaxed text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </Link>
  )
}

export default function Uses() {
  const photoKeyboards = keyboards.filter((keyboard) => keyboard.photo)
  const otherKeyboards = keyboards.filter((keyboard) => !keyboard.photo)

  return (
    <div className="py-8 md:py-12">
      <header className="mb-10 border-b border-gray-200/80 pb-10 pt-4 dark:border-ctp-surface0/80 md:mb-12 md:pb-12 md:pt-8">
        <h1 className="font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-gray-950 dark:text-ctp-text md:text-7xl">
          What I use
        </h1>
        <p className="mt-6 w-full text-lg leading-relaxed text-gray-700 dark:text-gray-300">
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
      </header>

      <div className="space-y-10 md:space-y-12">
        <Banner
          src="/images/uses/desk-setup.jpg"
          alt="Christopher Cardoso desk setup with monitors, laptop, and keyboard"
          aspectRatio="16:9"
        />

        <section>
          <SectionHeader title="Hardware">
            The core machine and desk gear I rely on for daily development.
          </SectionHeader>
          <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {hardware.map((item) => (
              <div key={item.name}>
                <h3 className="font-heading text-lg leading-snug tracking-tight text-gray-900 dark:text-ctp-text">
                  {item.name}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Software">
            My working environment is terminal-first, version controlled, and
            easy to rebuild from dotfiles.
          </SectionHeader>
          <div>
            {software.map((item) => (
              <SoftwareRow key={item.name} {...item} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Keyboards">
            Boards from the collection, each linking to its build on{" "}
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
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
            {photoKeyboards.map((keyboard) => (
              <KeyboardCard key={keyboard.name} {...keyboard} />
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">
              Also in the collection
            </h3>
            <div className="mt-1">
              {otherKeyboards.map((keyboard) => (
                <SoftwareRow key={keyboard.name} {...keyboard} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
