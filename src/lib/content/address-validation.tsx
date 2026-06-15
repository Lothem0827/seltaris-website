import { assets } from "@/lib/assets";
import type { AddressServicePageContent } from "@/lib/types/address-service-page";

export const addressValidationPageMeta = {
  title: "Address Validation | Seltaris",
  description:
    "Seltaris Address Validation validates, repairs, formats, enhances, and standardises addresses with Human Touch™ intelligence for Australia, New Zealand, and International datasets.",
} as const;

const sectionNav = [
  { id: "overview", label: "Overview" },
  { id: "whats-included", label: "What's included" },
  { id: "data-quality", label: "Data quality" },
  { id: "performance", label: "Performance" },
  { id: "security", label: "Security" },
  { id: "pricing", label: "Pricing" },
] as const;

export const addressValidationPageContent: AddressServicePageContent = {
  meta: addressValidationPageMeta,
  hero: {
    breadcrumb: { label: "Seltaris services", href: "/services" },
    heading: "Address Verify",
    supportHeading: "Need more licences?",
    supportCta: {
      label: "Ask a Data Quality Specialist",
      href: "#contact",
    },
    datasets: [
      { id: "au", label: "Australia", flagKey: "australia" },
      { id: "nz", label: "New Zealand", flagKey: "nz" },
      { id: "intl", label: "International", flagKey: "international" },
    ],
    logoSrc: assets.pricingIcons.repaired,
  },
  sectionNav,
  sectionNavIconSrc: assets.pricingIcons.repaired,
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
    heroMockupSrc: assets.addressQualityHealthCheckReportPage.heroMockup,
    heroMockupAlt: "Address validation workflow preview",
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
          "transformationSummary",
          "transformationVerified",
          "transformationChanges",
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
        layout: "grid",
        imageKeys: ["refinementVerified", "refinementUnverified"],
        body: (
          <>
            <p>
              <strong>Verified (V) address codes.</strong> These represent the
              addresses that Seltaris has successfully confirmed as valid.
              Codes V2–V4 show the progressive refinements applied, ensuring each
              address is fully standardised, accurate, and aligned with postal
              standards.
            </p>
            <p className="mt-6">
              <strong>Unverified (U) address codes.</strong> These addresses
              could not be fully confirmed as valid, but they were still
              processed with partial corrections, structural adjustments, and
              formatting improvements. Codes U2–U5 show the enhancements
              applied to unverified data. These improvements ensure that if
              additional information becomes available in the future, each
              address has the best possible chance of being validated.
            </p>
          </>
        ),
      },
      {
        id: "data-accuracy-codes",
        label: "Data accuracy codes",
        layout: "grid",
        imageKeys: ["transformationChanges"],
        body: (
          <>
            <p>
              In addition to Refinement Codes, Seltaris also appends Data
              Accuracy Codes to each address. These Data Accuracy Codes are
              useful because they indicate the level of precision at which each
              address has been matched and validated during processing.
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
        layout: "grid",
        imageKeys: ["sampleExamples"],
        body: (
          <>
            <p>
              <strong>Repair examples from your dataset.</strong> Here
              you&apos;ll see a sample list of your existing addresses and how
              they&apos;ve been refined to their best state. This preview gives
              you a clear insight into how Seltaris processes your file and
              provides confidence in knowing exactly how your data will look
              before you receive the complete file.
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
        heroImageKey: "dataQualityAddressingIntelligence",
      },
      {
        id: "data-sources",
        label: "Data sources",
        layout: "splitIntro",
        iconKey: "humanTouchLogo",
        leftHeading: "OptiSource System™",
        leftSubtitle:
          "Sources the best datasets available from multiple suppliers in one system to give you the very best, utmost accurate results.",
        rightBody: (
          <>
            <p className="font-label text-body-sm uppercase tracking-wide text-muted">
              Included datasets
            </p>
            <ul className="mt-2 space-y-1">
              <li>Australia</li>
              <li>New Zealand</li>
              <li>International</li>
            </ul>
            <p className="mt-6">
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
        heroImageKey: "dataQualityDataSources",
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
        heroImageKey: "performanceComposite",
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
              within fractions of a millisecond, this has enabled it to process a
              staggering <strong>1 million records in just 1 minute</strong>.
            </p>
            <p className="mt-6">
              To put that into perspective, validating Australia&apos;s 15.6
              million deliverable addresses from start to finish with Seltaris
              would only take a total of 16 minutes. Now that&apos;s ultra fast.
            </p>
          </>
        ),
        learnMoreHref: "/altraservice",
        heroImageKey: "performanceComposite",
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
            imageKey: "securityPrivateKeysCard",
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
            imageKey: "securityEncryptedCloudCard",
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
            imageKey: "securityIso27001Card",
            body: (
              <>
                <strong>ISO27001 certified.</strong> Have peace of mind knowing
                that we don&apos;t just claim to prioritise security; its
                practices have been thoroughly vetted by independent third parties
                and validated against international standards of ISO27001.
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
      cta: {
        label: "Get started",
        href: "/address-quality-health-check-report",
      },
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
        href: "#contact",
        variant: "secondary",
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
        href: "/address-quality-health-check-report",
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
        href: "#contact",
        variant: "secondary",
      },
    },
  ],
};
