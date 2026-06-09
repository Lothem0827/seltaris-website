import { assets } from "@/lib/assets";

export type CoreFeatureImageKey = keyof typeof assets.coreFeatures;

export function getCoreFeatureImage(key: string): string {
  if (key in assets.coreFeatures) {
    return assets.coreFeatures[key as CoreFeatureImageKey];
  }
  return assets.coreFeatures.humanTouchVisual;
}
