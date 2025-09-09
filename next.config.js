/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.paarad.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig; 