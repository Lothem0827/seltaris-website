import { assets } from "@/lib/assets";

export type DesignMadeSimpleImageKey = keyof typeof assets.designMadeSimplePage;

export function getDesignMadeSimplePageImage(key: string): string {
  if (key in assets.designMadeSimplePage) {
    return assets.designMadeSimplePage[key as DesignMadeSimpleImageKey];
  }
  return assets.designMadeSimplePage.heroMockup;
}
