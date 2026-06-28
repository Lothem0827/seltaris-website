import { GBG_CUSTOMER_SUPPORT_URL, SELTARIS_LOGIN_URL, siteAssets } from "@/lib/site-assets";
import { AddressServicePage } from "./AddressServicePage";
import type { AddressServicePageContent } from "./types";

export const addressQualityHealthCheckReportPageMeta = {
  title: "Address Quality Health Check Report | Seltaris",
  description:
    "Test your address data with a comprehensive Health Check Report. Clear PDF assessment of completeness, accuracy, and postal compliance for Australia, New Zealand, and International datasets.",
} as const;

const sectionNavIcons = siteAssets.serviceSectionNavIcons;
const { featureIcons } = siteAssets;

const sectionIconOverrides: Record<string, string> = {
  "data-quality": featureIcons.humanTouch,
  performance: featureIcons.altraService,
  security: featureIcons.advancedDataProtection,
};

const addressQualityHealthCheckReportPageContent: AddressServicePageContent = {
  meta: addressQualityHealthCheckReportPageMeta,
  hero: {
    breadcrumb: { label: "Seltaris Services", href: "/services" },
    heading: (
      <>
        Address Quality
        <br />
        Health Check Report
      </>
    ),
    supportHeading: "Need more licenses?",
    supportCta: { label: "Ask a Support Specialist", href: GBG_CUSTOMER_SUPPORT_URL },
    datasets: [
      { id: "au", region: "australia" },
      { id: "nz", region: "nz" },
    ],
    logoSrc: siteAssets.featureIcons.healthCheck,
  },
  sectionNav: [
    { id: "overview", label: "Overview", iconSrc: sectionNavIcons.overview },
    {
      id: "whats-included",
      label: "What's included",
      iconSrc: sectionNavIcons.included,
    },
    {
      id: "data-quality",
      label: "Data quality",
      iconSrc: sectionIconOverrides["data-quality"],
    },
    {
      id: "performance",
      label: "Performance",
      iconSrc: sectionIconOverrides.performance,
    },
    {
      id: "security",
      label: "Security",
      iconSrc: sectionIconOverrides.security,
    },
    { id: "pricing", label: "Pricing", iconSrc: sectionNavIcons.pricing },
  ],
  overview: {
    eyebrow: "Overview",
    heading: (
      <>
        From hidden to clear.
        <br />
        The full picture is here.
      </>
    ),
    leftBody: (
      <>
        <p>
          This Health Check Report delivers a{" "}
          <strong>
            clear and comprehensive assessment of your submitted address data
          </strong>{" "}
          delivered in an easy to read PDF, analysed through the Seltaris service.
        </p>
        <p className="mt-6">
          Each record is reviewed for completeness, accuracy, and compliance with
          official postal standards. The report highlights key issues such as
          missing details, invalid formats, or unrecognised localities, alongside
          recommended corrections and enhancements.
        </p>
      </>
    ),
    rightBody:
      "These improvements are designed to strengthen the quality, deliverability, and reliability of your address data ensuring it is fully prepared for use across mailing, logistics, and compliance systems.",
    heroMockupSrc: "/images/health-check-report/hero-mockup.png",
    heroMockupAlt: "Health Check Report preview on MacBook",
  },
  whatsIncludedSection: {
    sectionId: "whats-included",
    heading: "What's included?",
    contentVariant: "grid",
    panels: [
      {
        id: "transformation-breakdown",
        label: "Transformation breakdown",
        layout: "grid",
        imageKeys: [
          "/images/health-check-report/report-summary.png",
          "/images/health-check-report/report-verified.png",
          "/images/health-check-report/report-changes.png",
        ],
        body: (
          <>
            <p>
              <strong>Summary view.</strong> The introductory section of the
              Health Check Report provides an overall breakdown of your
              file&apos;s performance. It includes a clear assessment of the
              current state of your data quality, followed by the improvements
              made possible with Seltaris.
            </p>
          </>
        ),
      },
      {
        id: "address-refinement-codes",
        label: "Address refinement codes",
        layout: "refinementCodes",
        verifiedImageKey:
          "/images/health-check-report/verified-address-codes.svg",
        unverifiedImageKey:
          "/images/health-check-report/unverified-address-codes.svg",
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
        id: "data-accuracy-codes",
        label: "Data accuracy codes",
        layout: "dataAccuracyCodes",
        imageKey: "/images/health-check-report/data-accuracy-codes.png",
        body: (
          <>
            <p>
              <strong>Data accuracy codes.</strong> In addition to Refinement
              Codes, Seltaris also appends Data Accuracy Codes to each address.
              These Data Accuracy Codes are useful because they indicate the
              level of precision at which each address has been matched and
              validated during processing.
            </p>
            <p className="mt-6">
              Understanding the accuracy level helps assess the reliability and
              usability of each address for business operations, logistics, or
              compliance.
            </p>
          </>
        ),
      },
      {
        id: "sample-examples",
        label: "Sample examples",
        layout: "sampleExamples",
        imageKey: "/images/health-check-report/sample-examples.png",
        body: (
          <>
            <p>
              <strong>Repair examples from your dataset.</strong> Here you&apos;ll
              see a sample list of your existing addresses and how they&apos;ve
              been refined to their best state. This preview gives you a clear
              insight into how Seltaris processes your file and provides
              confidence in knowing exactly how your data will look before you
              receive the complete file.
            </p>
          </>
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
        leftHeading: (
          <>
            DataTools
            <br />
            Human Touch™
          </>
        ),
        leftSubtitle:
          "Our most powerful, highly capable intelligence models are specifically tailored to read and process data as efficiently as humans do.",
        rightBody: (
          <>
            <p>
              The DataTools Human Touch™ logic intelligently interprets address
              data, making sense of the information in the same intuitive way a
              human would.
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
        leftHeading: (
          <>
            DataTools
            <br />
            OptiSource System™
          </>
        ),
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
              While most solutions rely solely on the standard government datasets
              available in Australia and New Zealand, DataTools goes further.
              OptiSource System™ includes an expansive semantic index that
              organises and surfaces information from a variety of trusted data
              sources, including the Australian PAF, renowned for its 99% accuracy
              in postal data. This entire process happens in milliseconds, giving
              you the fastest and most precise results, every time.
            </p>
          </>
        ),
        learnMoreHref: "/human-touch",
        heroImageKey: "/images/human-touch/optisource-diagram.svg",
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
        leftHeading: (
          <>
            DataTools
            <br />
            Altraservice™
          </>
        ),
        leftSubtitle:
          "Delivering unprecedented speed and reliability for all your data processing needs.",
        rightBody: (
          <>
            <p>
              Over the past few years, we have dedicated substantial effort to
              optimising efficiency at every layer of our cloud technology stack.
            </p>
            <p className="mt-6">
              As a result, we are proud to announce that DataTools Seltaris sets a
              new industry standard as the world&apos;s fastest addressing batch
              processing tool, delivering unprecedented speed and reliability for
              all your data processing needs.
            </p>
          </>
        ),
        learnMoreHref: "/altraservice",
        heroImageKey:
          "/images/address-quality-health-check-report/performance-composite.png",
      },
      {
        id: "performance-speeds",
        label: "Performance speeds",
        layout: "splitIntro",
        iconKey: "altraserviceLogo",
        leftHeading: (
          <>
            DataTools
            <br />
            Altraservice™
          </>
        ),
        leftSubtitle:
          "Correct each line of address data within fractions of a millisecond.",
        rightBody: (
          <>
            <p>
              GBG Altraservice™, directly integrated into our cloud
              infrastructure, enables users to correct each line of address data
              within fractions of a millisecond — processing a staggering{" "}
              <strong>1 million records in just 1 minute</strong>.
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
            <span className="underline">DataTools Seltaris+ plans.</span>
          </>
        ),
        price: "A$249.00",
        gstNote: "Includes GST of A$13.55",
        rightBody: (
          <>
            <p>
              Our most advanced cloud security architecture specifically built
              with enterprise in mind.
            </p>
            <p className="mt-6">
              With private keys and our all-new Encrypted Cloud Computing
              architecture, DataTools takes its industry-leading security to a
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
              "/images/address-quality-health-check-report/security-private-keys-card.png",
            body: (
              <>
                <strong>Private Keys.</strong> Your very own unique security key —
                It&apos;s the single key to your encrypted result file.
              </>
            ),
            learnMoreHref: "/advanced-data-protection",
          },
          {
            id: "encrypted-cloud",
            imageKey:
              "/images/address-quality-health-check-report/security-encrypted-cloud-card.png",
            body: (
              <>
                <strong>Encrypted Cloud Computing™.</strong> An exclusive cloud
                security architecture purpose-built to process batch data securely
                at the scale today&apos;s largest enterprises demand.
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
                that DataTools doesn&apos;t just claim to prioritise security; its
                practices have been thoroughly vetted by independent third
                parties.
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
        heroImageKey: "/images/health-check-report/standard-data-protection.png",
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
      id: "hcr-nz",
      label: "Health check report",
      tone: "success",
      regionLabel: "New Zealand",
      iconKey: "health",
      title: "Address Quality Health Check Report",
      description:
        "Test your New Zealand data and return advanced reporting that pinpoints areas for improvement. After the job, a repaired high quality version of your data is available for purchase.",
      features: [
        "1x Health Check Report",
        "1x Repaired File Available for Purchase",
      ],
      price: { amount: "$500.00", gst: "Excludes GST of $50.00" },
      learnMoreHref: "/address-quality-health-check-report",
      cta: {
        label: "Coming soon",
        href: "#contact",
        variant: "secondary",
        disabled: true,
      },
      showNewZealand: true,
    },
    {
      id: "hcr-au",
      label: "Health check report",
      tone: "success",
      regionLabel: "Australia",
      iconKey: "health",
      title: "Address Quality Health Check Report",
      description:
        "Test your Australian data and return advanced reporting that pinpoints areas for improvement. After the job, a repaired high quality version of your data is available for purchase.",
      features: [
        "1x Health Check Report",
        "1x Repaired File Available for Purchase",
      ],
      price: { amount: "$500.00", gst: "Excludes GST of $50.00" },
      learnMoreHref: "/address-quality-health-check-report",
      cta: { label: "Get started", href: SELTARIS_LOGIN_URL },
      showAustralia: true,
    },
    {
      id: "subscription",
      label: "Subscription",
      tone: "subscription",
      iconKey: "subscription",
      title: "Seltaris+ Subscription",
      description:
        "Seltaris+ brings together the best of Seltaris in one powerful subscription, giving your organisation advanced capabilities and real savings for a single monthly price.",
      features: [
        "1x Health Check Report",
        "Free Advanced Data Protection, Private Keys, volume discounts and licence sharing with your organisation.",
      ],
      footerNote: "Available only on eligible plans.",
      price: {
        amount: "$1 for 1 month",
        gst: "Excludes GST of $0.10",
        note: "Get your first month for $1, then ongoing pricing from $99.00/month.",
      },
      cta: { label: "Explore plans", href: "/seltaris-plus" },
    },
  ],
};

export function AddressQualityHealthCheckReportPage() {
  return (
    <AddressServicePage content={addressQualityHealthCheckReportPageContent} />
  );
}
