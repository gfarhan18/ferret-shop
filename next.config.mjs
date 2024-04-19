/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname:'soliloquywp.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname:'images.unsplash.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname:'wallpapers.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname:'images.pexels.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname:'cdn.shopify.com',
            port: '',
          },
          
        ],
      },
};

export default nextConfig;
