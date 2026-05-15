/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <---
  basePath: '/emanuel-page1', // Add this for GitHub Pages deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig