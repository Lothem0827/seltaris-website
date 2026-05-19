import Image from "next/image";
import { SliderSectionLayout } from "@/components/sections/shared/SliderSectionLayout";
import { assets } from "@/lib/assets";

const benefits = [
  {
    id: "iso",
    icon: assets.dataToolsDifference.icons.iso,
    title: "ISO Compliance",
    body: "Each time you use any DataTools product or service, we guarantee compliance that adheres to the world's highest standards of information security (ISO/IEC 27001).",
  },
  {
    id: "security-rating",
    icon: assets.dataToolsDifference.icons.security,
    title: "Independent Security Rating",
    body: "Remove the inefficiencies and manual work when assessing and monitoring DataTools, so you can get started as fast as possible.",
  },
  {
    id: "retention",
    icon: assets.dataToolsDifference.icons.security,
    title: "Limited Retention Window.",
    body: "Result files are retained in our secure cloud environment for a defined retention period; once this period expires, all associated data is permanently and irreversibly erased from our systems.",
  },
  {
    id: "servers",
    icon: assets.dataToolsDifference.icons.servers,
    title: "Secure Servers",
    body: "Delivered through Australian-hosted infrastructure, with cloud platforms trusted by the world's top enterprises.",
  },
] as const;

function BenefitCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <article className="flex h-[296px] w-full max-w-[425px] flex-col rounded-[32px] bg-[#f0f0fe] p-8">
      <div className="flex flex-1 flex-col gap-5">
        <Image src={icon} alt="" width={36} height={44} className="h-11 w-9" />
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl leading-normal text-charcoal-700">
            {title}
          </h3>
          <p className="text-base leading-[26px] text-charcoal-500">{body}</p>
        </div>
      </div>
    </article>
  );
}

export function DataToolsDifferenceSection() {
  return (
    <SliderSectionLayout
      eyebrow="The DataTools difference"
      title={
        <>
          DataTools and enterprise.
          <br />
          Why industry leaders choose us.
        </>
      }
      prevButton={assets.dataToolsDifference.prevButton}
      nextButton={assets.dataToolsDifference.nextButton}
      slideKeys={benefits.map((b) => b.id)}
      slidesPerView={{ mobile: 1, tablet: 1.15, desktop: 2.5 }}
      slides={benefits.map((benefit) => (
        <BenefitCard
          key={benefit.id}
          icon={benefit.icon}
          title={benefit.title}
          body={benefit.body}
        />
      ))}
    />
  );
}
