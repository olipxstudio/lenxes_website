/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
  env: {
    SERVER_HOST: isProd
      ? "https://server_live_endpoint/"
      : "http://localhost:4000/api/v1/",
    NEXT_URL: isProd ? "https://lenxis.com" : "http://localhost:3000/api",
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
};

module.exports = nextConfig;
