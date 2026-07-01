import { GBG_CUSTOMER_SUPPORT_URL, SELTARIS_LOGIN_URL, siteAssets } from "@/lib/site-assets";
import { AddressServicePage } from "./AddressServicePage";
import type { AddressServicePageContent } from "./types";

export const addressValidationPageMeta = {
  title: "Address Validation | Seltaris",
  description:
    "Seltaris Address Validation validates, repairs, formats, enhances, and standardises addresses with Human Touch™ intelligence for Australia, New Zealand, and International datasets.",
} as const;

const sectionNavIcons = siteAssets.serviceSectionNavIcons;

const addressValidationPageContent: AddressServicePageContent = {
  meta: addressValidationPageMeta,
  hero: {
    breadcrumb: { label: "Seltaris services", href: "/services" },
    heading: "Address Verify",
    supportHeading: "Need more licences?",
    supportCta: {
      label: "Ask a Data Quality Specialist",
      href: GBG_CUSTOMER_SUPPORT_URL,
    },
    datasets: [
      { id: "au", region: "australia" },
      { id: "nz", region: "nz" },
      { id: "intl", region: "international" },
    ],
    logoSrc: siteAssets.serviceSectionNavIcons.addressVerify,
  },
  sectionNav: [
    { id: "overview", label: "Overview", iconSrc: sectionNavIcons.overview },
    {
      id: "whats-included",
      label: "What's included",
      iconSrc: sectionNavIcons.included,
    },
    { id: "data-quality", label: "Data quality", iconSrc: sectionNavIcons.data },
    {
      id: "performance",
      label: "Performance",
      iconSrc: sectionNavIcons.performance,
    },
    { id: "security", label: "Security", iconSrc: sectionNavIcons.security },
    { id: "pricing", label: "Pricing", iconSrc: sectionNavIcons.pricing },
  ],
  overview: {
    eyebrow: "Overview",
    heading: (
      <>
        Every address,
        <br />
        pushed to its best.
      </>
    ),
    leftBody: (
      <>
        <p>
          Seltaris Address Validation validates, repairs, formats, enhances, and
          standardises each address at lightning speed. Powered by Human Touch™
          technology, it interprets every address the same intuitive way a human
          would. Using advanced methodologies and multiple verified sources,
          Seltaris pushes the limits of what it means to deliver the most
          accurate and reliable address data available.
        </p>
      </>
    ),
    rightBody: (
      <>
        Together with a transparent pricing model, you&apos;ll see exactly what
        was refined, paying only for the parts that required attention. The
        result? Every address pushed to its best, ready for communications,
        deliveries, compliance, and more.
      </>
    ),
    heroMockupKey: "addressValidateAnimation",
  },
  whatsIncludedSection: {
    sectionId: "whats-included",
    heading: "What's included?",
    contentVariant: "grid",
    panels: [
      {
        id: "address-refinement-codes",
        label: "Address refinement codes",
        layout: "refinementCodes",
        verifiedImageKey:
          "/images/health-check-report/verified-address-codes.webp",
        unverifiedImageKey:
          "/images/health-check-report/unverified-address-codes.webp",
        verifiedBody: (
          <>
            <p>
              <strong>Verified (V) address codes.</strong> These represent the
              addresses that Seltaris has successfully confirmed as valid.
            </p>
            <p className="mt-6">
              Codes V2–V4 show the progressive refinements applied, ensuring each
              address is fully standardised, accurate, and aligned with postal
              standards.
            </p>
          </>
        ),
        unverifiedBody: (
          <>
            <p>
              <strong>Unverified (U) address codes.</strong> These addresses could
              not be fully confirmed as valid, but they were still processed with
              partial corrections, structural adjustments, and formatting
              improvements.
            </p>
            <p className="mt-6">
              Codes U2–U5 show the enhancements applied to unverified data. These
              improvements ensure that if additional information becomes
              available in the future, each address has the best possible chance
              of being validated.
            </p>
          </>
        ),
      },
      {
        id: "result-file",
        label: "Result file",
        layout: "resultFile",
        imageKey: "/images/address-validation/result-file-mockup.webp",
        body: (
          <p>
            Once your order is confirmed, an .xlsx file will be available for
            download. If you&apos;ve enabled Advanced Data Protection, you&apos;ll
            be prompted to enter your Private Key as part of the added security
            process. After completing this step, you&apos;ll be able to access,
            save, and manage your file.
          </p>
        ),
      },
    ],
  },
  dataQualitySection: {
    sectionId: "data-quality",
    heading: "Data quality",
    contentVariant: "splitIntro",
    panels: [
      {
        id: "addressing-intelligence",
        label: "Addressing intelligence",
        layout: "splitIntro",
        iconKey: "humanTouchLogo",
        leftHeading: "Human Touch™",
        leftSubtitle:
          "Our most powerful, highly capable intelligence models are specifically tailored to read and process data as efficiently as humans do.",
        rightBody: (
          <>
            <p>
              The Human Touch™ logic intelligently interprets address data,
              making sense of the information in the same intuitive way a human
              would.
            </p>
            <p className="mt-6">
              With the inclusion of intelligent location awareness, fuzzy logic,
              phonetic matching, bordering localities, and many other expansive
              methodologies, we continue to push the limits for what it means to
              have the most accurate data possible.
            </p>
          </>
        ),
        learnMoreHref: "/human-touch",
        heroImageKey: "humanTouchAnimated",
      },
      {
        id: "data-sources",
        label: "Data sources",
        layout: "splitIntro",
        iconKey: "humanTouchLogo",
        leftHeading: "OptiSource System™",
        leftSubtitle:
          "Sources the best datasets available from multiple suppliers in one system to give you the very best, utmost accurate results.",
        datasets: [
          { id: "au", region: "australia" },
          { id: "nz", region: "nz" },
          { id: "intl", region: "international" },
        ],
        rightBody: (
          <>
            <p>
              While most solutions rely solely on the standard government
              datasets available in Australia and New Zealand, DataTools goes
              further. OptiSource System™ includes an expansive semantic index
              that organises and surfaces information from a variety of trusted
              data sources, including the Australian PAF, renowned for its 99%
              accuracy in postal data. This entire process happens in
              milliseconds, giving you the fastest and most precise results,
              every time.
            </p>
          </>
        ),
        learnMoreHref: "/human-touch",
        heroImageKey: "/images/human-touch/optisource-diagram.webp",
      },
    ],
  },
  performanceSection: {
    sectionId: "performance",
    heading: "Performance",
    contentVariant: "splitIntro",
    panels: [
      {
        id: "processing-technology",
        label: "Processing technology",
        layout: "splitIntro",
        iconKey: "altraserviceLogo",
        leftHeading: "GBG Altraservice™",
        leftSubtitle:
          "Delivering unprecedented speed and reliability for all your data processing needs.",
        rightBody: (
          <>
            <p>
              Over the past few years, we have dedicated substantial effort to
              optimising efficiency at every layer of our cloud technology stack.
            </p>
            <p className="mt-6">
              As a result, we are proud to announce that Seltaris sets a new
              industry standard as the world&apos;s fastest addressing batch
              processing tool, delivering unprecedented speed and reliability
              for all your data processing needs.
            </p>
          </>
        ),
        learnMoreHref: "/altraservice",
        heroImageKey: "altraserviceAnimated",
      },
      {
        id: "performance-speeds",
        label: "Performance speeds",
        layout: "splitIntro",
        iconKey: "altraserviceLogo",
        leftHeading: "GBG Altraservice™",
        leftSubtitle: "Performance speeds",
        rightBody: (
          <>
            <p>
              GBG Altraservice™, directly integrated into our cloud
              infrastructure, enables users to correct each line of address data
              within fractions of a millisecond, this has enabled it to process
              a staggering <strong>1 million records in just 1 minute</strong>.
            </p>
            <p className="mt-6">
              To put that into perspective, validating Australia&apos;s 15.6
              million deliverable addresses from start to finish with Seltaris
              would only take a total of 16 minutes. Now that&apos;s ultra fast.
            </p>
          </>
        ),
        learnMoreHref: "/altraservice",
        heroImageKey:
          "/images/health-check-report/altra-service-performance.png",
      },
    ],
  },
  securitySection: {
    sectionId: "security",
    heading: "Security",
    contentVariant: "security",
    panels: [
      {
        id: "advanced-data-protection",
        label: "Advanced data protection",
        layout: "securityAdvanced",
        iconKey: "dataProtectionLogo",
        leftHeading: (
          <>
            Advanced
            <br />
            Data Protection
          </>
        ),
        seltarisPlusNote: (
          <>
            Free with eligible{" "}
            <span className="underline">Seltaris+ plans.</span>
          </>
        ),
        price: "A$249.00",
        gstNote: "Excludes GST of $24.90",
        rightBody: (
          <>
            <p>
              Our most advanced cloud security architecture specifically built
              with enterprise in mind.
            </p>
            <p className="mt-6">
              With private keys and our all-new Encrypted Cloud Computing
              architecture, Seltaris takes its industry-leading security to a
              whole new level. Ensuring your data remains strictly confidential,
              heavily encrypted, and completely inaccessible.
            </p>
          </>
        ),
        learnMoreHref: "/advanced-data-protection",
        featureCards: [
          {
            id: "private-keys",
            imageKey:
              "/images/address-quality-health-check-report/security-private-keys-card.webp",
            body: (
              <>
                <strong>Private Keys.</strong> Your very own unique security key
                — It&apos;s the single key to your encrypted result file — and
                without it, no one can gain access. Not even us under force.
                There are no backdoors, no hidden pathways and no exceptions.
              </>
            ),
            learnMoreHref: "/advanced-data-protection",
          },
          {
            id: "encrypted-cloud",
            imageKey:
              "/images/address-quality-health-check-report/security-encrypted-cloud-card.webp",
            body: (
              <>
                <strong>Encrypted Cloud Computing.</strong> An exclusive cloud
                security architecture purpose-built to process batch data
                securely at the scale today&apos;s largest enterprises demand.
                Embedded in Seltaris it delivers groundbreaking speed and
                reliability to keep your data fully encrypted from upload to
                processing to download.
              </>
            ),
            learnMoreHref: "/advanced-data-protection",
          },
          {
            id: "iso27001",
            imageKey:
              "/images/address-quality-health-check-report/security-iso27001-card.png",
            body: (
              <>
                <strong>ISO27001 certified.</strong> Have peace of mind knowing
                that we don&apos;t just claim to prioritise security; its
                practices have been thoroughly vetted by independent third
                parties and validated against international standards of
                ISO27001.
              </>
            ),
            learnMoreHref: "/advanced-data-protection",
          },
        ],
      },
      {
        id: "standard-data-protection",
        label: "Standard data protection",
        layout: "securityStandard",
        iconKey: "dataProtectionLogo",
        leftHeading: (
          <>
            Standard
            <br />
            Data Protection
          </>
        ),
        priceLabel: "FREE",
        rightBody: (
          <p>
            Applies basic encryption during file transfer from your device,
            following common security practices used across the data quality
            industry.
          </p>
        ),
        learnMoreHref: "/advanced-data-protection",
        heroImageKey: "/images/health-check-report/standard-data-protection.webp",
      },
    ],
  },
  pricingIntro: {
    eyebrow: "Pricing",
    heading: (
      <>
        Getting started is easy.
        <br />
        Choose the option that&apos;s right for you.
      </>
    ),
  },
  pricingCards: [
    {
      id: "repaired-intl",
      label: "Repaired file only",
      tone: "default",
      regionLabel: "International",
      iconKey: "repaired",
      title: "Address Validation",
      description:
        "Validate, Repair and Standardise. Improve the quality of your International address data.",
      features: [
        "Validate & Repair addresses",
        "Standardisation of all addresses",
        "1x Repaired File Available for Download",
      ],
      learnMoreHref: "/address-validation",
      cta: {
        label: "Coming soon",
        variant: "secondary",
        disabled: true,
      },
      showInternational: true,
    },
    {
      id: "repaired-au",
      label: "Repaired file only",
      tone: "default",
      regionLabel: "Australia",
      iconKey: "repaired",
      title: "Address Validation",
      description:
        "Validate, Repair and Standardise. Improve the quality of your Australian address data.",
      features: [
        "Validate & Repair addresses",
        "Standardisation of all addresses",
        "1x Repaired File Available for Download",
      ],
      footerNote:
        "Only accessible after completing your Address Quality Health Check Report – Australia.",
      learnMoreHref: "/address-validation",
      showAustralia: true,
      cta: {
        label: "Get started",
        href: SELTARIS_LOGIN_URL,
      },
    },
    {
      id: "repaired-nz",
      label: "Repaired file only",
      tone: "default",
      regionLabel: "New Zealand",
      iconKey: "repaired",
      title: "Address Validation",
      description:
        "Validate, Repair and Standardise. Improve the quality of your New Zealand address data.",
      features: [
        "Validate & Repair addresses",
        "Standardisation of all addresses",
        "1x Repaired File Available for Download",
      ],
      learnMoreHref: "/address-validation",
      showNewZealand: true,
      cta: {
        label: "Coming soon",
        variant: "secondary",
        disabled: true,
      },
    },
  ],
};

export function AddressValidationPage() {
  return <AddressServicePage content={addressValidationPageContent} />;
}
