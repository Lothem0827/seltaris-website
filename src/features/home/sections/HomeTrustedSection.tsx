import { LogoMarquee } from "@/features/home/components/LogoMarquee";
import { TRUSTED_LOGOS } from "@/features/home/sections/HeroSection";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export function HomeTrustedSection() {
  return (
    <section className="py-section-sm">
      <Container className="flex flex-col items-center gap-12 lg:gap-8">
        <div className="text-center">
          <Heading level="subheading" className="mb-3">
            Trusted by leading companies worldwide
          </Heading>
          <Text className="mx-auto max-w-md">
            Join the many innovative companies that have securely improved the
            quality of their data.
          </Text>
        </div>
        <LogoMarquee logos={TRUSTED_LOGOS} />
      </Container>
    </section>
  );
}
