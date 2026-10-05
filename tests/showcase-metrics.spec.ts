import { test, expect } from "@playwright/test";

test.describe("Showcase and Metrics Sections", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Showcase section renders projects matching showcase.json and acceptance criteria", async ({ page }) => {
    const showcase = page.locator("#showcase");
    await expect(showcase).toBeVisible();
    await expect(showcase.getByText("PROVEN TRACK RECORD")).toBeVisible();
    await expect(showcase.locator("h2")).toHaveText("Selected Project Showcase");
    await expect(showcase.getByText(/Real systems delivered via Familstorm AI-driven pipelines/i)).toBeVisible();

    // Card 1: Phương Trí Platform
    await expect(showcase.getByRole("heading", { name: "Phương Trí Platform" })).toBeVisible();
    await expect(showcase.getByText("phuongtri.com")).toBeVisible();
    await expect(showcase.getByText("Enterprise Web & Ecosystem")).toBeVisible();
    for (const tech of ["Next.js (SSR/SSG)", "Go REST Backend", "PostgreSQL", "Docker"]) {
      await expect(showcase.getByText(tech)).toBeVisible();
    }
    for (const metric of [/100% agent authored code/i, /AES-256 database column encryption/i, /VietQR automated billing/i, /Playwright E2E coverage/i]) {
      await expect(showcase.getByText(metric)).toBeVisible();
    }
    await expect(showcase.getByText("Status: Delivered & Active")).toBeVisible();
    await expect(showcase.locator("a[href='https://phuongtri.com']")).toBeVisible();

    // Card 2: Modular 2D Game System
    await expect(showcase.getByRole("heading", { name: "Modular 2D Game System" })).toBeVisible();
    await expect(showcase.getByText("Lego-Block v3.0")).toBeVisible();
    await expect(showcase.getByText("2D Hexagonal Grid System")).toBeVisible();
    for (const tech of ["Phaser 3 / TypeScript", "Godot Engine 4.x"]) {
      await expect(showcase.getByText(tech)).toBeVisible();
    }
    for (const metric of [/Modular scenes with 60fps canvas rendering/i, /asset hot-swap/i, /46\+ automated test suites/i]) {
      await expect(showcase.getByText(metric)).toBeVisible();
    }
    await expect(showcase.getByText("Status: Verified in CI")).toBeVisible();
  });

  test("Metrics section renders stat banner, comparison bars, and quality review gates", async ({ page }) => {
    const metrics = page.locator("#metrics");
    await expect(metrics).toBeVisible();
    await expect(metrics.getByText("QUANTIFIABLE METRICS")).toBeVisible();
    await expect(metrics.locator("h2")).toHaveText("Velocity & Rigorous QA");
    await expect(metrics.getByText(/Measurable output advantages benchmarked against traditional engineering/i)).toBeVisible();

    for (const stat of [
      { val: "2.5x–3x", label: "Turnaround Velocity" },
      { val: "24–48h", label: "Module Cycle" },
      { val: "6–8 wks", label: "Full Platform" },
      { val: "60%–70%", label: "Effort Reduction" },
      { val: "50%–60%", label: "TCO Cost Savings" },
    ]) {
      await expect(metrics.getByText(stat.val)).toBeVisible();
      await expect(metrics.getByText(stat.label, { exact: true })).toBeVisible();
    }

    for (const text of [
      "Delivery Velocity Comparison", "Standard Module Cycle", "Full Platform Delivery",
      "Engineering Headcount", "Human Labor Hours", "5x faster", "3x faster", "70% leaner", "60–70% saved",
      "Deterministic Quality Gates",
    ]) {
      await expect(metrics.getByText(text)).toBeVisible();
    }

    for (const gate of [
      { num: "01", name: "Gate 1: Scope Lock & Sizing", tag: "Architecture Contract" },
      { num: "02", name: "Gate 2: CI-Smoke Gate", tag: "Test-First Scaffold" },
      { num: "03", name: "Gate 3: Dual Parallel Review", tag: "Dual Code Review" },
      { num: "04", name: "Gate 4: Architectural Boundary Audit", tag: "End-to-End Regression" },
      { num: "05", name: "Gate 5: Manager Release Approval", tag: "Human Production Sign-off" },
    ]) {
      await expect(metrics.getByText(gate.num)).toBeVisible();
      await expect(metrics.getByText(gate.name)).toBeVisible();
      await expect(metrics.getByText(gate.tag)).toBeVisible();
    }
  });

  for (const vp of [
    { name: "Desktop", width: 1440, height: 900 },
    { name: "Tablet", width: 768, height: 1024 },
    { name: "Mobile", width: 375, height: 812 },
  ]) {
    test(`clean responsive layout with zero horizontal overflow on ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(overflow).toBe(false);
      await expect(page.locator("#showcase")).toBeVisible();
      await expect(page.locator("#metrics")).toBeVisible();
    });
  }
});
