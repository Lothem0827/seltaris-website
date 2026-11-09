import Script from "next/script";
import { Container } from "@/components/ui/Container";
import { Image } from "@/components/ui/Image";
import { ComplianceLordIcon } from "../components/ComplianceLordIcon";
import type { EnterprisePageContent } from "../enterprise.content";

type ComplianceSectionProps = {
  content: EnterprisePageContent;
};

export function ComplianceSection({ content }: ComplianceSectionProps) {
  return (
    <section className="relative overflow-hidden bg-card-dark py-section text-white">
      <Script
        src="https://cdn.lordicon.com/lordicon.js"
        strategy="lazyOnload"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/enterprise/compliance-grid.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden
      />
      <Container className="relative z-10 flex flex-col gap-16">
        <div className="grid grid-cols-[1fr_auto] items-start gap-12 lg:grid-cols-1">
          <div className="flex max-w-3xl flex-col gap-5">
            <p className="type-18 text-brand uppercase tracking-[0.08em]">
              {content.complianceEyebrow}
            </p>
            <h2 className="type-32 text-white">{content.complianceTitle}</h2>
            <p className="type-16 text-white/80">{content.complianceBody}</p>
          </div>

          <div className="relative mx-auto size-48 shrink-0 lg:size-32">
            <Image
              src="/images/enterprise/lock-logo.png"
              alt=""
              fill
              className="object-contain"
              sizes="256px"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-8 gap-y-12 lg:grid-cols-2 md:grid-cols-1">
          {content.complianceItems.map((item) => (
            <div key={item.title} className="flex flex-col gap-8">
              <ComplianceLordIcon src={item.iconSrc} />
              <div className="flex flex-col gap-2">
                <h3 className="type-18 text-white">{item.title}</h3>
                <p className="type-16 text-white/75">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
