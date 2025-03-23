/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      // ... your turbo configurations
    },
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;