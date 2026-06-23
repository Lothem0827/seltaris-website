import type { PricingCardTone } from "@/components/molecules/PricingCard";

export const servicesPageMeta = {
  title: "Seltaris Services | Seltaris",
  description:
    "Explore Seltaris services for address validation, email and phone verification, and geocode appending. Format, clean, repair, and verify your datasets.",
} as const;

export type ServiceOfferingIconKey =
  | "health"
  | "repaired"
  | "email"
  | "phone"
  | "geocode";

export type ServiceOffering = {
  id: string;
  label: string;
  tone: PricingCardTone;
  iconKey: ServiceOfferingIconKey;
  title: string;
  description: string;
  features: string[];
  footerNote?: string;
  learnMoreHref?: string;
  cta: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    disabled?: boolean;
  };
  showAustralia?: boolean;
  showNewZealand?: boolean;
  showInternational?: boolean;
};

export type ServiceCategory = {
  id: string;
  title: string;
  intro: string;
  offerings: ServiceOffering[];
};

export const servicesPageHero = {
  heading: "Seltaris Services",
} as const;

export const servicesPageCategories: ServiceCategory[] = [
  {
    id: "address-data",
    title: "Address data",
    intro:
      "Seltaris formats, cleanses, repairs, verifies, enhances, and standardises addresses. Transform your existing datasets into accurate, reliable information for mailing, logistics, compliance, and more.",
    offerings: [
      {
        id: "hcr-au",
        label: "Health check report",
        tone: "success",
        iconKey: "health",
        title: "Address Quality Health Check Report",
        description:
          "Test your Australian data and return advanced reporting that pinpoints areas for improvement. After the job, a repaired high quality version of your data is available for purchase.",
        features: [
          "1x Health Check Report",
          "1x Repaired file available for purchase",
        ],
        learnMoreHref: "/address-quality-health-check-report",
        showAustralia: true,
        cta: {
          label: "Get started",
          href: "/address-quality-health-check-report",
        },
      },
      {
        id: "hcr-nz",
        label: "Health check report",
        tone: "success",
        iconKey: "health",
        title: "Address Quality Health Check Report",
        description:
          "Test your New Zealand data and return advanced reporting that pinpoints areas for improvement. After the job, a repaired high quality version of your data is available for purchase.",
        features: [
          "1x Health Check Report",
          "1x Repaired file available for purchase",
        ],
        learnMoreHref: "/address-quality-health-check-report",
        showNewZealand: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
      {
        id: "repaired-intl",
        label: "Repaired file only",
        tone: "default",
        iconKey: "repaired",
        title: "Address Validation",
        description:
          "Validate, Repair and Standardise. Improve the quality of your International address data.",
        features: [
          "Validate & Repair addresses",
          "Standardisation of all addresses",
          "1x Repaired file available for purchase",
        ],
        learnMoreHref: "/address-validation",
        showInternational: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
      {
        id: "repaired-au",
        label: "Repaired file only",
        tone: "default",
        iconKey: "repaired",
        title: "Address Validation",
        description:
          "Validate, Repair and Standardise. Improve the quality of your Australian address data.",
        features: [
          "Validate & Repair addresses",
          "Standardisation of all addresses",
          "1x Repaired file available for purchase",
        ],
        footerNote:
          "Only accessible after completing your Address Quality Health Check Report – Australia.",
        learnMoreHref: "/address-validation",
        showAustralia: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
      {
        id: "repaired-nz",
        label: "Repaired file only",
        tone: "default",
        iconKey: "repaired",
        title: "Address Validation",
        description:
          "Validate, Repair and Standardise. Improve the quality of your New Zealand address data.",
        features: [
          "Validate & Repair addresses",
          "Standardisation of all addresses",
          "1x Repaired file available for purchase",
        ],
        learnMoreHref: "/address-validation",
        showNewZealand: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
    ],
  },
  {
    id: "email-data",
    title: "Email address data",
    intro:
      "Seltaris validates and verifies email addresses. Eliminate invalid, disposable, or risky emails to ensure your datasets are accurate, deliverable, and ready for reliable communication, marketing, compliance, and more.",
    offerings: [
      {
        id: "email-intl",
        label: "Validated file only",
        tone: "default",
        iconKey: "email",
        title: "Email Validation",
        description:
          "Validate email delivery status. Improve the quality of your email addresses.",
        features: [
          "Validate email delivery status",
          "1x Repaired file available for purchase",
        ],
        showInternational: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
    ],
  },
  {
    id: "phone-data",
    title: "Phone number data",
    intro:
      "Seltaris validates and verifies phone numbers. Ensure they are active, accurate, and correctly identified as landline or mobile. Transform your datasets into reliable information for sales, customer service, compliance, and more.",
    offerings: [
      {
        id: "phone-intl",
        label: "Validated file only",
        tone: "default",
        iconKey: "phone",
        title: "Phone Validation",
        description:
          "Validate phone number connection status. Improve the quality of your phone numbers.",
        features: [
          "Validate phone number connection status",
          "1x Repaired file available for purchase",
        ],
        showInternational: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
    ],
  },
  {
    id: "geocode-data",
    title: "Geocode appending",
    intro:
      "Seltaris appends precise latitude and longitude coordinates to every validated address. Transform your datasets into accurate, mappable information for logistics, delivery, analytics, compliance, and more.",
    offerings: [
      {
        id: "geocode-au",
        label: "Appended file only",
        tone: "default",
        iconKey: "geocode",
        title: "Geocode Appending",
        description:
          "Add latitude and longitude coordinates to every validated address, giving you geocodes across Australia.",
        features: [
          "Appending geocodes",
          "1x Repaired file available for purchase",
        ],
        showAustralia: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
      {
        id: "geocode-nz",
        label: "Appended file only",
        tone: "default",
        iconKey: "geocode",
        title: "Geocode Appending",
        description:
          "Add latitude and longitude coordinates to every validated address, giving you geocodes across New Zealand.",
        features: [
          "Appending geocodes",
          "1x Repaired file available for purchase",
        ],
        showNewZealand: true,
        cta: {
          label: "Coming soon",
          href: "#contact",
          variant: "secondary",
          disabled: true,
        },
      },
    ],
  },
];

export const servicesPageCategoryCards = [
  {
    id: "address-data",
    title: "Address data",
    description: "Format, clean, repair and verify addresses.",
    iconKey: "address" as const,
    comingSoon: false,
  },
  {
    id: "email-data",
    title: "Email address data",
    description: "Check and validate email addresses.",
    iconKey: "email" as const,
    comingSoon: true,
  },
  {
    id: "phone-data",
    title: "Phone number data",
    description: "Check and validate landline or mobile numbers.",
    iconKey: "phone" as const,
    comingSoon: true,
  },
  {
    id: "geocode-data",
    title: "Appending geocode",
    description: "Add coordinates to every validated address.",
    iconKey: "geocode" as const,
    comingSoon: true,
  },
] as const;
