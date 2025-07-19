import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.freetogame.com"
      }
    ]
  },
  typescript: {
    tsconfigPath: "./tsconfig.json"
  },
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true
};

export default nextConfig;
