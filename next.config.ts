/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.dicebear.com", "images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
