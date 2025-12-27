import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "abs.twimg.com" },
    ],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "christophercardoso.dev",
          },
        ],
        destination: "https://christophercardoso.dev/:path*",
        permanent: true,
        statusCode: 301,
      },
    ]
  },
}

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "catppuccin-macchiato",
  keepBackground: false,
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-gfm", "remark-frontmatter"],
    rehypePlugins: [["rehype-pretty-code"]],
  },
})

export default withMDX(nextConfig)
