/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    // },
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
            hostname:'lovable-renewal-dc58b84f33.media.strapiapp.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname:'cdn.shopify.com',
            port: '',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '1337',
            pathname: '/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
          }
          
        ],
      },
};

export default nextConfig;
