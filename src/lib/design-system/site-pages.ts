export type SitePageEntry = {
  path: string;
  title: string;
  template: string;
  routeFile: string;
};

/** All App Router pages in this build — update when adding new page.tsx routes. */
export const SITE_PAGES: SitePageEntry[] = [
  {
    path: "/",
    title: "Seltaris | Bulk Data Enhancement",
    template: "HomePage",
    routeFile: "src/app/page.tsx",
  },
  {
    path: "/services",
    title: "Services | Seltaris",
    template: "ServicesPage",
    routeFile: "src/app/services/page.tsx",
  },
  {
    path: "/address-validation",
    title: "Address Validation | Seltaris",
    template: "AddressValidationPage",
    routeFile: "src/app/address-validation/page.tsx",
  },
  {
    path: "/address-quality-health-check-report",
    title: "Address Quality Health Check Report | Seltaris",
    template: "AddressQualityHealthCheckReportPage",
    routeFile: "src/app/address-quality-health-check-report/page.tsx",
  },
  {
    path: "/health-check-report",
    title: "Health Check Report | Seltaris",
    template: "HealthCheckReportPage",
    routeFile: "src/app/health-check-report/page.tsx",
  },
  {
    path: "/advanced-data-protection",
    title: "Advanced Data Protection | Seltaris",
    template: "DataProtectionPage",
    routeFile: "src/app/advanced-data-protection/page.tsx",
  },
  {
    path: "/human-touch",
    title: "Human Touch™ | Seltaris",
    template: "HumanTouchPage",
    routeFile: "src/app/human-touch/page.tsx",
  },
  {
    path: "/altraservice",
    title: "Altraservice™ | Seltaris",
    template: "AltraservicePage",
    routeFile: "src/app/altraservice/page.tsx",
  },
  {
    path: "/design-made-simple",
    title: "Design Made Simple | Seltaris",
    template: "DesignMadeSimplePage",
    routeFile: "src/app/design-made-simple/page.tsx",
  },
  {
    path: "/seltaris-plus",
    title: "Seltaris+ | Seltaris",
    template: "SeltarisPlusPage",
    routeFile: "src/app/seltaris-plus/page.tsx",
  },
  {
    path: "/get-started",
    title: "Get Started | Seltaris",
    template: "GetStartedPage",
    routeFile: "src/app/get-started/page.tsx",
  },
  {
    path: "/demo",
    title: "How to Get Started with Seltaris | Seltaris",
    template: "DemoPage",
    routeFile: "src/app/demo/page.tsx",
  },
  {
    path: "/design-system",
    title: "Design System Guide | Seltaris",
    template: "DesignSystemPage",
    routeFile: "src/app/design-system/page.tsx",
  },
];
