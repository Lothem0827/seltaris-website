import dynamic from "next/dynamic";

const sectionPlaceholder = <div className="min-h-[320px] w-full" aria-hidden />;

export const FeatureSliderSection = dynamic(
  () =>
    import("./sections/FeatureSliderSection").then((m) => m.FeatureSliderSection),
  { loading: () => sectionPlaceholder },
);

export const HumanTouchShowcaseSection = dynamic(
  () =>
    import("./sections/HumanTouchShowcaseSection").then(
      (m) => m.HumanTouchShowcaseSection,
    ),
  { loading: () => sectionPlaceholder },
);

export const HumanTouchDetailSection = dynamic(
  () =>
    import("./sections/HumanTouchDetailSection").then(
      (m) => m.HumanTouchDetailSection,
    ),
  { loading: () => sectionPlaceholder },
);

export const AltraserviceSliderSection = dynamic(
  () =>
    import("./sections/AltraserviceSliderSection").then(
      (m) => m.AltraserviceSliderSection,
    ),
  { loading: () => sectionPlaceholder },
);

export const DataProtectionShowcaseSection = dynamic(
  () =>
    import("./sections/DataProtectionShowcaseSection").then(
      (m) => m.DataProtectionShowcaseSection,
    ),
  { loading: () => sectionPlaceholder },
);

export const SecuritySliderSection = dynamic(
  () =>
    import("./sections/SecuritySliderSection").then(
      (m) => m.SecuritySliderSection,
    ),
  { loading: () => sectionPlaceholder },
);

export const HealthCheckWorkflowSection = dynamic(
  () =>
    import("./sections/HealthCheckWorkflowSection").then(
      (m) => m.HealthCheckWorkflowSection,
    ),
  { loading: () => sectionPlaceholder },
);

export const HealthCheckSliderSection = dynamic(
  () =>
    import("./sections/HealthCheckSliderSection").then(
      (m) => m.HealthCheckSliderSection,
    ),
  { loading: () => sectionPlaceholder },
);

export const PricingSection = dynamic(
  () => import("./sections/PricingSection").then((m) => m.PricingSection),
  { loading: () => sectionPlaceholder },
);
