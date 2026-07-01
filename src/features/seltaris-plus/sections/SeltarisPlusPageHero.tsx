import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { IconSurface } from "@/components/ui/IconSurface";
import { Text } from "@/components/ui/Text";
import { SELTARIS_LOGIN_URL } from "@/lib/site-assets";
import {
  SeltarisPlusPlanCard,
  SeltarisPlusSupportCard,
  type SeltarisPlusPlan,
} from "../components/SeltarisPlusPlanCard";

const seltarisPlusPlans: SeltarisPlusPlan[] = [
  {
    id: "standard",
    tier: "standard",
    name: "Standard",
    tagline: "For small businesses.",
    price: "$99",
    gstNote: "(Ex. GST)",
    cta: { label: "Join now for $99", href: SELTARIS_LOGIN_URL },
    features: [
      {
        label: "Health Check Reports",
        value: "2x Reports",
        period: "/month",
        badge: "SAVE $500 PER REPORT",
      },
      {
        label: "Advanced Data Protection",
        value: "Not Included",
        included: false,
      },
      {
        label: "Volume discounts",
        value: "Not Included",
        included: false,
      },
      {
        label: "Shared Licences",
        value: "+1 user",
        subscriptionBadge: "1 FREE subscription",
        subscriptionValue: "Valued $99 per month",
      },
    ],
  },
  {
    id: "premium",
    tier: "premium",
    name: "Premium",
    tagline: "For fast-growing businesses.",
    price: "$139",
    gstNote: "(Ex. GST)",
    popular: true,
    cta: { label: "Join now for $139", href: SELTARIS_LOGIN_URL },
    features: [
      {
        label: "Health Check Reports",
        value: "Unlimited",
        period: "/month",
        badge: "SAVE $500 PER REPORT",
      },
      {
        label: "Advanced Data Protection",
        value: "Included",
        included: true,
        badge: "Save $249 per job",
      },
      {
        label: "Volume discounts",
        value: "Included",
        included: true,
        badge: "Save 5% per job.",
      },
      {
        label: "Shared Licences",
        value: "+5 users",
        subscriptionBadge: "5 FREE subscriptions",
        subscriptionValue: "Valued $695 per month",
      },
    ],
  },
  {
    id: "premier",
    tier: "premier",
    name: "Premier",
    tagline: "Ideal for large enterprises.",
    price: "$389",
    gstNote: "(Ex. GST)",
    cta: { label: "Join now for $389", href: SELTARIS_LOGIN_URL },
    features: [
      {
        label: "Health Check Reports",
        value: "Unlimited",
        period: "/month",
        badge: "Save $500 per report",
      },
      {
        label: "Advanced Data Protection",
        value: "Included",
        included: true,
        badge: "Save $249 per job",
      },
      {
        label: "Volume discounts",
        value: "Included",
        included: true,
        badge: "Save 10% per job.",
      },
      {
        label: "Shared Licences",
        value: "+50 users",
        subscriptionBadge: "50 FREE subscriptions",
        subscriptionValue: "Valued $19,450 per month",
      },
    ],
  },
];

export function SeltarisPlusPageHero() {
  return (
    <section className="pt-16 pb-section">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <IconSurface
            src="/icons/features/seltaris.svg"
            alt="Seltaris+"
            size="feature"
          />
          <div className="mx-auto max-w-3xl space-y-5">
            <FeaturePageHeading as="p" variant="pageEyebrow">
              Seltaris+
            </FeaturePageHeading>
            <FeaturePageHeading as="h1" variant="heroTitle">
              A suite of benefits.
              <br />
              One subscription for it all.
            </FeaturePageHeading>
            <Text className="mx-auto max-w-hero-body text-paragraph">
              Seltaris+ brings together the best of Seltaris in one powerful
              subscription, giving your organisation advanced capabilities and
              real savings for a single monthly price. Every plan includes
              complimentary Health Check Reports to help you assess and refine
              your data. As you move into the higher tiers, you&apos;ll unlock
              our most advanced enterprise-level data protection architecture,
              volume discounts for bulk processing, and seamless sharing of
              these benefits across your organisation.
            </Text>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-16">
          <div className="grid w-full max-w-plans-grid grid-cols-3 items-center gap-6 lg:grid-cols-1 lg:items-stretch">
            {seltarisPlusPlans.map((plan) => (
              <SeltarisPlusPlanCard key={plan.id} plan={plan} />
            ))}
          </div>
          <SeltarisPlusSupportCard />
        </div>
      </Container>
    </section>
  );
}
