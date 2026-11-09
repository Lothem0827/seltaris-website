import { Container } from "@/components/ui/Container";import { LazyWorkflowSliderSection } from "./HowItWorksSliderSection";

export function HowItWorksSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-12">
        <div className="grid grid-cols-2 items-start gap-12 lg:grid-cols-1 sm:gap-6">
          <h2 className="type-32 text-text px-8 sm:px-0">
            How it works with
            <br />
            Seltaris.
          </h2>
          <div className="space-y-6 px-8 sm:px-0">
            <p className="type-16 text-paragraph">
              Seltaris is meticulously designed to protect your data at every
              step. Integrated into the core of our secure cloud environment, it
              utilises advanced encryption processes to handle your data without
              ever storing it unencrypted.
            </p>
            <p className="type-16 text-paragraph">
              Thanks to Encrypted Cloud Computing™, we can securely process
              complex requests, ensuring that only you have access to your data.
              Your information remains encrypted during transit, throughout
              processing, and at rest, providing next-level security and peace
              of mind.
            </p>
          </div>
        </div>

        <LazyWorkflowSliderSection />
      </Container>
    </section>
  );
}
