import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";
import { BannerImage, FeatureImage } from "../components/MediaBlocks";
import { SplitContentRow } from "../components/SplitContentRow";

export function UnverifiedSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-20">
        <BannerImage src="/images/human-touch/beauty-details-banner.png">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <FeaturePageHeading as="h2" variant="bannerTitle">
              The beauty is in the <span className="text-brand">details.</span>
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="bannerSubtitle">
              New practices that go far and beyond the data quality industry
              standard for handling of unverified addresses.
            </FeaturePageHeading>
          </div>
        </BannerImage>

        <div className="flex flex-col gap-10">
          <div className="space-y-2 px-8">
            <Badge className="w-fit px-2 py-1">NEW</Badge>
            <FeaturePageHeading
              as="h3"
              variant="headingSplitMint"
              className="w-[40%]"
            >
              Standardisation on Invalid Address Entries.
            </FeaturePageHeading>
          </div>
          <FeatureImage
            src="/images/human-touch/standardisation.png"
            className="min-h-content-block-md lg:min-h-content-block"
          />
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-1">
            <Text className="px-8">
              While we can&apos;t make all addresses valid, sometimes it&apos;s
              simply not possible, we don&apos;t walk away from the challenge.
              With Seltaris, we take a different approach. We aim to make all
              your data as clean, consistent and correctly formatted as
              possible, even those addresses that can&apos;t be fully validated.
              Most providers are happy to boast about an 85% validation rate and
              quietly ignore the remaining 15%. But when you&apos;re dealing with
              100,000 addresses, that 15% isn&apos;t a small problem, it&apos;s
              15,000 addresses that would otherwise need time-consuming manual
              effort to clean up and correct.
            </Text>
            <Text className="px-8">
              That&apos;s where the real headaches begin, leading to delays,
              extra costs and frustrated teams. We go the extra mile by not just
              validating what we can, but also working hard to improve the
              quality of the addresses that fall outside standard validation.
              We clean them up, correct obvious issues, validate and repair what
              we can and standardise them to bring them in line with your
              verified data. The result? Even your unvalidated addresses are in
              the best possible shape.
            </Text>
          </div>
        </div>

        <SplitContentRow
          imageSrc="/images/human-touch/field-corrections.png"
          imagePosition="left"
        >
          <Badge className="mb-6 w-fit px-2 py-1">NEW</Badge>
          <FeaturePageHeading as="h3" variant="headingSplitDm" className="mb-6">
            Individual field corrections.
          </FeaturePageHeading>
          While others might reject an address as unfixable if key parts are
          missing or invalid, we take a different approach. With Seltaris, even
          if all you have is a suburb and the rest of the address is incomplete
          or incorrect, we still validate and correct what&apos;s there. We
          process each individual field, clean up obvious issues, and
          standardise the data to bring it in line with your verified records.
          The result? You get the highest quality address possible, even if
          it&apos;s not yet deliverable, putting you in the best position for
          future updates and minimising costly manual cleanups down the track.
        </SplitContentRow>

        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-2 items-start gap-8 lg:grid-cols-1">
            <FeaturePageHeading as="h3" variant="bodyLead" className="px-8">
              Built from the ground up with only the finest datasets.
            </FeaturePageHeading>
            <Text className="px-8">
              Designed to source the best datasets available from multiple
              suppliers in one system to give you the very best, utmost
              accurate results.
            </Text>
          </div>
          <FeatureImage
            src="/images/human-touch/more-data-sources-graphic.svg"
            className="min-h-content-block-md lg:min-h-content-block"
          />
        </div>
      </Container>
    </section>
  );
}
