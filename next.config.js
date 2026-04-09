/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled for static hosting
  trailingSlash: true,
};

module.exports = nextConfig;
