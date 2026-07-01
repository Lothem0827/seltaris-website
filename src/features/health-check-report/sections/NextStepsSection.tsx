import Image from "@/components/ui/Image";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";

const NEXT_STEPS = [
  {
    id: "buy-result",
    imageSrc: "/images/health-check-report/next-step-buy-visual.png",
    lead: "Buy result file.",
    body: "If you're happy with the insights from your Health Check Report and want the full result file, it's easy. Simply open your job in Seltaris and click Buy Now. A popup will clearly show the exact contents you'll be charged for. Once you confirm, you'll have full access to your complete result file.",
  },
  {
    id: "realtime",
    imageSrc: "/images/health-check-report/next-step-realtime-visual.png",
    lead: "Improve existing data in real time.",
    body: "Seltaris enables batches of existing address data to be cleansed in real-time with no human interaction required. Using the same advanced Human Touch™ logic that powers Seltaris interprets full addresses and intelligently makes sense of the information just as a human would. The result? The most advanced and intuitive address quality solution available.",
  },
  {
    id: "capture",
    imageSrc: "/images/health-check-report/next-step-capture-visual.png",
    lead: "Improve newly captured data.",
    body: "Seltaris capture technology increases efficiency by streamlining data entry, whether that's online during checkout, at POS or within a CRM. This technology also ensures that accurate data is submitted at the front-end thus minimising downstream issues. Improving not only the quality of your data captured but also the user experience by shortening data-entry time.",
  },
] as const;

export function NextStepsSection() {
  return (
    <section className="pb-section">
      <Container>
        <div className="rounded-radius-panel bg-brand-surface px-12 py-24 sm:px-6 lg:py-16">
          <div className="mx-auto flex max-w-content-wide flex-col gap-12">
            <FeaturePageHeading as="h2" variant="sectionTitle">
              Next Steps
            </FeaturePageHeading>

            <div className="grid grid-cols-3 gap-8 lg:grid-cols-1">
              {NEXT_STEPS.map((step) => (
                <article key={step.id} className="flex flex-col gap-6">
                  <div className="relative aspect-[445/426] overflow-hidden rounded-radius-lg">
                    <Image
                      src={step.imageSrc}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="445px"
                    />
                  </div>
                  <Text as="div" className="prose-strong px-1.5">
                    <strong>{step.lead}</strong> {step.body}
                  </Text>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
