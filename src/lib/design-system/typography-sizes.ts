import type { FeaturePageHeadingVariant } from "@/components/atoms/FeaturePageHeading";

export type TypographySizeMeta = {
  cssVar: string;
  size: string;
};

export const HEADING_LEVEL_SIZES = {
  display: { cssVar: "--text-display-size", size: "5.5rem / 90px" },
  sectionDisplay: {
    cssVar: "--text-section-display-size",
    size: "3rem / 48px",
  },
  h1: { cssVar: "--text-h1-size", size: "2rem / 40px" },
  h2: { cssVar: "--text-h2-size", size: "1.4rem / 28px" },
  h3: { cssVar: "--text-h3-size", size: "0.875rem / 14px" },
  subheading: { cssVar: "--text-subheading-size", size: "1.5rem / 24px" },
  panel: { cssVar: "--text-nav-title-size", size: "1.25rem / 20px" },
} as const satisfies Record<string, TypographySizeMeta>;

export const TEXT_VARIANT_SIZES = {
  body: { cssVar: "--text-body-size", size: "1rem / 16px" },
  "body-sm": { cssVar: "--text-body-sm-size", size: "0.875rem / 14px" },
  caption: { cssVar: "--text-label-size", size: "0.75rem / 12px" },
  tiny: { cssVar: "--text-tiny-size", size: "0.5625rem / 9px" },
  micro: { cssVar: "--text-micro-size", size: "0.625rem / 10px" },
  label: { cssVar: "--text-label-size", size: "0.75rem / 12px" },
  utility: { cssVar: "--text-label-size", size: "0.75rem / 12px" },
} as const satisfies Record<string, TypographySizeMeta>;

export const FEATURE_PAGE_HEADING_SIZES: Record<
  FeaturePageHeadingVariant,
  TypographySizeMeta
> = {
  pageEyebrow: { cssVar: "--text-fp-eyebrow", size: "1.5rem / 24px" },
  heroTitle: { cssVar: "--text-fp-hero", size: "3rem / 48px" },
  heroSubtitle: { cssVar: "--text-fp-hero-sub", size: "1.125rem / 18px" },
  bannerTitle: { cssVar: "--text-fp-banner", size: "3rem / 48px" },
  bannerTitleWide: { cssVar: "--text-fp-banner-wide", size: "3rem / 48px" },
  bannerSubtitle: { cssVar: "--text-fp-banner-sub", size: "1.125rem / 18px" },
  sectionTitle: { cssVar: "--text-fp-section", size: "2rem / 32px" },
  sectionTitleLg: { cssVar: "--text-fp-section-lg", size: "3rem / 48px" },
  sectionTitleXl: { cssVar: "--text-fp-section-xl", size: "3rem / 48px" },
  headingSmall: { cssVar: "--text-fp-heading-sm", size: "2rem / 32px" },
  headingMedium: { cssVar: "--text-fp-heading-md", size: "2rem / 32px" },
  headingSplitMint: { cssVar: "--text-fp-heading-split", size: "2rem / 32px" },
  headingSplitDm: { cssVar: "--text-fp-heading-split", size: "2rem / 32px" },
  cardTitle: { cssVar: "--text-fp-card", size: "2rem / 32px" },
  teaserTitle: { cssVar: "--text-fp-teaser", size: "3rem / 48px" },
  featureCardEyebrow: {
    cssVar: "--text-fp-feature-eyebrow",
    size: "0.875rem / 14px",
  },
  featureCardTitle: { cssVar: "--text-fp-feature-title", size: "2rem / 32px" },
  workflowStepNumber: {
    cssVar: "--text-fp-workflow-num",
    size: "2.5rem / 40px",
  },
  workflowStepTitle: {
    cssVar: "--text-fp-workflow-title",
    size: "1.5rem / 24px",
  },
  statLabel: { cssVar: "--text-fp-stat-label", size: "1rem / 16px" },
  statValue: { cssVar: "--text-fp-stat-value", size: "2.5rem / 40px" },
  bodyLead: { cssVar: "--text-fp-body-lead", size: "2rem / 32px" },
  slideTitle: { cssVar: "--text-fp-slide", size: "1.75rem / 28px" },
};
