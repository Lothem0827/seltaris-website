export type EnterprisePageId = "enterprise" | "government";

export type EnterpriseIndustryCard = {
  id: "b2c" | "b2b" | "government";
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  cta: string;
};

export type EnterpriseComplianceItem = {
  title: string;
  description: string;
  iconSrc: string;
};

export type EnterpriseStoryCard = {
  title: string;
  imageSrc: string;
  href: string;
};

export type EnterprisePageContent = {
  id: EnterprisePageId;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  industriesEyebrow: string;
  industriesTitle: string;
  industriesBody: string;
  industries: EnterpriseIndustryCard[];
  complianceEyebrow: string;
  complianceTitle: string;
  complianceBody: string;
  complianceItems: EnterpriseComplianceItem[];
  storiesTitle: string;
  stories: EnterpriseStoryCard[];
};

const industryDescription =
  "Outshine competitors with expressive storefronts, the world’s best-converting checkout, and fully customisable and extensible solutions across your frontend and backend.";

const complianceItems: EnterpriseComplianceItem[] = [
  {
    title: "ISO Compliance",
    description:
      "Each time you use any DataTools product or service, we guarantee compliance that adheres to the world’s highest standards of information security (ISO/IEC 27001).",
    iconSrc: "/images/enterprise/compliance/iso-compliance.json",
  },
  {
    title: "Independent Security Rating",
    description:
      "Remove the inefficiencies and manual work when assessing and monitoring us, so you can get started as fast as possible.",
    iconSrc: "/images/enterprise/compliance/independent-security.json",
  },
  {
    title: "No Data Recorded. Ever.",
    description:
      "Customer data is never recorded by DataTools. This means we leave nothing to hack, nowhere to lose things, and no excuses to hide behind.",
    iconSrc: "/images/enterprise/compliance/no-data-recorded.json",
  },
  {
    title: "Secure Servers",
    description:
      "State-of-the-art, highly-available data centres located in the east part of Australia. All built on the industry leading Amazon Web Services (AWS).",
    iconSrc: "/images/enterprise/compliance/secure-servers.json",
  },
  {
    title: "Financially Backed SLA (99.9%)",
    description:
      "Annual Uptime Percentage of at least 99.9% during the Service Year. In the event DataTools Cloud service does not meet the Annual Uptime Percentage commitment, you will be eligible to receive a Service Credit.",
    iconSrc: "/images/enterprise/compliance/financially-backed-sla.json",
  },
];

const industries: EnterpriseIndustryCard[] = [
  {
    id: "b2c",
    title: "B2C",
    description: industryDescription,
    imageSrc: "/images/enterprise/industry-b2c.png",
    href: "/enterprise/business",
    cta: "Explore B2C",
  },
  {
    id: "b2b",
    title: "B2B",
    description: industryDescription,
    imageSrc: "/images/enterprise/industry-b2b.png",
    href: "/enterprise/business",
    cta: "Explore B2B",
  },
  {
    id: "government",
    title: "Government",
    description: industryDescription,
    imageSrc: "/images/enterprise/industry-government.png",
    href: "/enterprise/government",
    cta: "Explore Government",
  },
];

const stories: EnterpriseStoryCard[] = [
  {
    title: "Bauer Media Group",
    imageSrc: "/images/success-stories/bauer-hero.webp",
    href: "/success-stories/bauer-media-group",
  },
  {
    title: "Queensland Police",
    imageSrc: "/images/success-stories/queensland-police-hero.webp",
    href: "/success-stories/queensland-police",
  },
  {
    title: "Temple & Webster",
    imageSrc: "/images/success-stories/temple-hero.webp",
    href: "/success-stories/temple-webster",
  },
];

const shared = {
  subtitle: "World leading data quality software that keeps enterprises ahead.",
  ctaLabel: "Get in touch",
  ctaHref: "/get-started",
  industriesEyebrow: "PURPOSE-BUILT FOR INDUSTRY SPECIFIC STANDARDS",
  industriesTitle: "The data quality platform behind it all.",
  industriesBody:
    "Operate your business with software built to accommodate the latest standards in your industry.",
  industries,
  complianceEyebrow: "WHY ENTERPRISE CHOOSE DATATOOLS",
  complianceTitle: "Software built to meet the highest standards of compliance.",
  complianceBody:
    "DataTools has leading enterprise data quality software designed for elite compliance and future resilience. It keeps you ahead of shifting customer needs, amplifies your development team's impact, and helps you outsmart competitors instead of outspending them",
  complianceItems,
  storiesTitle: "Browse more success stories",
  stories,
} as const;

export const ENTERPRISE_PAGES: Record<EnterprisePageId, EnterprisePageContent> =
  {
    enterprise: {
      id: "enterprise",
      eyebrow: "DataTools for Enterprise",
      title: "A data quality platform, That’s built for X (Scale, Quality, Accuracy)",
      ...shared,
    },
    government: {
      id: "government",
      eyebrow: "DataTools for GOVERNMENT",
      title: "A data quality platform, that’s built for the future.",
      ...shared,
    },
  };
