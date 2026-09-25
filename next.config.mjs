/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.shopify.com" }
    ]
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion", "embla-carousel-react"]
  }
};
export default nextConfig;
