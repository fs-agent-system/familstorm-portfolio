import { test, expect } from "@playwright/test";

test.describe("Top Menu (Nav) and Mobile Navigation Menu", () => {
  test.describe("Desktop Viewport (1280px)", () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto("/");
    });

    test("header is mounted, visible and sticky at top", async ({ page }) => {
      const header = page.locator("header");
      await expect(header).toBeVisible();
      await expect(header).toHaveClass(/sticky/);
      await expect(header).toHaveClass(/top-0/);
    });

    test("displays brand logo, desktop navigation links, and CTA button", async ({ page }) => {
      const header = page.locator("header");

      // Brand logo and name
      const brand = header.locator('a[href="#hero"]');
      await expect(brand).toBeVisible();
      await expect(brand).toContainText("Familstorm");
      await expect(brand).toContainText("F");

      // Desktop navigation items
      const desktopNav = header.locator('nav[aria-label="Main Navigation"]');
      await expect(desktopNav).toBeVisible();

      const expectedLinks = [
        { label: "Overview", href: "#overview" },
        { label: "Architecture", href: "#architecture" },
        { label: "Workflow", href: "#workflow" },
        { label: "Showcase", href: "#showcase" },
        { label: "Collaboration", href: "#collaboration" },
      ];

      for (const item of expectedLinks) {
        const link = desktopNav.locator(`a[href="${item.href}"]`);
        await expect(link).toBeVisible();
        await expect(link).toHaveText(item.label);
      }

      // CTA button
      const cta = header.getByRole("link", { name: "Get in Touch" });
      await expect(cta).toBeVisible();
      await expect(cta).toHaveAttribute("href", "#contact");

      // Mobile hamburger button must be hidden on desktop
      const hamburger = header.locator('button[aria-controls="mobile-menu"]');
      await expect(hamburger).toBeHidden();
    });

    test("clicking desktop nav link scrolls to section and updates url hash", async ({ page }) => {
      const header = page.locator("header");
      const navLink = header.locator('nav[aria-label="Main Navigation"] a[href="#architecture"]');
      await navLink.click();

      await expect(page).toHaveURL(/#architecture/);
      const targetSection = page.locator("#architecture");
      await expect(targetSection).toBeVisible();
    });
  });

  test.describe("Mobile Viewport (375px)", () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto("/");
    });

    test("displays brand logo and hamburger button while hiding desktop nav", async ({ page }) => {
      const header = page.locator("header");

      // Brand logo
      const brand = header.locator('a[href="#hero"]');
      await expect(brand).toBeVisible();
      await expect(brand).toContainText("Familstorm");

      // Desktop nav and desktop CTA container hidden
      const desktopNav = header.locator('nav[aria-label="Main Navigation"]');
      await expect(desktopNav).toBeHidden();

      // Mobile hamburger button visible
      const hamburger = header.locator('button[aria-controls="mobile-menu"]');
      await expect(hamburger).toBeVisible();
      await expect(hamburger).toHaveAttribute("aria-expanded", "false");
      await expect(hamburger).toHaveAttribute("aria-label", "Open main menu");

      // Mobile menu initially hidden
      await expect(header.locator("#mobile-menu")).toHaveCount(0);
    });

    test("hamburger toggle opens and closes mobile navigation drawer", async ({ page }) => {
      const header = page.locator("header");
      const hamburger = header.locator('button[aria-controls="mobile-menu"]');

      // Click to open
      await hamburger.click();
      await expect(hamburger).toHaveAttribute("aria-expanded", "true");
      await expect(hamburger).toHaveAttribute("aria-label", "Close main menu");

      const mobileMenu = header.locator("#mobile-menu");
      await expect(mobileMenu).toBeVisible();

      // Verify all required anchor links in mobile drawer
      const requiredAnchorHrefs = [
        "#overview",
        "#architecture",
        "#workflow",
        "#showcase",
        "#metrics",
        "#collaboration",
        "#contact",
      ];

      for (const href of requiredAnchorHrefs) {
        const link = mobileMenu.locator(`a[href="${href}"]`);
        await expect(link.first()).toBeVisible();
      }

      // Click to close
      await hamburger.click();
      await expect(hamburger).toHaveAttribute("aria-expanded", "false");
      await expect(header.locator("#mobile-menu")).toHaveCount(0);
    });

    test("mobile navigation link click scrolls to section and closes drawer", async ({ page }) => {
      const header = page.locator("header");
      const hamburger = header.locator('button[aria-controls="mobile-menu"]');

      await hamburger.click();
      const mobileNav = header.locator('nav[aria-label="Mobile Navigation"]');
      const workflowLink = mobileNav.locator('a[href="#workflow"]');
      await expect(workflowLink).toBeVisible();

      await workflowLink.click();
      await expect(page).toHaveURL(/#workflow/);
      await expect(header.locator("#mobile-menu")).toHaveCount(0);
      await expect(page.locator("#workflow")).toBeVisible();
    });

    test("pressing Escape key closes open mobile drawer", async ({ page }) => {
      const header = page.locator("header");
      const hamburger = header.locator('button[aria-controls="mobile-menu"]');

      await hamburger.click();
      await expect(header.locator("#mobile-menu")).toBeVisible();

      await page.keyboard.press("Escape");
      await expect(header.locator("#mobile-menu")).toHaveCount(0);
      await expect(hamburger).toHaveAttribute("aria-expanded", "false");
    });
  });

  for (const vp of [
    { name: "Mobile", width: 360, height: 740 },
    { name: "Tablet", width: 768, height: 1024 },
    { name: "Desktop", width: 1280, height: 800 },
  ]) {
    test(`clean responsive layout with zero horizontal overflow on ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(overflow).toBe(false);

      const header = page.locator("header");
      await expect(header).toBeVisible();
    });
  }
});
