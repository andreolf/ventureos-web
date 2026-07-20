import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the build root to this project. A stray pnpm-lock.yaml in the home
  // directory otherwise makes Next infer the wrong workspace root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
