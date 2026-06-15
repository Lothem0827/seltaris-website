import type { NextConfig } from "next";

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
        destination: "/services",
        permanent: true,
      },
      {
        source: "/resources/seltaris-service/address-validation",
        destination: "/address-validation",
        permanent: true,
      },
    ];
  },
  images: {
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
