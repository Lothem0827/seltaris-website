import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

const WHAT_IS_IMAGE = "/images/home/laptop.png";

export function WhatIsSection() {
  return (
    <section className="py-section">
      <Container className="flex flex-row items-center justify-between gap-12 lg:flex-col">
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
            src={WHAT_IS_IMAGE}
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
