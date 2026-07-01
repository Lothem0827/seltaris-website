import Image from "@/components/ui/Image";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";

export function MicroserviceSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-16">
        <div className="mx-auto max-w-3xl space-y-4 px-8 text-center sm:px-0">
          <FeaturePageHeading as="h2" variant="sectionTitleXl">
            An Altraload of power.
            <br />
            The next generation of Microservice performance.
          </FeaturePageHeading>
        </div>

        <div className="grid grid-cols-2 items-start gap-12 lg:grid-cols-1 sm:gap-6">
          <Text className="px-8 sm:px-0">
            Altraservice™ speeds past batch files. To achieve this, we
            fundamentally re-engineered the current microservice architecture,
            particularly for large files with immense volumes of data workloads.
            This re-engineering effort was driven by a singular goal. To enhance
            efficiency and speed in data handling and the distribution of
            intensive processing tasks.
          </Text>
          <Text className="px-8 sm:px-0">
            By leveraging distributed computing and asynchronous communication
            patterns, we developed an innovative method to process files more
            effectively. These patterns allow tasks to be executed concurrently
            across multiple nodes, significantly improving processing times and
            system performance.
          </Text>
        </div>

        <div className="banner-media h-auto min-h-0">
          <Image
            src="/images/altraservice/macbook.webp"
            alt=""
            width={1152}
            height={515}
            className="h-auto w-full"
            sizes="(max-width: 1279px) 100vw, 1152px"
          />
        </div>
      </Container>
    </section>
  );
}
