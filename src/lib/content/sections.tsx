import type { SlideItem } from "@/lib/types/slider";

export const humanTouchShowcase = {
  title: (
    <>
      DataTools Seltaris Built with{" "}
      <span className="text-brand">DataTools Human Touch™</span>
    </>
  ),
  subtitle: "AI, finely tuned for the language of addresses.",
} as const;

export const humanTouchTabs = [
  "Enhance existing data",
  "Quality datasets",
  "Unverified address enhancement",
] as const;

export const humanTouchCards = [
  {
    id: "formatting",
    imageKey: "humanTouch1" as const,
    body: (
      <>
        <strong>Correct formatting and missing details.</strong> See an address
        typed with no care for format or detail? Instead of letting it pass
        through broken, DataTools Human Touch™ steps in. Like magic, the address
        is re-formatted, misspellings repaired, and missing details are now
        filled in.
      </>
    ),
  },
  {
    id: "advanced",
    imageKey: "humanTouch2" as const,
    body: (
      <>
        <strong>Advanced address handling.</strong> Not all addresses are just
        street, suburb, and postcode. DataTools Human Touch™ understands complex
        details — from units, levels, and floors to lots, sites, ranges, and
        hyphenation.
      </>
    ),
  },
  {
    id: "vanity",
    imageKey: "humanTouch3" as const,
    body: (
      <>
        <strong>Vanity Suburbs.</strong> Swapping a suburb for a more
        prestigious one sounds harmless, until customer address return invalid.
        DataTools Human Touch™ spots these vanity suburbs, and correctly fixes
        them to the official suburb of the address.
      </>
    ),
  },
] as const;

export const altraservicePerformanceSlides: SlideItem[] = [
  {
    id: "fastest",
    imageSrcKey: "altraservice1",
    description: (
      <>
        <strong>World&apos;s Fastest Addressing Batch Processing Tool.</strong>{" "}
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
        no one can gain access. Not even DataTools under force.
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
        today&apos;s largest enterprises demand.
      </>
    ),
    width: "wide",
  },
  {
    id: "iso",
    imageSrcKey: "security3",
    description: (
      <>
        <strong>ISO27001 certified.</strong> Have peace of mind knowing that
        DataTools doesn&apos;t just claim to prioritise security; its practices
        have been thoroughly vetted by independent third parties.
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
        it easy to pinpoint the specific issues in your dataset. And if you choose
        to purchase a repaired file, you&apos;ll know exactly what you are—and
        aren&apos;t—paying for.
      </>
    ),
    width: "narrow",
  },
  {
    id: "accuracy-codes",
    imageSrcKey: "health2",
    description: (
      <>
        <strong>Data accuracy codes.</strong> DataTools Seltaris assigns an
        accuracy code to every address, showing the level of precision achieved
        in matching and validation.
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
        Seltaris. Happy with what you see, purchasing your refined file is just
        one click away.
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
      "DataTools Seltaris delivered the capacity we needed for a large-scale migration. The speed and security credentials gave our team absolute confidence.",
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
