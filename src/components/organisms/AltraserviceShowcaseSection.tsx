import { Container } from "@/components/atoms/Container";
import { CenteredShowcase } from "@/components/molecules/CenteredShowcase";
import { assets } from "@/lib/assets";

export function AltraserviceShowcaseSection() {
  return (
    <section className="py-section">
      <Container>
        <CenteredShowcase
          title={
            <>
              Altraservice™.
            </>
          }
          subtitle="Groundbreaking performance."
          imageSrc={assets.altraserviceHero}
          imageSize="tall"
        />
      </Container>
    </section>
  );
}
