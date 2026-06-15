import type { ReactNode } from "react";

export const seltarisPlusPageMeta = {
  title: "Seltaris+ | Seltaris",
  description:
    "Seltaris+ brings together the best of Seltaris in one powerful subscription — Health Check Reports, Advanced Data Protection, volume discounts, and shared licences.",
} as const;

export const seltarisPlusPageHero = {
  eyebrow: "Seltaris+",
  heading: (
    <>
      A suite of benefits.
      <br />
      One subscription for it all.
    </>
  ),
  body: "Seltaris+ brings together the best of Seltaris in one powerful subscription, giving your organisation advanced capabilities and real savings for a single monthly price. Every plan includes complimentary Health Check Reports to help you assess and refine your data. As you move into the higher tiers, you'll unlock our most advanced enterprise-level data protection architecture, volume discounts for bulk processing, and seamless sharing of these benefits across your organisation.",
} as const;

export type SeltarisPlusPlanFeature = {
  label: string;
  value: string;
  period?: string;
  badge?: string;
  included?: boolean;
  subscriptionBadge?: string;
  subscriptionValue?: string;
};

export type SeltarisPlusPlan = {
  id: string;
  tier: "standard" | "premium" | "premier";
  name: string;
  tagline: string;
  price: string;
  gstNote: string;
  features: SeltarisPlusPlanFeature[];
  cta: { label: string; href: string };
  popular?: boolean;
};

export const seltarisPlusPlans: SeltarisPlusPlan[] = [
  {
    id: "standard",
    tier: "standard",
    name: "Standard",
    tagline: "For small businesses.",
    price: "$99",
    gstNote: "(Ex. GST)",
    cta: { label: "Join now for $99", href: "#get-started" },
    features: [
      {
        label: "Health Check Reports",
        value: "2x Reports",
        period: "/month",
        badge: "SAVE $500 PER REPORT",
      },
      {
        label: "Advanced Data Protection",
        value: "Not Included",
        included: false,
      },
      {
        label: "Volume discounts",
        value: "Not Included",
        included: false,
      },
      {
        label: "Shared Licences",
        value: "+1 user",
        subscriptionBadge: "1 FREE subscription",
        subscriptionValue: "Valued $99 per month",
      },
    ],
  },
  {
    id: "premium",
    tier: "premium",
    name: "Premium",
    tagline: "For fast-growing businesses.",
    price: "$139",
    gstNote: "(Ex. GST)",
    popular: true,
    cta: { label: "Join now for $139", href: "#get-started" },
    features: [
      {
        label: "Health Check Reports",
        value: "Unlimited",
        period: "/month",
        badge: "SAVE $500 PER REPORT",
      },
      {
        label: "Advanced Data Protection",
        value: "Included",
        included: true,
        badge: "Save $249 per job",
      },
      {
        label: "Volume discounts",
        value: "Included",
        included: true,
        badge: "Save 5% per job.",
      },
      {
        label: "Shared Licences",
        value: "+5 users",
        subscriptionBadge: "5 FREE subscriptions",
        subscriptionValue: "Valued $695 per month",
      },
    ],
  },
  {
    id: "premier",
    tier: "premier",
    name: "Premier",
    tagline: "Ideal for large enterprises.",
    price: "$389",
    gstNote: "(Ex. GST)",
    cta: { label: "Join now for $389", href: "#get-started" },
    features: [
      {
        label: "Health Check Reports",
        value: "Unlimited",
        period: "/month",
        badge: "Save $500 per report",
      },
      {
        label: "Advanced Data Protection",
        value: "Included",
        included: true,
        badge: "Save $249 per job",
      },
      {
        label: "Volume discounts",
        value: "Included",
        included: true,
        badge: "Save 10% per job.",
      },
      {
        label: "Shared Licences",
        value: "+50 users",
        subscriptionBadge: "50 FREE subscriptions",
        subscriptionValue: "Valued $19,450 per month",
      },
    ],
  },
];

export const seltarisPlusSupportCard = {
  heading: "Need more licences?",
  body: "Have a chat with a Data Quality Specialist to discuss custom plans for your enterprise organisation.",
  supportHeading: "Need GBG support?",
  cta: { label: "Ask a Data Quality Specialist", href: "#contact" },
} as const;

export const seltarisPlusIncludedSection = {
  eyebrow: "What's included in Seltaris+",
  heading: (
    <>
      Learn more about the
      <br />
      core offerings of <span className="text-brand">Seltaris+</span>
    </>
  ),
} as const;

export type SeltarisPlusOfferingTone =
  | "health"
  | "protection"
  | "licensing"
  | "volume";

export type SeltarisPlusOffering = {
  id: string;
  imageKey: string;
  iconKey: string;
  backgroundTone: SeltarisPlusOfferingTone;
  heading: ReactNode;
  body: string;
  href: string;
};

export const seltarisPlusOfferings: SeltarisPlusOffering[] = [
  {
    id: "health-check",
    imageKey: "healthCheckVisual",
    iconKey: "healthCheckIcon",
    backgroundTone: "health",
    heading: "Health Check Report",
    body: "Get the full picture of your existing data.",
    href: "/health-check-report",
  },
  {
    id: "data-protection",
    imageKey: "dataProtectionVisual",
    iconKey: "dataProtectionIcon",
    backgroundTone: "protection",
    heading: (
      <>
        Advanced
        <br />
        Data Protection
      </>
    ),
    body: "Enterprise grade security. Built from the ground up.",
    href: "/advanced-data-protection",
  },
  {
    id: "shared-licensing",
    imageKey: "sharedLicensingVisual",
    iconKey: "sharedLicensingIcon",
    backgroundTone: "licensing",
    heading: "Shared licensing",
    body: "Sharing is caring. So everyone can start repairing.",
    href: "#contact",
  },
  {
    id: "volume-discounts",
    imageKey: "volumeDiscountsVisual",
    iconKey: "volumeDiscountsIcon",
    backgroundTone: "volume",
    heading: "Volume discounts",
    body: "Buying big volumes of clean data? You deserve some credit.",
    href: "#contact",
  },
];
