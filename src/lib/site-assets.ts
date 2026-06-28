/** Global site assets — header, footer, nav icons only. Page images live in feature folders. */

export const siteAssets = {
  logo: "/seltaris-full-logo.svg",
  chevronDown: "/icons/chevron.svg",
  menuIcon: "/icons/menu.svg",
  closeIcon: "/icons/close.svg",
  featureIcons: {
    humanTouch: "/icons/features/human-touch.svg",
    altraService: "/icons/features/altra-service.svg",
    advancedDataProtection: "/icons/features/advanced-data-protection.svg",
    healthCheck: "/icons/features/health-check.svg",
    moreDataSources: "/icons/features/more-data-sources.svg",
    designMadeSimple: "/icons/features/design-made-simple.svg",
    seltaris: "/icons/features/seltaris.svg",
  },
  arrowLeftWrap: "/icons/seltaris-services/arrow-left-wrap.svg",
  arrowUp: "/icons/arrow.svg",
  learnMoreArrow: "/images/home/learn-more-arrow.png",
  sliderButton: "/icons/slider-button.svg",
  checkIcon: "/icons/check-icon.svg",
  australiaFlag: "/icons/australiaFlag.svg",
  nzFlag: "/icons/nzFlag.svg",
  internationalFlag: "/icons/internationalFlag.svg",
  footerLargeLogo: "/seltaris-full-logo.svg",
  footerSocial: {
    facebook: "/icons/fb-logo.svg",
    youtube: "/icons/youtube-logo.svg",
    x: "/icons/x-logo.svg",
    linkedin: "/icons/linkedIn-logo.svg",
    trust: "/icons/lock-logo.svg",
  },
  serviceSectionNavIcons: {
    addressVerify: "/icons/seltaris-services/address-verify-icon.svg",
    overview: "/icons/seltaris-services/overview-icon.svg",
    included: "/icons/seltaris-services/included-icon.svg",
    data: "/icons/features/more-data-sources.svg",
    performance: "/icons/features/altra-service.svg",
    security: "/icons/features/advanced-data-protection.svg",
    pricing: "/icons/seltaris-services/pricing-icon.svg",
  },
  addressValidateAnimation: {
    flowConnectors:
      "/images/svg-animations/address-validate/flow-connectors.svg",
    pulsingHub: "/images/svg-animations/address-validate/pulsing-hub.svg",
    checkIcon: "/images/svg-animations/address-validate/check-icon.svg",
  },
  humanTouchAnimation: {
    wholeUi: "/images/svg-animations/human-touch/whole-ui.svg",
    toastError: "/images/svg-animations/human-touch/toast-error.png",
    toastSuccess: "/images/svg-animations/human-touch/toast-success.png",
    cursor: "/images/svg-animations/human-touch/cursor.png",
  },
  supportSpecialist: "/images/seltaris-plus/support-specialist.png",
  getStarted: {
    heroLaptop: "/images/get-started/hero-laptop.png",
    healthCheckReportPreview: "/images/get-started/health-check-report-preview.png",
    addressValidationVisual: "/images/get-started/address-validation-visual.png",
    clearPricingVisual: "/images/get-started/clear-pricing-visual.png",
    reliableVisual: "/images/get-started/reliable-visual.png",
    millionRecordsVisual: "/images/get-started/million-records-visual.png",
    enterpriseGradeSecurityVisual:
      "/images/get-started/enterprise-grade-security-visual.png",
    healthCheckIcon: "/images/get-started/health-check-icon.svg",
    accordionPlus: "/images/get-started/accordion-plus.svg",
    accordionMinus: "/images/get-started/accordion-minus.svg",
  },
} as const;

export const SELTARIS_LOGIN_URL = "https://seltaris.gbg.com/login";
export const SELTARIS_DEMO_URL = "/demo";
export const SELTARIS_GET_STARTED_PLAN_URLS = {
  free: "https://seltaris.gbg.com/plan/slt-free-zx4k",
  premium: "https://seltaris.gbg.com/plan/slt-prm-vx7r",
  premier: "https://seltaris.gbg.com/plan/slt-pmr-jt3p",
} as const;
export const GBG_CUSTOMER_SUPPORT_URL =
  "https://www.gbg.com/en/contact/customer-support/";
