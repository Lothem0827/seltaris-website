import { SELTARIS_LOGIN_URL } from "@/lib/site-assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { PricingCard } from "@/components/shared/PricingCard";
import { RevealGroup } from "@/components/shared/RevealGroup";
import { RevealOnView } from "@/components/shared/RevealOnView";

export function PricingSection() {
  return (
    <section className="py-section" id="get-started">
      <Container className="flex flex-col items-center gap-12">
        <RevealOnView staggerIndex={0} className="max-w-2xl text-center">
          <Eyebrow label="Our Services" className="mb-5" />
          <Heading level="sectionDisplay">
            There&apos;s never been a better time to get started.
          </Heading>
        </RevealOnView>

        <RevealGroup className="grid w-full grid-cols-3 gap-6 lg:grid-cols-1">
          <PricingCard
            label="Repaired file only"
            tone="default"
            iconSrc="/images/home/pricing-icon-repaired.png"
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
              variant: "secondary",
              disabled: true,
            }}
          />
          <PricingCard
            label="Health check report"
            tone="success"
            iconSrc="/images/home/pricing-icon-health.png"
            title="Address Quality Health Check Report"
            description="Test your Australian data and return advanced reporting that pinpoints areas for improvement. After the job, a repaired high quality version of your data is available for purchase."
            features={[
              "1x Health Check Report",
              "1x Repaired File Available for Purchase",
            ]}
            showAustralia
            cta={{ label: "Get started", href: SELTARIS_LOGIN_URL }}
          />
          <PricingCard
            label="Subscription"
            tone="subscription"
            iconSrc="/seltaris-logo.svg"
            title="Seltaris+ Subscription"
            description="Seltaris+ brings together the best of Seltaris in one powerful subscription, giving your organisation advanced capabilities and real savings for a single monthly price."
            features={[
              "1x Health Check Report",
              "Free Advanced Data Protection, Private Keys, volume discounts and licence sharing with your organisation.",
            ]}
            cta={{ label: "Explore plans", href: "/seltaris-plus" }}
          />
        </RevealGroup>

        <RevealOnView staggerIndex={0}>
          <Button
            href="/services"
            variant="secondary"
            className="bg-text text-white"
          >
            View all services
          </Button>
        </RevealOnView>
      </Container>
    </section>
  );
}
