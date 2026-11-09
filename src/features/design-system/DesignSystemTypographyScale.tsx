import { TYPOGRAPHY_STYLE_GROUPS } from "@/lib/design-system/typography-scale";
import { TokenCode } from "./DesignSystemPrimitives";

export function DesignSystemTypographyScale() {
  return (
    <div className="space-y-8">
      <p className="type-14 text-paragraph max-w-3xl">
        Live preview per canonical <TokenCode>type-*</TokenCode> class. Color
        and alignment stay as separate utilities (
        <TokenCode>text-brand</TokenCode>, <TokenCode>text-center</TokenCode>
        ).
      </p>

      {TYPOGRAPHY_STYLE_GROUPS.map((group) => (
        <article
          key={group.id}
          className="grid grid-cols-[1fr_16rem] gap-4 border-b border-border pb-8 last:border-0 lg:grid-cols-1"
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <p className="type-14 font-semibold text-text">{group.label}</p>
              <p className="type-12 text-muted">
                {group.font} · {group.size} · {group.weight}
                {group.tracking ? ` · ${group.tracking}` : ""}
              </p>
            </div>

            <p className={`${group.className} text-text`}>{group.sample}</p>

            <p className="type-14 text-paragraph">
              <span className="font-medium text-text">Used by: </span>
              {group.usages.join(" · ")}
            </p>
            {group.modifiers ? (
              <p className="type-14 text-muted">{group.modifiers}</p>
            ) : null}
          </div>

          <div className="space-y-2 text-right lg:text-left">
            <TokenCode className="ml-auto block w-fit lg:ml-0 lg:w-auto">
              {group.className}
            </TokenCode>
            <p className="type-14 text-muted">{group.cssVar}</p>
            <p className="type-14 text-muted">{group.size}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
