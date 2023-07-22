/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.harley-davidson.com', '*'],
  },
}

module.exports = nextConfig
