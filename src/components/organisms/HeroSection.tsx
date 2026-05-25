import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { AddressDemo } from "@/components/molecules/AddressDemo";
import { LogoMarquee } from "@/components/molecules/LogoMarquee";
import { assets } from "@/lib/assets";

export function HeroSection() {
  return (
    <section className="relative w-full ">
      {/* Full-bleed page background */}
      <div className="relative flex h-[77svh] w-full flex-col items-center justify-center overflow-hidden px-container-padding ">
        <Image
          src={assets.heroBackground}
          alt=""
          fill
          className="object-cover object-center "
          priority
          sizes="100vw"
        />

        <Container className="relative z-10 flex flex-col items-center gap-28  text-center ">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-2.5 ">
              <Eyebrow
                label="Bulk Data Enhancement Tool"
                badge="AVAILABLE NOW"
              />
              <Heading level="display" className="max-w-4xl">
                Seltaris
              </Heading>
              <Text className="max-w-3xl text-xl font-medium">
                High quality results. Unbelievable performance. Incredibly
                secure.
              </Text>
            </div>

            <Button href="#get-started">Get started with Seltaris</Button>
          </div>

          <AddressDemo />
        </Container>
      </div>

      <Container className="relative z-10 bg-white pb-section">
        <TrustedBy />
      </Container>
    </section>
  );
}

function TrustedBy() {
  return (
    <div className="flex flex-col items-center gap-12 py-12">
      <div className="text-center">
        <Heading level="subheading" className="mb-3">
          Trusted by leading companies worldwide
        </Heading>
        <Text className="mx-auto max-w-md">
          Join the many innovative companies that have securely improved the
          quality of their data.
        </Text>
      </div>
      <LogoMarquee logos={assets.trustedLogos} />
    </div>
  );
}
