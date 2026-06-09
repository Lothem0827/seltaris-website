import { assets } from "@/lib/assets";

export type HealthCheckReportImageKey =
  keyof typeof assets.healthCheckReportPage;

export function getHealthCheckReportImage(key: string): string {
  if (key in assets.healthCheckReportPage) {
    return assets.healthCheckReportPage[key as HealthCheckReportImageKey];
  }
  return assets.healthCheckReportPage.heroMockup;
}
