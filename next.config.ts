import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const isDev = process.env.NODE_ENV === "development";

const devNoCacheHeaders = [
  { key: "Cache-Control", value: "no-store, must-revalidate" },
];

const prodCacheHeaders = [
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
];

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
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
    if (isDev) {
      return [
        { source: "/images/:path*", headers: devNoCacheHeaders },
        { source: "/icons/:path*", headers: devNoCacheHeaders },
        {
          source: "/:file(.*\\.(?:svg|png|webp|jpg|jpeg|gif|ico))",
          headers: devNoCacheHeaders,
        },
        { source: "/_next/image", headers: devNoCacheHeaders },
      ];
    }

    return [
      { source: "/images/:path*", headers: prodCacheHeaders },
      { source: "/icons/:path*", headers: prodCacheHeaders },
      { source: "/fonts/:path*", headers: prodCacheHeaders },
    ];
  },
  images: {
    // Static export has no image optimizer — serve files from /public directly.
    unoptimized: true,
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

export default withBundleAnalyzer(nextConfig);
