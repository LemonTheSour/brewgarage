import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Defaults to ".next". Set NEXT_DIST_DIR to build somewhere else, e.g.
  //   NEXT_DIST_DIR=.next-verify next build && NEXT_DIST_DIR=.next-verify next start -p 3123
  // so a test build doesn't overwrite a running `npm run dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
