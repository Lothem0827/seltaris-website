import { assets } from "@/lib/assets";

export type HumanTouchImageKey = keyof typeof assets.humanTouchPage;

export function getHumanTouchPageImage(key: string): string {
  if (key in assets.humanTouchPage) {
    return assets.humanTouchPage[key as HumanTouchImageKey];
  }
  return assets.humanTouchPage.heroMockup;
}
