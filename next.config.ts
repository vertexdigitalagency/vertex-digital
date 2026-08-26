import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  experimental: {
    serverActions: {
      // Contact/newsletter forms are plain text fields — 1MB is generous
      // headroom while still rejecting abusive oversized payloads outright,
      // before they ever reach validation.
      bodySizeLimit: "1mb",
    },
  },
};

export default nextConfig;
