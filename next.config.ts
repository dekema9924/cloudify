import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['fjord.dropboxstatic.com', 'aem.dropbox.com', 'cdn-icons-png.flaticon.com', 'upload.wikimedia.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fjord.dropboxstatic.com',

      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ]
  },

};

export default nextConfig;
