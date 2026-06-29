import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import {
  serviceCategoryPath,
  type ServiceCategoryId,
} from "@/features/services/service-routes";

const CATEGORY_CARDS: {
  id: ServiceCategoryId;
  title: string;
  description: string;
  iconSrc: string;
  comingSoon: boolean;
}[] = [
  {
    id: "address-data",
    title: "Address data",
    description: "Format, clean, repair and verify addresses.",
    iconSrc: "/images/home/service-icon-address.png",
    comingSoon: false,
  },
  {
    id: "email-data",
    title: "Email address data",
    description: "Check and validate email addresses.",
    iconSrc: "/images/home/service-icon-email.png",
    comingSoon: true,
  },
  {
    id: "phone-data",
    title: "Phone number data",
    description: "Check and validate landline or mobile numbers.",
    iconSrc: "/images/home/service-icon-phone.png",
    comingSoon: true,
  },
  {
    id: "geocode-data",
    title: "Appending geocode",
    description: "Add coordinates to every validated address.",
    iconSrc: "/images/home/service-icon-geocode.png",
    comingSoon: true,
  },
];

export function HeroSection() {
  return (
    <section className="bg-brand-light py-section">
      <Container className="flex flex-col items-center gap-12">
        <FeaturePageHeading as="h1" variant="sectionTitleLg">
          Seltaris Services
        </FeaturePageHeading>

        <div className="grid grid-cols-4 gap-4 xl:grid-cols-2 md:grid-cols-1">
          {CATEGORY_CARDS.map((category) => (
            <Link
              key={category.id}
              href={serviceCategoryPath(category.id)}
              className="block h-full"
            >
              <ServiceCard
                title={category.title}
                description={category.description}
                iconSrc={category.iconSrc}
                comingSoon={category.comingSoon}
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
