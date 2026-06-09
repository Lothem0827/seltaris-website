import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Typography variants mapped to GBG Seltaris feature page Figma frames. */
export const featurePageHeadingStyles = {
  pageEyebrow: "fp-page-eyebrow",
  heroTitle: "fp-hero-title",
  heroSubtitle: "fp-hero-subtitle",
  bannerTitle: "fp-banner-title",
  bannerTitleWide: "fp-banner-title-wide",
  bannerSubtitle: "fp-banner-subtitle",
  sectionTitle: "fp-section-title",
  sectionTitleLg: "fp-section-title-lg",
  sectionTitleXl: "fp-section-title-xl",
  headingSmall: "fp-heading-sm",
  headingMedium: "fp-heading-md",
  headingSplitMint: "fp-heading-split-mint",
  headingSplitDm: "fp-heading-split-dm",
  cardTitle: "fp-card-title",
  teaserTitle: "fp-teaser-title",
  featureCardEyebrow: "fp-feature-eyebrow",
  featureCardTitle: "fp-feature-title",
  workflowStepNumber: "fp-workflow-num",
  workflowStepTitle: "fp-workflow-title",
  statLabel: "fp-stat-label",
  statValue: "fp-stat-value",
  bodyLead: "fp-body-lead",
  slideTitle: "fp-slide-title",
} as const;

export type FeaturePageHeadingVariant = keyof typeof featurePageHeadingStyles;

type FeaturePageHeadingProps = {
  as?: ElementType;
  variant: FeaturePageHeadingVariant;
  children: ReactNode;
  className?: string;
};

export function FeaturePageHeading({
  as: Tag = "h2",
  variant,
  children,
  className,
}: FeaturePageHeadingProps) {
  return (
    <Tag className={cn(featurePageHeadingStyles[variant], className)}>
      {children}
    </Tag>
  );
}
