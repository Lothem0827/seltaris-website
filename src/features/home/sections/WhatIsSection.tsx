import Image from "@/components/ui/Image";
import { RevealOnView } from "@/components/shared/RevealOnView";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

const WHAT_IS_IMAGE = "/images/home/laptop.svg";

export function WhatIsSection() {
  return (
    <section className="py-section">
      <Container className="flex flex-row items-center justify-between gap-12 lg:flex-col">
        <RevealOnView staggerIndex={0} className="max-w-md shrink-0 space-y-6">
          <Eyebrow label="What is Seltaris?" />
          <Heading as="h2" level="h1">
            A <span className="text-brand">user friendly software</span>{" "}
            platform for all your data quality needs.
          </Heading>
          <Text>
            Seltaris is a high quality, secure, and powerful data quality
            platform designed to format, cleanse, repair, verify, and
            standardise your existing datasets.
          </Text>
        </RevealOnView>
        <RevealOnView
          staggerIndex={1}
          className="relative shrink-0 overflow-hidden rounded-radius-lg"
        >
          <Image
            src={WHAT_IS_IMAGE}
            alt="Seltaris dashboard on laptop"
            width={581}
            height={354}
            className="h-auto"
          />
        </RevealOnView>
      </Container>
    </section>
  );
}
