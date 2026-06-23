import { assets } from "@/lib/assets";

const icons = assets.serviceSectionNavIcons;

export const addressServiceSectionNav = [
  { id: "overview", label: "Overview", iconSrc: icons.overview },
  { id: "whats-included", label: "What's included", iconSrc: icons.included },
  { id: "data-quality", label: "Data quality", iconSrc: icons.data },
  { id: "performance", label: "Performance", iconSrc: icons.performance },
  { id: "security", label: "Security", iconSrc: icons.security },
  { id: "pricing", label: "Pricing", iconSrc: icons.pricing },
] as const;
