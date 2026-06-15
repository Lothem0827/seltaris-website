import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";
import { PricingCard } from "@/components/molecules/PricingCard";
import { assets } from "@/lib/assets";

export function PricingSection() {
  return (
    <section className="py-section" id="get-started">
      <Container className="flex flex-col items-center gap-12">
        <div className="max-w-2xl text-center">
          <Eyebrow label="Our Services" className="mb-5" />
          <Heading level="sectionDisplay">
            There&apos;s never been a better time to get started.
          </Heading>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-3">
          <PricingCard
            label="Repaired file only"
            tone="default"
            iconSrc={assets.pricingIcons.repaired}
            title="Address Validation"
            description="Validate, Repair and Standardise. Improve the quality of your Australian address data."
            features={[
              "Validate & Repair addresses",
              "Standardisation of all addresses",
              "1x Repaired File Available for Download",
            ]}
            footerNote="Only accessible after completing your Address Quality Health Check Report – Australia."
            showAustralia
            cta={{
              label: "Coming soon",
              href: "#contact",
              variant: "secondary",
            }}
          />
          <PricingCard
            label="Health check report"
            tone="success"
            iconSrc={assets.pricingIcons.health}
            title="Address Quality Health Check Report"
            description="Test your Australian data and return advanced reporting that pinpoints areas for improvement. After the job, a repaired high quality version of your data is available for purchase."
            features={[
              "1x Health Check Report",
              "1x Repaired File Available for Purchase",
            ]}
            showAustralia
            cta={{ label: "Get started", href: "#get-started" }}
          />
          <PricingCard
            label="Subscription"
            tone="subscription"
            iconSrc={assets.pricingIcons.subscription}
            title="Seltaris+ Subscription"
            description="Seltaris+ brings together the best of Seltaris in one powerful subscription, giving your organisation advanced capabilities and real savings for a single monthly price."
            features={[
              "1x Health Check Report",
              "Free Advanced Data Protection, Private Keys, volume discounts and licence sharing with your organisation.",
            ]}
            cta={{ label: "Explore plans", href: "/seltaris-plus" }}
          />
        </div>

        <Button
          href="/services"
          variant="secondary"
          className="bg-text text-white"
        >
          View all services
        </Button>
      </Container>
    </section>
  );
}
