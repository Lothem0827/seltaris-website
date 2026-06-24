import { getTypographyStyleGroupsBySize } from "@/lib/design-system/typography-scale";
import { TokenCode } from "./DesignSystemPrimitives";

export function DesignSystemTypographyTable() {
  const rows = getTypographyStyleGroupsBySize();

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[52rem] border-collapse text-left font-body text-body-sm">
        <thead>
          <tr className="border-b border-border bg-surface-muted">
            <th className="px-4 py-3 font-label text-label uppercase tracking-wider text-muted">
              Style
            </th>
            <th className="px-4 py-3 font-label text-label uppercase tracking-wider text-muted">
              Size
            </th>
            <th className="px-4 py-3 font-label text-label uppercase tracking-wider text-muted">
              Font
            </th>
            <th className="px-4 py-3 font-label text-label uppercase tracking-wider text-muted">
              Weight
            </th>
            <th className="px-4 py-3 font-label text-label uppercase tracking-wider text-muted">
              Tracking
            </th>
            <th className="px-4 py-3 font-label text-label uppercase tracking-wider text-muted">
              Token
            </th>
            <th className="px-4 py-3 font-label text-label uppercase tracking-wider text-muted">
              Used by
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((group, index) => (
            <tr
              key={group.id}
              className={
                index % 2 === 0
                  ? "border-b border-border bg-white"
                  : "border-b border-border bg-brand-surface/40"
              }
            >
              <td className="px-4 py-3 align-top font-medium text-text">
                {group.label}
              </td>
              <td className="px-4 py-3 align-top whitespace-nowrap text-paragraph">
                {group.size}
              </td>
              <td className="px-4 py-3 align-top whitespace-nowrap text-paragraph">
                {group.font}
              </td>
              <td className="px-4 py-3 align-top whitespace-nowrap text-paragraph">
                {group.weight}
              </td>
              <td className="px-4 py-3 align-top whitespace-nowrap text-muted">
                {group.tracking ?? "—"}
              </td>
              <td className="px-4 py-3 align-top">
                <TokenCode>{group.cssVar}</TokenCode>
              </td>
              <td className="max-w-xs px-4 py-3 align-top text-paragraph">
                {group.usages.join(" · ")}
                {group.modifiers ? (
                  <p className="mt-1 text-body-sm text-muted">
                    {group.modifiers}
                  </p>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
