import { chromium } from "playwright-core";

const BASE = "http://localhost:4310";
const targets = [
  { path: "/", name: "home" },
  { path: "/services", name: "services" },
  { path: "/services/cybersecurity", name: "service-detail" },
  { path: "/work", name: "work" },
  { path: "/work/rio-grande-oral-surgery", name: "case-detail" },
  { path: "/about", name: "about" },
  { path: "/industries", name: "industries" },
  { path: "/insights", name: "insights" },
  { path: "/insights/invoice-fraud-one-email", name: "article" },
  { path: "/contact", name: "contact" },
];

const browser = await chromium.launch();
for (const vp of [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
]) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  for (const t of targets) {
    await page.goto(`${BASE}${t.path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    await page.screenshot({
      path: `.shots/${vp.name}-${t.name}.png`,
      fullPage: vp.name === "desktop",
    });
    console.log(`shot: ${vp.name}-${t.name}`);
  }
  await ctx.close();
}
await browser.close();
console.log("done");
