/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["v0.blob.com"],
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig

