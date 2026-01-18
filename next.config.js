/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/gold-silver-theme',
  assetPrefix: '/gold-silver-theme/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
