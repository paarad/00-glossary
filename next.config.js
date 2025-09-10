/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.wordpress.com',
        pathname: '/mshots/**',
      },
      // No need to list every subdomain; previews are proxied through s.wordpress.com
    ],
  },
};

module.exports = nextConfig; 