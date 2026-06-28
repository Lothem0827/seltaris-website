import { LogoMarquee } from "@/features/home/components/LogoMarquee";
import { TRUSTED_LOGOS } from "@/features/home/sections/HeroSection";
import { Container } from "@/components/ui/Container";

export function GetStartedTrustedSection() {
  return (
    <section className="py-section-sm">
      <Container className="flex flex-col items-center gap-12 lg:gap-8">
        <h2 className="font-display text-2xl leading-subheading font-bold text-text text-center">
          GBG is trusted by leading companies worldwide
        </h2>
        <LogoMarquee logos={TRUSTED_LOGOS} />
      </Container>
    </section>
  );
}
