import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "res.cloudinary.com", // Cloudinary Image Preview
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'icons8.com',
        pathname: '/icon/**',
      },],
  },
};

export default nextConfig;
