/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "cdn.sanity.io",
    ],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
