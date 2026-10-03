import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Familstorm — Capability Brief One-Pager",
  description: "Print-ready executive capability brief of Familstorm AI-Driven Development Studio.",
};

const WORKFLOW_STEPS = [
  { phase: "P0–P2", title: "Intake & Scope Lock", desc: "Requirements locked into immutable Original Scope Source & parent Epic." },
  { phase: "P3–P4", title: "Architecture & Design", desc: "TL defines TDR contracts (≤ 400 LOC); Designer produces tokenized specs." },
  { phase: "P5", title: "Test-First Build", desc: "Dev agents build test-first; all PRs pass automated ci-smoke gates." },
  { phase: "P6", title: "Dual Parallel Review", desc: "Simultaneous review: TL (architectural purity) + QA (test completeness)." },
  { phase: "P7–P8", title: "Automated Deploy", desc: "Headless verification, staging promotion, and human manager release sign-off." },
];

const SHOWCASE_PROJECTS = [
  {
    title: "Phương Trí Platform",
    domain: "phuongtri.com",
    category: "Enterprise Web Ecosystem",
    description: "Multimedia publishing & consultation platform engineered via autonomous multi-agent pipelines.",
    stack: ["Next.js (SSR/SSG)", "Go REST Backend", "PostgreSQL", "Docker"],
    highlights: [
      "Dynamic VietQR booking flow, audio/video player, custom CMS lead triage.",
      "AES-256 database column encryption, 2FA (TOTP), RBAC, audit logging.",
      "100% frontend components, Go micro-services, and Playwright E2E suites.",
    ],
  },
  {
    title: "Modular Game System",
    domain: "Lego-Block v3.0",
    category: "2D Hexagonal Grid System",
    description: "High-complexity 2D hex-grid game engine stress-testing architectural discipline under AI execution.",
    stack: ["Godot Engine 4.x", "Strict GDScript", "Native SQLite (GDExtension)", "Cross-Platform"],
    highlights: [
      "ECS-lite hybrid Node foundation with 10-phase pluggable Step Pipeline.",
      "7 domain event buses (GameBus), 4-tier real-time Fog of War algorithm (O(1)).",
      "46+ automated unit/integration suites (100% PASS) with boundary audits.",
    ],
  },
];

const METRICS_SUMMARY = [
  { value: "24–48h", label: "Module Cycle", note: "5x faster (vs 1–2 wks)" },
  { value: "6–8 wks", label: "Full Platform", note: "3x faster (vs 4–6 mos)" },
  { value: "2–3", label: "Core Leads", note: "70% leaner team" },
  { value: "60%–70%", label: "Effort Saved", note: "Human hours reduced" },
  { value: "100%", label: "Test Pass", note: "Playwright E2E & unit" },
];

const REVIEW_GATES = [
  { id: "01", name: "Scope Lock & Sizing", detail: "TDR contracts; strict PR limit ≤ 400 LOC" },
  { id: "02", name: "CI-Smoke Gate", detail: "Automated build, lint, type-check, and unit test pass" },
  { id: "03", name: "Dual Parallel Review", detail: "Independent simultaneous approvals from TL & QA" },
  { id: "04", name: "Architectural Boundary Audit", detail: "Headless audit enforces zero unauthorized dependency leaks" },
  { id: "05", name: "Manager Release Approval", detail: "Immutable SHA & visual scorecard signed off by Human Lead" },
];

const COLLABORATION_MODELS = [
  {
    code: "Model 01",
    name: "AI-Driven Dedicated Team (AI-ODC)",
    badge: "Dedicated Pod",
    desc: "Autonomous agent execution overseen by senior human lead for high-velocity continuous feature shipping.",
  },
  {
    code: "Model 02",
    name: "Turnkey System Development",
    badge: "Milestone-Based",
    desc: "Fixed-scope delivery with rigid TDR contracts, milestone gates, and full code & infra ownership transfer.",
  },
  {
    code: "Model 03",
    name: "Technical Partnership / JV",
    badge: "Co-Development",
    desc: "Co-developing proprietary AI-native software products targeting Japanese and Southeast Asian markets.",
  },
  {
    code: "Model 04",
    name: "Strategic Investment & M&A",
    badge: "Strategic Capital",
    desc: "Capital partnership or acquisition for groups seeking to absorb proven multi-agent engineering toolchains.",
  },
];

export default function PrintPage() {
  return (
    <div className="bg-brand-bg text-brand-text min-h-screen font-sans p-6 sm:p-8 max-w-[840px] mx-auto print:p-0 print:max-w-none">
      <style dangerouslySetInnerHTML={{ __html: `
        @page {
          size: A4 portrait;
          margin: 10mm 12mm;
        }
        @media print {
          html, body {
            background-color: #0B0F19 !important;
            color: #F8FAFC !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .page-break {
            page-break-before: always;
            break-before: page;
          }
          .no-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}} />

      {/* PAGE 1: Architecture, Pipeline & Case Studies */}
      <section className="no-break print:min-h-[1020px] flex flex-col justify-between mb-8 print:mb-0">
        <div>
          {/* Header */}
          <header className="border-b border-brand-border pb-3 mb-4 flex flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-extrabold tracking-tight text-brand-text">FAMILSTORM</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-900/50 text-brand-accent border border-blue-500/30">
                  AI-Driven Development Studio
                </span>
              </div>
              <p className="text-xs text-brand-muted max-w-xl leading-relaxed">
                Autonomous engineering studio in Vietnam orchestrating role-isolated AI agents governed by deterministic quality gates and senior human architectural oversight.
              </p>
            </div>
            <div className="text-right shrink-0 text-[10px] text-brand-muted space-y-0.5 border-l pl-3 border-brand-border font-mono">
              <div className="text-brand-text font-semibold">Phạm Ngọc Hòa</div>
              <div className="text-brand-accent">Co-Founder &amp; Technical Lead</div>
              <div>ngochoacth53@gmail.com</div>
              <div>+84 372 395 110</div>
              <div>github.com/familstorm</div>
            </div>
          </header>

          {/* Section 1: Multi-Agent Operating Model */}
          <div className="mb-4 no-break">
            <div className="flex items-center justify-between border-b border-brand-border/60 pb-1 mb-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                01. Autonomous Multi-Agent Architecture
              </h2>
              <span className="text-[10px] text-brand-muted font-mono">Hermes Agent Framework</span>
            </div>
            <div className="grid grid-cols-5 gap-2 text-center mb-2">
              <div className="p-2 rounded-lg bg-brand-surface border border-brand-border">
                <div className="text-[11px] font-bold text-brand-text">AM / PC</div>
                <div className="text-[9px] text-brand-muted mt-0.5">Scope Lock &amp; Intake</div>
              </div>
              <div className="p-2 rounded-lg bg-brand-surface border border-brand-border">
                <div className="text-[11px] font-bold text-brand-text">Tech Lead</div>
                <div className="text-[9px] text-brand-muted mt-0.5">TDR Architecture (≤400 LOC)</div>
              </div>
              <div className="p-2 rounded-lg bg-brand-surface border border-brand-border">
                <div className="text-[11px] font-bold text-brand-text">Domain Devs</div>
                <div className="text-[9px] text-brand-muted mt-0.5">Next.js · Go · Godot 4</div>
              </div>
              <div className="p-2 rounded-lg bg-brand-surface border border-brand-border">
                <div className="text-[11px] font-bold text-brand-text">QA &amp; Verification</div>
                <div className="text-[9px] text-brand-muted mt-0.5">Playwright E2E · TDD</div>
              </div>
              <div className="p-2 rounded-lg bg-brand-surface border border-brand-border">
                <div className="text-[11px] font-bold text-brand-text">DevOps</div>
                <div className="text-[9px] text-brand-muted mt-0.5">CI/CD · Docker · VPS</div>
              </div>
            </div>
            <p className="text-[10px] text-brand-muted leading-relaxed">
              Lean core of 2–3 Senior Specialists directs autonomous agent teams. Architecture contracts, boundary checks, and release gates eliminate communication overhead and defect escapes.
            </p>
          </div>

          {/* Section 2: P0-P8 Delivery Pipeline */}
          <div className="mb-4 no-break">
            <div className="flex items-center justify-between border-b border-brand-border/60 pb-1 mb-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                02. Industrial P0 → P8 Delivery Pipeline
              </h2>
              <span className="text-[10px] text-brand-muted font-mono">Deterministic Quality Gates</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {WORKFLOW_STEPS.map((step) => (
                <div key={step.phase} className="p-2 rounded-lg bg-brand-surface border border-brand-border flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[9px] font-mono font-bold text-brand-accent px-1.5 py-0.2 rounded bg-blue-950/80 border border-blue-800/40 mb-1">
                      {step.phase}
                    </span>
                    <div className="text-[10px] font-semibold text-brand-text mb-0.5 leading-tight">{step.title}</div>
                    <div className="text-[9px] text-brand-muted leading-tight">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Real Projects Showcase */}
          <div className="mb-2 no-break">
            <div className="flex items-center justify-between border-b border-brand-border/60 pb-1 mb-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                03. Proven Real Projects Showcase
              </h2>
              <span className="text-[10px] text-brand-muted font-mono">100% Automated Test Pass</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {SHOWCASE_PROJECTS.map((proj) => (
                <div key={proj.title} className="p-3 rounded-xl bg-brand-surface border border-brand-border flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-brand-accent">{proj.category}</span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-blue-900/40 text-brand-accent border border-blue-500/30">{proj.domain}</span>
                    </div>
                    <h3 className="text-sm font-bold text-brand-text mb-1">{proj.title}</h3>
                    <p className="text-[10px] text-brand-muted leading-relaxed mb-2">{proj.description}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {proj.stack.map((s) => (
                        <span key={s} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-brand-bg text-brand-accent border border-brand-border">{s}</span>
                      ))}
                    </div>
                    <ul className="space-y-1 text-[9px] text-brand-muted">
                      {proj.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-tight">
                          <span className="text-brand-accent font-bold">▪</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page 1 Footer */}
        <div className="pt-2 border-t border-brand-border flex items-center justify-between text-[10px] text-brand-muted font-mono">
          <span>Familstorm Studio · Vietnam</span>
          <span>Capability Brief One-Pager · Page 1 of 2</span>
        </div>
      </section>

      {/* PAGE 2: Velocity, Quality Gates, Models & Contact */}
      <section className="page-break no-break print:min-h-[1020px] flex flex-col justify-between pt-2">
        <div>
          {/* Header Page 2 */}
          <div className="border-b border-brand-border pb-2 mb-4 flex items-center justify-between">
            <div className="text-xs font-extrabold tracking-tight text-brand-text">FAMILSTORM · CAPABILITY BRIEF</div>
            <div className="text-[10px] text-brand-accent font-mono">Velocity, Quality &amp; Engagement Models</div>
          </div>

          {/* Section 4: Velocity & Efficiency Metrics */}
          <div className="mb-4 no-break">
            <div className="flex items-center justify-between border-b border-brand-border/60 pb-1 mb-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                04. Velocity &amp; Efficiency Advantage
              </h2>
              <span className="text-[10px] text-brand-muted font-mono">vs Traditional Offshore Teams</span>
            </div>
            <div className="grid grid-cols-5 gap-2 text-center">
              {METRICS_SUMMARY.map((m) => (
                <div key={m.label} className="p-2.5 rounded-lg bg-brand-surface border border-brand-border flex flex-col justify-between">
                  <div className="text-base font-extrabold text-brand-accent font-mono mb-0.5">{m.value}</div>
                  <div className="text-[10px] font-semibold text-brand-text mb-0.5 leading-tight">{m.label}</div>
                  <div className="text-[8px] text-brand-muted leading-tight">{m.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Five Review Gates & Quality Rigor */}
          <div className="mb-4 no-break">
            <div className="flex items-center justify-between border-b border-brand-border/60 pb-1 mb-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                05. Strict Pre-Merge Review Gates
              </h2>
              <span className="text-[10px] text-brand-muted font-mono">Zero Defect Escape Policy</span>
            </div>
            <div className="space-y-1">
              {REVIEW_GATES.map((g) => (
                <div key={g.id} className="p-2 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-brand-accent px-1.5 py-0.5 rounded bg-blue-950/70 border border-blue-800/40">
                      {g.id}
                    </span>
                    <span className="text-[11px] font-bold text-brand-text">{g.name}</span>
                  </div>
                  <span className="text-[10px] text-brand-muted">{g.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Collaboration & Engagement Models */}
          <div className="mb-4 no-break">
            <div className="flex items-center justify-between border-b border-brand-border/60 pb-1 mb-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                06. Engagement &amp; Partnership Models
              </h2>
              <span className="text-[10px] text-brand-muted font-mono">Flexible Delivery &amp; M&amp;A</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {COLLABORATION_MODELS.map((m) => (
                <div key={m.code} className="p-3 rounded-xl bg-brand-surface border border-brand-border flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-mono uppercase text-brand-accent font-semibold">{m.code}</span>
                      <span className="text-[8px] px-2 py-0.5 rounded-full bg-blue-900/40 text-brand-accent border border-blue-500/30">
                        {m.badge}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-brand-text mb-0.5">{m.name}</div>
                    <p className="text-[9px] text-brand-muted leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: Executive Contact */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-brand-surface to-brand-bg border border-brand-border flex flex-row items-center justify-between gap-4 no-break">
            <div>
              <div className="text-xs font-bold text-brand-text">Direct Engineering Engagement</div>
              <p className="text-[9px] text-brand-muted leading-tight mt-0.5">
                Evaluate scope, inspect architectural blueprints, or initiate proof-of-concept pods.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono shrink-0">
              <div className="text-right">
                <span className="text-[9px] text-brand-muted block uppercase">Lead Contact</span>
                <span className="text-brand-text font-bold text-[11px]">Phạm Ngọc Hòa</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-brand-muted block uppercase">Direct Channel</span>
                <span className="text-brand-accent font-bold text-[11px]">+84 372 395 110</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2 Footer */}
        <div className="pt-2 border-t border-brand-border flex items-center justify-between text-[10px] text-brand-muted font-mono mt-3">
          <span>&copy; 2026 Familstorm Studio. All rights reserved.</span>
          <span>Capability Brief One-Pager · Page 2 of 2</span>
        </div>
      </section>
    </div>
  );
}
