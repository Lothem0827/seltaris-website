import { Container } from "@/components/ui/Container";
import { CenteredShowcase } from "@/components/shared/CenteredShowcase";

const WORKFLOW_SHOWCASE = "/images/home/workflow-showcase.webp";

export function HealthCheckWorkflowSection() {
  return (
    <section className="py-section">
      <Container>
        <CenteredShowcase
          title="Health Check Report"
          subtitle="Data quality at its finest detail."
          imageSrc={WORKFLOW_SHOWCASE}
          imageSize="health"
        />
      </Container>
    </section>
  );
}
