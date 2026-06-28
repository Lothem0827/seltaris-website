import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { RegionBadge } from "@/components/shared/RegionBadge";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { AddressValidateAnimation } from "@/components/svg-animations/AddressValidateAnimation";

const services = [
  {
    id: "address",
    title: "Address data",
    description: "Format, clean, repair and verify addresses with 100% accuracy.",
    comingSoon: false,
    iconSrc: "/images/home/service-icon-address.png",
  },
  {
    id: "email",
    title: "Email address data",
    description: "Check and validate email addresses.",
    comingSoon: true,
    iconSrc: "/images/home/service-icon-email.png",
  },
  {
    id: "phone",
    title: "Phone number data",
    description: "Check and validate landline or mobile numbers.",
    comingSoon: true,
    iconSrc: "/images/home/service-icon-phone.png",
  },
  {
    id: "geocode",
    title: "Appending geocode data",
    description: "Add coordinates to every validated address.",
    comingSoon: true,
    iconSrc: "/images/home/service-icon-geocode.png",
  },
] as const;

export function ServicesSection() {
  return (
    <section className="py-section" id="features">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-row justify-between gap-10 lg:flex-col">
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

        <div className="grid grid-cols-4 gap-4 xl:grid-cols-2 md:grid-cols-1">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconSrc={service.iconSrc}
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
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <Text variant="utility">Available for:</Text>
      <div className="flex flex-wrap items-center gap-3">
        <RegionBadge region="australia" />
        <RegionBadge region="nz" comingSoon />
        <RegionBadge region="international" comingSoon />
      </div>
    </div>
  );
}
