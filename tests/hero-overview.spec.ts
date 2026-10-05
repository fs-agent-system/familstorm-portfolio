import { test, expect } from "@playwright/test";

test.describe("Hero and Overview Sections", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Hero section renders complete content and styling matching hero.json", async ({ page }) => {
    const hero = page.locator("#hero");
    await expect(hero).toBeVisible();

    // Ambient radial glow class
    await expect(hero).toHaveClass(/hero-glow/);

    // Pill badge with accent glow
    const badge = hero.getByText("Autonomous Engineering Studio");
    await expect(badge).toBeVisible();

    // H1 headline with gradient text
    const h1 = hero.locator("h1");
    await expect(h1).toHaveText("Familstorm — AI-Driven Development");
    await expect(h1).toHaveClass(/text-gradient/);

    // Subtitle paragraph
    await expect(
      hero.getByText("Enterprise Software & Complex Systems Engineered via Multi-Agent AI Pipelines")
    ).toBeVisible();

    // Dual CTAs with smooth scrolling targets
    const primaryCta = hero.getByRole("link", { name: "Explore Architecture" });
    await expect(primaryCta).toBeVisible();
    await expect(primaryCta).toHaveAttribute("href", "#architecture");

    const secondaryCta = hero.getByRole("link", { name: "Initiate Pilot" });
    await expect(secondaryCta).toBeVisible();
    await expect(secondaryCta).toHaveAttribute("href", "#contact");

    // Trust strip stats
    await expect(hero.getByText("100%")).toBeVisible();
    await expect(hero.getByText("Deterministic Gates")).toBeVisible();
    await expect(hero.getByText("2.5x–3x")).toBeVisible();
    await expect(hero.getByText("Velocity Speedup")).toBeVisible();
    await expect(hero.getByText("≤ 400 LOC")).toBeVisible();
    await expect(hero.getByText("Atomic PR Rigor")).toBeVisible();
  });

  test("Overview section renders 3 pillar cards matching overview.json", async ({ page }) => {
    const overview = page.locator("#overview");
    await expect(overview).toBeVisible();

    // Eyebrow and title
    await expect(overview.getByText("FOUNDATION")).toBeVisible();
    const h2 = overview.locator("h2");
    await expect(h2).toHaveText("Familstorm Overview");

    // Descriptive lead copy
    await expect(
      overview.getByText(/Familstorm is an engineering studio based in Vietnam/i)
    ).toBeVisible();

    // 3 Pillar cards
    await expect(overview.getByText("Core Human Leadership")).toBeVisible();
    await expect(overview.getByText("2-3 Specialists")).toBeVisible();

    await expect(overview.getByText("Human Responsibility")).toBeVisible();
    await expect(overview.getByText("Governance")).toBeVisible();

    await expect(overview.getByText("Agent Autonomy Ratio")).toBeVisible();
    await expect(overview.getByText("80-90% Autonomous")).toBeVisible();
  });

  for (const vp of [
    { name: "Desktop", width: 1440, height: 900 },
    { name: "Tablet", width: 768, height: 1024 },
    { name: "Mobile", width: 375, height: 812 },
  ]) {
    test(`clean layout with zero horizontal overflow on ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(overflow).toBe(false);

      const hero = page.locator("#hero");
      await expect(hero).toBeVisible();
      const overview = page.locator("#overview");
      await expect(overview).toBeVisible();
    });
  }
});
