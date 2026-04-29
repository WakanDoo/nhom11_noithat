/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nhom11_noithat',
  assetPrefix: '/nhom11_noithat/',
  trailingSlash: true,

  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;