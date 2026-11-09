import { SELTARIS_GET_STARTED_PLAN_URLS } from "@/lib/site-assets";
import type { SeltarisPlusPlan } from "./components/SeltarisPlusPlanCard";

export const seltarisPlusPlans: SeltarisPlusPlan[] = [
  {
    id: "prepaid",
    tier: "prepaid",
    name: "Prepaid",
    tagline: "Perfect for high-volume automated jobs.",
    price: "Pay with credits",
    pricePeriod: "",
    gstNote: "Load credits, then deduct per transaction.",
    popular: true,
    popularLabel: "RECOMMENDED",
    cta: {
      label: "Get started",
      href: SELTARIS_GET_STARTED_PLAN_URLS.prepaid,
    },
    features: [
      {
        label: "Health Check Reports",
        value: "Free",
        included: true,
      },
      {
        label: "Advanced Data Protection",
        value: "Included",
        included: true,
      },
      {
        label: "Payment",
        value: "Deduct from pre-paid credit balance",
        included: true,
      },
    ],
  },
  {
    id: "postpaid",
    tier: "postpaid",
    name: "Postpaid",
    tagline:
      "Pay immediately with Visa, Mastercard, or American Express via our secure payment gateway.",
    price: "Pay per transaction",
    pricePeriod: "",
    gstNote: "No credit balance required.",
    cta: {
      label: "Get started",
      href: SELTARIS_GET_STARTED_PLAN_URLS.postpaid,
    },
    features: [
      {
        label: "Health Check Reports",
        value: "Free",
        included: true,
      },
      {
        label: "Advanced Data Protection",
        value: "Included",
        included: true,
      },
      {
        label: "Payment",
        value: "Card via secure payment gateway",
        included: true,
      },
    ],
  },
];
