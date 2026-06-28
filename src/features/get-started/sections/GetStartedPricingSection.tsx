import { SeltarisPlusPlanCard } from "@/features/seltaris-plus/components/SeltarisPlusPlanCard";
import { getStartedPlans } from "@/lib/content/get-started-plans";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";

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
