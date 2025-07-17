import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/public',
  assetPrefix: '/public',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
