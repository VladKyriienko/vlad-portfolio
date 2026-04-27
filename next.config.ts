import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vlad-portfolio",
  trailingSlash: true,
  distDir: "docs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
