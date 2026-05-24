import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { HumanTouchTabPanels } from "@/components/molecules/HumanTouchTabPanels";
import { SplitIntro } from "@/components/molecules/SplitIntro";
import { assets } from "@/lib/assets";

export function HumanTouchDetailSection() {
  return (
    <section className="px-container-padding pb-section">
      <Container>
        <div className="rounded-[40px] bg-brand-surface px-6 py-16 md:px-12 md:py-24">
          <SplitIntro
            eyebrow="DataTools Human Touch™"
            heading={
              <>
                <span className="text-brand">The tool is innovative.</span>
                <br />
                The experience is magical.
              </>
            }
            body={
              <>
                The DataTools Human Touch™ logic, tightly integrated with
                DataTools Seltaris, intelligently interprets information in the
                same intuitive way a human would.{" "}
                <strong>
                  We continue to push the limits of what it means to have the
                  most accurate data possible.
                </strong>
              </>
            }
            imageSrc={assets.humanTouchSide}
            imageAlt="Human Touch"
            className="mb-16"
          />

          <HumanTouchTabPanels />

          <div className="flex justify-center">
            <Button href="#get-started">Get started with Seltaris</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
