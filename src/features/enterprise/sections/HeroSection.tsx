import { LogoMarquee } from "@/features/home/components/LogoMarquee";
import { TRUSTED_LOGOS } from "@/features/home/sections/HeroSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { EnterprisePageContent } from "../enterprise.content";

type HeroSectionProps = {
  content: EnterprisePageContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-card-dark py-section">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[url('/images/enterprise/heading-grid.png')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute -top-16 -right-24 size-[34rem] bg-[url('/images/enterprise/hero-glow-1.svg')] bg-contain bg-no-repeat opacity-80 mix-blend-hard-light" />
        <div className="absolute -bottom-24 -left-16 size-[28rem] bg-[url('/images/enterprise/hero-glow-2.svg')] bg-contain bg-no-repeat opacity-80 mix-blend-hard-light" />
      </div>

      <Container className="relative z-10 flex flex-col gap-16 lg:gap-12">
        <div className="flex items-end justify-between gap-10 lg:flex-col lg:items-start">
          <div className="flex max-w-3xl flex-col gap-5">
            <p className="type-20 text-brand uppercase tracking-[0.08em]">
              {content.eyebrow}
            </p>
            <h1 className="type-40 text-white">{content.title}</h1>
            <p className="type-18 max-w-xl text-white">{content.subtitle}</p>
          </div>
          <Button href={content.ctaHref}>{content.ctaLabel}</Button>
        </div>

        <LogoMarquee logos={TRUSTED_LOGOS} tone="dark" />
      </Container>
    </section>
  );
}
