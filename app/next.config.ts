import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'output: export' to allow server-side rendering on Netlify
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
