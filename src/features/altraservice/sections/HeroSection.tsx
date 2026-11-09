import { Container } from "@/components/ui/Container";import { IconSurface } from "@/components/ui/IconSurface";import { LazyAltraserviceAnimation } from "@/components/lazy/client-modules";

export function HeroSection() {
  return (
    <section className="pt-24 pb-section">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <IconSurface src="/icons/features/altra-service.svg"
            alt="Altraservice"
            size="feature" />
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="type-24-semi text-brand">
              Altraservice™
            </p>
            <h1 className="type-48 text-text">
              Groundbreaking
              <br />
              <span className="text-brand">Performance.</span>
            </h1>
            <p className="type-18 text-paragraph">
              The Fastest Addressing Batch Processor We&apos;ve Ever Created
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-container">
          <LazyAltraserviceAnimation />
        </div>

        <div className="grid w-full max-w-container grid-cols-2 items-start gap-16 lg:grid-cols-1 lg:gap-12 sm:gap-6">
          <div className="space-y-6 px-8 sm:px-0">
            <h2 className="type-32 text-text">
              Feel the need.
              <br />
              The need for processing speed.
            </h2>
            <p className="type-16 text-paragraph">
              Our latest step in pushing the boundaries of batch processing
              data, this time in the direction of fast processing speeds.
            </p>
          </div>
          <div className="px-8 pt-2 lg:pt-0 sm:px-0">
            <div className="type-16 text-paragraph prose-stack px-8 sm:px-0">
              <p>
                Over the past few years, we have dedicated substantial effort to
                optimising efficiency at every layer of our cloud technology
                stack.
              </p>
              <p className="mt-6">
                As a result, we are proud to announce that Seltaris sets new
                industry standards, delivering unprecedented speed and
                reliability for all your data processing needs.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
