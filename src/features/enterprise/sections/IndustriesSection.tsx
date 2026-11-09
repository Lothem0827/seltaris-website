import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Image } from "@/components/ui/Image";
import type { EnterprisePageContent } from "../enterprise.content";

type IndustriesSectionProps = {
  content: EnterprisePageContent;
};

export function IndustriesSection({ content }: IndustriesSectionProps) {
  return (
    <section className="relative z-10 -mt-10 rounded-t-radius-xl bg-white py-section">
      <Container className="flex flex-col gap-10">
        <div className="flex max-w-4xl flex-col gap-4">
          <p className="type-18 text-brand uppercase tracking-[0.08em]">
            {content.industriesEyebrow}
          </p>
          <h2 className="type-32 text-text">{content.industriesTitle}</h2>
          <p className="type-16 text-paragraph max-w-content-wide">
            {content.industriesBody}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
          {content.industries.map((industry) => (
            <article
              key={industry.id}
              className="flex flex-col overflow-hidden rounded-radius-panel bg-surface-muted"
            >
              <div className="relative m-2 h-64 overflow-hidden rounded-radius-lg">
                <Image
                  src={industry.imageSrc}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 384px"
                />
              </div>
              <div className="flex flex-1 flex-col gap-8 px-7 pt-5 pb-7">
                <div className="flex flex-col gap-2">
                  <h3 className="type-18 font-medium text-text">
                    {industry.title}
                  </h3>
                  <p className="type-16 text-paragraph">
                    {industry.description}
                  </p>
                </div>
                <Button href={industry.href} variant="ghost" size="small">
                  {industry.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
