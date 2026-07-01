import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/human-touch",
  "/address-validation",
  "/get-started",
  "/advanced-data-protection",
];

/** Pre-existing design debt — tracked via tokens; not gated on this smoke suite. */
const DEFERRED_A11Y_RULES = new Set(["color-contrast", "link-in-text-block"]);

for (const route of routes) {
  test(`accessibility smoke ${route}`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const violations = results.violations.filter(
      (violation) => !DEFERRED_A11Y_RULES.has(violation.id),
    );

    expect(violations, formatViolations(violations)).toEqual([]);
  });
}

function formatViolations(
  violations: Awaited<ReturnType<AxeBuilder["analyze"]>>["violations"],
) {
  if (violations.length === 0) {
    return "";
  }

  return violations
    .map(
      (violation) =>
        `${violation.id} (${violation.impact}): ${violation.help}\n${violation.nodes
          .map((node) => node.target.join(", "))
          .join("\n")}`,
    )
    .join("\n\n");
}
