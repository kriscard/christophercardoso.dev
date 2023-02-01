/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GRAPH_CMS_CONTENT_API: process.env.GRAPH_CMS_CONTENT_API,
  },
};

module.exports = nextConfig;
