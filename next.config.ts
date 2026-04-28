import type { NextConfig } from 'next';

// basePath is only needed for GitHub Pages (when deploying to a subdirectory)
// For Vercel, it should be empty
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
