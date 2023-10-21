/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
  },
}

module.exports = nextConfig
