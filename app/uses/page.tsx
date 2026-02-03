import Link from "next/link"
import { Keyboard } from "lucide-react"

import { Banner } from "@/components/banner"
import { PhotoStack } from "@/components/photo-stack"

export const metadata = {
  title: "Uses",
  description:
    "The tools, software, and gear Christopher Cardoso uses for development.",
}

const keyboardPhotos = [
  { src: "/images/uses/keyboards/cloudnine.png", alt: "Cloud Nine" },
  { src: "/images/uses/keyboards/daji.png", alt: "Daji" },
  { src: "/images/uses/keyboards/lily.png", alt: "Lily" },
  { src: "/images/uses/keyboards/mode-envoy.png", alt: "Mode Envoy" },
  { src: "/images/uses/keyboards/neo-ergo.jpg", alt: "Neo Ergo" },
]

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
        <Link
          href="https://www.instagram.com/p/DFgZFi0vF3v"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-gray-200 p-3 transition-colors duration-150 hover:border-purple-500 hover:bg-purple-500/5 dark:border-gray-700 dark:hover:border-purple-400"
        >
          <span className="font-medium text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
            Cloud Nine
          </span>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            MX Blacks, GMK Classic Beige
          </p>
        </Link>
        <Link
          href="https://www.instagram.com/p/DCcxncwPhAH"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-gray-200 p-3 transition-colors duration-150 hover:border-purple-500 hover:bg-purple-500/5 dark:border-gray-700 dark:hover:border-purple-400"
        >
          <span className="font-medium text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
            Daji
          </span>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            MX Browns 55g TX M springs, GMK Rubrehose
          </p>
        </Link>
        <Link
          href="https://www.instagram.com/p/DIBx0o2spMt"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-gray-200 p-3 transition-colors duration-150 hover:border-purple-500 hover:bg-purple-500/5 dark:border-gray-700 dark:hover:border-purple-400"
        >
          <span className="font-medium text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
            Lily
          </span>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            MX Blacks TX L 55g springs, GMK Hineybeige
          </p>
        </Link>
        <Link
          href="https://www.instagram.com/p/DAoDXOZRE0g"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-gray-200 p-3 transition-colors duration-150 hover:border-purple-500 hover:bg-purple-500/5 dark:border-gray-700 dark:hover:border-purple-400"
        >
          <span className="font-medium text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
            Mode Envoy
          </span>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Mode Obscura, GMK Striker
          </p>
        </Link>
        <Link
          href="https://www.instagram.com/p/DB_os-KxYQ5"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-gray-200 p-3 transition-colors duration-150 hover:border-purple-500 hover:bg-purple-500/5 dark:border-gray-700 dark:hover:border-purple-400"
        >
          <span className="font-medium text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
            Neo Ergo
          </span>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            HMX Hyacinth V2, GMK Dualshot 2
          </p>
        </Link>
        <Link
          href="https://www.instagram.com/p/DTx66ecgE1J"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-gray-200 p-3 transition-colors duration-150 hover:border-purple-500 hover:bg-purple-500/5 dark:border-gray-700 dark:hover:border-purple-400"
        >
          <span className="font-medium text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
            Horangi60
          </span>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            MX Blacks XL springs 55g, GMK Black Snail
          </p>
        </Link>
        <Link
          href="https://www.instagram.com/p/C_x2xOhxlZt"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-gray-200 p-3 transition-colors duration-150 hover:border-purple-500 hover:bg-purple-500/5 dark:border-gray-700 dark:hover:border-purple-400"
        >
          <span className="font-medium text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
            Squid60
          </span>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Tangerines, GMK Hammerhead
          </p>
        </Link>
        <Link
          href="https://www.instagram.com/p/C-rNhqOOcd1"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-gray-200 p-3 transition-colors duration-150 hover:border-purple-500 hover:bg-purple-500/5 dark:border-gray-700 dark:hover:border-purple-400"
        >
          <span className="font-medium text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
            Neo80
          </span>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Gateron Deepping, GMK Olivia
          </p>
        </Link>
        <Link
          href="https://www.instagram.com/p/C_dxRrMvHNR"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-gray-200 p-3 transition-colors duration-150 hover:border-purple-500 hover:bg-purple-500/5 dark:border-gray-700 dark:hover:border-purple-400"
        >
          <span className="font-medium text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
            Mode65
          </span>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            MX Black TX L 55g springs, GMK Redacted
          </p>
        </Link>
      </div>
    </>
  )
}
