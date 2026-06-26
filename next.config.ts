import path from 'path';
import { fileURLToPath } from 'url';
import type { NextConfig } from 'next';

const projectRoot = path.dirname(
  fileURLToPath(import.meta.url),
);

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
  // Pin workspace root — avoids wrong inference when a lockfile exists in ~/
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
