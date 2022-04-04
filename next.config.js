/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pentagram-production.imgix.net"],
  },
};

module.exports = nextConfig;
