import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { assets } from "@/lib/assets";

export function FeaturesIntroSection() {
  return (
    <section id="features" className="relative overflow-hidden pt-24">
      <Container className="relative flex max-w-[1200px] flex-col items-center gap-16">
        <div className="relative flex max-w-[767px] flex-col items-center gap-4 text-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[498px] w-[799px] -translate-x-1/2 -translate-y-1/2 mix-blend-color-dodge">
            <Image
              src={assets.featuresIntro.glow}
              alt=""
              fill
              className="rotate-180 object-contain opacity-60"
            />
          </div>
          <h2 className="font-display relative text-4xl font-bold leading-[1.27] tracking-[-0.8px] text-charcoal-700 sm:text-[68px] sm:leading-[86.4px]">
            DataTools Altraservice™.
          </h2>
          <p className="relative text-xl font-semibold leading-8 text-charcoal-500 sm:text-2xl">
            Feel the need. The need for processing speed.
          </p>
        </div>

        <div className="relative w-full rounded-[32px] border-4 border-brand p-2">
          <div className="relative aspect-[1200/741] w-full overflow-hidden rounded-2xl bg-[#110625]">
            <Image
              src={assets.featuresIntro.heroVisual}
              alt=""
              fill
              className="object-cover"
              sizes="1200px"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
