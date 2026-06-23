import type { ReactNode } from "react";
import type { assets } from "@/lib/assets";

type AssetKey = keyof typeof assets | string;

export type SlideItem = {
  id: string;
  title?: string;
  description: ReactNode;
  imageSrc?: string;
  imageSrcKey?: AssetKey;
  width?: "default" | "wide" | "narrow";
};

export type SplitIntroLogoKey =
  | "human-touch"
  | "altra-service"
  | "advanced-data-protection"
  | "health-check";

export type SplitIntroContent = {
  eyebrow: string;
  heading: ReactNode;
  body: ReactNode;
  logoKey: SplitIntroLogoKey;
  logoAlt?: string;
};
