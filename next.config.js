/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  output: 'standalone',
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
}

module.exports = nextConfig

