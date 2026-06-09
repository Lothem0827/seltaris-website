import { assets } from "@/lib/assets";

export type AltraserviceImageKey = keyof typeof assets.altraservicePage;

export function getAltraservicePageImage(key: string): string {
  if (key in assets.altraservicePage) {
    return assets.altraservicePage[key as AltraserviceImageKey];
  }
  return assets.altraservicePage.heroMockup;
}
