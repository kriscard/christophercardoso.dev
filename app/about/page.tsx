
[35m🌼 daisyUI 3.5.1[0m [0mhttps://daisyui.com
╰╮
 ╰─ [32m✔︎[0m [2m[ [0m2[2m ][0m themes are enabled. You can add more themes or make your own theme:
      https://daisyui.com/docs/themes

[32m    ❤︎ Support daisyUI[0m: https://opencollective.com/daisyui[0m

import React from "react"

function AboutMeSection() {
  return (
    <section>
      <h1 className="my-8 font-heading text-3xl md:text-4xl">About me</h1>
      <p className="mb-8 text-xl lg:text-lg">
        Hello, I&apos;m Chris! Welcome to my digital garden. I&apos;m a Full
        Stack Developer based in Toronto, eager to share my projects and
        articles on software development. With a passion for exploration, I
        constantly push the boundaries of my comfort zone to learn and master
        new technologies. Check out my{" "}
        <a
          className="font-semibold text-[#a171e1] hover:text-[#A5B4FB]"
          href="/blog"
        >
          blog
        </a>
        &nbsp;and my&nbsp;
        <a
          className="font-semibold text-[#a171e1] hover:text-[#A5B4FB]"
          href="/#projects"
        >
          projects
        </a>
        &nbsp;where I&apos;ll be sharing my insights, discoveries, and
        expertise.
        <br />
        <br />
        This site contains no ads, no sponsored posts, no affiliate links, and
        no paywalls. Just me sharing my knowledge and experience with you.
      </p>
    </section>
  )
}

function WhatIUseTitle() {
  return <h2 className="py-4 font-heading text-2xl md:text-3xl">What I use</h2>
}

function HardwareSection() {
  return (
    <section className="space-y-0 divide-y divide-[#A5B4FB]">
      <h3 className="divide- py-2 font-heading lg:text-lg">Hardware</h3>
      <ul className="list-inside list-disc p-4 ">
        <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
          <span className="font-semibold text-gray-500 dark:text-gray-500">
            {" "}
            Desktop
          </span>{" "}
          AMD Ryzen 7 3800X, 32GB RAM, RTX 3080
        </li>
        <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
          <span className="font-semibold text-gray-500 dark:text-gray-500">
            {" "}
            Laptop
          </span>{" "}
          Apple Macbook Air M2, 15 inch, 24 GB RAM, 1TB SSD
        </li>
        <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
          <span className="font-semibold text-gray-500 dark:text-gray-500">
            {" "}
            Monitor
          </span>{" "}
          LG 27UP850N-W 27 inch UHD 4k
        </li>
        <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
          <span className="font-semibold text-gray-500 dark:text-gray-500">
            {" "}
            Headset
          </span>{" "}
          Airpods Pro 2nd generation, Sony wh-1000xm4, Razer Blackshark V2
        </li>
      </ul>
    </section>
  )
}

function SoftwareSection() {
  return (
    <section className="space-y-0 divide-y divide-[#A5B4FB]">
      <h3 className="py-2 font-heading text-base lg:text-lg">Software</h3>
      <ul className="list-inside list-disc p-4">
        <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
          <span className="font-semibold text-gray-500 dark:text-gray-500">
            Terminal
          </span>
          &nbsp;
          <a
            className="font-semibold text-[#a171e1] hover:text-[#A5B4FB]"
            href="https://github.com/kriscard/dotfiles/tree/main/.config/kitty"
            target="_blank"
          >
            Kitty
          </a>
        </li>
        <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
          <span className="dark`:text-gray-500 font-semibold text-gray-500">
            Editor
          </span>
          &nbsp;
          <a
            className="font-semibold text-[#a171e1] hover:text-[#A5B4FB]"
            href="https://github.com/kriscard/dotfiles/tree/main/.config/nvim"
            target="_blank"
          >
            Neovim
          </a>
        </li>
        <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
          <span className="font-semibold text-gray-500 dark:text-gray-500">
            Favorite tools:
          </span>
          <ul className="list-inside list-disc px-10">
            <li className="text-lg marker:text-[#A5B4FB] lg:text-xl">
              <span className="font-semibold text-gray-500 dark:text-gray-500">
                Tmux
              </span>{" "}
              Terminal multiplexer
            </li>
            <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
              <span className="font-semibold text-gray-500 dark:text-gray-500">
                FZF and Telescope
              </span>
              &nbsp; Fuzzy finder
            </li>
            <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
              <span className="font-semibold text-gray-500 dark:text-gray-500">
                zsh with Starship
              </span>
              &nbsp; Shell
            </li>
            <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
              <span className="font-semibold text-gray-500 dark:text-gray-500">
                Fugitive and LazyGit
              </span>
              &nbsp; Git integration
            </li>
            <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
              <span className="font-semibold text-gray-500 dark:text-gray-500">
                Yabai and Skhd
              </span>
              &nbsp; Window manager and hotkey daemon
            </li>
          </ul>
        </li>
        <p className="mt-2 text-xl lg:text-lg">
          You can find more details about my config om my&nbsp;
          <a
            className="font-semibold text-[#a171e1] hover:text-[#A5B4FB]"
            href="https://github.com/kriscard/dotfiles"
            target="_blank"
          >
            dotfiles
          </a>
          &nbsp;repository
        </p>
      </ul>
    </section>
  )
}

function KeyboardsSection() {
  return (
    <section className="space-y-0 divide-y divide-[#A5B4FB] py-4">
      <h3 className="py-2 font-heading text-base lg:text-lg">Keyboards</h3>
      <ul className="list-inside list-disc px-4">
        <p className="py-4 text-xl lg:text-lg">
          As a fan and collector of mechanical keyboards, I&apos;ve tried a lot
          of different switches and layouts. Here are some of my favorites:
        </p>
        <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
          <span className="font-semibold text-gray-500 dark:text-gray-500">
            Space80 Apollo
          </span>{" "}
          Lavender switches, GMK Laser
        </li>
        <li className="text-lg marker:text-[#A5B4FB] lg:text-lg">
          <span className="font-semibold text-gray-500 dark:text-gray-500">
            Think65 V2
          </span>{" "}
          Alpaca switches, GMK Bento R2
        </li>
        <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
          <span className="font-semibold text-gray-500 dark:text-gray-500">
            Squid60
          </span>{" "}
          Tangerines switches, GMK Hammerhead
        </li>
        <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
          <span className="font-semibold text-gray-500 dark:text-gray-500">
            Time80 Re
          </span>{" "}
          Alpaca switches, Tx springs long, GMK Sumi
        </li>
        <li className="text-xl marker:text-[#A5B4FB] lg:text-lg">
          <span className="font-semibold text-gray-500 dark:text-gray-500">
            Vega
          </span>{" "}
          Banana switches, GMK Hallyu
        </li>
      </ul>
    </section>
  )
}

export default function About() {
  return (
    <>
      <AboutMeSection />
      <WhatIUseTitle />
      <HardwareSection />
      <SoftwareSection />
      <KeyboardsSection />
    </>
  )
}
