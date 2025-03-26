/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['tokenizeme.ai'],
    unoptimized: process.env.NODE_ENV !== 'development',
  },
  // Ensure proper handling of routes
  trailingSlash: false,
  // Prevent automatic 404 fallbacks to help with route handling
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ]
  },
};

export default nextConfig; 