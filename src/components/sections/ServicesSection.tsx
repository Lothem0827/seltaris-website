import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Badge } from "@/components/ui/Badge";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";

const serviceCards = [
  {
    icon: assets.services.addressValidation,
    title: "Address Validation",
    description: "Format, clean, repair and verify addresses with 100% accuracy.",
    comingSoon: false,
  },
  {
    icon: assets.services.emailValidation,
    title: "Email Validation",
    description: "Check and validate email addresses.",
    comingSoon: true,
  },
  {
    icon: assets.services.phoneValidation,
    title: "Phone Validation",
    description: "Check and validate landline or mobile numbers.",
    comingSoon: true,
  },
  {
    icon: assets.services.geocode,
    title: "Appending Geocode",
    description: "Add coordinates to every validated address.",
    comingSoon: true,
  },
] as const;

const regions = [
  {
    label: "Australia",
    flag: assets.services.australiaFlag,
    comingSoon: false,
  },
  {
    label: "New Zealand",
    flag: assets.services.newZealandFlag,
    comingSoon: true,
  },
  {
    label: "International",
    flag: assets.services.internationalFlag,
    comingSoon: true,
  },
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-[120px]">
      <Container className="flex max-w-[1200px] flex-col gap-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.35] tracking-[-0.8px] text-charcoal-700 sm:text-[40px]">
            Services designed to get you cleaning,{" "}
            <span className="text-brand">fast.</span>
          </h2>
          <div>
            <p className="text-base leading-[26px] text-charcoal-500">
              DataTools Seltaris brings together a powerful suite of services
              designed to clean and enrich your organisation&apos;s data.
              We&apos;re proud to offer our most advanced tools that make data
              quality simple. Starting today, you can clean and validate
              Australian addresses with phone, email validation, and geocoding
              coming soon.
            </p>
            <LearnMoreLink href="#services" className="mt-2.5" />
          </div>
        </div>

        <Image
          src={assets.services.diagram}
          alt="Seltaris services diagram"
          width={1200}
          height={377}
          className="h-auto w-full object-contain"
        />

        <div className="flex flex-col items-center gap-2.5">
          <div className="grid w-full gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 px-3 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-charcoal-500">
              Available for:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {regions.map((region) => (
                <div
                  key={region.label}
                  className={cn(
                    "relative inline-flex items-center gap-1 rounded-full border border-charcoal-200 bg-white px-3 py-1.5",
                    region.comingSoon && "opacity-50",
                  )}
                >
                  <Image
                    src={region.flag}
                    alt=""
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <span className="text-xs font-medium text-charcoal-700">
                    {region.label}
                  </span>
                  {region.comingSoon ? (
                    <Badge className="ml-1 text-[6px] tracking-[0.83px]">
                      COMING SOON
                    </Badge>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
