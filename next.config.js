/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.wallpapersafari.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
