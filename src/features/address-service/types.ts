import type { ReactNode } from "react";

export type AddressServicePageFlagKey = "australia" | "nz" | "international";

export type AddressServicePageDataset = {
  id: string;
  label: string;
  flagKey: AddressServicePageFlagKey;
};

export type AddressServicePageIconKey =
  | "humanTouchLogo"
  | "altraserviceLogo"
  | "dataProtectionLogo";

export type AddressServicePageFeatureCard = {
  id: string;
  imageKey: string;
  body: ReactNode;
  learnMoreHref?: string;
};

export type AddressServicePageGridPanel = {
  id: string;
  label: string;
  layout: "grid";
  body: ReactNode;
  imageKeys: string[];
};

export type AddressServicePageRefinementCodesPanel = {
  id: string;
  label: string;
  layout: "refinementCodes";
  verifiedImageKey: string;
  unverifiedImageKey: string;
  verifiedBody: ReactNode;
  unverifiedBody: ReactNode;
};

export type AddressServicePageDataAccuracyCodesPanel = {
  id: string;
  label: string;
  layout: "dataAccuracyCodes";
  imageKey: string;
  body: ReactNode;
};

export type AddressServicePageSampleExamplesPanel = {
  id: string;
  label: string;
  layout: "sampleExamples";
  imageKey: string;
  body: ReactNode;
};

export type AddressServicePageResultFilePanel = {
  id: string;
  label: string;
  layout: "resultFile";
  imageKey: string;
  body: ReactNode;
};

export type AddressServicePageSplitIntroPanel = {
  id: string;
  label: string;
  layout: "splitIntro";
  iconKey: AddressServicePageIconKey;
  leftHeading: ReactNode;
  leftSubtitle?: ReactNode;
  datasets?: ReadonlyArray<AddressServicePageDataset>;
  rightBody: ReactNode;
  learnMoreHref?: string;
  heroImageKey: string;
};

export type AddressServicePageSecurityAdvancedPanel = {
  id: string;
  label: string;
  layout: "securityAdvanced";
  iconKey: "dataProtectionLogo";
  leftHeading: ReactNode;
  seltarisPlusNote: ReactNode;
  price: string;
  gstNote: string;
  rightBody: ReactNode;
  learnMoreHref?: string;
  featureCards: AddressServicePageFeatureCard[];
};

export type AddressServicePageSecurityStandardPanel = {
  id: string;
  label: string;
  layout: "securityStandard";
  iconKey: "dataProtectionLogo";
  leftHeading: ReactNode;
  priceLabel: string;
  rightBody: ReactNode;
  learnMoreHref?: string;
  heroImageKey: string;
};

export type AddressServicePageTabPanel =
  | AddressServicePageGridPanel
  | AddressServicePageRefinementCodesPanel
  | AddressServicePageDataAccuracyCodesPanel
  | AddressServicePageSampleExamplesPanel
  | AddressServicePageResultFilePanel
  | AddressServicePageSplitIntroPanel
  | AddressServicePageSecurityAdvancedPanel
  | AddressServicePageSecurityStandardPanel;

export type AddressServicePageTabSection = {
  sectionId: string;
  heading: ReactNode;
  panels: AddressServicePageTabPanel[];
  contentVariant?: "grid" | "splitIntro" | "security";
};

export type AddressServicePagePricingCard = {
  id: string;
  label: string;
  tone: "default" | "success" | "subscription";
  regionLabel?: string;
  iconKey: "health" | "repaired" | "subscription";
  title: string;
  description: string;
  features: string[];
  footerNote?: string;
  price?: { amount: string; gst?: string; note?: string };
  cta: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    disabled?: boolean;
  };
  showAustralia?: boolean;
  showNewZealand?: boolean;
  showInternational?: boolean;
  learnMoreHref?: string;
};

export type AddressServicePageContent = {
  meta: { title: string; description: string };
  hero: {
    breadcrumb: { label: string; href: string };
    heading: ReactNode;
    supportHeading: string;
    supportCta: { label: string; href: string };
    datasets: ReadonlyArray<{
      id: string;
      label: string;
      flagKey: AddressServicePageFlagKey;
    }>;
    logoSrc: string;
  };
  sectionNav: ReadonlyArray<{ id: string; label: string; iconSrc: string }>;
  overview: {
    eyebrow: string;
    heading: ReactNode;
    leftBody: ReactNode;
    rightBody: ReactNode;
    heroMockupKey?: "addressValidateAnimation";
    heroMockupSrc?: string;
    heroMockupAlt?: string;
  };
  whatsIncludedSection: AddressServicePageTabSection;
  dataQualitySection: AddressServicePageTabSection;
  performanceSection: AddressServicePageTabSection;
  securitySection: AddressServicePageTabSection;
  pricingIntro: { eyebrow: string; heading: ReactNode };
  pricingCards: AddressServicePagePricingCard[];
};
