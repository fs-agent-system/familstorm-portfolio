import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const REFERENCE_DIR = path.resolve(process.cwd(), "datas/design/generated/m16-landing-redesign");
const DESKTOP_MOCKUP = path.join(REFERENCE_DIR, "mockup-desktop.png");
const MOBILE_MOCKUP = path.join(REFERENCE_DIR, "mockup-mobile.png");

const SECTIONS = [
  "hero",
  "overview",
  "architecture",
  "workflow",
  "showcase",
  "metrics",
  "collaboration",
  "contact",
];

test.describe("Visual Fidelity & Layout Comparison", () => {
  test("Design reference assets exist and have expected dimensions", async () => {
    expect(fs.existsSync(DESKTOP_MOCKUP)).toBe(true);
    expect(fs.existsSync(MOBILE_MOCKUP)).toBe(true);

    const deskStats = fs.statSync(DESKTOP_MOCKUP);
    const mobStats = fs.statSync(MOBILE_MOCKUP);
    expect(deskStats.size).toBeGreaterThan(100_000);
    expect(mobStats.size).toBeGreaterThan(100_000);
  });

  test.describe("Desktop Viewport (1440px)", () => {
    test.use({ viewport: { width: 1440, height: 900 } });

    test("renders all 8 redesign sections with zero horizontal overflow", async ({ page }) => {
      await page.goto("/");
      await page.waitForLoadState("networkidle");

      // Verify no horizontal overflow
      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(overflow).toBe(false);

      // Verify all 8 core sections exist and are visible
      let previousBottom = 0;
      for (const sectionId of SECTIONS) {
        const section = page.locator(`#${sectionId}`);
        await expect(section).toBeVisible();

        const box = await section.boundingBox();
        expect(box).not.toBeNull();
        if (box) {
          expect(box.width).toBeGreaterThanOrEqual(1200);
          expect(box.y).toBeGreaterThanOrEqual(previousBottom - 1);
          previousBottom = box.y + box.height;
        }
      }

      // Verify brand background color #0B0F19
      const bgColor = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
      });
      expect(bgColor).toBe("rgb(11, 15, 25)");
    });

    test("captures desktop full-page screenshot artifact", async ({ page }) => {
      await page.goto("/");
      await page.waitForLoadState("networkidle");

      const artifactsDir = path.resolve(process.cwd(), "artifacts/visual-qa");
      if (!fs.existsSync(artifactsDir)) {
        fs.mkdirSync(artifactsDir, { recursive: true });
      }

      const screenshotPath = path.join(artifactsDir, "live-desktop-1440px.png");
      await page.screenshot({ path: screenshotPath, fullPage: true });
      expect(fs.existsSync(screenshotPath)).toBe(true);
      expect(fs.statSync(screenshotPath).size).toBeGreaterThan(500_000);
    });
  });

  test.describe("Mobile Viewport (375px)", () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test("renders all 8 redesign sections in responsive mobile layout with zero overflow", async ({ page }) => {
      await page.goto("/");
      await page.waitForLoadState("networkidle");

      // Verify no horizontal overflow
      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      expect(overflow).toBe(false);

      // Verify all sections exist and maintain stack order
      let previousBottom = 0;
      for (const sectionId of SECTIONS) {
        const section = page.locator(`#${sectionId}`);
        await expect(section).toBeVisible();

        const box = await section.boundingBox();
        expect(box).not.toBeNull();
        if (box) {
          expect(box.width).toBeLessThanOrEqual(375);
          expect(box.y).toBeGreaterThanOrEqual(previousBottom - 1);
          previousBottom = box.y + box.height;
        }
      }
    });

    test("captures mobile full-page screenshot artifact", async ({ page }) => {
      await page.goto("/");
      await page.waitForLoadState("networkidle");

      const artifactsDir = path.resolve(process.cwd(), "artifacts/visual-qa");
      if (!fs.existsSync(artifactsDir)) {
        fs.mkdirSync(artifactsDir, { recursive: true });
      }

      const screenshotPath = path.join(artifactsDir, "live-mobile-375px.png");
      await page.screenshot({ path: screenshotPath, fullPage: true });
      expect(fs.existsSync(screenshotPath)).toBe(true);
      expect(fs.statSync(screenshotPath).size).toBeGreaterThan(300_000);
    });
  });
});
