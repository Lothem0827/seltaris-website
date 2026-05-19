import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";

type PlanFeature = { icon: string; text: string };

function AustraliaBadge() {
  return (
    <div className="flex items-center gap-1 rounded-full border border-charcoal-200 bg-white px-3 py-1.5">
      <Image
        src={assets.ourServicesPlans.australiaIcon}
        alt=""
        width={16}
        height={16}
      />
      <span className="text-xs font-medium text-charcoal-700">Australia</span>
    </div>
  );
}

function FeatureList({ items }: { items: PlanFeature[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.text} className="flex gap-3">
          <Image
            src={item.icon}
            alt=""
            width={24}
            height={24}
            className="mt-0.5 shrink-0"
          />
          <span className="text-base leading-[26px] text-charcoal-500">
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function AddressValidationIcon() {
  const { iconPart1, badge } = assets.ourServicesPlans.addressValidation;
  return (
    <div className="relative size-12 rounded-[11px] border-2 border-[#493afb] bg-[#eeeffe]">
      <Image
        src={iconPart1}
        alt=""
        width={24}
        height={24}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <Image
        src={badge}
        alt=""
        width={14}
        height={14}
        className="absolute -right-1.5 -top-1"
      />
    </div>
  );
}

function RepairedFilePlan() {
  const check = assets.ourServicesPlans.checkIcon;
  return (
    <div className="flex min-h-[700px] flex-1 flex-col gap-3 rounded-3xl bg-charcoal-700 p-1 pt-3">
      <p className="text-center text-base font-extrabold tracking-[0.32px] text-white">
        REPAIRED FILE ONLY
      </p>
      <div className="flex flex-1 flex-col justify-between rounded-[20px] border border-[#230356] bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <AddressValidationIcon />
            <AustraliaBadge />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-2xl leading-8 text-charcoal-700">
                Address Validation
              </h3>
              <p className="text-base leading-[26px] text-charcoal-500">
                Validate, Repair and Standardise. Improve the quality of your
                Australian address data.
              </p>
              <LearnMoreLink href="#" />
            </div>
            <FeatureList
              items={[
                { icon: check, text: "Validate & Repair addresses" },
                { icon: check, text: "Standardisation of all addresses" },
                {
                  icon: check,
                  text: "1x Repaired File Available for Download",
                },
              ]}
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <p className="text-center text-[10px] leading-relaxed text-charcoal-500">
            Only accessible after completing your{" "}
            <span className="text-brand">
              Address Quality Health Check Report – Australia.
            </span>
          </p>
          <Button variant="primary" className="w-full justify-center bg-charcoal-700">
            Coming soon
          </Button>
        </div>
      </div>
    </div>
  );
}

function HealthCheckPlan() {
  const check = assets.ourServicesPlans.checkIcon;
  const healthCheckCheck = assets.ourServicesPlans.healthCheckCheck;
  return (
    <div className="flex min-h-[700px] flex-1 flex-col gap-3 rounded-3xl bg-[#10823e] p-1 pt-3">
      <p className="text-center text-base font-extrabold tracking-[0.32px] text-[#e1f4f4]">
        HEALTH CHECK REPORT
      </p>
      <div className="flex flex-1 flex-col justify-between rounded-[20px] border border-[#230356] bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex size-12 items-center justify-center rounded-lg bg-[#e1f4f4]">
              <Image
                src={assets.ourServicesPlans.healthCheckIcon}
                alt=""
                width={28}
                height={28}
              />
            </div>
            <AustraliaBadge />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-2xl leading-8 text-charcoal-700">
                Address Quality
                <br />
                Health Check Report
              </h3>
              <p className="text-base leading-[26px] text-charcoal-500">
                Test your Australian data and return advanced reporting that
                pinpoints areas for improvement. After the job, a repaired high
                quality version of your data is available for purchase.
              </p>
              <LearnMoreLink href="#" />
            </div>
            <FeatureList
              items={[
                { icon: healthCheckCheck, text: "1x Health Check Report" },
                {
                  icon: check,
                  text: "1x Repaired File Available for Purchase",
                },
              ]}
            />
          </div>
        </div>
        <Button href="#get-started" className="mt-8 w-full justify-center">
          Get started
        </Button>
      </div>
    </div>
  );
}

function SubscriptionPlan() {
  const check = assets.ourServicesPlans.subscriptionCheck;
  return (
    <div
      className="flex min-h-[700px] flex-1 flex-col gap-3 rounded-3xl p-1 pt-3"
      style={{
        backgroundImage:
          "linear-gradient(84deg, rgb(58, 124, 251) 6.6%, rgb(208, 58, 251) 50%, rgb(255, 160, 75) 93.4%)",
      }}
    >
      <p className="text-center text-base font-extrabold tracking-[0.32px] text-[#e1f4f4]">
        SUBSCRIPTION
      </p>
      <div className="flex flex-1 flex-col justify-between rounded-[20px] bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6">
          <Image
            src={assets.ourServicesPlans.subscriptionLogo}
            alt=""
            width={48}
            height={48}
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-2xl leading-8 text-charcoal-700">
                DataTools
                <br />
                Seltaris+ Subscription
              </h3>
              <p className="text-base leading-[26px] text-charcoal-500">
                DataTools Seltaris+ brings together the best of Seltaris in one
                powerful subscription, giving your organisation advanced
                capabilities and real savings for a single monthly price.
              </p>
            </div>
            <FeatureList
              items={[
                { icon: check, text: "Free Health Check Reports" },
                {
                  icon: check,
                  text: "Free Advanced Data Protection, Private Keys, volume discounts and licence sharing with your organisation.",
                },
              ]}
            />
            <p className="text-xs font-medium tracking-tight text-brand">
              Available only on eligible plans.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="font-display text-xl leading-8 text-[#0f2459]">
              $1 for 1 month
            </p>
            <p className="text-sm text-charcoal-500">Excludes GST of $0.10</p>
            <p className="text-xs font-medium leading-snug text-charcoal-500">
              Get your first month for $1, then ongoing pricing from
              $70.00/month.
            </p>
          </div>
          <Button href="#" className="w-full justify-center">
            Explore plans
          </Button>
        </div>
      </div>
    </div>
  );
}

export function OurServicesPlansSection() {
  return (
    <section id="get-started" className="bg-white py-[120px]">
      <Container className="flex max-w-[1200px] flex-col items-center gap-20">
        <div className="flex max-w-[614px] flex-col items-center gap-5 text-center">
          <Eyebrow label="Our Services" className="border-charcoal-300" />
          <h2 className="font-display text-[40px] leading-[1.35] tracking-[-0.8px] text-charcoal-700">
            There&apos;s never been a better
            <br />
            time to <span className="text-brand">get started.</span>
          </h2>
        </div>

        <div
          className={cn(
            "grid w-full gap-6",
            "grid-cols-1 xl:grid-cols-3",
          )}
        >
          <RepairedFilePlan />
          <HealthCheckPlan />
          <SubscriptionPlan />
        </div>

        <Button href="#" variant="primary" className="bg-charcoal-700">
          View all services
        </Button>
      </Container>
    </section>
  );
}
