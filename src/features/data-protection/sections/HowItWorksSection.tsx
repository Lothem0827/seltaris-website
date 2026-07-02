import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";
import { LazyWorkflowSliderSection } from "./HowItWorksSliderSection";

export function HowItWorksSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-12">
        <div className="grid grid-cols-2 items-start gap-12 lg:grid-cols-1 sm:gap-6">
          <FeaturePageHeading
            as="h2"
            variant="sectionTitle"
            className="px-8 sm:px-0"
          >
            How it works with
            <br />
            Seltaris.
          </FeaturePageHeading>
          <div className="space-y-6 px-8 sm:px-0">
            <Text>
              Seltaris is meticulously designed to protect your data at every
              step. Integrated into the core of our secure cloud environment, it
              utilises advanced encryption processes to handle your data without
              ever storing it unencrypted.
            </Text>
            <Text>
              Thanks to Encrypted Cloud Computing™, we can securely process
              complex requests, ensuring that only you have access to your data.
              Your information remains encrypted during transit, throughout
              processing, and at rest, providing next-level security and peace
              of mind.
            </Text>
          </div>
        </div>

        <LazyWorkflowSliderSection />
      </Container>
    </section>
  );
}
