/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/robot-vacuum',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
