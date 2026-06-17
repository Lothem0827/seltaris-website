import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const devNoCacheHeaders = [
  { key: "Cache-Control", value: "no-store, must-revalidate" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/seltaris-human-touch",
        destination: "/human-touch",
        permanent: true,
      },
      {
        source: "/seltaris-altraservice",
        destination: "/altraservice",
        permanent: true,
      },
      {
        source: "/seltaris-advanced-data-protection",
        destination: "/advanced-data-protection",
        permanent: true,
      },
      {
        source: "/seltaris-design-made-simple",
        destination: "/design-made-simple",
        permanent: true,
      },
      {
        source: "/seltaris-health-check-report",
        destination: "/health-check-report",
        permanent: true,
      },
      {
        source: "/seltaris-services",
        destination: "/seltaris-services",
        permanent: true,
      },
      {
        source: "/resources/seltaris-service/address-validation",
        destination: "/address-validation",
        permanent: true,
      },
    ];
  },
  async headers() {
    if (!isDev) return [];

    return [
      { source: "/images/:path*", headers: devNoCacheHeaders },
      { source: "/icons/:path*", headers: devNoCacheHeaders },
      {
        source: "/:file(.*\\.(?:svg|png|webp|jpg|jpeg|gif|ico))",
        headers: devNoCacheHeaders,
      },
      { source: "/_next/image", headers: devNoCacheHeaders },
    ];
  },
  images: {
    // Dev: skip the image optimizer so /public swaps preview instantly.
    unoptimized: isDev,
    minimumCacheTTL: isDev ? 0 : 14400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
};

export default nextConfig;
