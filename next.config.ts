import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // <-- ADD THIS LINE
  },
};

export default nextConfig;