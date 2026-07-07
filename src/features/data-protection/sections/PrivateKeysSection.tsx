import Image from "@/components/ui/Image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";

export function PrivateKeysSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-row items-start justify-between gap-8 px-8 lg:flex-col sm:gap-6 sm:px-0">
          <div className="flex max-w-3xl flex-col gap-5">
            <Eyebrow label="Private Keys" />
            <FeaturePageHeading as="h2" variant="sectionTitle">
              Own private keys.
              <br />
              Control who sees.
            </FeaturePageHeading>
          </div>
          <div className="relative h-20 w-[7.5rem] shrink-0 sm:hidden">
            <Image
              src="/images/data-protection/private-keys-illustration.png"
              alt=""
              fill
              className="object-contain "
              sizes="120px"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-12 lg:grid-cols-1 sm:gap-6">
          <Text as="div" className="prose-stack px-8 sm:px-0">
            <p>
              A private key is your unique security credential, issued only to
              you, and it&apos;s the one and only way to unlock your final
              result file.
            </p>
            <p>
              When you begin a batch job, we generate a client secret
              key that is never shared, stored, or accessible by anyone else.
              From that point forward, every stage of
              your job relies on temporary, ephemeral keys managed through our
              secure identity servers. These working keys are used solely for
              in-memory processing and are destroyed the moment the job is
              complete. What remains is your encrypted result file, locked and
              waiting. <strong>Only your private key can decrypt it.</strong>
            </p>
            <p>
              This design eliminates one of the biggest risks in traditional
              cloud environments: server-side access. On conventional servers,
              decrypted data can exist at rest, meaning administrators or third
              parties could potentially access your information.
            </p>
          </Text>
          <Text as="div" className="prose-stack px-8 sm:px-0">
            <p>
              By giving you sole control of your private key, Advanced data
              protection guarantees:
            </p>
            <ul className="list-disc space-y-0 pl-5">
              <li>
                <strong>Absolute ownership</strong> — You decide who can access
                your results.
              </li>
              <li>
                <strong>Enterprise grade security</strong> — Protections and
                security credentials specifically designed for the strictest
                compliance environments.
              </li>
              <li>
                <strong>Retention period</strong> — Once the retention period
                expires, the encrypted file is permanently erased from our
                servers.
              </li>
            </ul>
            <p>
              There are no backdoors, no hidden access points, and no way for
              anyone else to step between you and your data. Even under force, we
              cannot hand over what we cannot see.
            </p>
          </Text>
        </div>
      </Container>
    </section>
  );
}
