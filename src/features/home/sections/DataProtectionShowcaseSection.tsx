import { Container } from "@/components/ui/Container";
import { CenteredShowcase } from "@/components/shared/CenteredShowcase";

const PLATFORM_SHOWCASE = "/images/home/platform-showcase.png";

export function DataProtectionShowcaseSection() {
  return (
    <section className="py-section">
      <Container>
        <CenteredShowcase
          title="Advanced Data Protection"
          subtitle="Your business is nobody else's. Not even GBG."
          imageSrc={PLATFORM_SHOWCASE}
          imageSize="data"
        />
      </Container>
    </section>
  );
}
