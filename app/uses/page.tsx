import Link from "next/link"
import { Keyboard } from "lucide-react"

import { siteConfig } from "@/lib/config"
import { Banner } from "@/components/banner"
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

const keyboardCollection = [
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

interface CollectionCardProps {
  name: string
  description: string
  href: string
}

function CollectionCard({ name, description, href }: CollectionCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-lg border border-gray-200 p-3 transition-colors duration-150 hover:border-purple-500 hover:bg-purple-500/5 dark:border-gray-700 dark:hover:border-purple-400"
    >
      <span className="font-medium text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
        {name}
      </span>
      <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
    </Link>
  )
}

export default function Uses() {
  return (
    <>
      <div className="py-8 md:py-12">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          What I use
        </h1>
        <Banner
          src="/images/uses/desk-setup.jpg"
          alt="My desk setup"
          aspectRatio="16:9"
        />
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

      <article className="prose prose-gray max-w-none dark:prose-invert">
        <h2>Hardware</h2>
        <table>
          <tbody>
            <tr>
              <td className="font-medium">Desktop</td>
              <td>AMD Ryzen 7 3800X, 32GB RAM, RTX 3080</td>
            </tr>
            <tr>
              <td className="font-medium">Laptop</td>
              <td>Apple Macbook Air M2, 15 inch, 24 GB RAM, 1TB SSD</td>
            </tr>
            <tr>
              <td className="font-medium">Monitor</td>
              <td>LG 27UP850N-W 27 inch UHD 4k</td>
            </tr>
            <tr>
              <td className="font-medium">Headset</td>
              <td>Airpods Pro 2nd gen, Sony WH-1000XM4, Razer Blackshark V2</td>
            </tr>
          </tbody>
        </table>

        <h2>Software</h2>
        <ul>
          <li>
            <strong>Terminal</strong> -{" "}
            <Link
              href="https://github.com/kriscard/dotfiles/tree/main/.config/ghostty"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ghostty
            </Link>
          </li>
          <li>
            <strong>Editor</strong> -{" "}
            <Link
              href="https://github.com/kriscard/dotfiles/tree/main/.config/nvim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neovim
            </Link>
          </li>
          <li>
            <strong>Tmux</strong> -{" "}
            <Link
              href="https://github.com/kriscard/dotfiles/tree/main/.config/tmux"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terminal multiplexer for session management
            </Link>
          </li>
          <li>
            <strong>Shell</strong> -{" "}
            <Link
              href="https://github.com/kriscard/dotfiles"
              target="_blank"
              rel="noopener noreferrer"
            >
              zsh with Starship prompt
            </Link>
          </li>
          <li>
            <strong>Git</strong> - LazyGit for version control
          </li>
          <li>
            <strong>Window Manager</strong> -{" "}
            <Link
              href="https://www.raycast.com/core-features/window-management"
              target="_blank"
              rel="noopener noreferrer"
            >
              Raycast
            </Link>
          </li>
        </ul>

        <p>
          Find more details about my configuration in my{" "}
          <Link
            href="https://github.com/kriscard/dotfiles"
            target="_blank"
            rel="noopener noreferrer"
          >
            dotfiles repository
          </Link>
          .
        </p>

        <h2 className="flex items-center gap-2">
          <Keyboard className="size-7 text-purple-500" />
          Keyboards
        </h2>
        <p>
          As a fan and collector of mechanical keyboards, I have tried many
          switches and layouts. Here are some favorites. You can find more of my
          keyboards on{" "}
          <Link
            href="https://www.instagram.com/kriscardtypes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          .
        </p>
      </article>

      <div className="mb-2 mt-8">
        <PhotoStack photos={keyboardPhotos} />
      </div>

      <h3 className="mb-3 font-heading text-lg">My Collection</h3>
      <div className="mb-8 grid gap-3 text-sm md:grid-cols-2 lg:grid-cols-3">
        {keyboardCollection.map((keyboard) => (
          <CollectionCard key={keyboard.href} {...keyboard} />
        ))}
      </div>
    </>
  )
}
