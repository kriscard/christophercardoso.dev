import Link from "next/link"

export const metadata = {
  title: "About",
  description:
    "Learn more about Christopher Cardoso - Full Stack Developer based in Toronto.",
}

export default function About() {
  return (
    <article className="w-full py-12 md:py-20">
      <h1 className="mb-12 font-heading text-4xl font-bold md:text-5xl">
        About me
      </h1>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p>
          Hello, I&apos;m Chris! Welcome to my digital garden. I&apos;m a Full Stack Developer based in Toronto, eager to share my projects and articles on software development and all the things I like.
        </p>

        <p>
          With a passion for exploration, I constantly push the boundaries of my comfort zone to learn and master new technologies. Check out my <Link href="/blog">blog</Link> and my <Link href="/#projects">projects</Link> where I&apos;ll be sharing my insights, discoveries, and expertise.
        </p>

        <p>
          This site contains no ads, no sponsored posts, no affiliate links, and no paywalls. Just me sharing my knowledge and experience with you.
        </p>
      </div>
    </article>
  )
}
