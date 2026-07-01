import { LazyLogoMarquee } from "@/components/lazy/client-modules";
import { RevealOnView } from "@/components/shared/RevealOnView";
import { TRUSTED_LOGOS } from "@/features/home/sections/HeroSection";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export function HomeTrustedSection() {
  return (
    <section className="py-section-sm">
      <Container className="flex flex-col items-center gap-12 lg:gap-8">
        <RevealOnView staggerIndex={0} className="text-center">
          <Heading as="h2" level="subheading" className="mb-3">
            Trusted by leading companies worldwide
          </Heading>
          <Text className="mx-auto max-w-md">
            Join the many innovative companies that have securely improved the
            quality of their data.
          </Text>
        </RevealOnView>
        <RevealOnView staggerIndex={1} className="w-full">
          <LazyLogoMarquee logos={TRUSTED_LOGOS} />
        </RevealOnView>
      </Container>
    </section>
  );
}
