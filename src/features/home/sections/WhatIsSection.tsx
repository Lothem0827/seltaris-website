import Image from "@/components/ui/Image";
import { RevealOnView } from "@/components/shared/RevealOnView";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";const WHAT_IS_IMAGE = "/images/home/laptop.svg";

export function WhatIsSection() {
  return (
    <section className="py-section">
      <Container className="flex flex-row items-center justify-between gap-12 lg:flex-col">
        <RevealOnView staggerIndex={0} className="max-w-md shrink-0 space-y-6">
          <Eyebrow label="What is Seltaris?" />
          <h2 className="type-32 text-text">
            A <span className="text-brand">user friendly software</span>{" "}
            platform for all your data quality needs.
          </h2>
          <p className="type-16 text-paragraph">
            Seltaris is a high quality, secure, and powerful data quality
            platform designed to format, cleanse, repair, verify, and
            standardise your existing datasets.
          </p>
        </RevealOnView>
        <RevealOnView staggerIndex={1}
          className="relative shrink-0 overflow-hidden rounded-radius-lg">
          <Image src={WHAT_IS_IMAGE}
            alt="Seltaris dashboard on laptop"
            width={581}
            height={354}
            className="h-auto" />
        </RevealOnView>
      </Container>
    </section>
  );
}
