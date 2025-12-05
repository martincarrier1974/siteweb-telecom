/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // output: 'standalone', // Commenté pour le développement local
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
}

module.exports = nextConfig

