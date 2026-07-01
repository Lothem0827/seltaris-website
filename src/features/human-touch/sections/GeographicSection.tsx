import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { BannerImage } from "../components/MediaBlocks";
import { SplitContentRow } from "../components/SplitContentRow";

const GEOGRAPHIC_ROWS = [
  {
    id: "bordering-localities",
    imageSrc: "/images/human-touch/bordering-localities.png",
    imagePosition: "right" as const,
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
          nearby is more common than you think. Human Touch™ catches these
          errors to prevent misdirected deliveries, tax zone issues, and
          misaligned service areas.
        </p>
      </>
    ),
  },
  {
    id: "range-interpretation",
    imageSrc: "/images/human-touch/range-interpretation.png",
    imagePosition: "left" as const,
    content: (
      <>
        <strong className="font-semibold text-text">Range Interpretation.</strong>{" "}
        Addresses don&apos;t always have a single number. You often see things
        like:
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            34–36 Darlinghurst Rd (a property that spans multiple street numbers),
            or 21A–21C (multiple units within the same number).
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
    imageSrc: "/images/human-touch/contextual-logic.png",
    imagePosition: "right" as const,
    content: (
      <>
        <strong className="font-semibold text-text">Contextual Logic.</strong>{" "}
        Not every &quot;Lot 5&quot; means the same thing. Context matters:
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
] as const;

export function GeographicSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-20">
        <BannerImage src="/images/human-touch/geographic-banner.webp">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <FeaturePageHeading as="h2" variant="bannerTitle">
              Geographic Intelligence
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="bannerSubtitle">
              Recognises the unique geographic nuances behind each address.
            </FeaturePageHeading>
          </div>
        </BannerImage>

        <div className="flex flex-col gap-20">
          {GEOGRAPHIC_ROWS.map((row) => (
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
