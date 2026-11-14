import type { NextConfig } from "next";

// Content Security Policy: which sources the browser may load from. Next.js
// needs inline scripts and styles; everything else is limited to this site.
// EmailJS is allowed ahead of the contact form being connected.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://api.emailjs.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // The dev server needs eval for hot reloading, so the CSP is production-only.
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }]
    : []),
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

const nextConfig: NextConfig = {
  // Defaults to ".next". Set NEXT_DIST_DIR to build somewhere else, e.g.
  //   NEXT_DIST_DIR=.next-verify next build && NEXT_DIST_DIR=.next-verify next start -p 3123
  // so a test build doesn't overwrite a running `npm run dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
