import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";
import { Text } from "@/components/ui/Text";
import { HumanTouchAnimated } from "@/components/svg-animations/HumanTouchAnimated";

export function HeroSection() {
  return (
    <section className="px-container-padding pt-24 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <IconSurface
            src="/icons/features/human-touch.svg"
            alt="Human Touch"
            size="feature"
          />
          <div className="mx-auto max-w-3xl space-y-5">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              Human Touch™
            </FeaturePageHeading>
            <FeaturePageHeading as="h1" variant="heroTitle">
              The tool is innovative.
              <br />
              The experience is magical.
            </FeaturePageHeading>
            <FeaturePageHeading as="p" variant="heroSubtitle">
              Data quality software that can read and process data as easily as
              we do.
            </FeaturePageHeading>
          </div>
        </div>

        <div className="relative w-full max-w-container">
          <HumanTouchAnimated />
        </div>

        <div className="grid w-full max-w-container grid-cols-2 items-start gap-16 lg:grid-cols-1 lg:gap-12">
          <div className="space-y-6 px-8">
            <FeaturePageHeading as="h2" variant="headingSmall">
              At the core lies our most advanced Human Touch™ technology.
            </FeaturePageHeading>
            <Text>
              This powerful software features large, highly capable intelligence
              models specifically tailored to read and process data as
              efficiently as humans do.
            </Text>
          </div>
          <div className="px-8 pt-2 lg:pt-0">
            <Text>
              The Human Touch™ logic intelligently interprets the full address,
              making sense of the information in the same intuitive way a human
              would. With the inclusion of intelligent location awareness, fuzzy
              logic, phonetic matching, bordering localities, and many other
              expansive methodologies, we continue to push the limits for what
              it means to have the most accurate data possible.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
}
