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
  }
};

export default nextConfig;
