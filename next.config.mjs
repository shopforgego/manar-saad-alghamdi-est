/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.salla.sa",
      },
      {
        protocol: "https",
        hostname: "assets.adidas.com",
      },
      {
        protocol: "https",
        hostname: "assets.lightfunnels.com",
      },
      {
        protocol: "https",
        hostname: "d1q03ajwgi7cv2.cloudfront.net",
      },
    ],
  },
}

export default nextConfig

