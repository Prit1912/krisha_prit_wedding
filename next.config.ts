import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML for GitHub Pages (no Node server).
  output: "export",
  // Set by the Pages workflow to /krish_prit_wedding. Empty for local `next dev`.
  basePath: process.env.PAGES_BASE_PATH || undefined,
  trailingSlash: true,
  images: {
    // GitHub Pages cannot run the Next image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
