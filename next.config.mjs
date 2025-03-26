/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['tokenizeme.ai'],
    unoptimized: process.env.NODE_ENV !== 'development',
  },
};

export default nextConfig; 