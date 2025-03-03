import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    async rewrites() {
    return [
    {
        source: '/:path*',  // Match any path
        destination: 'http://localhost:8080/:path*',
        
    },
    ];
  },
};

export default nextConfig;
