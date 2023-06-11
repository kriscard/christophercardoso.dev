const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GRAPH_CMS_CONTENT_API: process.env.GRAPH_CMS_CONTENT_API,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = withContentlayer(nextConfig)
