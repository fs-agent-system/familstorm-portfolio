import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

test.describe("PDF Export One-Pager", () => {
  test("print route renders executive capability brief with all sections", async ({ page }) => {
    await page.goto("/print");
    await expect(page).toHaveTitle(/Familstorm/);

    // Header & Leadership Contact
    await expect(page.locator("header")).toContainText("FAMILSTORM");
    await expect(page.locator("header")).toContainText("AI-Driven Development Studio");
    await expect(page.locator("header")).toContainText("Phạm Ngọc Hòa");
    await expect(page.locator("header")).toContainText("ngochoacth53@gmail.com");

    // Section 1: Autonomous Multi-Agent Architecture
    await expect(page.getByText("01. Autonomous Multi-Agent Architecture")).toBeVisible();
    await expect(page.getByText("AM / PC")).toBeVisible();
    await expect(page.getByText("Tech Lead")).toBeVisible();
    await expect(page.getByText("QA & Verification")).toBeVisible();

    // Section 2: P0-P8 Delivery Pipeline
    await expect(page.getByText("02. Industrial P0 → P8 Delivery Pipeline")).toBeVisible();
    await expect(page.getByText("Intake & Scope Lock")).toBeVisible();
    await expect(page.getByText("Dual Parallel Review").first()).toBeVisible();

    // Section 3: Real Projects Showcase
    await expect(page.getByText("03. Proven Real Projects Showcase")).toBeVisible();
    await expect(page.getByText("Phương Trí Platform")).toBeVisible();
    await expect(page.getByText("Modular Game System")).toBeVisible();

    // Section 4: Velocity Advantage
    await expect(page.getByText("04. Velocity & Efficiency Advantage")).toBeVisible();
    await expect(page.getByText("24–48h")).toBeVisible();
    await expect(page.getByText("6–8 wks")).toBeVisible();

    // Section 5: Review Gates
    await expect(page.getByText("05. Strict Pre-Merge Review Gates")).toBeVisible();
    await expect(page.getByText("Dual Parallel Review").last()).toBeVisible();

    // Section 6: Collaboration Models
    await expect(page.getByText("06. Engagement & Partnership Models")).toBeVisible();
    await expect(page.getByText("Turnkey System Development")).toBeVisible();
  });

  test("landing page includes working download button for official quotation and capability document", async ({ page }) => {
    await page.goto("/");
    const downloadLink = page.locator('#pdf a[href="/familstorm-onevalue-capability-quote.pdf"]');
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute("download", "");
    await expect(downloadLink).toContainText("Download One-Pager (PDF)");
  });

  test("footer and nav PDF links point to official quotation document", async ({ page }) => {
    await page.goto("/dev-preview");
    const navPdfLink = page.locator('header nav a[href="/familstorm-onevalue-capability-quote.pdf"]');
    await expect(navPdfLink).toBeVisible();
    await expect(navPdfLink).toHaveText("PDF");

    await page.goto("/");
    const footerPdfLink = page.locator('footer a[href="/familstorm-onevalue-capability-quote.pdf"]');
    await expect(footerPdfLink).toBeVisible();
    await expect(footerPdfLink).toHaveText("Capability (PDF)");
  });

  test("clicking and requesting PDF download serves file directly with HTTP 200 and application/pdf", async ({ request }) => {
    const quoteRes = await request.get("/familstorm-onevalue-capability-quote.pdf");
    expect(quoteRes.status()).toBe(200);
    expect(quoteRes.headers()["content-type"]).toBe("application/pdf");

    const onepagerRes = await request.get("/familstorm-capability-onepager.pdf");
    expect(onepagerRes.status()).toBe(200);
    expect(onepagerRes.headers()["content-type"]).toBe("application/pdf");
  });

  test("generated and official PDF assets exist and meet integrity constraints", async () => {
    const officialPdfPath = path.resolve(process.cwd(), "out", "familstorm-onevalue-capability-quote.pdf");
    expect(fs.existsSync(officialPdfPath)).toBe(true);

    const stats = fs.statSync(officialPdfPath);
    // PDF should be reasonably sized (>50KB) with embedded fonts/vectors
    expect(stats.size).toBeGreaterThan(50 * 1024);

    const content = fs.readFileSync(officialPdfPath, "latin1");
    // Valid PDF signature
    expect(content.startsWith("%PDF-")).toBe(true);

    // Verify exactly 2 A4 pages
    const pageMatches = content.match(/\/Type\s*\/Page\b(?!s)/g);
    expect(pageMatches).not.toBeNull();
    expect(pageMatches?.length).toBe(2);
  });
});
