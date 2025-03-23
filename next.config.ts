/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      // ... your turbo configurations
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;