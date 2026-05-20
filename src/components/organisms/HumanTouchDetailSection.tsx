import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { ImageTextCard } from "@/components/molecules/ImageTextCard";
import { SplitIntro } from "@/components/molecules/SplitIntro";
import { TabGroup } from "@/components/molecules/TabGroup";
import { assets, getAsset } from "@/lib/assets";
import { humanTouchCards, humanTouchTabs } from "@/lib/content/sections";

export function HumanTouchDetailSection() {
  return (
    <section className="px-container-padding pb-section">
      <Container>
        <div className="rounded-[40px] bg-brand-surface px-6 py-16 md:px-12 md:py-24">
          <SplitIntro
            eyebrow="DataTools Human Touch™"
            heading={
              <>
                <span className="text-brand">The tool is innovative.</span>
                <br />
                The experience is magical.
              </>
            }
            body={
              <>
                The DataTools Human Touch™ logic, tightly integrated with
                DataTools Seltaris, intelligently interprets information in the
                same intuitive way a human would.{" "}
                <strong>
                  We continue to push the limits of what it means to have the
                  most accurate data possible.
                </strong>
              </>
            }
            imageSrc={assets.humanTouchSide}
            imageAlt="Human Touch"
            className="mb-16"
          />

          <TabGroup tabs={humanTouchTabs} className="mb-12 max-w-container" />

          <div className="mb-12 grid gap-8 lg:grid-cols-3">
            {humanTouchCards.map((card) => (
              <ImageTextCard
                key={card.id}
                imageSrc={getAsset(card.imageKey)}
              >
                {card.body}
              </ImageTextCard>
            ))}
          </div>

          <div className="flex justify-center">
            <Button href="#get-started">Get started with Seltaris</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
