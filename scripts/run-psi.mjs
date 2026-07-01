/**
 * Runs PageSpeed Insights (desktop) for key marketing routes.
 * Usage: node scripts/run-psi.mjs [baseUrl]
 */
const baseUrl =
  process.argv[2]?.replace(/\/$/, "") ??
  "https://seltaris-website.vercel.app";

const routes = [
  "/",
  "/human-touch",
  "/address-validation",
  "/get-started",
  "/advanced-data-protection",
];

async function runPsi(path) {
  const url = `${baseUrl}${path}`;
  const api = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  api.searchParams.set("url", url);
  api.searchParams.set("strategy", "desktop");
  api.searchParams.set("category", "performance");

  const response = await fetch(api);
  if (!response.ok) {
    throw new Error(`${path}: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const perf = data.lighthouseResult?.categories?.performance;
  const audits = data.lighthouseResult?.audits ?? {};

  return {
    path,
    url,
    score: perf?.score != null ? Math.round(perf.score * 100) : null,
    lcp: audits["largest-contentful-paint"]?.displayValue ?? "n/a",
    tbt: audits["total-blocking-time"]?.displayValue ?? "n/a",
    weight: audits["total-byte-weight"]?.displayValue ?? "n/a",
  };
}

console.log(`PageSpeed Insights (desktop) — ${baseUrl}\n`);

const results = [];
for (const path of routes) {
  try {
    const result = await runPsi(path);
    results.push(result);
    console.log(
      `${result.path.padEnd(28)} score=${result.score ?? "?"}  LCP=${result.lcp}  TBT=${result.tbt}  weight=${result.weight}`,
    );
  } catch (error) {
    console.error(`${path}: ${error instanceof Error ? error.message : error}`);
  }
}

console.log(`\nChecked ${results.length}/${routes.length} routes.`);
