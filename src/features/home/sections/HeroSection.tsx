import { SELTARIS_LOGIN_URL } from "@/lib/site-assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { HeroAnimatedIntro } from "@/features/home/components/HeroAnimatedIntro";
import { HeroDeferredAddressDemo } from "@/features/home/components/HeroDeferredAddressDemo";
import {
  HeroLoadIn,
  HeroLoadInItem,
} from "@/features/home/components/HeroLoadIn";

export const TRUSTED_LOGOS = [
  "/images/company-icons/boq-logo-6511cbd6c366f.webp",
  "/images/company-icons/leukaemia-foundation-logo-6511cbd8dbed6.webp",
  "/images/company-icons/apra-amcos-logo-6511cbd57b7db.webp",
  "/images/company-icons/hcf-logo-6511cbd81b4b0.webp",
  "/images/company-icons/rabobank-logo-6511cbda23b00.webp",
  "/images/company-icons/commonwealth_bank.webp",
  "/images/company-icons/crown-logo-1.png",
  "/images/company-icons/qantas.webp",
  "/images/company-icons/guide-dogs-logo-6511cbd81b4ba.webp",
  "/images/company-icons/seafolly-australia-logo-6511cbdb7ed7b.webp",
  "/images/company-icons/nimble-logo-6511cbd985177.webp",
  "/images/company-icons/david-jones-logo-6511cbd775386.webp",
  "/images/company-icons/boc-logo-6511cbd649388.webp",
  "/images/company-icons/specasvers-logo-6511cbdc32c67.webp",
  "/images/company-icons/bible-society-logo-6511cbd631f29.webp",
  "/images/company-icons/unsw-logo-6511cbdcc724c.webp",
  "/images/company-icons/huntry-jacks-logo-6511cbd8d79b4.webp",
  "/images/company-icons/redballoon-logo-6511cbdac4ed7.webp",
  "/images/company-icons/catholic-mission-logo-6511cbd6decc4.webp",
  "/images/company-icons/uniqlo-1-2048x584.webp",
  "/images/company-icons/rmwilliams.png",
  "/images/company-icons/rodd-and-gunn-logo-6511cbdac4eb9.webp",
] as const;

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100dvh-var(--site-header-height))] flex-col bg-[url('/images/home/hero-background-mobile.webp')] bg-size-[100%_auto] bg-top bg-no-repeat py-[100px] sm:min-h-[60vh] sm:bg-[url('/images/home/hero-background-mobile.webp')] sm:bg-bottom sm:py-[80px]">
      <Container className="z-10 flex flex-col items-center gap-40 text-center ">
        <HeroAnimatedIntro
          eyebrow={
            <Eyebrow label="Bulk Data Enhancement Tool" badge="AVAILABLE NOW" />
          }
          heading={
            <Heading level="display" className="max-w-4xl">
              Seltaris
            </Heading>
          }
          subtext={
            <Text className="max-w-3xl text-xl font-medium">
              High quality results. Unbelievable performance. Incredibly secure.
            </Text>
          }
          cta={
            <Button href={SELTARIS_LOGIN_URL}>Get started with Seltaris</Button>
          }
        />

        <HeroLoadIn>
          <HeroLoadInItem delayIndex={4} className="mt-16 sm:mt-0">
            <HeroDeferredAddressDemo />
          </HeroLoadInItem>
        </HeroLoadIn>
      </Container>
    </section>
  );
}
