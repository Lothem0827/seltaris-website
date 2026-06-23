import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { HumanTouchAnimated } from "@/components/svg-animations/HumanTouchAnimated";
import { humanTouchShowcase } from "@/lib/content/sections";

export function HumanTouchShowcaseSection() {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <Heading level="sectionDisplay">{humanTouchShowcase.title}</Heading>
            <Text variant="body" className="text-subheading font-semibold">
              {humanTouchShowcase.subtitle}
            </Text>
          </div>
          <HumanTouchAnimated />
        </div>
      </Container>
    </section>
  );
}
