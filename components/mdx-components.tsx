import Image from "next/image"
import Link from "next/link"
import type { MDXComponents } from "mdx/types"
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote-client/rsc"
import { Tweet } from "react-tweet"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"

import { cn } from "@/lib/utils"
import { Banner } from "@/components/banner"
import { Callout } from "@/components/callout"
import { Code } from "@/components/code"
import { MdxCard } from "@/components/mdx-card"
import { MdxImage } from "@/components/mdx-image"
import { PluginCard } from "@/components/plugin-card"
import { SeriesNav } from "@/components/series-nav"
import { VideoEmbed } from "@/components/video-embed"

const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "catppuccin-macchiato",
        },
      ],
    ],
  },
}

const StaticTweet = ({ id }: { id: string }) => (
  <div className="flex justify-center">
    <Tweet id={id} />
  </div>
)

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        "text-gray-900 dark:text-[#cad3f5]",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-12 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
        "text-gray-900 dark:text-[#cad3f5]",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-10 scroll-m-20 text-2xl font-semibold tracking-tight",
        "text-gray-900 dark:text-[#cad3f5]",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        "text-gray-900 dark:text-[#cad3f5]",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "mt-6 scroll-m-20 text-lg font-medium tracking-tight",
        "text-gray-800 dark:text-[#cad3f5]",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "mt-6 scroll-m-20 text-base font-medium tracking-tight",
        "text-gray-800 dark:text-[#a5adcb]",
        className
      )}
      {...props}
    />
  ),
  a: ({ href, className, children, ...props }) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#")
    const isExternal = href?.startsWith("http")

    if (isInternal) {
      return (
        <Link href={href!} className={cn(className)} {...props}>
          {children}
        </Link>
      )
    }

    return (
      <a
        href={href}
        className={cn("inline-flex items-baseline gap-0.5", className)}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
        {isExternal && (
          <svg
            className="mb-0.5 inline size-3 shrink-0 text-gray-400 dark:text-[#6e738d]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        )}
      </a>
    )
  },
  p: ({ className, ...props }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-[#494d64] dark:bg-[#24273a]">
      <table className={cn("my-0 w-full text-sm", className)} {...props} />
    </div>
  ),
  thead: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead
      className={cn("bg-gray-50 dark:bg-[#363a4f]", className)}
      {...props}
    />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        "m-0 border-b border-gray-200 p-0 transition-colors last:border-0",
        "dark:border-[#494d64]",
        "hover:bg-gray-50 dark:hover:bg-[#363a4f]/50",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "px-4 py-3 text-left font-semibold text-gray-900",
        "dark:text-[#cad3f5]",
        "[&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "px-4 py-3 text-left text-gray-700",
        "dark:text-[#a5adcb]",
        "[&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  figure: ({ className, ...props }) => (
    <figure className={cn("my-0", className)} {...props} />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "my-0 overflow-x-auto rounded-xl p-4",
        "border border-[#363a4f] bg-[#1e2030] text-[#cad3f5]",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded border-none px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Image,
  Banner,
  Callout,
  Code,
  MdxCard,
  MdxImage,
  PluginCard,
  SeriesNav,
  StaticTweet,
  VideoEmbed,
} satisfies MDXComponents

export function MDXContent(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={mdxOptions}
    />
  )
}
