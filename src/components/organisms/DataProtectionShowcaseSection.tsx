import { Container } from "@/components/atoms/Container";
import { CenteredShowcase } from "@/components/molecules/CenteredShowcase";
import { assets } from "@/lib/assets";

export function DataProtectionShowcaseSection() {
  return (
    <section className="py-section">
      <Container>
        <CenteredShowcase
          size="large"
          title={
            <>
              Advanced
              <br />
              Data Protection™
            </>
          }
          subtitle="Your business is nobody else's. Not even DataTools."
          imageSrc={assets.platformShowcase}
          imageHeight="h-[730px]"
        />
      </Container>
    </section>
  );
}
