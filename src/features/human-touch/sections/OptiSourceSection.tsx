import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";
import { FeatureImage } from "../components/MediaBlocks";

export function OptiSourceSection() {
  return (
    <section className="py-section">
      <Container className="flex flex-col gap-16">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Eyebrow label="OptiSource System™" />
          <FeaturePageHeading as="h2" variant="bannerTitleWide">
            Quality datasets mean more accurate results
          </FeaturePageHeading>
        </div>

        <FeatureImage
          src="/images/human-touch/optisource-diagram.svg"
          className="min-h-content-block-xl lg:min-h-content-block-lg"
        />

        <div className="grid grid-cols-2 items-start gap-12 lg:grid-cols-1">
          <div className="flex flex-col gap-8 p-8 sm:px-0">
            <div className="space-y-3">
              <FeaturePageHeading as="h3" variant="headingSmall">
                Premium dataset options
              </FeaturePageHeading>
              <Text>
                While most solutions rely solely on the standard government
                datasets available in Australia and New Zealand, DataTools
                Seltaris goes further.
              </Text>
            </div>
            <div className="w-full rounded-radius-lg border border-brand bg-brand-muted p-6 shadow-sm">
              <Text>Australian Postal Data</Text>
              <FeaturePageHeading
                as="p"
                variant="featureCardTitle"
                className="mt-2 text-brand"
              >
                99% accuracy
              </FeaturePageHeading>
            </div>
          </div>
          <div className="flex items-center p-8 sm:px-0">
            <Text as="div" className="prose-stack">
              <p>
                DataTools OptiSource System™ includes an expansive semantic
                index that organises and surfaces information from a variety of
                trusted data sources, including the Australian PAF, renowned for
                its 99% accuracy in postal data.
              </p>
              <p>
                When a file request is made, DataTools Seltaris processes the
                data through its Human Touch™ algorithms to verify validity. It
                then searches its semantic index and feeds the results to Human
                Touch™ generative models, delivering optimal context to
                accurately format, cleanse, repair, verify, and standardise
                addresses.
              </p>
              <p>
                This entire process happens in milliseconds, giving you the
                fastest and most precise results, every time.
              </p>
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
}
