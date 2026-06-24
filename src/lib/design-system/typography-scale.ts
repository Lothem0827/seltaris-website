import type { FeaturePageHeadingVariant } from "@/components/ui/FeaturePageHeading";

type HeadingLevel =
  | "display"
  | "sectionDisplay"
  | "h1"
  | "h2"
  | "h3"
  | "subheading"
  | "panel";

type TextVariant =
  | "body"
  | "body-sm"
  | "caption"
  | "tiny"
  | "micro"
  | "label"
  | "utility";

export type TypographyPreview =
  | { component: "heading"; level: HeadingLevel }
  | { component: "text"; variant: TextVariant }
  | { component: "fp"; variant: FeaturePageHeadingVariant };

/** One visual style — multiple component APIs may map here. */
export type TypographyStyleGroup = {
  id: string;
  label: string;
  font: "Mint Grotesk" | "DM Sans";
  size: string;
  weight: string;
  cssVar: string;
  tracking?: string;
  modifiers?: string;
  preview: TypographyPreview;
  sample: string;
  usages: string[];
};

/**
 * Canonical typography scale — merged by font, size, and weight.
 * Source: tokens.css + component-tokens.css + globals.css fp-* classes.
 */
export const TYPOGRAPHY_STYLE_GROUPS: TypographyStyleGroup[] = [
  {
    id: "display-90",
    label: "Display",
    font: "Mint Grotesk",
    size: "5.5rem / 90px",
    weight: "700 Bold",
    cssVar: "--text-display-size",
    tracking: "-0.009em",
    preview: { component: "heading", level: "display" },
    sample: "Bulk data, elevated.",
    usages: ['Heading level="display"'],
  },
  {
    id: "section-display-48",
    label: "Section display / feature 48px",
    font: "Mint Grotesk",
    size: "3rem / 48px",
    weight: "700 Bold",
    cssVar: "--text-section-display-size",
    tracking: "-0.02em",
    preview: { component: "heading", level: "sectionDisplay" },
    sample: "Core features of Seltaris",
    usages: [
      'Heading level="sectionDisplay"',
      'FeaturePageHeading variant="heroTitle"',
      'variant="bannerTitle"',
      'variant="bannerTitleWide"',
      'variant="sectionTitleLg"',
      'variant="sectionTitleXl"',
      'variant="teaserTitle"',
    ],
  },
  {
    id: "heading-32-bold",
    label: "Heading 1 / feature section",
    font: "Mint Grotesk",
    size: "2rem / 32px",
    weight: "700 Bold",
    cssVar: "--text-h1-size",
    tracking: "-0.02em",
    preview: { component: "heading", level: "h1" },
    sample: "Data quality at its finest detail.",
    usages: [
      'Heading level="h1"',
      'FeaturePageHeading variant="sectionTitle"',
      'variant="featureCardTitle"',
      'variant="statValue"',
      'variant="workflowStepNumber"',
      'variant="headingSmall"',
      'variant="headingMedium"',
      'variant="headingSplitMint"',
      'variant="headingSplitDm"',
      'variant="cardTitle"',
      'variant="bodyLead"',
      "SplitIntro heading",
    ],
  },
  {
    id: "subheading-24",
    label: "Subheading / Heading h2 / slide title / workflow title",
    font: "Mint Grotesk",
    size: "1.5rem / 24px",
    weight: "700 Bold",
    cssVar: "--text-subheading-size",
    preview: { component: "heading", level: "subheading" },
    sample: "Built for everyone so anyone can use it.",
    usages: [
      'Heading level="subheading"',
      'Heading level="h2"',
      'FeaturePageHeading variant="workflowStepTitle"',
      'variant="slideTitle"',
      "ImageSlideCard",
      "ValuePropCard, TestimonialCard, PricingCard titles",
    ],
  },
  {
    id: "eyebrow-24-brand",
    label: "Page eyebrow",
    font: "DM Sans",
    size: "1.5rem / 24px",
    weight: "600 Semibold",
    cssVar: "--text-fp-eyebrow",
    modifiers: "Brand color",
    preview: { component: "fp", variant: "pageEyebrow" },
    sample: "Human Touch™",
    usages: ['FeaturePageHeading variant="pageEyebrow"'],
  },
  {
    id: "panel-20",
    label: "Panel title",
    font: "Mint Grotesk",
    size: "1.25rem / 20px",
    weight: "700 Bold",
    cssVar: "--text-nav-title-size",
    tracking: "-0.01em",
    preview: { component: "heading", level: "panel" },
    sample: "Features",
    usages: ['Heading level="panel"', "FeatureNavPanel"],
  },
  {
    id: "body-16",
    label: "Body",
    font: "DM Sans",
    size: "1rem / 16px",
    weight: "400 Regular",
    cssVar: "--text-body-size",
    preview: { component: "text", variant: "body" },
    sample: "Format, clean, repair and verify addresses.",
    usages: ['Text variant="body"'],
  },
  {
    id: "stat-label-16",
    label: "Stat label",
    font: "DM Sans",
    size: "1rem / 16px",
    weight: "500 Medium",
    cssVar: "--text-fp-stat-label",
    modifiers: "Paragraph color",
    preview: { component: "fp", variant: "statLabel" },
    sample: "Records processed",
    usages: ['FeaturePageHeading variant="statLabel"'],
  },
  {
    id: "fp-subtitle-18",
    label: "Hero / banner subtitle",
    font: "DM Sans",
    size: "1.125rem / 18px",
    weight: "500 Medium",
    cssVar: "--text-fp-subtitle-size",
    preview: { component: "fp", variant: "heroSubtitle" },
    sample: "Built for everyone so anyone can use it.",
    usages: [
      'FeaturePageHeading variant="heroSubtitle"',
      'variant="bannerSubtitle"',
    ],
  },
  {
    id: "body-sm-14",
    label: "Body small / feature card eyebrow",
    font: "DM Sans",
    size: "0.875rem / 14px",
    weight: "400 Regular",
    cssVar: "--text-body-sm-size",
    preview: { component: "text", variant: "body-sm" },
    sample: "Learn more about this feature.",
    usages: [
      'Text variant="body-sm"',
      'FeaturePageHeading variant="featureCardEyebrow"',
    ],
  },
  {
    id: "compact-14-bold",
    label: "Compact heading / card title",
    font: "DM Sans",
    size: "0.875rem / 14px",
    weight: "700 Bold",
    cssVar: "--text-h3-size",
    preview: { component: "heading", level: "h3" },
    sample: "Bulk Address Data",
    usages: ['Heading level="h3"', "ServiceCard titles"],
  },
  {
    id: "label-12",
    label: "Label / utility / caption",
    font: "DM Sans",
    size: "0.75rem / 12px",
    weight: "400–600",
    cssVar: "--text-label-size",
    modifiers: "label: uppercase semibold · utility: normal · caption: body font",
    preview: { component: "text", variant: "label" },
    sample: "COMING SOON",
    usages: [
      'Text variant="label"',
      'variant="utility"',
      'variant="caption"',
      "Eyebrow, nav links",
    ],
  },
  {
    id: "micro-10",
    label: "Micro / Badge",
    font: "DM Sans",
    size: "0.625rem / 10px",
    weight: "600 Semibold",
    cssVar: "--text-micro-size",
    modifiers: "Uppercase in Badge; Text variant=\"tiny\" aliases here",
    preview: { component: "text", variant: "micro" },
    sample: "NEW",
    usages: [
      'Text variant="micro"',
      'Text variant="tiny"',
      "Badge",
      "Footer legal copy",
    ],
  },
];

/** Parse rem from size labels like "3rem / 48px" for sorting. */
export function parseTypographySizeRem(size: string): number {
  const match = size.match(/^([\d.]+)rem/);
  return match ? parseFloat(match[1]) : 0;
}

/** Type scale rows sorted largest → smallest (for review table). */
export function getTypographyStyleGroupsBySize() {
  return [...TYPOGRAPHY_STYLE_GROUPS].sort(
    (a, b) => parseTypographySizeRem(b.size) - parseTypographySizeRem(a.size),
  );
}
