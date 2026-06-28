import { Container } from "@/components/ui/Container";
import { WorkflowSliderSection } from "./WorkflowSliderSection";

export function HowItWorksSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-16">
        <WorkflowSliderSection />
      </Container>
    </section>
  );
}
