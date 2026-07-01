import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { RevealOnView } from "@/components/shared/RevealOnView";
import { HumanTouchDeferredAnimation } from "@/features/home/components/HumanTouchDeferredAnimation";

export function HumanTouchShowcaseSection() {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col items-center gap-12 text-center">
          <RevealOnView staggerIndex={0} className="mx-auto max-w-3xl space-y-4">
            <Heading level="sectionDisplay">
              Seltaris built with our innovative Human Touch™
            </Heading>
            <Text variant="body" className="text-subheading font-semibold">
              AI, finely tuned for the language of addresses.
            </Text>
          </RevealOnView>
          <RevealOnView staggerIndex={1} className="w-full">
            <HumanTouchDeferredAnimation />
          </RevealOnView>
        </div>
      </Container>
    </section>
  );
}
