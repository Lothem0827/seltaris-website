import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { FeatureIcon } from "@/components/atoms/FeatureIcon";
import { Text } from "@/components/atoms/Text";
import { assets } from "@/lib/assets";
import {
  ComponentDemo,
  GuideSubheading,
  TokenCode,
} from "./DesignSystemPrimitives";
import { DesignSystemTypographyScale } from "./DesignSystemTypographyScale";

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
        <ComponentDemo
          name="Typography scale"
          path="src/lib/design-system/typography-scale.ts"
          note={'Merged scale: Heading level="h2" uses subheading tokens; Text variant="tiny" aliases micro; fp-* variants share tokens per row below. Full table in Typography section.'}
        >
          <DesignSystemTypographyScale />
        </ComponentDemo>
      </div>

      <div>
        <GuideSubheading>Atoms — labels &amp; icons</GuideSubheading>
        <div className="grid gap-6 lg:grid-cols-2">
          <ComponentDemo
            name="Badge"
            path="src/components/atoms/Badge.tsx"
            note="Uses --text-micro-size (10px semibold uppercase)."
          >
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
