import type { SeltarisPlusPlan } from "@/features/seltaris-plus/components/SeltarisPlusPlanCard";
import { SELTARIS_GET_STARTED_PLAN_URLS } from "@/lib/site-assets";

export const getStartedPlans: SeltarisPlusPlan[] = [
  {
    id: "free",
    tier: "free",
    name: "Free Plan",
    tagline: "For solo testers.",
    price: "$0",
    gstNote: "(Ex. GST) of $0.00",
    cta: { label: "Start for free", href: SELTARIS_GET_STARTED_PLAN_URLS.free },
    features: [
      {
        label: "Health Check Reports",
        value: "5 Health Check",
        period: "/month",
      },
      {
        label: "Advanced Data Protection",
        value: "Not Included",
        included: false,
      },
      {
        label: "Volume Discounts",
        value: "Not Included",
        included: false,
      },
      {
        label: "Shared Licences",
        value: "0 users",
      },
    ],
  },
  {
    id: "premium",
    tier: "premium",
    name: "Premium",
    tagline: "For fast-growing businesses.",
    price: "$139",
    gstNote: "(Ex. GST) of $0.00",
    popular: true,
    popularLabel: "RECOMMENDED",
    cta: { label: "Join now for $1", href: SELTARIS_GET_STARTED_PLAN_URLS.premium },
    features: [
      {
        label: "Health Check Reports",
        value: "Unlimited",
        period: "/month",
      },
      {
        label: "Advanced Data Protection",
        value: "Included",
        included: true,
      },
      {
        label: "Volume Discounts",
        value: "5%",
        included: true,
      },
      {
        label: "Shared Licences",
        value: "+5 users",
      },
    ],
  },
  {
    id: "premier",
    tier: "premier",
    name: "Premier",
    tagline: "Ideal for large enterprises.",
    price: "$389",
    gstNote: "(Ex. GST) of $0.00",
    cta: { label: "Join now for $1", href: SELTARIS_GET_STARTED_PLAN_URLS.premier },
    features: [
      {
        label: "Health Check Reports",
        value: "Unlimited",
        period: "/month",
      },
      {
        label: "Advanced Data Protection",
        value: "Included",
        included: true,
      },
      {
        label: "Volume Discounts",
        value: "10%",
        included: true,
      },
      {
        label: "Shared Licences",
        value: "+50 users",
      },
    ],
  },
];
