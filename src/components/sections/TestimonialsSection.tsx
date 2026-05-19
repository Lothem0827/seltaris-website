import { SliderSectionLayout } from "@/components/sections/shared/SliderSectionLayout";
import { assets } from "@/lib/assets";

const quote =
  "The Support Agent was great to work with and replied with great knowledge of the system. They were able to point us to the type of function we should use and how to best use the results being returned to validate the address entered by the users";

const testimonials = [
  { id: "marek-1", name: "Marek B" },
  { id: "marek-2", name: "Marek B" },
  { id: "marek-3", name: "Marek B" },
  { id: "marek-4", name: "Marek B" },
] as const;

function TestimonialCard({
  name,
  quote: body,
}: {
  name: string;
  quote: string;
}) {
  return (
    <article className="w-full max-w-[588px] rounded-[20px] border border-charcoal-200 bg-white p-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="font-display text-[28px] leading-normal text-[#002e48]">
            {name}
          </p>
          <div className="h-[3px] w-[34px] bg-brand" aria-hidden />
        </div>
        <blockquote className="text-lg leading-[1.6] text-charcoal-500">
          &ldquo;{body}&rdquo;
        </blockquote>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <SliderSectionLayout
      eyebrow="DataTools Support"
      title={
        <>
          Our Customer Support
          <br />
          feedback speaks volumes.
        </>
      }
      prevButton={assets.testimonials.prevButton}
      nextButton={assets.testimonials.nextButton}
      slideKeys={testimonials.map((t) => t.id)}
      slidesPerView={{ mobile: 1, tablet: 1.05, desktop: 1.8 }}
      slides={testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          name={testimonial.name}
          quote={quote}
        />
      ))}
    />
  );
}
