export type FooterLegalBlock = {
  title: string;
  items: Array<string | { text: string; linkLabel: string; linkHref: string }>;
};

export const footerLegalDisclosures: FooterLegalBlock[] = [
  {
    title: "a. Performance & Testing",
    items: [
      "1. DataTools Seltaris performance statements are based on extensive internal and external testing conducted under controlled conditions.",
      "2. Benchmark testing (July 2025) compared Seltaris to a selection of widely available commercial batch addressing solutions, with results showing processing speeds of up to 1,000,000 records in 1 minute.",
      "3. Actual performance may vary depending on dataset size, file structure, system environment, and connection speed.",
      "4. DataTools Seltaris is positioned as a leading batch processing tool based on the above comparative benchmarks.",
    ],
  },
  {
    title: "b. Product Availability & Scope",
    items: [
      "1. Currently, the only available method for purchasing a repaired address file is through completion of the Australian Address Quality Health Check Report.",
      "2. Health Check Reports are limited to Australian address data at this stage.",
      "3. Address Validation repair file is accessible only once a Health Check Report has been completed.",
    ],
  },
  {
    title: "c. Security & Data Protection",
    items: [
      "1. Features such as Encrypted Cloud Computing™ and Private Keys form part of DataTools' cloud security architecture.",
      "2. Security outcomes depend on correct configuration and safeguarding of private keys by customers.",
    ],
  },
  {
    title: "d. Data Retention & Handling",
    items: [
      {
        text: "1. Data is retained in DataTools' secure cloud environment only for a defined retention period then deleted as set out in our ",
        linkLabel: "terms",
        linkHref: "https://www.gbg.com/en/legal/",
      },
    ],
  },
  {
    title: "e. Standards & Certification",
    items: [
      "1. References to ISO 27001 certification apply to DataTools environments and processes that have been independently audited and certified by accredited third parties",
      "2. Certification scope is limited to the official documentation provided by the certifying body.",
    ],
  },
  {
    title: "f. Subscription & Pricing",
    items: [
      "1. DataTools Seltaris+ subscription pricing is displayed in AUD and excludes GST unless otherwise stated.",
      "2. Introductory offers (e.g., $1 for the first month) are only valid once per organisation and only available on eligible plans.",
      "3. Ongoing subscription pricing (e.g., from $99.00/month) applies after the introductory period ends, unless cancelled.",
      "4. Included benefits (such as Health Check Reports, Advanced Data Protection, Private Keys, Volume discounts and Subscription sharing) may vary based on plan and region.",
    ],
  },
  {
    title: "g. General",
    items: [
      "1. All product names, logos, and trademarks are the property of their respective owners.",
      "2. Information provided forms part of the Product Disclosures and is intended to provide contextual and explanatory information about the Products. Nothing in these Product Disclosures creates additional warranties or guarantees beyond those expressly set out in the Agreement.",
    ],
  },
];

export type FooterNavGroup = {
  title: string;
  links: { label: string; href: string }[];
};

/** Link columns aligned with seltaris.com production footer (GBG global nav). */
export const footerNavGroups: FooterNavGroup[] = [
  {
    title: "Products",
    links: [
      {
        label: "Identity data verification",
        href: "https://www.gbg.com/en/verify-identity/data-verification/",
      },
      {
        label: "Documents & biometrics",
        href: "https://www.gbg.com/en/verify-identity/document-verification/",
      },
      {
        label: "Document authentication",
        href: "https://www.gbg.com/en/verify-identity/document-authentication/",
      },
      {
        label: "Biometric verification",
        href: "https://www.gbg.com/en/verify-identity/biometric-verification/",
      },
      {
        label: "Identity fraud",
        href: "https://www.gbg.com/en/fraud-protection/synthetic-ID-fraud/",
      },
      {
        label: "Know your customer",
        href: "https://www.gbg.com/en/assess-risk/know-your-customer/",
      },
      {
        label: "Know your business",
        href: "https://www.gbg.com/en/assess-risk/know-your-business-kyb/",
      },
      {
        label: "GBG Trust",
        href: "https://www.gbg.com/en/fraud-protection/gbg-trust/",
      },
      { label: "Roadmap", href: "https://www.gbg.com/en/roadmap/" },
    ],
  },
  {
    title: "Platform",
    links: [{ label: "GBG Go", href: "https://www.gbg.com/en/platform/gbg-go/" }],
  },
  {
    title: "Solutions",
    links: [
      {
        label: "Financial services",
        href: "https://www.gbg.com/en/industry/financial-services/",
      },
      { label: "Retail", href: "https://www.gbg.com/en/industry/retail/" },
      { label: "Gaming", href: "https://www.gbg.com/en/industry/gaming/" },
      { label: "Events", href: "https://www.gbg.com/en/industry/events/" },
      { label: "Crypto & FX", href: "https://www.gbg.com/en/industry/crypto-fx/" },
      {
        label: "Pensions",
        href: "https://www.gbg.com/en/industry/wealth-and-pensions/",
      },
      {
        label: "Public sector",
        href: "https://www.gbg.com/en/industry/public-sector/",
      },
      { label: "Insurance", href: "https://www.gbg.com/en/industry/insurance/" },
      {
        label: "Marketplace",
        href: "https://www.gbg.com/en/industry/marketplace/",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource library", href: "https://www.gbg.com/en/resources/" },
      { label: "Blog", href: "https://www.gbg.com/en/blog/" },
      { label: "Events", href: "https://www.gbg.com/en/events/" },
      { label: "News", href: "https://www.gbg.com/en/news/" },
      {
        label: "GBG Trust Centre",
        href: "https://secureandtrusted.gbgplc.com/",
      },
      { label: "Our customers", href: "https://www.gbg.com/en/our-customers/" },
      {
        label: "AI at GBG",
        href: "https://www.gbg.com/en/ai-powered-customer-intelligence/",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Legal and regulatory centre",
        href: "https://gbgplc.com/en/legal-and-regulatory/",
      },
      { label: "Privacy policy", href: "https://datatools.com.au/privacy-policy/" },
      {
        label: "Products and services privacy policy",
        href: "https://www.gbg.com/en/products-and-services-privacy-policy/",
      },
      { label: "Cookie policy", href: "https://datatools.com.au/cookie-policy/" },
      {
        label: "Accessibility",
        href: "https://www.gbg.com/en/accessibility-statement/",
      },
      {
        label: "Terms of use",
        href: "https://datatools.com.au/resources/legal/terms-of-use-datatools-legal/",
      },
      {
        label: "Modern Slavery Statement",
        href: "https://datatools.com.au/datatools-modern-slavery-statement-and-policy/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Investors", href: "https://www.gbgplc.com/investors/" },
      { label: "Careers", href: "https://www.gbgplc.com/careers/" },
      { label: "About us", href: "https://www.gbgplc.com/about/" },
      { label: "Partners", href: "https://www.gbg.com/en/partners/" },
      {
        label: "ESG",
        href: "https://www.gbgplc.com/investors/environmental-social-and-governance/",
      },
      { label: "Loqate.com", href: "https://www.loqate.com/" },
    ],
  },
  {
    title: "Contact us",
    links: [
      {
        label: "Sales enquiries",
        href: "https://www.gbg.com/en/contact/sales-enquiry/",
      },
      {
        label: "Customer support",
        href: "https://www.gbg.com/en/contact/customer-support-enquiry/",
      },
      {
        label: "Individual data requests",
        href: "https://www.gbg.com/en/contact/general-enquiry/individual-data-enquiry/",
      },
      { label: "Login", href: "https://seltaris.gbg.com/login" },
    ],
  },
];

export const footerSocialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/gbgplc/",
    iconKey: "facebook" as const,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@gbgplc",
    iconKey: "youtube" as const,
  },
  { label: "X", href: "https://x.com/GBGplc", iconKey: "x" as const },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/gb-group/",
    iconKey: "linkedin" as const,
  },
  {
    label: "GBG security report on UpGuard",
    href: "https://www.upguard.com/security-report/gbg",
    iconKey: "trust" as const,
  },
];

export const footerTagline =
  "We are the world's most trusted specialist for location data. Our innovative technology gives customers the ability to verify addresses at the point of capture, with a simple, and easy to integrate address validation API.";
