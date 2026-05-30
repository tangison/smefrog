import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  allowedDevOrigins: [
    ".space-z.ai",
  ],
  images: {
    qualities: [75, 85],
  },
};

export default nextConfig;
