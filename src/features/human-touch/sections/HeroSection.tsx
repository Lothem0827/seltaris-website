import { Container } from "@/components/ui/Container";import { IconSurface } from "@/components/ui/IconSurface";import { LazyHumanTouchAnimated } from "@/components/lazy/client-modules";

export function HeroSection() {
  return (
    <section className="pt-24 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <IconSurface src="/icons/features/human-touch.svg"
            alt="Human Touch"
            size="feature" />
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="type-24-semi text-brand">
              Human Touch™
            </p>
            <h1 className="type-48 text-text">
              The tool is innovative.
              <br />
              The experience is magical.
            </h1>
            <p className="type-18 text-paragraph">
              Data quality software that can read and process data as easily as
              we do.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-container">
          <LazyHumanTouchAnimated />
        </div>

        <div className="grid w-full max-w-container grid-cols-2 items-start gap-16 lg:grid-cols-1 lg:gap-12 sm:gap-6">
          <div className="space-y-6 px-8 sm:px-0">
            <h2 className="type-32 text-text">
              At the core lies our most advanced Human Touch™ technology.
            </h2>
            <p className="type-16 text-paragraph">
              This powerful software features large, highly capable intelligence
              models specifically tailored to read and process data as
              efficiently as humans do.
            </p>
          </div>
          <div className="px-8 pt-2 sm:pt-0 lg:pt-0 sm:px-0">
            <p className="type-16 text-paragraph">
              The Human Touch™ logic intelligently interprets the full address,
              making sense of the information in the same intuitive way a human
              would. With the inclusion of intelligent location awareness, fuzzy
              logic, phonetic matching, bordering localities, and many other
              expansive methodologies, we continue to push the limits for what
              it means to have the most accurate data possible.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
