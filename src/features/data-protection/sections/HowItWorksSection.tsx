import { Container } from "@/components/ui/Container";
import { LazyWorkflowSliderSection } from "./HowItWorksSliderSection";

export function HowItWorksSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-16">
        <LazyWorkflowSliderSection />
      </Container>
    </section>
  );
}
