import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import {
  TYPOGRAPHY_STYLE_GROUPS,
  type TypographyPreview,
} from "@/lib/design-system/typography-scale";
import { TokenCode } from "./DesignSystemPrimitives";

function TypographyPreviewSample({
  preview,
  sample,
}: {
  preview: TypographyPreview;
  sample: string;
}) {
  switch (preview.component) {
    case "heading":
      return <Heading level={preview.level}>{sample}</Heading>;
    case "text":
      return <Text variant={preview.variant}>{sample}</Text>;
    case "fp":
      return (
        <FeaturePageHeading as="p" variant={preview.variant}>
          {sample}
        </FeaturePageHeading>
      );
  }
}

export function DesignSystemTypographyScale() {
  return (
    <div className="space-y-8">
      <p className="max-w-3xl font-body text-body-sm text-paragraph">
        Live preview per canonical style. Multiple{" "}
        <TokenCode>Heading</TokenCode>, <TokenCode>Text</TokenCode>, and{" "}
        <TokenCode>FeaturePageHeading</TokenCode> APIs share one row when they
        use the same token — usages are listed under each preview.
      </p>

      {TYPOGRAPHY_STYLE_GROUPS.map((group) => (
        <article
          key={group.id}
          className="grid grid-cols-[1fr_16rem] gap-4 border-b border-border pb-8 last:border-0 lg:grid-cols-1"
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p className="font-body text-body-sm font-semibold text-text">
                {group.label}
              </p>
              <p className="font-label text-label text-muted">
                {group.font} · {group.size} · {group.weight}
                {group.tracking ? ` · ${group.tracking}` : ""}
              </p>
            </div>

            <TypographyPreviewSample
              preview={group.preview}
              sample={group.sample}
            />

            <p className="font-body text-body-sm text-paragraph">
              <span className="font-medium text-text">Used by: </span>
              {group.usages.join(" · ")}
            </p>
            {group.modifiers ? (
              <p className="font-body text-body-sm text-muted">
                {group.modifiers}
              </p>
            ) : null}
          </div>

          <div className="space-y-2 text-right lg:text-left">
            <TokenCode className="ml-auto block w-fit lg:ml-0 lg:w-auto">
              {group.cssVar}
            </TokenCode>
            <p className="font-body text-body-sm text-muted">{group.size}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
