import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { BannerImage } from "../components/MediaBlocks";
import { SplitContentRow } from "../components/SplitContentRow";

const SMALL_DETAIL_ROWS = [
  {
    id: "location-awareness",
    imageSrc: "/images/human-touch/fuzzy-logic.png",
    imagePosition: "right" as const,
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
    imageSrc: "/images/human-touch/phonetic-matching.png",
    imagePosition: "left" as const,
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
    imageSrc: "/images/human-touch/intelligent-ui.png",
    imagePosition: "right" as const,
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
] as const;

export function SmallDetailsSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-20">
        <BannerImage src="/images/human-touch/small-differences-banner.webp">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <FeaturePageHeading as="h2" variant="bannerTitle">
              Small details making
              <br />
              <span className="text-brand">big differences.</span>
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="bannerSubtitle">
              Small inconsistencies modified to the correct address.
            </FeaturePageHeading>
          </div>
        </BannerImage>

        <div className="flex flex-col gap-20">
          {SMALL_DETAIL_ROWS.map((row) => (
            <SplitContentRow
              key={row.id}
              imageSrc={row.imageSrc}
              imagePosition={row.imagePosition}
            >
              {row.content}
            </SplitContentRow>
          ))}
        </div>
      </Container>
    </section>
  );
}
