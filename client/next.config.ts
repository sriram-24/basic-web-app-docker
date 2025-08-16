import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    distDir: 'build',
    output: 'standalone',
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
