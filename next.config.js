/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['paarad.org', 'picsum.photos'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.paarad.org',
        pathname: '/**',
      },
      // Specific patterns for your projects
      {
        protocol: 'https',
        hostname: '01-image-to-story.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '02-market-sentiment-feed.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '03-coincerto.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '04-dao-proposal-tldr.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '05-pfpmask.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '06-jeandelafontaine.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '07-deadticker.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '08-hopium-calculator.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '09-pfp-masquerade.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '10-cope-station.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '11-autoflex.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '12-shillgospel.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '13-brandkit.paarad.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '14-genframes.paarad.org',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig; 