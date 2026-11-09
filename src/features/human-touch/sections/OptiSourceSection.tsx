import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";import { FeatureImage } from "../components/MediaBlocks";

export function OptiSourceSection() {
  return (
    <section className="py-section">
      <Container className="flex flex-col gap-16">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Eyebrow label="OptiSource System™" />
          <h2 className="type-48 text-text text-center">
            Quality datasets mean more accurate results
          </h2>
        </div>

        <FeatureImage src="/images/human-touch/optisource-diagram.webp"
          className="min-h-content-block-xl lg:min-h-content-block-lg" />

        <div className="grid grid-cols-2 items-start gap-12 lg:grid-cols-1">
          <div className="flex flex-col gap-8 p-8 sm:px-0">
            <div className="space-y-3">
              <h3 className="type-32 text-text">
                Premium dataset options
              </h3>
              <p className="type-16 text-paragraph">
                While most solutions rely solely on the standard government
                datasets available in Australia and New Zealand, Seltaris goes
                further.
              </p>
            </div>
            <div className="w-full rounded-radius-lg border border-brand bg-brand-muted p-6 shadow-sm">
              <p className="type-16 text-paragraph">Australian Postal Data</p>
              <p className="type-32 mt-2 text-brand">
                99% accuracy
              </p>
            </div>
          </div>
          <div className="flex items-center p-8 sm:px-0">
            <div className="type-16 text-paragraph prose-stack">
              <p>
                GBG OptiSource System™ includes an expansive semantic
                index that organises and surfaces information from a variety of
                trusted data sources, including the Australian PAF, renowned for
                its 99% accuracy in postal data.
              </p>
              <p>
                When a file request is made, Seltaris processes the
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
