import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";
import { Text } from "@/components/ui/Text";

export function CloudIntroSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <div className="grid-aside-layout">
            <div className="space-y-6 px-8">
              <Eyebrow label="Encrypted Cloud Computing™" />
              <FeaturePageHeading as="h2" variant="sectionTitle">
                Cloud security at its highest.
                <br />
                Protections at its tightest.
              </FeaturePageHeading>
            </div>
            <IconSurface
              src="/icons/features/advanced-data-protection.svg"
              className="mx-0 shrink-0 lg:mx-auto"
            />
          </div>

          <div className="grid grid-cols-2 items-start gap-12 lg:grid-cols-1">
            <Text as="div" className="prose-stack px-8">
              <p>
                We have spent nearly three decades pushing the boundaries of what
                it means to turn your data quality from good to your greatest
                business asset. Always with an unwavering commitment to
                security, reliability, simplicity and unlimited support. As
                organisations rely on Seltaris to process massive address
                datasets in record time, they also trust us with some of their
                most sensitive information.
              </p>
              <p className="mt-6">
                We achieved this once with the launch of Kleber in the Cloud,
                but we weren&apos;t content to stop there. We set out to push
                these boundaries even further — with a goal to handle larger
                batch files securely with groundbreaking speed and performance.
              </p>
            </Text>
            <Text as="div" className="prose-stack px-8">
              <p>
                That led us to revisit our existing security stack and integrate
                additional layers for higher volume workloads. An innovative
                cloud security architecture purpose-built to process batch data
                securely at the scale today&apos;s largest enterprises demand.
                We call it Encrypted Cloud Computing™.
              </p>
              <p className="mt-6">
                Encrypted Cloud Computing™ builds on our robust,
                industry-leading cloud security, now taken to a whole new scale.
                It ensures that even the most intensive batch jobs run with
                airtight protections. Your data remains confidential, heavily
                encrypted, and not accessible to anyone.
              </p>
            </Text>
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-12 lg:grid-cols-1">
          <FeaturePageHeading as="h3" variant="sectionTitle" className="px-8">
            Why we built it
          </FeaturePageHeading>
          <div className="space-y-6 px-8">
            <Text>
              Competing cloud environments, while convenient, pose familiar
              risks. Once data is inside competing cloud platforms, enforcing
              zero-access guarantees becomes challenging. Logging systems,
              privileged support consoles, and broad administrative access can
              inadvertently expose data or leave it vulnerable during operational
              troubleshooting.
            </Text>
            <Text>
              That&apos;s not acceptable for your businesses highly sensitive
              data. With Encrypted Cloud Computing™, we&apos;ve taken a
              ground-up approach to cloud security that mirrors — and even
              surpasses — the standards we&apos;ve long upheld with cloud and
              on-premise processing.
            </Text>
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-12 lg:grid-cols-1">
          <FeaturePageHeading as="h2" variant="sectionTitle" className="px-8">
            How it works with
            <br />
            Seltaris.
          </FeaturePageHeading>
          <div className="space-y-6 px-8">
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
      </Container>
    </section>
  );
}
