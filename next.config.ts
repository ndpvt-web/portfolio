import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 1024, 1920],
    imageSizes: [256, 384, 512],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
