export const designMadeSimplePageMeta = {
  title: "Design Made Simple | Seltaris",
  description:
    "The best innovations are built for everyone. Design made simple, so the complex work of cleaning data becomes easy enough for any non-technical person to do.",
} as const;

export const designMadeSimplePageHero = {
  eyebrow: "Design made simple",
  heading: (
    <>
      Innovation <span className="text-brand">for all.</span>
    </>
  ),
  subtitle: "Built for everyone so anyone can use it.",
} as const;

export const designMadeSimpleInnovation = {
  leftHeading: "The best innovations are built for everyone.",
  leftSubheading:
    "We have always believed that data quality software should be simple.",
  rightBody: (
    <>
      <p>
        Our approach from the beginning (almost three decades ago) was to make
        the complex work of cleaning data so simple that a non-technical
        person could achieve it using our software.
      </p>
      <p className="mt-6">
        This approach didn&apos;t stop with easy-to-use point and click now
        available in the Seltaris. Just because data quality software is used by
        technical people, doesn&apos;t mean it should be hard.
      </p>
    </>
  ),
} as const;

export const designMadeSimpleDataProtectionTeaser = {
  eyebrow: "Advanced Data Protection",
  heading: (
    <>
      Enterprise grade security.
      <br />
      <span className="text-brand">Built from the ground up.</span>
    </>
  ),
  subheading: "Your business is nobody else's. Not even GBG.",
  cta: { label: "Learn more", href: "/seltaris-advanced-data-protection" },
} as const;
