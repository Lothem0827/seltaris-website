import { SELTARIS_LOGIN_URL } from "@/lib/site-assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { FooterExtendedSection } from "@/components/layout/FooterExtendedSection";

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="py-section">
        <Container className="relative z-10 flex flex-col items-center gap-28 text-center">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-2.5">
              <Eyebrow label="Bulk Data Enhancement Tool" badge="AVAILABLE NOW" />
              <Heading as="h2" level="display" className="max-w-4xl">
                Seltaris
              </Heading>
              <Text className="max-w-3xl text-xl font-medium">
                High quality results. Unbelievable performance. Incredibly
                secure.
              </Text>
            </div>

            <Button href={SELTARIS_LOGIN_URL}>Get started with Seltaris</Button>
          </div>
        </Container>
      </div>
      <FooterExtendedSection />
    </footer>
  );
}
