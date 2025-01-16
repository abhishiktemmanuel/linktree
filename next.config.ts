import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "res.cloudinary.com", // Cloudinary Image Preview
    ],
  },
};

export default nextConfig;
