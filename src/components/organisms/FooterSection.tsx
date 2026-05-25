import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { FooterExtendedSection } from "@/components/organisms/FooterExtendedSection";

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="py-section">
        <Container className="relative z-10 flex flex-col items-center gap-28 text-center">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-2.5">
              <Eyebrow label="Bulk Data Enhancement Tool" badge="AVAILABLE NOW" />
              <Heading level="display" className="max-w-4xl">
                Seltaris
              </Heading>
              <Text className="max-w-3xl text-xl font-medium">
                High quality results. Unbelievable performance. Incredibly
                secure.
              </Text>
            </div>

            <Button href="#get-started">Get started with Seltaris</Button>
          </div>
        </Container>
      </div>
      <FooterExtendedSection />
    </footer>
  );
}
