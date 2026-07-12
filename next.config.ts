import type { NextConfig } from "next";

// GitHub Pages serves this project repo under /myhitch-main. In production we
// prefix every route/asset with that base path; locally it stays at root.
const basePath = process.env.NODE_ENV === "production" ? "/myhitch-main" : "";

const nextConfig: NextConfig = {
  output: "export", // static HTML export for GitHub Pages (no Node server)
  basePath,
  images: { unoptimized: true }, // Pages can't run the Next image optimizer
  trailingSlash: true, // emit /page/index.html so Pages serves clean URLs
  devIndicators: false,
  // Exposed to the client so raw asset paths (canvas frames, <video>, logo)
  // can be prefixed with the base path too — Next only rewrites next/* refs.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
