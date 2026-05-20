import { Container } from "@/components/atoms/Container";
import { CenteredShowcase } from "@/components/molecules/CenteredShowcase";
import { assets } from "@/lib/assets";

export function AltraserviceShowcaseSection() {
  return (
    <section className="py-section">
      <Container>
        <CenteredShowcase
          size="large"
          title={
            <>
              DataTools Altraservice™.
            </>
          }
          subtitle="Feel the need. The need for processing speed."
          imageSrc={assets.altraserviceHero}
          imageHeight="h-[740px]"
        />
      </Container>
    </section>
  );
}
