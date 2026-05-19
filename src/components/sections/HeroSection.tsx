import Image from "next/image";
import { AddressDemo } from "@/components/sections/AddressDemo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { assets } from "@/lib/assets";

const partnerLogos = [
  { src: assets.logos.qantas, alt: "Qantas", width: 185 },
  { src: assets.logos.serviceNsw, alt: "Service NSW", width: 104 },
  { src: assets.logos.leukaemia, alt: "Leukaemia Foundation", width: 122 },
  { src: assets.logos.bibleSociety, alt: "Bible Society", width: 186 },
  { src: assets.logos.hcf, alt: "HCF", width: 113 },
  { src: assets.logos.guideDogs, alt: "Guide Dogs", width: 88 },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-8">
      <div className="pointer-events-none absolute inset-x-0 top-[37px] h-[800px]">
        <Image
          src={assets.hero.background}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-80">
          <Image
            src={assets.hero.stars}
            alt=""
            width={1070}
            height={486}
            className="max-w-[90%] object-contain"
          />
        </div>
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <Eyebrow
          label="Bulk Data Enhancement Tool"
          badge="EARLY ACCESS PREVIEW"
          className="mb-6"
        />
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.2] tracking-[-0.9px] text-charcoal-700 sm:text-[90px] sm:leading-[1.2]">
          DataTools Seltaris
        </h1>
        <p className="mt-2.5 max-w-[862px] text-lg font-medium leading-7 text-charcoal-500 sm:text-xl">
          High Quality Results. Unbelievable Performance. Incredibly Secure.
        </p>
        <Button href="#get-started" className="mt-8" size="lg">
          Get started with Seltaris
        </Button>

        <AddressDemo className="relative z-10 mt-16 sm:mt-20" />

        <div className="mt-90 w-full max-w-[1200px]">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-semibold leading-8 text-charcoal-700">
              Trusted by leading companies worldwide
            </h2>
            <p className="mt-3 text-base leading-[26px] text-charcoal-500">
              Join the many innovative companies that have used DataTools to
              securely improve the quality of their data.
            </p>
          </div>
          <div className="relative mt-12 flex flex-wrap items-center justify-center gap-8 sm:justify-between">
            {partnerLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={36}
                className="h-9 w-auto object-contain opacity-80 grayscale"
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/50 to-white" />
          </div>
        </div>
      </Container>
    </section>
  );
}
