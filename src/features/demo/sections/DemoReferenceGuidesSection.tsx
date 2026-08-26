import { Button } from "@/components/ui/Button";

export type DemoReferenceGuide = {
  id: string;
  title: string;
  href: string;
};

const referenceGuides: DemoReferenceGuide[] = [
  {
    id: "au-address-output-fields",
    title: "AU Address Output Fields Quick Reference Guide",
    href: "/pdf/Seltaris_AU_Address_Output_Fields_Quick_Reference_Guide_20260731.pdf",
  },
];

export function DemoReferenceGuidesSection() {
  return (
    <div className="flex w-full max-w-[1300px] flex-col gap-4">
      <h2 className="font-display text-xl font-semibold leading-subheading text-white lg:text-2xl">
        Reference Guide Links
      </h2>
      <ul className="flex flex-col gap-3">
        {referenceGuides.map((guide) => (
          <li
            key={guide.id}
            className="flex items-center justify-between gap-4 rounded-radius-lg border border-border bg-white px-8 py-5"
          >
            <div className="flex min-w-0 flex-col gap-0.5">
              <p className="font-display text-xl font-bold leading-subheading text-text">
                {guide.title}
              </p>
              <p className="font-body text-body text-paragraph">PDF</p>
            </div>
            <Button
              href={guide.href}
              variant="outline"
              target="_blank"
              className="shrink-0"
            >
              View
              <span className="sr-only"> (opens in a new tab)</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
