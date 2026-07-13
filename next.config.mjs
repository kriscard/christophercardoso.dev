import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  experimental: {
    viewTransition: true,
  },
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "abs.twimg.com" },
    ],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
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
        destination: "https://www.christophercardoso.dev/:path*",
        permanent: true,
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
