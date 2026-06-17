import type { ReactNode } from "react";

export const humanTouchPageMeta = {
  title: "Human Touch™ | Seltaris",
  description:
    "Data quality software that can read and process data as easily as we do. Explore Human Touch™ technology.",
} as const;

export const humanTouchPageHero = {
  eyebrow: "Human Touch™",
  heading: (
    <>
      The tool is innovative.
      <br />
      The experience is magical.
    </>
  ),
  subtitle:
    "Data quality software that can read and process data as easily as we do.",
} as const;

export const humanTouchCoreTech = {
  leftHeading: (
    <>
      At the core lies our most advanced Human Touch™ technology.
    </>
  ),
  leftBody:
    "This powerful software features large, highly capable intelligence models specifically tailored to read and process data as efficiently as humans do.",
  rightBody:
    "The Human Touch™ logic intelligently interprets the full address, making sense of the information in the same intuitive way a human would. With the inclusion of intelligent location awareness, fuzzy logic, phonetic matching, bordering localities, and many other expansive methodologies, we continue to push the limits for what it means to have the most accurate data possible.",
} as const;

export type HumanTouchSplitRow = {
  id: string;
  imageKey: string;
  imagePosition: "left" | "right";
  content: ReactNode;
};

export const humanTouchSmallDetailRows: HumanTouchSplitRow[] = [
  {
    id: "location-awareness",
    imageKey: "fuzzyLogic",
    imagePosition: "right",
    content: (
      <>
        <strong className="font-semibold text-text">
          Intelligent Location Awareness.
        </strong>{" "}
        This is about understanding the context of an address within its
        geography. For example:
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            Recognising that &quot;North&quot; could be part of the street name
            (&quot;Old North Rd&quot;) or a directional suffix (&quot;Epping
            North&quot;).
          </li>
          <li>
            Knowing how suburbs, postcodes, and states interact, so even if one
            field is missing or wrong, the system can infer the likely correct
            location.
          </li>
          <li>It&apos;s like giving the software local street smarts.</li>
        </ul>
      </>
    ),
  },
  {
    id: "fuzzy-logic",
    imageKey: "phoneticMatching",
    imagePosition: "left",
    content: (
      <>
        <strong className="font-semibold text-text">Fuzzy Logic.</strong>{" "}
        Real-world data is messy. People mistype or add extra spaces and
        characters. Fuzzy logic allows Seltaris to:
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Match &quot;Minto Avnue&quot; to &quot;Minto Avenue.&quot;</li>
          <li>
            Recognise &quot;Strret&quot; as &quot;Street.&quot; Work with
            near-miss errors, typos, and formatting inconsistencies instead of
            rejecting them outright.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "phonetic-matching",
    imageKey: "intelligentUi",
    imagePosition: "right",
    content: (
      <>
        <strong className="font-semibold text-text">Phonetic Matching.</strong>{" "}
        Sometimes addresses are entered the way they sound rather than how
        they&apos;re officially spelled. Human Touch™ applies phonetic algorithms
        to catch these, for example:
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>&quot;Macauley Rd&quot; matching &quot;McAuley Rd.&quot;</li>
          <li>&quot;Smithson&quot; matching &quot;Smythson.&quot;</li>
        </ul>
        <p className="mt-4">
          This is particularly useful for names derived from many cultural
          origins where spelling variations are common.
        </p>
      </>
    ),
  },
];

export const humanTouchGeographicRows: HumanTouchSplitRow[] = [
  {
    id: "bordering-localities",
    imageKey: "borderingLocalities",
    imagePosition: "right",
    content: (
      <>
        <strong className="font-semibold text-text">Bordering Localities.</strong>{" "}
        Addresses don&apos;t always neatly fit suburb/postcode boundaries. Human
        Touch™ understands this by:
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            Checking if the given suburb sits right on the edge of another and
            correcting it accordingly.
          </li>
          <li>
            Fixing vanity suburbs (when someone writes a &quot;prestige&quot;
            suburb instead of the official one).
          </li>
        </ul>
        <p className="mt-4">
          Purposely substituting a suburb or town for a more prestigious one
          nearby is more common than you think. Human Touch™ catches these errors
          to prevent misdirected deliveries, tax zone issues, and misaligned
          service areas.
        </p>
      </>
    ),
  },
  {
    id: "range-interpretation",
    imageKey: "rangeInterpretation",
    imagePosition: "left",
    content: (
      <>
        <strong className="font-semibold text-text">Range Interpretation.</strong>{" "}
        Addresses don&apos;t always have a single number. You often see things
        like:
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            34–36 Darlinghurst Rd (a property that spans multiple street
            numbers), or 21A–21C (multiple units within the same number).
          </li>
        </ul>
        <p className="mt-4">
          Human Touch™ recognises and interprets these ranges and alphanumeric
          suffixes correctly. Instead of flagging them as invalid or splitting
          them incorrectly, it understands they&apos;re part of how properties
          are officially designated.
        </p>
      </>
    ),
  },
  {
    id: "contextual-logic",
    imageKey: "contextualLogic",
    imagePosition: "right",
    content: (
      <>
        <strong className="font-semibold text-text">Contextual Logic.</strong> Not
        every &quot;Lot 5&quot; means the same thing. Context matters:
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            In rural or undeveloped land, &quot;Lot 5&quot; could be the legal
            land parcel identifier.
          </li>
          <li>
            In urban areas, &quot;Lot 5&quot; might sit inside a unit block,
            needing different treatment.
          </li>
        </ul>
        <p className="mt-4">
          Human Touch™ applies this context, so the same label is understood
          differently depending on its setting. That prevents errors like
          misplacing rural addresses into city-style formats.
        </p>
      </>
    ),
  },
];

export const humanTouchStandardisation = {
  badge: "NEW",
  title: "Standardisation on Invalid Address Entries.",
  leftBody: (
    <>
      While we can&apos;t make all addresses valid, sometimes it&apos;s simply not
      possible, we don&apos;t walk away from the challenge. With Seltaris, we take
      a different approach. We aim to make all your data as clean, consistent and
      correctly formatted as possible, even those addresses that can&apos;t be
      fully validated. Most providers are happy to boast about an 85% validation
      rate and quietly ignore the remaining 15%. But when you&apos;re dealing with
      100,000 addresses, that 15% isn&apos;t a small problem, it&apos;s 15,000
      addresses that would otherwise need time-consuming manual effort to clean up
      and correct.
    </>
  ),
  rightBody: (
    <>
      That&apos;s where the real headaches begin, leading to delays, extra costs
      and frustrated teams. We go the extra mile by not just validating what we
      can, but also working hard to improve the quality of the addresses that fall
      outside standard validation. We clean them up, correct obvious issues,
      validate and repair what we can and standardise them to bring them in line
      with your verified data. The result? Even your unvalidated addresses are in
      the best possible shape.
    </>
  ),
} as const;

export const humanTouchFieldCorrections = {
  badge: "NEW",
  title: "Individual field corrections.",
  body: (
    <>
      While others might reject an address as unfixable if key parts are missing
      or invalid, we take a different approach. With Seltaris, even if all you
      have is a suburb and the rest of the address is incomplete or incorrect, we
      still validate and correct what&apos;s there. We process each individual
      field, clean up obvious issues, and standardise the data to bring it in line
      with your verified records. The result? You get the highest quality address
      possible, even if it&apos;s not yet deliverable, putting you in the best
      position for future updates and minimising costly manual cleanups down the
      track.
    </>
  ),
} as const;

export const humanTouchFinestDatasets = {
  heading: "Built from the ground up with only the finest datasets.",
  subheading:
    "Designed to source the best datasets available from multiple suppliers in one system to give you the very best, utmost accurate results.",
} as const;

export const humanTouchIntuition = {
  bannerKey: "intuitionBanner",
  uiKey: "poorDataUi",
  heading: "Human-like intuition",
  subheading:
    "Algorithms that make sense of information in the same intuitive way a human would.",
  body: (
    <>
      <strong className="font-semibold text-text">
        Incorrect or poorly entered data.
      </strong>{" "}
      Let&apos;s look at an example of an
      address that users have entered manually. Here you can see an address that
      has been typed in with no care for format and missing details. Instead of
      just accepting this address, which would likely cause problems downstream,
      we&apos;re going to pass it through Human Touch™ technology.
      <br />
      <br />
      And like magic, you can see that the address has not only been formatted
      correctly, but it has also had misspellings repaired and missing
      information added.
      <br />
      <br />
      Let&apos;s take a closer look at how Human Touch™ tackles the most common
      scenarios, where an address looks right at first glance, but quietly hides
      errors and inconsistencies.
    </>
  ),
} as const;

export const humanTouchSmallDetails = {
  bannerKey: "detailsBanner",
  heading: (
    <>
      Small details making
      <br />
      <span className="text-brand">big differences.</span>
    </>
  ),
  subheading: "Small inconsistencies modified to the correct address.",
} as const;

export const humanTouchGeographic = {
  bannerKey: "geographicPhoto",
  heading: "Geographic Intelligence",
  subheading: "Recognises the unique geographic nuances behind each address.",
} as const;

export const humanTouchUnverified = {
  bannerKey: "beautyDetailsBanner",
  heading: (
    <>
      The beauty is in the <span className="text-brand">details.</span>
    </>
  ),
  subheading:
    "New practices that go far and beyond the data quality industry standard for handling of unverified addresses.",
} as const;

export const humanTouchOptiSource = {
  eyebrow: "OptiSource System™",
  heading: "Quality datasets mean more accurate results",
  premium: {
    eyebrow: "Premium dataset options",
    statLabel: "Australian Postal Data",
    statValue: "99% accuracy",
    body: (
      <>
        While most solutions rely solely on the standard government datasets
        available in Australia and New Zealand, Seltaris goes further.
        <br />
        <br />
        OptiSource System™ includes an expansive semantic index that organises
        and surfaces information from a variety of trusted data sources,
        including the Australian PAF, renowned for its 99% accuracy in postal
        data.
        <br />
        <br />
        When a file request is made, Seltaris processes the data through its
        Human Touch™ algorithms to verify validity. It then searches its
        semantic index and feeds the results to Human Touch™ generative models,
        delivering optimal context to accurately format, cleanse, repair,
        verify, and standardise addresses. This entire process happens in
        milliseconds, giving you the fastest and most precise results, every
        time.
      </>
    ),
  },
} as const;

export const humanTouchAltraserviceTeaser = {
  eyebrow: "Altraservice™",
  heading: (
    <>
      Groundbreaking <span className="text-brand">Performance.</span>
    </>
  ),
  subheading: "The Fastest Addressing Batch Processor We've Ever Created",
  cta: { label: "Learn more", href: "/altraservice" },
} as const;
