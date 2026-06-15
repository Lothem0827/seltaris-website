import { assets } from "@/lib/assets";

export type AddressQualityHealthCheckReportImageKey =
  keyof typeof assets.addressQualityHealthCheckReportPage;

export function getAddressQualityHealthCheckReportImage(key: string): string {
  if (key in assets.addressQualityHealthCheckReportPage) {
    return assets.addressQualityHealthCheckReportPage[
      key as AddressQualityHealthCheckReportImageKey
    ];
  }
  return assets.addressQualityHealthCheckReportPage.heroMockup;
}
