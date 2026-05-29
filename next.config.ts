import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable full static export — generates plain HTML/CSS/JS with no Node server needed.
  // This means the site can be hosted on Render's Static Sites (free, never sleeps).
  output: "export",

  // Required for static export: Next.js image optimization needs a server.
  // With static export, we disable it and use plain <img> tags instead.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  // Appends a trailing slash so /about → /about/index.html works on static hosts.
  trailingSlash: true,
};

export default nextConfig;



