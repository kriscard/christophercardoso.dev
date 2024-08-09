import { defineCollection, defineConfig } from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"
import {
  remarkGfm,
  remarkHeading,
  remarkStructure,
} from "fumadocs-core/mdx-plugins"
import rehypePrettyCode from "rehype-pretty-code"

const posts = defineCollection({
  name: "posts",
  directory: "content/",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
    tag: z.string(),
    summary: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, remarkStructure],
      rehypePlugins: [
        [
          rehypePrettyCode,
          { theme: "catppuccin-macchiato", keepBackground: false },
        ],
        [
          remarkHeading,
          {
            properties: {
              className: ["anchor"],
              ariaLabel: "Link to section",
            },
          },
        ],
      ],
    })
    return {
      ...document,
      mdx,
    }
  },
})

export default defineConfig({
  collections: [posts],
})
