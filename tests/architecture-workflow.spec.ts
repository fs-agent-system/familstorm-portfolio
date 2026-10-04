import { test, expect } from "@playwright/test";

test.describe("Architecture and Workflow Sections", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Architecture section renders topology and specs matching architecture.json", async ({ page }) => {
    const arch = page.locator("#architecture");
    await expect(arch).toBeVisible();
    await expect(arch.getByText("SYSTEM TOPOLOGY")).toBeVisible();
    await expect(arch.locator("h2")).toHaveText("AI Agent Architecture");
    await expect(arch.getByText(/specialized, role-isolated AI agents running on the Hermes Agent framework/i)).toBeVisible();
    await expect(arch.getByText("Multi-Tier Topology")).toBeVisible();
    await expect(arch.getByText("Orchestration & Execution")).toBeVisible();
    await expect(arch.getByText("Human-in-the-Loop Oversight")).toBeVisible();
    await expect(arch.getByText("Deterministic Boundaries", { exact: true })).toBeVisible();

    const svg = arch.locator("svg[aria-label='Familstorm AI Agent Architecture Diagram']");
    await expect(svg).toBeVisible();
    await expect(svg.getByText("AM / PC (Account Manager & PC)", { exact: true })).toBeVisible();
    await expect(svg.getByText("TL (Technical Lead)", { exact: true })).toBeVisible();
    await expect(svg.getByText("Designer Agent", { exact: true })).toBeVisible();
    await expect(svg.getByText("Domain Dev Agents", { exact: true })).toBeVisible();
    await expect(svg.getByText("QA & Verification", { exact: true })).toBeVisible();
    await expect(svg.getByText("DevOps Agent", { exact: true })).toBeVisible();

    await expect(arch.getByText("Role Isolation")).toBeVisible();
    await expect(arch.getByText("Context Containment")).toBeVisible();
    await expect(arch.getByText("Verification Automation")).toBeVisible();
  });

  test("Workflow section renders 5-step track and contribution matrix matching workflow.json", async ({ page }) => {
    const workflow = page.locator("#workflow");
    await expect(workflow).toBeVisible();
    await expect(workflow.getByText("METHODOLOGY")).toBeVisible();
    await expect(workflow.locator("h2")).toHaveText("Delivery Pipeline (P0–P8)");
    await expect(workflow.getByText(/Deterministic phase transitions with automated validation at every boundary/i)).toBeVisible();

    const expectedPhases = [
      { phase: "P0–P2", title: "Intake & Scope Lock" },
      { phase: "P3–P4", title: "Architecture & Design" },
      { phase: "P5", title: "Test-First Build" },
      { phase: "P6", title: "Dual Parallel Review" },
      { phase: "P7–P8", title: "Automated Deploy & Acceptance" },
    ];
    for (const step of expectedPhases) {
      await expect(workflow.getByText(step.phase)).toBeVisible();
      await expect(workflow.getByRole("heading", { name: step.title })).toBeVisible();
    }

    await expect(workflow.getByText("AI Autonomous Execution vs Human Governance")).toBeVisible();
    await expect(workflow.getByRole("columnheader", { name: "Division of Responsibility" })).toBeVisible();

    const table = workflow.locator("table");
    await expect(table).toBeVisible();
    for (const stage of [
      "Requirement & Scope Definition",
      "Architecture & TDR Drafting",
      "Code Implementation",
      "Unit & Integration Testing",
      "E2E & Acceptance Testing",
      "CI/CD & Deployment",
    ]) {
      await expect(table.getByText(stage)).toBeVisible();
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
      await expect(page.locator("#architecture")).toBeVisible();
      await expect(page.locator("#workflow")).toBeVisible();
    });
  }
});
