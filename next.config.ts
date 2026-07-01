import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Only apply basePath in production for GitHub Pages compatibility
  basePath: process.env.NODE_ENV === "production" ? "/IEDCxMITS" : "",
};

export default nextConfig;
