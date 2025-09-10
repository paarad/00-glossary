/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.thum.io',
        pathname: '/get/**',
      },
      {
        protocol: 'https',
        hostname: 's.wordpress.com',
        pathname: '/mshots/**',
      },
    ],
    // Local patterns for Next >=15/16 when using /api images with query
    localPatterns: [
      {
        pathname: '/api/preview',
        searchParams: ['url', 'w'],
      },
    ],
  },
};

module.exports = nextConfig; 