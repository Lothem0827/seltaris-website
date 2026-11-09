import { LazyLogoMarquee } from "@/components/lazy/client-modules";
import { RevealOnView } from "@/components/shared/RevealOnView";
import { TRUSTED_LOGOS } from "@/features/home/sections/HeroSection";
import { Container } from "@/components/ui/Container";export function HomeTrustedSection() {
  return (
    <section className="py-section-sm">
      <Container className="flex flex-col items-center gap-12 lg:gap-8">
        <RevealOnView staggerIndex={0} className="text-center">
          <h2 className="type-24 text-text mb-3">
            Trusted by leading companies worldwide
          </h2>
          <p className="type-16 text-paragraph mx-auto max-w-md">
            Join the many innovative companies that have securely improved the
            quality of their data.
          </p>
        </RevealOnView>
        <RevealOnView staggerIndex={1} className="w-full">
          <LazyLogoMarquee logos={TRUSTED_LOGOS} />
        </RevealOnView>
      </Container>
    </section>
  );
}
