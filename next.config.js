/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'santrihub.or.id',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'app.santrihub.or.id'
      }
    ],
  },
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
  },
}

module.exports = nextConfig
