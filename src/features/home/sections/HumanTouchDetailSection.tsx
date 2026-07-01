import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealOnView } from "@/components/shared/RevealOnView";
import { HumanTouchTabPanels } from "../components/HumanTouchTabPanels";
import { SplitIntro } from "@/components/shared/SplitIntro";

export function HumanTouchDetailSection() {
  return (
    <section className="pb-section">
      <Container>
        <SplitIntro
          eyebrow="Human Touch™"
          heading={
            <>
              <span className="text-brand">The tool is innovative.</span>
              <br />
              The experience is magical.
            </>
          }
          body={
            <>
              The Human Touch™ logic, tightly integrated with Seltaris,
              intelligently interprets information in the same intuitive way a
              human would. With our most advanced and expansive methodologies,
              we continue to push the limits of what it means to have the most
              accurate data possible.
            </>
          }
          logoKey="human-touch"
          logoAlt="Human Touch"
          className="mb-16"
        />

        <RevealOnView staggerIndex={0}>
          <HumanTouchTabPanels />
        </RevealOnView>

        <RevealOnView staggerIndex={1}>
          <div className="flex justify-center">
            <Button href="/human-touch" variant="secondary">
              Explore all features
            </Button>
          </div>
        </RevealOnView>
      </Container>
    </section>
  );
}
