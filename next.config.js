const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/nhom11_noithat" : "";

const nextConfig = {
  output: "export",

  basePath,
  assetPrefix: isProd ? `${basePath}/` : "",

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;