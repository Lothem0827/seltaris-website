import { assets } from "@/lib/assets";

export type DataProtectionImageKey = keyof typeof assets.dataProtectionPage;

export function getDataProtectionPageImage(key: string): string {
  if (key in assets.dataProtectionPage) {
    return assets.dataProtectionPage[key as DataProtectionImageKey];
  }
  return assets.dataProtectionPage.heroBanner;
}
