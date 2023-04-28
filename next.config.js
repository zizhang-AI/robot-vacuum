/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    appDir: true,
  },
}

if (process.env.BASE_PATH) {
  nextConfig.basePath = process.env.BASE_PATH
}

module.exports = nextConfig
