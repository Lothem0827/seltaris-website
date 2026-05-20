import { Container } from "@/components/atoms/Container";
import { CenteredShowcase } from "@/components/molecules/CenteredShowcase";
import { assets } from "@/lib/assets";

export function HealthCheckWorkflowSection() {
  return (
    <section className="py-section">
      <Container>
        <CenteredShowcase
          size="large"
          title="Health Check Report"
          subtitle="Data quality at its finest detail."
          imageSrc={assets.workflowShowcase}
          imageHeight="h-[712px]"
        />
      </Container>
    </section>
  );
}
