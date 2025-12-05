/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Activer standalone uniquement en production (pour Railway)
  ...(process.env.NODE_ENV === 'production' && { output: 'standalone' }),
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
}

module.exports = nextConfig

