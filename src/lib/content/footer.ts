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

export const footerNavGroups: FooterNavGroup[] = [
  {
    title: "Products",
    links: [
      { label: "Identity data verification", href: "https://www.gbg.com/en/products/" },
      { label: "Documents & biometrics", href: "https://www.gbg.com/en/products/" },
      { label: "Document authentication", href: "https://www.gbg.com/en/products/" },
      { label: "Biometric verification", href: "https://www.gbg.com/en/products/" },
      { label: "Identity fraud", href: "https://www.gbg.com/en/products/" },
      { label: "Know your customer", href: "https://www.gbg.com/en/products/" },
      { label: "Know your business", href: "https://www.gbg.com/en/products/" },
      { label: "GBG Trust", href: "https://www.gbg.com/en/products/" },
      { label: "Roadmap", href: "https://www.gbg.com/en/products/" },
    ],
  },
  {
    title: "Platform",
    links: [{ label: "GBG Go", href: "https://www.gbg.com/en/platform/" }],
  },
  {
    title: "Solutions",
    links: [
      { label: "Financial services", href: "https://www.gbg.com/en/solutions/" },
      { label: "Retail", href: "https://www.gbg.com/en/solutions/" },
      { label: "Gaming", href: "https://www.gbg.com/en/solutions/" },
      { label: "Events", href: "https://www.gbg.com/en/solutions/" },
      { label: "Crypto & FX", href: "https://www.gbg.com/en/solutions/" },
      { label: "Pensions", href: "https://www.gbg.com/en/solutions/" },
      { label: "Public sector", href: "https://www.gbg.com/en/solutions/" },
      { label: "Insurance", href: "https://www.gbg.com/en/solutions/" },
      { label: "Marketplace", href: "https://www.gbg.com/en/solutions/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource library", href: "https://www.gbg.com/en/resources/" },
      { label: "Blog", href: "https://www.gbg.com/en/blog/" },
      { label: "Events", href: "https://www.gbg.com/en/events/" },
      { label: "News", href: "https://www.gbg.com/en/news/" },
      { label: "GBG Trust Centre", href: "https://www.gbg.com/en/trust-centre/" },
      { label: "Our customers", href: "https://www.gbg.com/en/customers/" },
      { label: "AI at GBG", href: "https://www.gbg.com/en/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Legal and regulatory centre", href: "https://www.gbg.com/en/legal/" },
      { label: "Privacy policy", href: "https://www.gbg.com/en/legal/privacy-policy/" },
      { label: "Products and services privacy policy", href: "https://www.gbg.com/en/legal/" },
      { label: "Cookie policy", href: "https://www.gbg.com/en/legal/cookie-policy/" },
      { label: "Accessibility", href: "https://www.gbg.com/en/legal/accessibility/" },
      { label: "Terms of use", href: "https://www.gbg.com/en/legal/terms-of-use/" },
      { label: "Modern Slavery Statement", href: "https://www.gbg.com/en/legal/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Investors", href: "https://www.gbg.com/en/investors/" },
      { label: "Careers", href: "https://www.gbg.com/en/careers/" },
      { label: "About us", href: "https://www.gbg.com/en/about-us/" },
      { label: "Partners", href: "https://www.gbg.com/en/partners/" },
      { label: "ESG", href: "https://www.gbg.com/en/esg/" },
      { label: "Loqate.com", href: "https://www.loqate.com/" },
    ],
  },
  {
    title: "Contact us",
    links: [
      { label: "Sales enquiries", href: "https://www.gbg.com/en/contact-us/" },
      { label: "Customer support", href: "https://www.gbg.com/en/contact-us/" },
      { label: "Individual data requests", href: "https://www.gbg.com/en/contact-us/" },
      { label: "Login", href: "https://www.gbg.com/en/login/" },
    ],
  },
];

export const footerSocialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/GBGplc", iconKey: "facebook" as const },
  { label: "YouTube", href: "https://www.youtube.com/@GBGplc", iconKey: "youtube" as const },
  { label: "X", href: "https://x.com/GBGplc", iconKey: "x" as const },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gbgplc", iconKey: "linkedin" as const },
  { label: "GBG Trust Centre", href: "https://www.gbg.com/en/trust-centre/", iconKey: "trust" as const },
];

export const footerTagline =
  "We are the world's most trusted specialist for location data. Our innovative technology gives customers the ability to verify addresses at the point of capture, with a simple, and easy to integrate address validation API.";
