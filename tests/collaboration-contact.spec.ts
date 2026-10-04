import { test, expect } from "@playwright/test";

test.describe("Collaboration Models and Contact/Footer Sections", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Collaboration section renders 4 engagement models matching collaboration.json and acceptance criteria", async ({ page }) => {
    const section = page.locator("#collaboration");
    await expect(section).toBeVisible();
    await expect(section.getByText("ENGAGEMENT")).toBeVisible();
    await expect(section.locator("h2")).toHaveText("Collaboration Models");
    await expect(section.getByText(/Tailored partnership structures designed for international tech enterprises/i)).toBeVisible();

    // Model 01
    await expect(section.getByText("Model 01", { exact: true })).toBeVisible();
    await expect(section.getByText("Dedicated Pod", { exact: true })).toBeVisible();
    await expect(section.getByRole("heading", { name: "AI-Driven Dedicated Team (AI-ODC)" })).toBeVisible();
    await expect(section.getByText(/High-throughput dedicated pod/i)).toBeVisible();
    for (const text of ["Autonomous agent execution", "Daily transparent progress", "Zero recruitment delay"]) {
      await expect(section.getByText(text)).toBeVisible();
    }
    await expect(section.locator("a[href='#contact']", { hasText: "Discuss Pod Setup" })).toBeVisible();

    // Model 02
    await expect(section.getByText("Model 02", { exact: true })).toBeVisible();
    await expect(section.getByText("Milestone-Based", { exact: true })).toBeVisible();
    await expect(section.getByRole("heading", { name: "Turnkey System Development" })).toBeVisible();
    await expect(section.getByText("Fixed-Scope Module Delivery", { exact: true })).toBeVisible();
    for (const text of ["Rigid TDR contract specification", "Predictable delivery timeline", "Full code & test ownership"]) {
      await expect(section.getByText(text)).toBeVisible();
    }
    await expect(section.locator("a[href='#contact']", { hasText: "Request Scope Lock" })).toBeVisible();

    // Model 03
    await expect(section.getByText("Model 03", { exact: true })).toBeVisible();
    await expect(section.getByText("Pilot Program", { exact: true })).toBeVisible();
    await expect(section.getByRole("heading", { name: "Technical Partnership / JV" })).toBeVisible();
    await expect(section.getByText("2-Week Architecture & Velocity Pilot", { exact: true })).toBeVisible();
    for (const text of ["Rapid proof-of-concept", "Deep domain integration"]) {
      await expect(section.getByText(text)).toBeVisible();
    }
    await expect(section.locator("a[href='#contact']", { hasText: "Explore JV Model" })).toBeVisible();

    // Model 04
    await expect(section.getByText("Model 04", { exact: true })).toBeVisible();
    await expect(section.getByText("Joint Venture", { exact: true })).toBeVisible();
    await expect(section.getByRole("heading", { name: "Strategic Investment & M&A" })).toBeVisible();
    await expect(section.getByText("Co-Development & Technology Transfer", { exact: true })).toBeVisible();
    await expect(section.getByText(/Open to equity partnership/i)).toBeVisible();
    for (const text of ["Proven P0-P8 pipeline IP", "High operational leverage"]) {
      await expect(section.getByText(text)).toBeVisible();
    }
    await expect(section.locator("a[href='#contact']", { hasText: "Direct Inquiries" })).toBeVisible();
  });

  test("Contact action box renders communication channels matching contact.json", async ({ page }) => {
    const contact = page.locator("#contact");
    await expect(contact).toBeVisible();
    await expect(contact.getByText("GET IN TOUCH")).toBeVisible();
    await expect(contact.getByRole("heading", { name: "Initiate an AI-Driven Engineering Pilot" })).toBeVisible();
    await expect(contact.getByText(/Discuss your upcoming platform/i)).toBeVisible();

    const phone = contact.locator("a[href='tel:+84-372-395-110']");
    await expect(phone).toBeVisible();
    await expect(phone).toContainText("+84 372 395 110");

    const email = contact.locator("a[href='mailto:ngochoacth53@gmail.com']");
    await expect(email).toBeVisible();
    await expect(email).toContainText("ngochoacth53@gmail.com");

    const github = contact.locator("a[href='https://github.com/familstorm']");
    await expect(github).toBeVisible();
    await expect(github).toContainText("github.com/familstorm");
    await expect(github).toHaveAttribute("target", "_blank");
    await expect(github).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("Legal Footer component renders copyright and required navigation links", async ({ page }) => {
    const contact = page.locator("#contact");
    await expect(contact).toBeVisible();
    await expect(contact.getByText("© 2026 Familstorm. Autonomous AI-Driven Software Engineering. All rights reserved.")).toBeVisible();
    await expect(contact.locator("a[href='#hero']")).toHaveText("Back to Top");
    await expect(contact.locator("a[href='/print']")).toHaveText("Print / PDF");
    await expect(contact.locator("a[href='/dev-preview']")).toHaveText("Dev Preview");
  });

  for (const vp of [
    { name: "Desktop", width: 1440, height: 900 },
    { name: "Tablet", width: 768, height: 1024 },
    { name: "Mobile", width: 375, height: 812 },
  ]) {
    test(`clean responsive layout with zero horizontal overflow on ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      expect(overflow).toBe(false);
      await expect(page.locator("#collaboration")).toBeVisible();
      await expect(page.locator("#contact")).toBeVisible();
    });
  }
});
