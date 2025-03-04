import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //   Add images for book covers from hosts
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "placehold.co",
              port: "",
          },
          {
              protocol: "https",
              hostname: "m.media-amazon.com",
              port: "",
          },
          {
              protocol: "https",
              hostname: "ik.imagekit.io",
              port: ""
          },
      ]
  }
};

export default nextConfig;
