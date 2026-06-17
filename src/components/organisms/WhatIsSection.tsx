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
          <Eyebrow label="What is Seltaris?" />
          <Heading level="h1">
            A <span className="text-brand">user friendly software</span>{" "}
            platform for all your data quality needs.
          </Heading>
          <Text>
            Seltaris is a high quality, secure, and powerful data quality
            platform designed to format, cleanse, repair, verify, and
            standardise your existing datasets.
          </Text>
        </div>
        <div className="relative shrink-0 overflow-hidden rounded-radius-lg">
          <Image
            src={assets.whatIsImage}
            alt="Seltaris dashboard on laptop"
            width={581}
            height={354}
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
