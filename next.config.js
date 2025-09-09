/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.paarad.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig; 