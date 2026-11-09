import { Container } from "@/components/ui/Container";import { RevealOnView } from "@/components/shared/RevealOnView";
import { HumanTouchDeferredAnimation } from "@/features/home/components/HumanTouchDeferredAnimation";

export function HumanTouchShowcaseSection() {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col items-center gap-12 text-center">
          <RevealOnView staggerIndex={0} className="mx-auto max-w-3xl space-y-4">
            <h2 className="type-48 text-text">
              Seltaris built with our innovative Human Touch™
            </h2>
            <p className="type-16 text-paragraph text-subheading font-semibold">
              AI, finely tuned for the language of addresses.
            </p>
          </RevealOnView>
          <RevealOnView staggerIndex={1} className="w-full">
            <HumanTouchDeferredAnimation />
          </RevealOnView>
        </div>
      </Container>
    </section>
  );
}
