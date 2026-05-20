import { Container } from "@/components/atoms/Container";
import { CenteredShowcase } from "@/components/molecules/CenteredShowcase";
import { assets } from "@/lib/assets";
import { humanTouchShowcase } from "@/lib/content/sections";

export function HumanTouchShowcaseSection() {
  return (
    <section className="py-section">
      <Container>
        <CenteredShowcase
          title={humanTouchShowcase.title}
          subtitle={humanTouchShowcase.subtitle}
          imageSrc={assets.humanTouchShowcase}
          imageHeight="h-[556px]"
        />
      </Container>
    </section>
  );
}
