import { test, expect } from "@playwright/test";

test.describe("Theme and Shared Layout Wrappers", () => {
  test("dev-preview page renders all base primitives and wrappers", async ({ page }) => {
    await page.goto("/dev-preview");
    await expect(page).toHaveTitle(/Familstorm/);
    await expect(page.locator("#preview-tokens")).toBeVisible();
    for (const b of ["Default Badge", "Accent Glow", "Success", "Warning", "Error", "Info"]) {
      await expect(page.getByText(b)).toBeVisible();
    }
    await expect(page.getByText("GlowCard One")).toBeVisible();
    const primary = page.getByRole("link", { name: "Primary Large Glow" });
    await expect(primary).toHaveAttribute("href", "#preview-tokens");
    const external = page.getByRole("link", { name: "Secondary Glass" });
    await expect(external).toHaveAttribute("target", "_blank");
    await expect(page.getByText("Standard Container component")).toBeVisible();
  });

  for (const vp of [{ name: "Desktop", width: 1440 }, { name: "Tablet", width: 768 }, { name: "Mobile", width: 375 }]) {
    test(`clean layout with zero horizontal overflow on ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: 900 });
      await page.goto("/dev-preview");
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      expect(overflow).toBe(false);
    });
  }
});
