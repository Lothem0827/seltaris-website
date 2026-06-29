import {
  SeltarisPlusPlanCard,
  type SeltarisPlusPlan,
} from "@/features/seltaris-plus/components/SeltarisPlusPlanCard";
import { Container } from "@/components/ui/Container";
import { SELTARIS_GET_STARTED_PLAN_URLS } from "@/lib/site-assets";

const getStartedPlans: SeltarisPlusPlan[] = [
  {
    id: "free",
    tier: "free",
    name: "Free Plan",
    tagline: "For solo testers.",
    price: "$0",
    gstNote: "(Ex. GST) of $0.00",
    cta: { label: "Start for free", href: SELTARIS_GET_STARTED_PLAN_URLS.free },
    features: [
      {
        label: "Health Check Reports",
        value: "5 Health Check",
        period: "/month",
      },
      {
        label: "Advanced Data Protection",
        value: "Not Included",
        included: false,
      },
      {
        label: "Volume Discounts",
        value: "Not Included",
        included: false,
      },
      {
        label: "Shared Licences",
        value: "0 users",
      },
    ],
  },
  {
    id: "premium",
    tier: "premium",
    name: "Premium",
    tagline: "For fast-growing businesses.",
    price: "$139",
    gstNote: "(Ex. GST) of $0.00",
    popular: true,
    popularLabel: "RECOMMENDED",
    cta: { label: "Join now for $1", href: SELTARIS_GET_STARTED_PLAN_URLS.premium },
    features: [
      {
        label: "Health Check Reports",
        value: "Unlimited",
        period: "/month",
      },
      {
        label: "Advanced Data Protection",
        value: "Included",
        included: true,
      },
      {
        label: "Volume Discounts",
        value: "5%",
        included: true,
      },
      {
        label: "Shared Licences",
        value: "+5 users",
      },
    ],
  },
  {
    id: "premier",
    tier: "premier",
    name: "Premier",
    tagline: "Ideal for large enterprises.",
    price: "$389",
    gstNote: "(Ex. GST) of $0.00",
    cta: { label: "Join now for $1", href: SELTARIS_GET_STARTED_PLAN_URLS.premier },
    features: [
      {
        label: "Health Check Reports",
        value: "Unlimited",
        period: "/month",
      },
      {
        label: "Advanced Data Protection",
        value: "Included",
        included: true,
      },
      {
        label: "Volume Discounts",
        value: "10%",
        included: true,
      },
      {
        label: "Shared Licences",
        value: "+50 users",
      },
    ],
  },
];

export function GetStartedPricingSection() {
  return (
    <section id="get-started-pricing" className="bg-text py-section text-white">
      <Container className="flex flex-col items-center gap-16 lg:gap-8">
        <div className="max-w-3xl flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-5xl font-bold leading-subheading text-white lg:text-3xl">
            You&apos;ve got plans. So do we.
          </h2>
          <p className="w-[70%] font-body text-lg lg:w-full">
            Start Seltaris free today, than upgrade anytime for $1.
          </p>
        </div>

        <div className="grid w-full max-w-plans-grid grid-cols-3 items-center gap-6 lg:grid-cols-1 lg:items-stretch">
          {getStartedPlans.map((plan) => (
            <SeltarisPlusPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
