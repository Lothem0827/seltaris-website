import { assets } from "@/lib/assets";

export type SeltarisPlusImageKey = keyof typeof assets.seltarisPlusPage;

export function getSeltarisPlusPageImage(key: string): string {
  if (key in assets.seltarisPlusPage) {
    return assets.seltarisPlusPage[key as SeltarisPlusImageKey];
  }
  return assets.seltarisPlusPage.logo;
}
