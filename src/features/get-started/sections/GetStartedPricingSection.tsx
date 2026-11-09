import {
  SeltarisPlusPlanCard,
} from "@/features/seltaris-plus/components/SeltarisPlusPlanCard";
import { seltarisPlusPlans } from "@/features/seltaris-plus/plans.content";
import { Container } from "@/components/ui/Container";

export function GetStartedPricingSection() {
  return (
    <section id="get-started-pricing" className="bg-text py-section text-white">
      <Container className="flex flex-col items-center gap-16 lg:gap-8">
        <div className="max-w-3xl flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-5xl font-bold leading-subheading text-white lg:text-3xl">
            Prepaid credits or Postpaid.
          </h2>
          <p className="w-[70%] font-body text-lg lg:w-full">
            Load credits for high-volume jobs, or pay per transaction by card.
            Health Check Reports and Advanced Data Protection are free on both.
          </p>
        </div>

        <div className="grid w-full max-w-plans-grid grid-cols-2 items-center gap-6 lg:grid-cols-1 lg:items-stretch">
          {seltarisPlusPlans.map((plan) => (
            <SeltarisPlusPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
