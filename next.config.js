/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['excellent-dinosaurs-12d6036552.media.strapiapp.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ],
  },
}


module.exports = nextConfig
