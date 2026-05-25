import type { SlideItem } from "@/lib/types/slider";

export const humanTouchShowcase = {
  title: <>Seltaris built with our innovative Human Touch™</>,
  subtitle: "AI, finely tuned for the language of addresses.",
} as const;

export const humanTouchTabs = [
  "Enhance existing data",
  "Quality datasets",
  "Unverified address enhancement",
] as const;

export const humanTouchTabPanels = [
  {
    id: "enhance",
    cards: [
      {
        id: "formatting",
        imageKey: "humanTouch1" as const,
        body: (
          <>
            <strong>Correct formatting and missing details.</strong> See an
            address typed with no care for format or detail? Instead of letting
            it pass through broken, Human Touch™ steps in. Like magic, the
            address is re-formatted, misspellings repaired, and missing details
            are now filled in.
          </>
        ),
      },
      {
        id: "advanced",
        imageKey: "humanTouch2" as const,
        body: (
          <>
            <strong>Advanced address handling.</strong> Not all addresses are
            just street, suburb, and postcode. Human Touch™ understands complex
            details — from units, levels, and floors to lots, sites, ranges, and
            hyphenation. It recognises how these interact with streets,
            localities, and numbering systems.
          </>
        ),
      },
      {
        id: "vanity",
        imageKey: "humanTouch3" as const,
        body: (
          <>
            <strong>Vanity Suburbs.</strong> Swapping a suburb for a more
            &ldquo;prestigious&rdquo; one sounds harmless, until customer
            address return invalid. Human Touch™ spots these vanity suburbs, and
            correctly fixes them to the official suburb of the address.
          </>
        ),
      },
    ],
  },
  {
    id: "quality",
    cards: [
      {
        id: "sources",
        imageKey: "humanTouchQuality1" as const,
        body: (
          <>
            <strong>Multiple verified sources.</strong> When it comes to
            verifying addresses, the quality of your results depends on the
            quality of the reference sources used – and even though some come
            close, no single data source can give you complete address coverage.
            Our OptiSource System™ sources the best datasets available from
            multiple suppliers in one system to give you the very best, utmost
            accurate results.
          </>
        ),
      },
      {
        id: "anz",
        imageKey: "humanTouchQuality2" as const,
        body: (
          <>
            <strong>Australia & New Zealand Data.</strong> In Australia, we have
            two primary data sources: the Postal Address File (PAF) and the
            Geocoded National Address File (GNAF). In New Zealand, there are
            three main sources: the Postal Address File (PAF), the New Zealand
            Address Dataset (NZAD), and the Land Information New Zealand
            database (LINZ).
          </>
        ),
      },
      {
        id: "international",
        imageKey: "humanTouchQuality3" as const,
        body: (
          <>
            <strong>International data.</strong> We partner with the leading
            data quality organisations in specific countries to deliver address
            verification for more than 245 countries and territories.
          </>
        ),
      },
    ],
  },
  {
    id: "unverified",
    cards: [
      {
        id: "field-corrections",
        imageKey: "humanTouchUnverified1" as const,
        badge: "NEW",
        body: (
          <>
            <strong>Individual field corrections.</strong> Others might reject
            an address as unfixable when key parts are missing — we don&apos;t.
            With Seltaris, even if all you have is a suburb and the rest is
            incomplete or incorrect, we still validate and correct what&apos;s
            there. Every field is processed, errors are cleaned, and details are
            standardised to match your verified records. The result? The highest
            quality version of that address, ready for future updates.
          </>
        ),
      },
      {
        id: "standardisation",
        imageKey: "humanTouchUnverified2" as const,
        badge: "NEW",
        body: (
          <>
            <strong>Standardisation on invalid entries.</strong> We always look
            for ways to go the extra step. Even if an address is marked as
            invalid, Human Touch™ refines every part it can — correcting errors
            and standardising details upfront. That way, even when an address
            can&apos;t be fully fixed, the parts you do have are already
            accurate, structured, and ready for correction when further
            information arrives.
          </>
        ),
      },
    ],
  },
] as const;

export const altraservicePerformanceSlides: SlideItem[] = [
  {
    id: "fastest",
    imageSrcKey: "altraservice1",
    description: (
      <>
        <strong>
          The fastest addressing Batch processing tool we&apos;ve ever created.
        </strong>{" "}
        By leveraging advanced computing techniques, we developed innovative
        methodologies for processing files more efficiently, resulting in
        significantly faster processing times and improved system performance.
      </>
    ),
    width: "wide",
  },
  {
    id: "scale",
    imageSrcKey: "altraservice2",
    description: (
      <>
        <strong>Designed to scale.</strong> On demand dynamic computational
        capacity designed to draw on even larger server clusters for even faster
        performance.
      </>
    ),
    width: "narrow",
  },
  {
    id: "security",
    imageSrcKey: "altraservice3",
    description: (
      <>
        <strong>Speed is nothing without leading security.</strong> Advanced
        encryption techniques at every step keeps your data secure and
        confidential.
      </>
    ),
    width: "narrow",
  },
];

export const securitySlides: SlideItem[] = [
  {
    id: "private-keys",
    imageSrcKey: "security1",
    description: (
      <>
        <strong>Private Keys.</strong> Your very own unique security key —
        it&apos;s the single key to your encrypted result file — and without it,
        no one can gain access. Not even us under force. There are no backdoors,
        no hidden pathways and no exceptions.
      </>
    ),
    width: "narrow",
  },
  {
    id: "encrypted-cloud",
    imageSrcKey: "security2",
    description: (
      <>
        <strong>Encrypted Cloud Computing.</strong> An exclusive cloud security
        architecture purpose-built to process batch data securely at the scale
        today&apos;s largest enterprises demand. Embedded in Seltaris it
        delivers groundbreaking speed and reliability to keep your data fully
        encrypted from upload to processing to download.
      </>
    ),
    width: "wide",
  },
  {
    id: "iso",
    imageSrcKey: "security3",
    description: (
      <>
        <strong>ISO27001 certified.</strong> Have peace of mind knowing that we
        don&apos;t just claim to prioritise security; its practices have been
        thoroughly vetted by independent third parties and validated against
        international standards of ISO27001.
      </>
    ),
    width: "narrow",
  },
];

export const healthCheckSlides: SlideItem[] = [
  {
    id: "refinement-codes",
    imageSrcKey: "health1",
    description: (
      <>
        <strong>Address refinement codes.</strong> Each code is designed to make
        it easy to pinpoint the specific issues in your dataset. And if you
        choose to purchase a repaired file, you&apos;ll know exactly what you
        are—and aren&apos;t—paying for. Each code is tied to a set price,
        keeping the entire process clear and transparent.
      </>
    ),
    width: "narrow",
  },
  {
    id: "accuracy-codes",
    imageSrcKey: "health2",
    description: (
      <>
        <strong>Data accuracy codes.</strong> Seltaris assigns an accuracy code
        to every address, showing the level of precision achieved in matching
        and validation. These codes make it clear how reliable each address is
        for business operations, logistics, or compliance, with a full summary
        provided for easy reference.
      </>
    ),
    width: "narrow",
  },
  {
    id: "preview",
    imageSrcKey: "health3",
    description: (
      <>
        <strong>Preview before purchase.</strong> Health Check Report shows you
        exactly how your addresses were returned after being processed through
        Seltaris. You can review the transformation in complete detail, giving
        you a clear, transparent view of how your file performed. Happy with
        what you see, purchasing your refined file is just one click away.
      </>
    ),
    width: "wide",
  },
];

export const valuePropSlides = [
  {
    id: "speed",
    title: "Unmatched speed",
    description:
      "Process up to 1,000,000 records in 2 minutes with industry-leading batch addressing performance.",
  },
  {
    id: "accuracy",
    title: "100% accuracy",
    description:
      "Format, clean, repair and verify Australian addresses with complete confidence in every result.",
  },
  {
    id: "security",
    title: "Enterprise security",
    description:
      "Private keys, encrypted cloud computing, and ISO27001-certified processes keep your data yours.",
  },
  {
    id: "support",
    title: "Expert support",
    description:
      "Our team helps you get the most from every feature — from onboarding to advanced workflows.",
  },
] as const;

export const testimonialSlides = [
  {
    id: "marek-b",
    author: "Marek B",
    quote:
      "The Support Agent was great to work with and replied with great knowledge of the system. They were able to point us to the type of function we should use and how to best use the results being returned to validate the address entered by the users",
  },
  {
    id: "enterprise-lead",
    author: "Enterprise Customer",
    quote:
      "Seltaris delivered the capacity we needed for a large-scale migration. The speed and security credentials gave our team absolute confidence.",
  },
  {
    id: "data-manager",
    author: "Data Quality Manager",
    quote:
      "Health Check Reports made it incredibly simple to see where our address data needed work. Repairs were faster than we expected.",
  },
] as const;

export const caseStudySlides = [
  {
    id: "retail",
    company: "Leading online retailer",
    logoKey: "case1" as const,
    description:
      "Australia's leading pure-play online retailer for furniture and homewares.",
    category: "Enterprise",
    stats: [
      { value: "12", label: "Active products" },
      { value: "2.4M", label: "Customer orders in FY24" },
      { value: "$890M", label: "Revenue in FY24" },
    ],
  },
  {
    id: "media",
    company: "Magazine publisher",
    logoKey: "case2" as const,
    description:
      "Australia's leading magazine publisher across entertainment, lifestyle and more.",
    category: "Enterprise",
    stats: [
      { value: "3", label: "Verification methods" },
      { value: "100%", label: "Full deployment" },
      { value: "API", label: "API-driven integration" },
    ],
  },
  {
    id: "government",
    company: "State police service",
    logoKey: "case3" as const,
    description:
      "Australia's state police service achieving digital transformation at scale.",
    category: "Government",
    stats: [
      { value: "4", label: "Validation methods" },
      { value: "85%", label: "Digital adoption rate" },
      { value: "40%", label: "Increase in mobile users" },
    ],
  },
] as const;
