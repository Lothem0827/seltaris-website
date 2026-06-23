import { AppImage as Image } from "@/components/atoms/AppImage";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { AddressValidateAnimation } from "@/components/svg-animations/AddressValidateAnimation";
import { assets } from "@/lib/assets";
import { services } from "@/lib/content/home";

export function ServicesSection() {
  return (
    <section className="py-section" id="features">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <Heading level="h1" className="max-w-md">
            Services designed to get you cleaning,{" "}
            <span className="text-brand">fast.</span>
          </Heading>
          <div className="max-w-md space-y-2.5">
            <Text>
              Seltaris brings together a powerful suite of services designed to
              clean and enrich your organisation&apos;s data. We&apos;re proud
              to offer our most advanced tools that make data quality simple.
              Starting today, you can clean and validate Australian addresses
              with phone, email validation, and geocoding coming soon.
            </Text>
            <Button href="#learn-more" variant="ghost" size="small">
              Learn more
            </Button>
          </div>
        </div>

        <AddressValidateAnimation />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconSrc={assets.serviceIcons[service.iconKey]}
              comingSoon={service.comingSoon}
            />
          ))}
        </div>

        <AvailableFor />
      </Container>
    </section>
  );
}

function AvailableFor() {
  const regions = [
    { label: "Australia", flag: assets.australiaFlag },
    { label: "New Zealand", flag: assets.nzFlag, comingSoon: true },
    {
      label: "International",
      flag: assets.internationalFlag,
      comingSoon: true,
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <Text variant="utility">Available for:</Text>
      <div className="flex flex-wrap items-center gap-3">
        {regions.map((region) => (
          <span
            key={region.label}
            className={`inline-flex items-center gap-2 rounded-radius-full border border-border px-3.5 py-1.5 text-sm font-medium ${
              region.comingSoon ? "opacity-50" : ""
            }`}
          >
            <Image
              src={region.flag}
              alt=""
              width={20}
              height={20}
              aria-hidden
            />
            {region.label}
            {region.comingSoon ? (
              <span className="rounded-radius-xs bg-brand-light px-1 py-0.5 font-label text-badge font-semibold uppercase tracking-widest text-brand-dark">
                Coming soon
              </span>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
