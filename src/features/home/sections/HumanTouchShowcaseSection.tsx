import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { HumanTouchAnimated } from "@/components/svg-animations/HumanTouchAnimated";

export function HumanTouchShowcaseSection() {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <Heading level="sectionDisplay">
              Seltaris built with our innovative Human Touch™
            </Heading>
            <Text variant="body" className="text-subheading font-semibold">
              AI, finely tuned for the language of addresses.
            </Text>
          </div>
          <HumanTouchAnimated />
        </div>
      </Container>
    </section>
  );
}
