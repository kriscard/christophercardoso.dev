import type { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/lib/config"

const description =
  "About Christopher Cardoso, a Toronto software developer writing about frontend engineering, tools, and projects."

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: new URL("/about", siteConfig.url).toString(),
  },
  openGraph: {
    title: "About Christopher Cardoso",
    description,
    url: new URL("/about", siteConfig.url).toString(),
    type: "profile",
  },
  twitter: {
    title: "About Christopher Cardoso",
    description,
    card: "summary_large_image",
  },
}

export default function About() {
  return (
    <article className="py-8 md:py-12">
      <header className="mb-10 border-b border-gray-200/80 pb-10 pt-4 dark:border-ctp-surface0/80 md:pb-12 md:pt-8">
        <h1 className="max-w-[11ch] text-balance font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-gray-950 dark:text-ctp-text md:text-7xl">
          About me
        </h1>
        <p className="mt-6 w-full text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I build software, tune my tools, and write down the parts that feel
          useful to other developers.
        </p>
      </header>

      <div className="prose prose-lg mt-10 max-w-3xl dark:prose-invert prose-a:text-purple-600 dark:prose-a:text-purple-300">
        <p>
          Hello, I&apos;m Chris! Welcome to my digital garden. I&apos;m a Full
          Stack Developer based in Toronto, eager to share my projects and
          articles on software development and all the things I like.
        </p>

        <p>
          With a passion for exploration, I constantly push the boundaries of my
          comfort zone to learn and master new technologies. Check out my{" "}
          <Link href="/blog">blog</Link> and my{" "}
          <Link href="/#projects">projects</Link> where I&apos;ll be sharing my
          insights, discoveries, and expertise.
        </p>

        <p>
          This site contains no ads, no sponsored posts, no affiliate links, and
          no paywalls. Just me sharing my knowledge and experience with you.
        </p>
      </div>
    </article>
  )
}
