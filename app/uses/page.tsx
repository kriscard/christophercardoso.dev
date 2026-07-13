import type { Metadata } from "next"

import { siteConfig } from "@/lib/config"
import { UsesContent } from "@/features/uses/components/uses-content"

const description = `The development tools, software, desk gear, and keyboards ${siteConfig.name} uses.`

export const metadata: Metadata = {
  title: "Uses",
  description,
  alternates: {
    canonical: new URL("/uses", siteConfig.url).toString(),
  },
  openGraph: {
    title: `Uses by ${siteConfig.name}`,
    description,
    url: new URL("/uses", siteConfig.url).toString(),
    type: "website",
  },
  twitter: {
    title: `Uses by ${siteConfig.name}`,
    description,
    card: "summary_large_image",
  },
}

export default function Uses() {
  return <UsesContent />
}
