import { addressQualityHealthCheckReportPageMeta } from "@/lib/content/address-quality-health-check-report";
import { addressValidationPageMeta } from "@/lib/content/address-validation";
import { altraservicePageMeta } from "@/lib/content/altraservice";
import { dataProtectionPageMeta } from "@/lib/content/data-protection";
import { designMadeSimplePageMeta } from "@/lib/content/design-made-simple";
import { healthCheckReportPageMeta } from "@/lib/content/health-check-report";
import { humanTouchPageMeta } from "@/lib/content/human-touch";
import { servicesPageMeta } from "@/lib/content/services";
import { seltarisPlusPageMeta } from "@/lib/content/seltaris-plus";

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
    title: servicesPageMeta.title,
    template: "ServicesPage",
    routeFile: "src/app/services/page.tsx",
  },
  {
    path: "/address-validation",
    title: addressValidationPageMeta.title,
    template: "AddressServicePage",
    routeFile: "src/app/address-validation/page.tsx",
  },
  {
    path: "/address-quality-health-check-report",
    title: addressQualityHealthCheckReportPageMeta.title,
    template: "AddressQualityHealthCheckReportPage",
    routeFile: "src/app/address-quality-health-check-report/page.tsx",
  },
  {
    path: "/health-check-report",
    title: healthCheckReportPageMeta.title,
    template: "HealthCheckReportPage",
    routeFile: "src/app/health-check-report/page.tsx",
  },
  {
    path: "/advanced-data-protection",
    title: dataProtectionPageMeta.title,
    template: "DataProtectionPage",
    routeFile: "src/app/advanced-data-protection/page.tsx",
  },
  {
    path: "/human-touch",
    title: humanTouchPageMeta.title,
    template: "HumanTouchPage",
    routeFile: "src/app/human-touch/page.tsx",
  },
  {
    path: "/altraservice",
    title: altraservicePageMeta.title,
    template: "AltraservicePage",
    routeFile: "src/app/altraservice/page.tsx",
  },
  {
    path: "/design-made-simple",
    title: designMadeSimplePageMeta.title,
    template: "DesignMadeSimplePage",
    routeFile: "src/app/design-made-simple/page.tsx",
  },
  {
    path: "/seltaris-plus",
    title: seltarisPlusPageMeta.title,
    template: "SeltarisPlusPage",
    routeFile: "src/app/seltaris-plus/page.tsx",
  },
  {
    path: "/design-system",
    title: "Design System Guide | Seltaris",
    template: "DesignSystemPage",
    routeFile: "src/app/design-system/page.tsx",
  },
];
