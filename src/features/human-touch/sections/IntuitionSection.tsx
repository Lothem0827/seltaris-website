import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";
import { BannerImage, FeatureImage } from "../components/MediaBlocks";

export function IntuitionSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-16">
        <BannerImage src="/images/human-touch/intuition-banner.png">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <FeaturePageHeading as="h2" variant="bannerTitle">
              Human-like intuition
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="bannerSubtitle">
              Algorithms that make sense of information in the same intuitive
              way a human would.
            </FeaturePageHeading>
          </div>
        </BannerImage>

        <div className="grid grid-cols-2 items-center gap-12 lg:grid-cols-1">
          <div className="px-8">
            <Text>
              <strong className="font-semibold text-text">
                Incorrect or poorly entered data.
              </strong>{" "}
              Let&apos;s look at an example of an address that users have
              entered manually. Here you can see an address that has been typed
              in with no care for format and missing details. Instead of just
              accepting this address, which would likely cause problems
              downstream, we&apos;re going to pass it through Human Touch™
              technology.
              <br />
              <br />
              And like magic, you can see that the address has not only been
              formatted correctly, but it has also had misspellings repaired
              and missing information added.
              <br />
              <br />
              Let&apos;s take a closer look at how Human Touch™ tackles the most
              common scenarios, where an address looks right at first glance, but
              quietly hides errors and inconsistencies.
            </Text>
          </div>
          <FeatureImage src="/images/human-touch/poor-data-ui.png" />
        </div>
      </Container>
    </section>
  );
}
