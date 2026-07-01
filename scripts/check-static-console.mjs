import { chromium } from "@playwright/test";

const baseUrl = process.env.PREVIEW_URL ?? "http://localhost:60851";

const consoleErrors = [];
const failedRequests = [];

const browser = await chromium.launch();
const page = await browser.newPage();

page.on("console", (msg) => {
  if (msg.type() === "error") {
    consoleErrors.push({ url: page.url(), text: msg.text() });
  }
});

page.on("response", (res) => {
  if (res.status() >= 400) {
    failedRequests.push({
      page: page.url(),
      resource: res.url(),
      status: res.status(),
    });
  }
});

async function clientNavigate(href) {
  await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
  await page.evaluate((path) => {
    const link = document.querySelector(`a[href="${path}"]`);
    if (!link) throw new Error(`Missing link ${path}`);
    link.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
  }, href);
  await page.waitForTimeout(2500);
}

const directRoutes = [
  "/",
  "/human-touch/",
  "/altraservice/",
  "/services/",
  "/services/email-data/",
  "/advanced-data-protection/",
  "/seltaris-plus/",
];

for (const route of directRoutes) {
  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
}

for (const href of ["/human-touch/", "/services/", "/seltaris-plus/"]) {
  await clientNavigate(href);
}

await browser.close();

const uniqueFailed = [...new Map(failedRequests.map((i) => [i.resource, i])).values()];

console.log("=== Failed HTTP responses ===");
for (const item of uniqueFailed) {
  console.log(`${item.status} ${item.resource}`);
  console.log(`  page: ${item.page}`);
}

console.log("\n=== Console errors ===");
for (const item of consoleErrors) {
  console.log(`[${item.url}] ${item.text}`);
}

console.log(
  `\nTotal failed responses: ${uniqueFailed.length}, console errors: ${consoleErrors.length}`,
);
