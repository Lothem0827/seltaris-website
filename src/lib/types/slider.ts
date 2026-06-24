import type { ReactNode } from "react";

export type SlideItem = {
  id: string;
  title?: string;
  description: ReactNode;
  imageSrc?: string;
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
