import { Container } from "@/components/ui/Container";import { IconSurface } from "@/components/ui/IconSurface";
import { DesignMadeSimpleAnimation } from "@/components/svg-animations/DesignMadeSimpleAnimation";

export function HeroSection() {
  return (
    <section className="pt-24 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <IconSurface src="/icons/features/design-made-simple.svg"
            alt="Design made simple"
            size="feature" />
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="type-24-semi text-brand">
              Design made simple
            </p>
            <h1 className="type-48 text-text">
              Innovation <span className="text-brand">for all.</span>
            </h1>
            <p className="type-18 text-paragraph">
              Built for everyone so anyone can use it.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-content-wide">
          <DesignMadeSimpleAnimation />
        </div>
      </Container>
    </section>
  );
}
