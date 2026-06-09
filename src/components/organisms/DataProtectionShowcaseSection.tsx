import { Container } from "@/components/atoms/Container";
import { CenteredShowcase } from "@/components/molecules/CenteredShowcase";
import { assets } from "@/lib/assets";

export function DataProtectionShowcaseSection() {
  return (
    <section className="py-section">
      <Container>
        <CenteredShowcase
          title="Advanced Data Protection"
          subtitle="Your business is nobody else's. Not even GBG."
          imageSrc={assets.platformShowcase}
          imageSize="data"
        />
      </Container>
    </section>
  );
}
