import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import {
  FeaturePageHeading,
  featurePageHeadingStyles,
  type FeaturePageHeadingVariant,
} from "@/components/atoms/FeaturePageHeading";
import { FeatureIcon } from "@/components/atoms/FeatureIcon";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { FEATURE_PAGE_HEADING_SAMPLES } from "@/lib/design-system/demo-data";
import {
  FEATURE_PAGE_HEADING_SIZES,
  HEADING_LEVEL_SIZES,
  TEXT_VARIANT_SIZES,
} from "@/lib/design-system/typography-sizes";
import { assets } from "@/lib/assets";
import {
  ComponentDemo,
  GuideSubheading,
  TokenCode,
  TypographySizeLabel,
} from "./DesignSystemPrimitives";

const HEADING_LEVELS = [
  "display",
  "sectionDisplay",
  "h1",
  "h2",
  "h3",
  "subheading",
  "panel",
] as const;

const TEXT_VARIANTS = [
  "body",
  "body-sm",
  "caption",
  "tiny",
  "micro",
  "label",
  "utility",
] as const;

const FP_VARIANTS = Object.keys(
  featurePageHeadingStyles,
) as FeaturePageHeadingVariant[];

export function DesignSystemAtomsShowroom() {
  return (
    <div className="space-y-12">
      <div>
        <GuideSubheading>Atoms — layout &amp; actions</GuideSubheading>
        <div className="grid gap-6 lg:grid-cols-2">
          <ComponentDemo name="Container" path="src/components/atoms/Container.tsx">
            <Container className="rounded-radius-sm border-2 border-dashed border-brand bg-brand-surface py-6 text-center">
              <Text variant="body-sm">
                <TokenCode>max-w-container px-container-padding</TokenCode>
              </Text>
            </Container>
          </ComponentDemo>

          <ComponentDemo name="Button" path="src/components/atoms/Button.tsx">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="primary" size="small">
                Primary small
              </Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost link</Button>
            </div>
          </ComponentDemo>
        </div>
      </div>

      <div>
        <GuideSubheading>Atoms — typography</GuideSubheading>
        <ComponentDemo name="Heading" path="src/components/atoms/Heading.tsx">
          <div className="space-y-6">
            {HEADING_LEVELS.map((level) => {
              const meta = HEADING_LEVEL_SIZES[level];
              return (
                <div key={level} className="space-y-1">
                  <TokenCode>{`level="${level}"`}</TokenCode>
                  <TypographySizeLabel {...meta} />
                  <Heading level={level}>Sample {level} heading</Heading>
                </div>
              );
            })}
          </div>
        </ComponentDemo>

        <ComponentDemo
          name="Text"
          path="src/components/atoms/Text.tsx"
          className="mt-6"
        >
          <div className="space-y-4">
            {TEXT_VARIANTS.map((variant) => {
              const meta = TEXT_VARIANT_SIZES[variant];
              return (
                <div key={variant} className="space-y-1">
                  <TokenCode>{`variant="${variant}"`}</TokenCode>
                  <TypographySizeLabel {...meta} />
                  <Text variant={variant}>
                    The quick brown fox jumps over the lazy dog.
                  </Text>
                </div>
              );
            })}
          </div>
        </ComponentDemo>

        <ComponentDemo
          name="FeaturePageHeading"
          path="src/components/atoms/FeaturePageHeading.tsx"
          className="mt-6"
          note="All fp-* variants used on feature pages. Class names map to component-tokens.css."
        >
          <div className="space-y-6">
            {FP_VARIANTS.map((variant) => {
              const meta = FEATURE_PAGE_HEADING_SIZES[variant];
              return (
                <div
                  key={variant}
                  className="grid gap-2 border-b border-border pb-6 last:border-0 lg:grid-cols-[12rem_1fr]"
                >
                  <div className="space-y-1">
                    <TokenCode>{`variant="${variant}"`}</TokenCode>
                    <TypographySizeLabel {...meta} />
                  </div>
                  <FeaturePageHeading as="p" variant={variant}>
                    {FEATURE_PAGE_HEADING_SAMPLES[variant]}
                  </FeaturePageHeading>
                </div>
              );
            })}
          </div>
        </ComponentDemo>
      </div>

      <div>
        <GuideSubheading>Atoms — labels &amp; icons</GuideSubheading>
        <div className="grid gap-6 lg:grid-cols-2">
          <ComponentDemo name="Badge" path="src/components/atoms/Badge.tsx">
            <div className="flex flex-wrap items-center gap-4">
              <Badge>Brand</Badge>
              <Badge variant="muted">Muted</Badge>
            </div>
          </ComponentDemo>

          <ComponentDemo name="Eyebrow" path="src/components/atoms/Eyebrow.tsx">
            <div className="flex flex-wrap items-center gap-6">
              <Eyebrow label="Section label" />
              <Eyebrow label="With badge" badge="NEW" />
            </div>
          </ComponentDemo>

          <ComponentDemo name="FeatureIcon" path="src/components/atoms/FeatureIcon.tsx">
            <FeatureIcon src={assets.humanTouchPage.featureHumanTouch} />
          </ComponentDemo>
        </div>
      </div>
    </div>
  );
}
