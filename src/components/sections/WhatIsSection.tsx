import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { assets } from "@/lib/assets";

export function WhatIsSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow label="What is DataTools Seltaris?" className="mb-5" />
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.35] tracking-[-0.8px] text-charcoal-700 sm:text-[40px]">
            A <span className="text-brand">user friendly software</span>{" "}
            platform for all your data quality needs.
          </h2>
          <p className="mt-6 text-base leading-[26px] text-charcoal-500">
            DataTools Seltaris is a high quality, secure, and powerful data
            quality platform designed to format, cleanse, repair, verify, and
            standardise your existing datasets.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[1023px]">
          <div className="relative aspect-[1022/623] w-full">
            <Image
              src={assets.whatIs.screenshot}
              alt="DataTools Seltaris dashboard"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
