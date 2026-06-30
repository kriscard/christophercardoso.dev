import { siteConfig } from "@/lib/config"

export const metadata = {
  title: "Projects",
  description: "Projects built by Christopher Cardoso.",
  alternates: {
    canonical: new URL("/projects", siteConfig.url).toString(),
  },
}

export default function Projects() {
  return (
    <div>
      <h1 className="w3 text-3xl font-bold underline md:text-4xl">Projects</h1>
      <br />
    </div>
  )
}
