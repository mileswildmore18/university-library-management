import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //   Add images for book covers from hosts
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "placehold.co",
          },
          {
              protocol: "https",
              hostname: "m.media-amazon.com",
          }
      ]
  }
};

export default nextConfig;
