import { serviceCategoryPath } from "@/lib/content/service-categories";
import { siteAssets } from "@/lib/site-assets";

export type GetStartedAccordionItem = {
  id: string;
  title: string;
  body: string;
  visualSrc: string;
  visualAlt: string;
};

export type GetStartedTabPanel =
  | {
      id: "health-check";
      label: string;
      kind: "accordion";
      serviceIcon: string;
      availability: string;
      serviceTitle: string;
      showDatasets: true;
      headline: string;
      intro: string;
      accordion: GetStartedAccordionItem[];
    }
  | {
      id: "address-verify";
      label: string;
      kind: "accordion";
      serviceIcon: string;
      availability: string;
      serviceTitle: string;
      showDatasets: true;
      headline: string;
      intro: string;
      accordion: GetStartedAccordionItem[];
    }
  | {
      id: "other-data";
      label: string;
      kind: "offerings";
      serviceIcon: string;
      availability: string;
      serviceTitle: string;
      showDatasets: false;
      headline: string;
      intro: string;
    };

export const GET_STARTED_TAB_LABELS = [
  "Check my datas quality",
  "Clean address data",
  "Clean other data",
] as const;

export const getStartedTabs: GetStartedTabPanel[] = [
  {
    id: "health-check",
    label: GET_STARTED_TAB_LABELS[0],
    kind: "accordion",
    serviceIcon: siteAssets.getStarted.healthCheckIcon,
    availability: "Available Now",
    serviceTitle: "Health Check Report",
    showDatasets: true,
    headline: "From hidden to clear.\nThe full picture is here.",
    intro:
      "This Health Check Report delivers a clear and comprehensive assessment of your submitted address data delivered in an easy to read PDF, analysed through the Seltaris service.",
    accordion: [
      {
        id: "compare",
        title: "Compare before & after",
        body: "Each record is reviewed for completeness, accuracy, and compliance with official postal standards. The report highlights key issues such as missing details, invalid formats, or unrecognised localities, alongside recommended corrections and enhancements.",
        visualSrc: siteAssets.getStarted.healthCheckReportPreview,
        visualAlt: "Address Quality Health Check Report preview",
      },
      {
        id: "pricing",
        title: "Clear pricing model",
        body: "By linking each refinement code to a defined cost, the report ensures you only pay for the specific level of correction needed—nothing more. This approach makes it clear where improvements are required, while providing full visibility over the work needed to bring your data up to standard.",
        visualSrc: siteAssets.getStarted.clearPricingVisual,
        visualAlt: "Clear pricing model",
      },
      {
        id: "reliability",
        title: "See how reliable your data is",
        body: "Seltaris assigns a data accuracy code to every address, showing the level of precision achieved in matching and validation. These codes make it clear how reliable each address is for business operations, logistics, or compliance, with a full summary provided for easy reference.",
        visualSrc: siteAssets.getStarted.reliableVisual,
        visualAlt: "Data reliability metrics",
      },
    ],
  },
  {
    id: "address-verify",
    label: GET_STARTED_TAB_LABELS[1],
    kind: "accordion",
    serviceIcon: siteAssets.serviceSectionNavIcons.addressVerify,
    availability: "Available Now",
    serviceTitle: "Address Verify",
    showDatasets: true,
    headline: "Every address, pushed to its best.",
    intro:
      "Seltaris Address Verify validates, repairs, formats, enhances, and standardises each address at lightning speed.",
    accordion: [
      {
        id: "accuracy",
        title: "Highly accurate data",
        body: "The Human Touch™ logic intelligently interprets the full address, making sense of the information in the same intuitive way a human would. With the inclusion of intelligent location awareness, fuzzy logic, phonetic matching, bordering localities, and many other expansive methodologies, we continue to push the limits for what it means to have the most accurate data possible.",
        visualSrc: siteAssets.getStarted.addressValidationVisual,
        visualAlt: "Address validation in action",
      },
      {
        id: "performance",
        title: "1 million records in 1 minute",
        body: "GBG Altraservice™, directly integrated into our cloud infrastructure, enables us to correct each line of address data within fractions of a millisecond, this has enabled it to achieve a staggering 1 million records in just 1 minute.\n\nTo put that into perspective, validating Australia's 15.6 million deliverable addresses from start to finish with Seltaris would only take a total of 16 minutes. Now that's ultra fast.",
        visualSrc: siteAssets.getStarted.millionRecordsVisual,
        visualAlt: "High-volume address processing",
      },
      {
        id: "security",
        title: "Enterprise grade security",
        body: "Advanced Data Protection delivers enterprise-grade security built from the ground up, ensuring your data remains entirely your own—never accessible to anyone else.\n\nPowered by Encrypted Cloud Computing™, every address processed through Seltaris is encrypted during transit, processing, and at rest, with only you holding the private key. This approach eliminates server-side access and ensures complete control, giving you a secure, reliable environment to manage and enhance your data with full confidence.",
        visualSrc: siteAssets.getStarted.enterpriseGradeSecurityVisual,
        visualAlt: "Enterprise grade data security",
      },
    ],
  },
  {
    id: "other-data",
    label: GET_STARTED_TAB_LABELS[2],
    kind: "offerings",
    serviceIcon: siteAssets.featureIcons.seltaris,
    availability: "Available Now",
    serviceTitle: "Seltaris Services",
    showDatasets: false,
    headline: "Services designed to get you cleaning, fast.",
    intro:
      "Seltaris brings together a powerful suite of services designed to clean and enrich your organisation's data. We're proud to offer our most advanced tools that make data quality simple. Starting today, you can clean and validate Australian addresses with phone, email validation, and geocoding coming soon.",
  },
];

export const getStartedOfferingCards = [
  {
    label: "VALIDATED FILE ONLY",
    tone: "default" as const,
    iconSrc: "/images/home/pricing-icon-repaired.png",
    title: "Email Validation",
    description:
      "Validate email delivery status. Improve the quality of your email addresses.",
    features: [
      "Validate email delivery status",
      "1x Repaired file available for purchase",
    ],
    showInternational: true,
    learnMoreHref: serviceCategoryPath("email-data"),
  },
  {
    label: "VALIDATED FILE ONLY",
    tone: "default" as const,
    iconSrc: "/images/home/pricing-icon-repaired.png",
    title: "Phone Validation",
    description:
      "Validate phone number connection status. Improve the quality of your phone numbers.",
    features: [
      "Validate phone number connection status",
      "1x Repaired file available for purchase",
    ],
    showInternational: true,
    learnMoreHref: serviceCategoryPath("phone-data"),
  },
  {
    label: "VALIDATED FILE ONLY",
    tone: "default" as const,
    iconSrc: "/images/home/pricing-icon-repaired.png",
    title: "Geocode Appending",
    description:
      "Add latitude and longitude coordinates to every validated address, giving you geocodes across Australia.",
    features: [
      "Appending geocodes",
      "1x Repaired file available for purchase",
    ],
    showAustralia: true,
    learnMoreHref: serviceCategoryPath("geocode-data"),
  },
];
