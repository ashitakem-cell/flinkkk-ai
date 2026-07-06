/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      root: "../", // Ye tumhare project ke root ko point karega
    },
  },
};

export default nextConfig;
