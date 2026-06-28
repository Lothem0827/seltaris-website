import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";
import { Text } from "@/components/ui/Text";

export function OverviewSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-row items-start justify-between gap-12 lg:flex-col">
          <div className="max-w-3xl space-y-5 px-8">
            <Eyebrow label="Overview" />
            <FeaturePageHeading as="h2" variant="sectionTitle">
              From hidden to clear.
              <br />
              The full picture is here.
            </FeaturePageHeading>
          </div>
          <IconSurface
            src="/icons/features/health-check.svg"
            size="nav"
            className="flex shrink-0 lg:hidden"
          />
        </div>

        <div className="grid grid-cols-2 gap-16 lg:grid-cols-1 lg:gap-12">
          <Text as="div" className="prose-stack px-8">
            <p>
              This Health Check Report delivers a{" "}
              <strong>
                clear and comprehensive assessment of your submitted address
                data
              </strong>{" "}
              delivered in an easy to read PDF, analysed through the Seltaris
              service.
            </p>
            <p className="mt-6">
              Each record is reviewed for completeness, accuracy, and compliance
              with official postal standards. The report highlights key issues
              such as missing details, invalid formats, or unrecognised
              localities, alongside recommended corrections and enhancements.
            </p>
          </Text>
          <Text className="px-8 pt-2 lg:pt-0">
            These improvements are designed to strengthen the quality,
            deliverability, and reliability of your address data ensuring it is
            fully prepared for use across mailing, logistics, and compliance
            systems.
          </Text>
        </div>

        <div className="overflow-hidden rounded-radius-panel border-4 border-brand">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="/images/health-check-report/overview-photo.png"
              alt="Team reviewing data quality report"
              fill
              className="object-cover"
              sizes="1200px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
