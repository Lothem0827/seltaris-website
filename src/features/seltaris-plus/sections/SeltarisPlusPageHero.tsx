import { Container } from "@/components/ui/Container";
import { IconSurface } from "@/components/ui/IconSurface";
import {
  SeltarisPlusPlanCard,
  SeltarisPlusSupportCard,
} from "../components/SeltarisPlusPlanCard";
import { seltarisPlusPlans } from "../plans.content";

export function SeltarisPlusPageHero() {
  return (
    <section className="pt-16 pb-section">
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <IconSurface src="/icons/features/seltaris.svg"
            alt="Seltaris+"
            size="feature" />
          <div className="mx-auto max-w-3xl space-y-5">
            <p className="type-24-semi text-brand">
              Seltaris+
            </p>
            <h1 className="type-48 text-text">
              Two ways to pay.
              <br />
              Full access either way.
            </h1>
            <p className="type-16 mx-auto max-w-hero-body text-paragraph">
              Choose Prepaid credits for high-volume automated jobs, or Postpaid
              with Visa, Mastercard, or American Express. Both options include
              free Health Check Reports and Advanced Data Protection — so you
              can assess, protect, and process your data without tier gating.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-16">
          <div className="grid w-full max-w-plans-grid grid-cols-2 items-center gap-6 lg:grid-cols-1 lg:items-stretch">
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
