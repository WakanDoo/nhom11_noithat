const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  basePath: isProd ? "/nhom11_noithat" : "",
  assetPrefix: isProd ? "/nhom11_noithat/" : "",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;