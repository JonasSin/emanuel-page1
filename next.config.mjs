/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // <---
  basePath: isProduction ? '/emanuel-page1' : '',
  assetPrefix: isProduction ? '/emanuel-page1/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig