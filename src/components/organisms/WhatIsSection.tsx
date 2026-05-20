import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { assets } from "@/lib/assets";

export function WhatIsSection() {
  return (
    <section className="py-section">
      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
        <div className="max-w-md shrink-0 space-y-6">
          <Eyebrow label="What is DataTools Seltaris?" />
          <Heading level="h1">
            A <span className="text-brand">user friendly software</span> platform
            for all your data quality needs.
          </Heading>
          <Text>
            DataTools Seltaris is a high quality, secure, and powerful data
            quality platform designed to format, cleanse, repair, verify, and
            standardise your existing datasets.
          </Text>
        </div>
        <div className="relative h-[354px] w-full max-w-[581px] shrink-0">
          <Image
            src={assets.whatIsImage}
            alt="Seltaris dashboard on laptop"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 581px"
          />
        </div>
      </Container>
    </section>
  );
}
