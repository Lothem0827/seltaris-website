import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";

export function InnovationSection() {
  return (
    <section className="pb-section">
      <Container>
        <div className="grid grid-cols-2 items-start gap-16 lg:grid-cols-1 lg:gap-12 sm:gap-6">
          <div className="space-y-6 px-8 sm:px-0">
            <FeaturePageHeading as="h2" variant="headingSmall">
              The best innovations are built for everyone.
            </FeaturePageHeading>
            <Text>
              We have always believed that data quality software should be
              simple.
            </Text>
          </div>
          <div className="px-8 pt-2 lg:pt-0 sm:px-0">
            <Text as="div" className="prose-stack">
              <p>
                Our approach from the beginning (almost three decades ago) was
                to make the complex work of cleaning data so simple that a
                non-technical person could achieve it using our software.
              </p>
              <p className="mt-6 ">
                This approach didn&apos;t stop with easy-to-use point and click
                now available in the Seltaris. Just because data quality
                software is used by technical people, doesn&apos;t mean it
                should be hard.
              </p>
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
}
