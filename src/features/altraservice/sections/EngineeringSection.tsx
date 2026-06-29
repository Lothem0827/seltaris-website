import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";

export function EngineeringSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-12">
        <div className="flex items-center justify-between gap-8 px-8 sm:px-0">
          <FeaturePageHeading
            as="h2"
            variant="sectionTitleLg"
            className="text-brand"
          >
            Powered by
            <br />
            DataTools Altraservice™
          </FeaturePageHeading>
          <div className="relative h-20 w-[4.375rem] shrink-0">
            <Image
              src="/images/altraservice/altraservice-cube.png"
              alt=""
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-12 lg:grid-cols-1 sm:gap-6">
          <div className="flex flex-col gap-8 px-8 sm:px-0">
            <FeaturePageHeading as="h3" variant="headingSmall">
              A truly remarkable feat of software engineering.
            </FeaturePageHeading>
            <Text>
              DataTools Cloud Performance blasts forward with DataTools
              Altraservice™. Built on the latest server technology, the all-new
              microservice architecture is able to perform at outrageous speeds
              and game-changing performance for processing batch files. This is
              truly one of the most powerful and capable file processing
              technologies we have ever created.
            </Text>
          </div>
          <Text as="div" className="prose-stack px-8 sm:px-0">
            <p>
              DataTools Altraservice™, directly integrated into our cloud
              infrastructure, enables us to correct each line of address data
              within fractions of a millisecond, this has enabled it to achieve
              a staggering 1 million records in just 2 minutes.
            </p>
            <p>
              To put that into perspective, validating Australia&apos;s 15.6
              million deliverable addresses from start to finish with DataTools
              Seltaris would only take a total of 32 minutes. Now that&apos;s
              ultra fast.
            </p>
          </Text>
        </div>
      </Container>
    </section>
  );
}
