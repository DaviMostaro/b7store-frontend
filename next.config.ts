import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      },
      // {
      //   protocol: 'https',
      //   hostname: 'api.b7store.com
      // }
    ]
  }
};

export default nextConfig;
