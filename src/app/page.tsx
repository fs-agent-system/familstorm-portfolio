import { Card, Hero, OverviewSection } from "@/components";

const WORKFLOW_STEPS = [
  { phase: "P0–P2", title: "Intake & Scope Lock", desc: "Client requirements converted into an immutable Original Scope Source and parent Epic." },
  { phase: "P3–P4", title: "Architecture & Design", desc: "TL defines TDRs and machine-checkable acceptance criteria; Designer produces tokenized specs." },
  { phase: "P5", title: "Test-First Build", desc: "Dev agents implement modules test-first; each PR must pass automated ci-smoke." },
  { phase: "P6", title: "Dual Parallel Review", desc: "TL reviews architectural purity while QA reviews test coverage in parallel before merge." },
  { phase: "P7–P8", title: "Automated Deploy & Acceptance", desc: "Automated promotion to staging environments, headless verification, and manager-gated release." },
];

const SHOWCASE_PROJECTS = [
  {
    title: "Phương Trí Platform",
    domain: "phuongtri.com",
    category: "Enterprise Web & Digital Ecosystem",
    description: "A multimedia publishing and online consultation platform built for a commercial client.",
    stack: ["Next.js (SSR/SSG)", "Go REST Backend", "PostgreSQL", "Docker"],
    highlights: [
      "Integrated audio/video player for lectures/audiobooks, dynamic VietQR booking & automated payment flow.",
      "Custom administrative CMS and automated lead triage inbox.",
      "AES-256 database column encryption, 2FA (TOTP), RBAC, tamper-evident audit logging, and reCAPTCHA v3.",
      "100% of frontend components, Go micro-services, schemas, and Playwright E2E tests authored by AI agents against locked TDRs.",
    ],
  },
  {
    title: "Modular Game System",
    domain: "Lego-Block v3.0",
    category: "2D Hexagonal Grid System",
    description: "A highly complex 2D hex-grid game engine built to stress-test architectural discipline under AI-driven development.",
    stack: ["Godot Engine 4.x", "Strict GDScript", "Native SQLite (GDExtension)", "Cross-Platform"],
    highlights: [
      "ECS-lite hybrid Node foundation with a 10-phase pluggable Step Pipeline (zero central-controller coupling).",
      "7 domain-driven event buses (GameBus) and a 4-tier real-time Fog of War differential algorithm (O(1)).",
      "46+ automated unit/integration suites (100% PASS).",
      "Custom headless architectural boundary scripts (check_architecture_boundaries.sh) running without GUI.",
    ],
  },
];

const CONTRIBUTION_DATA = [
  { stage: "Requirement & Scope Definition", ai: "60%", human: "40%", role: "Human locks business goals; AI structures scope & writes specs" },
  { stage: "Architecture & TDR Drafting", ai: "70%", human: "30%", role: "AI drafts modular contracts; Human Architect approves" },
  { stage: "Code Implementation", ai: "85%", human: "15%", role: "AI writes production code in small PRs (≤ 400 LOC); Human spot-checks" },
  { stage: "Unit & Integration Testing", ai: "90%", human: "10%", role: "AI writes mock fixtures, edge tests, and regression tests" },
  { stage: "E2E & Acceptance Testing", ai: "85%", human: "15%", role: "AI scripts Playwright/headless tests; Human validates visual fidelity" },
  { stage: "CI/CD & Deployment", ai: "80%", human: "20%", role: "AI configures containers & pipelines; Human controls deploy gate" },
];

const COMPARISON_STATS = [
  { value: "2.5x–3x", label: "Turnaround Velocity", desc: "Faster delivery than traditional offshore software teams" },
  { value: "24–48h", label: "Module Cycle", desc: "From TDR contract to passing staging deployment (vs 1–2 weeks manually)" },
  { value: "6–8 wks", label: "Full Platform Delivery", desc: "Complete multi-tier systems deployed (vs 4–6 months manually)" },
  { value: "60%–70%", label: "Effort Reduction", desc: "Human engineering hours saved across the development lifecycle" },
  { value: "50%–60%", label: "TCO Cost Savings", desc: "Lower total project cost compared to traditional outsourcing models" },
];

const COMPARISON_BARS = [
  { metric: "Standard Module Cycle", detail: "From locked TDR to passing staging deployment", traditionalLabel: "Traditional Team: 1–2 weeks", traditionalWidth: "100%", aiLabel: "Familstorm AI: 24–48 hours", aiWidth: "20%", speedup: "5x faster" },
  { metric: "Full Platform Delivery", detail: "End-to-end multi-tier web application", traditionalLabel: "Traditional Team: 4–6 months", traditionalWidth: "100%", aiLabel: "Familstorm AI: 6–8 weeks", aiWidth: "35%", speedup: "3x faster" },
  { metric: "Engineering Headcount Required", detail: "Core engineering team size for equivalent output", traditionalLabel: "Traditional Team: 8–10 engineers", traditionalWidth: "100%", aiLabel: "Familstorm AI: 2–3 specialists", aiWidth: "25%", speedup: "70% leaner" },
  { metric: "Human Engineering Effort", detail: "Total human labor hours across project lifecycle", traditionalLabel: "Traditional Baseline: 100%", traditionalWidth: "100%", aiLabel: "Familstorm AI: 30%–40% effort", aiWidth: "35%", speedup: "60%–70% saved" },
];

const QA_METRICS = [
  { metric: "100%", title: "Automated E2E Coverage", system: "Phương Trí Platform", tag: "Playwright", desc: "100% automated Playwright E2E coverage across all critical paths; 30-row numeric breakpoint scorecard verified on release candidates." },
  { metric: "46+", title: "Automated Test Suites", system: "Modular Game System", tag: "Godot 4.x", desc: "46+ automated unit and integration suites executing at 100% PASS; strict zero-coupling boundary checks enforced on every commit." },
  { metric: "Near-Zero", title: "Regression Escape Rate", system: "Continuous Delivery", tag: "Parallel CI", desc: "Near-zero defect escape to staging due to mandatory pre-merge dual review gates (TL architecture + QA verification)." },
  { metric: "100%", title: "Business Logic Verification", system: "Cross-System Standard", tag: "Test-First (TDD)", desc: "Mandatory unit fixtures, edge cases, and regression harnesses implemented before any feature code merges to develop." },
];

const REVIEW_GATES = [
  { number: "01", gate: "Gate 1: Scope Lock & Sizing", tag: "TDR Bound", desc: "All features bound by Technical Decision Records (TDR). PRs capped at ≤ 400 LOC to ensure thorough, deterministic reviewability." },
  { number: "02", gate: "Gate 2: CI-Smoke Gate", tag: "Automated Build", desc: "Automated build, strict linter, type checks, and unit test pass required on every branch before code review begins." },
  { number: "03", gate: "Gate 3: Dual Parallel Review", tag: "TL + QA", desc: "Simultaneous independent approvals required from Technical Lead (architectural purity) and QA Agent (test completeness)." },
  { number: "04", gate: "Gate 4: Architectural Boundary Audit", tag: "Headless Check", desc: "Headless audit scripts reject code automatically if domain boundaries, circular dependencies, or unauthorized libraries leak." },
  { number: "05", gate: "Gate 5: Manager Release Approval", tag: "Human Sign-Off", desc: "Immutable release-candidate SHA and visual scorecards signed off by Human Lead before staging promotion or client demo release." },
];

const COLLABORATION_MODELS = [
  {
    category: "Model 01",
    badge: "Dedicated Pod",
    title: "AI-Driven Dedicated Team (AI-ODC)",
    description: "A high-throughput, low-overhead dedicated pod delivering continuous features and accelerated module cycles for Japanese partners.",
    highlights: ["Autonomous agent execution overseen by senior human lead", "Daily transparent progress and verifiable automated test outputs", "Flexible scaling without manual recruitment latency"],
  },
  {
    category: "Model 02",
    badge: "Milestone-Based",
    title: "Turnkey System Development",
    description: "Fixed-scope or milestone-based delivery for enterprise web applications, high-throughput APIs, and complex gaming modules.",
    highlights: ["Rigid TDR contract specification and immutable scope lock", "Predictable delivery timeline with milestone-based acceptance gates", "Full ownership transfer of clean code, automated tests, and infra configs"],
  },
  {
    category: "Model 03",
    badge: "Co-Development",
    title: "Technical Partnership / Joint Venture",
    description: "Co-developing proprietary AI-native software products targeting Japanese or Southeast Asian enterprise and consumer markets.",
    highlights: ["Shared IP and long-term technical synergy", "High-velocity prototyping from concept to product-market fit", "Deep domain expertise combined with autonomous engineering pipelines"],
  },
  {
    category: "Model 04",
    badge: "Strategic Capital",
    title: "Strategic Investment & M&A",
    description: "Open to strategic capital partnership, equity investment, or acquisition by Japanese technology groups looking to absorb proven AI-driven software operations.",
    highlights: ["Proven multi-agent AI engineering methodologies and toolchains", "Proprietary autonomous delivery pipelines (P0–P8)", "High operational leverage with minimal human engineering headcount"],
  },
];

const CONTACT_LINKS = [
  { label: "Phone", href: "tel:+84-372-395-110", text: "+84 372 395 110" },
  { label: "Email", href: "mailto:ngochoacth53@gmail.com", text: "ngochoacth53@gmail.com" },
  { label: "GitHub", href: "https://github.com/familstorm", text: "github.com/familstorm", external: true },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Overview */}
      <OverviewSection />

      {/* 3. AI Agent Architecture */}
      <section id="architecture" className="py-20 px-6 max-w-6xl mx-auto w-full border-b border-brand-border">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">AI Agent Architecture</h2>
          <p className="text-brand-muted leading-relaxed">
            Our development ecosystem operates through specialized, role-isolated AI agents running on the Hermes Agent framework with deterministic boundaries.
          </p>
        </div>
        <div className="p-4 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border overflow-hidden">
          <svg viewBox="0 0 920 330" className="w-full h-auto block" role="img" aria-label="Familstorm AI Agent Architecture Diagram">
            <title>Familstorm AI Agent Architecture Diagram</title>
            <desc>Orchestration flow from AM/PC and Technical Lead to Domain Developers, UI/UX Designer, QA, and DevOps agents.</desc>
            <path d="M 270 90 L 270 130 M 650 90 L 650 130 M 115 130 L 805 130 M 115 130 L 115 165 M 345 130 L 345 165 M 575 130 L 575 165 M 805 130 L 805 165" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            <g>
              <rect x="110" y="20" width="320" height="70" rx="8" fill="#0B0F19" stroke="#2563EB" strokeWidth="1.5" />
              <text x="130" y="47" fill="#38BDF8" fontSize="14" fontWeight="700">AM / PC (Account Manager &amp; PC)</text>
              <text x="130" y="69" fill="#94A3B8" fontSize="11">Intake parsing, scope locking, lifecycle coordination</text>
            </g>
            <g>
              <rect x="490" y="20" width="320" height="70" rx="8" fill="#0B0F19" stroke="#2563EB" strokeWidth="1.5" />
              <text x="510" y="47" fill="#38BDF8" fontSize="14" fontWeight="700">TL (Technical Lead)</text>
              <text x="510" y="69" fill="#94A3B8" fontSize="11">Architecture blueprints, TDR contracts (≤ 400 LOC)</text>
            </g>
            <g>
              <rect x="15" y="165" width="200" height="135" rx="8" fill="#0B0F19" stroke="#334155" strokeWidth="1.5" />
              <text x="30" y="195" fill="#38BDF8" fontSize="13" fontWeight="700">Designer Agent</text>
              <text x="30" y="220" fill="#94A3B8" fontSize="11">UI/UX Design Brief JSONs</text>
              <text x="30" y="240" fill="#94A3B8" fontSize="11">Tokenized design systems</text>
              <text x="30" y="260" fill="#94A3B8" fontSize="11">UITokens.gd &amp; CSS tokens</text>
            </g>
            <g>
              <rect x="230" y="165" width="230" height="135" rx="8" fill="#0B0F19" stroke="#334155" strokeWidth="1.5" />
              <text x="245" y="195" fill="#38BDF8" fontSize="13" fontWeight="700">Domain Dev Agents</text>
              <text x="245" y="220" fill="#94A3B8" fontSize="11">Frontend (Next.js, Tailwind)</text>
              <text x="245" y="240" fill="#94A3B8" fontSize="11">Backend (Go, PostgreSQL)</text>
              <text x="245" y="260" fill="#94A3B8" fontSize="11">Game (Godot 4.x, GDScript)</text>
            </g>
            <g>
              <rect x="475" y="165" width="200" height="135" rx="8" fill="#0B0F19" stroke="#334155" strokeWidth="1.5" />
              <text x="490" y="195" fill="#38BDF8" fontSize="13" fontWeight="700">QA &amp; Verification</text>
              <text x="490" y="220" fill="#94A3B8" fontSize="11">TDD harness creation</text>
              <text x="490" y="240" fill="#94A3B8" fontSize="11">Playwright E2E suites</text>
              <text x="490" y="260" fill="#94A3B8" fontSize="11">Automated regression suites</text>
            </g>
            <g>
              <rect x="690" y="165" width="215" height="135" rx="8" fill="#0B0F19" stroke="#334155" strokeWidth="1.5" />
              <text x="705" y="195" fill="#38BDF8" fontSize="13" fontWeight="700">DevOps Agent</text>
              <text x="705" y="220" fill="#94A3B8" fontSize="11">CI/CD pipeline automation</text>
              <text x="705" y="240" fill="#94A3B8" fontSize="11">Docker containerization</text>
              <text x="705" y="260" fill="#94A3B8" fontSize="11">Staging &amp; production rollout</text>
            </g>
          </svg>
        </div>
      </section>

      {/* 4. Development Workflow */}
      <section id="workflow" className="py-20 px-6 max-w-6xl mx-auto w-full border-b border-brand-border">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Development Workflow</h2>
          <p className="text-brand-muted leading-relaxed">
            Our industrial P0 → P8 Delivery Pipeline enforces rigorous quality gates at every phase.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {WORKFLOW_STEPS.map((step) => (
            <div key={step.phase} className="p-5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 hover:bg-brand-surface-hover transition duration-200 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-blue-900/40 text-brand-accent font-mono text-xs font-semibold mb-3 border border-blue-500/20">
                  {step.phase}
                </span>
                <h3 className="text-base font-semibold text-brand-text mb-2">{step.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Real Projects Showcase */}
      <section id="showcase" className="py-20 px-6 max-w-6xl mx-auto w-full border-b border-brand-border">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Real Projects Showcase</h2>
          <p className="text-brand-muted leading-relaxed">
            Proven multi-tier systems and complex game architectures delivered with 100% test pass rates.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {SHOWCASE_PROJECTS.map((project) => (
            <div key={project.title} className="p-6 md:p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs uppercase tracking-wider text-brand-accent font-medium">{project.category}</span>
                  <span className="text-xs font-mono text-brand-muted bg-brand-bg px-2 py-0.5 rounded border border-brand-border">{project.domain}</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-text mb-3">{project.title}</h3>
                <p className="text-sm text-brand-muted mb-6 leading-relaxed">{project.description}</p>
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded bg-brand-bg text-brand-accent border border-brand-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-text mb-2">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-brand-muted flex items-start gap-2">
                        <span className="text-brand-accent shrink-0">▪</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. AI Contribution */}
      <section id="contribution" className="py-20 px-6 max-w-6xl mx-auto w-full border-b border-brand-border">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">AI Contribution by Development Stage</h2>
          <p className="text-brand-muted leading-relaxed">
            Deterministic allocation of responsibilities between autonomous AI agents and senior human specialists.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-brand-border bg-brand-surface">
          <table className="w-full text-left border-collapse text-sm">
            <caption className="p-4 text-left font-semibold text-base text-brand-text border-b border-brand-border">
              AI Contribution by Development Stage
            </caption>
            <thead className="bg-brand-bg/60 border-b border-brand-border text-brand-text font-semibold">
              <tr>
                <th scope="col" className="p-4">Development Stage</th>
                <th scope="col" className="p-4 text-center">AI Agent Share</th>
                <th scope="col" className="p-4 text-center">Human Expert Share</th>
                <th scope="col" className="p-4">Key Role of Human / AI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-brand-muted">
              {CONTRIBUTION_DATA.map((row) => (
                <tr key={row.stage} className="hover:bg-brand-surface-hover/50 transition-colors">
                  <th scope="row" className="p-4 font-medium text-brand-text whitespace-nowrap">{row.stage}</th>
                  <td className="p-4 text-center whitespace-nowrap">
                    <span className="inline-block font-mono font-bold text-brand-accent px-2.5 py-0.5 rounded bg-blue-950/60 border border-blue-800/40">
                      {row.ai}
                    </span>
                  </td>
                  <td className="p-4 text-center whitespace-nowrap">
                    <span className="inline-block font-mono font-medium text-brand-text px-2.5 py-0.5 rounded bg-slate-800/60 border border-slate-700/40">
                      {row.human}
                    </span>
                  </td>
                  <td className="p-4 text-xs leading-relaxed">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. Time & Cost Comparison */}
      <section id="metrics" className="py-20 px-6 max-w-6xl mx-auto w-full border-b border-brand-border">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Time &amp; Cost Comparison</h2>
          <p className="text-brand-muted leading-relaxed">
            Substantial velocity acceleration and cost efficiencies achieved through autonomous multi-agent pipelines compared to traditional offshore models.
          </p>
        </div>

        {/* Headline Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {COMPARISON_STATS.map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-accent tracking-tight">{stat.value}</span>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-text mt-1 mb-2">{stat.label}</h3>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Static Bar Chart */}
        <div className="p-6 md:p-8 rounded-2xl bg-brand-surface border border-brand-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-brand-border">
            <h3 className="text-lg font-bold text-brand-text">Performance Benchmark vs Traditional Teams</h3>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-brand-muted">
                <span className="inline-block w-3 h-3 rounded-sm bg-slate-700"></span>
                Traditional Offshore Team
              </span>
              <span className="flex items-center gap-1.5 text-brand-accent">
                <span className="inline-block w-3 h-3 rounded-sm bg-gradient-to-r from-blue-600 to-cyan-400"></span>
                Familstorm AI Pipeline
              </span>
            </div>
          </div>
          <div className="space-y-6">
            {COMPARISON_BARS.map((bar) => (
              <div key={bar.metric} className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-sm font-semibold text-brand-text">{bar.metric}</span>
                    <span className="text-xs text-brand-muted ml-2 font-normal hidden sm:inline">({bar.detail})</span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-900/40 text-brand-accent border border-blue-500/30">
                    {bar.speedup}
                  </span>
                </div>
                {/* Traditional Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-brand-muted">
                    <span>{bar.traditionalLabel}</span>
                  </div>
                  <div className="w-full bg-brand-bg rounded-full h-3 overflow-hidden border border-brand-border">
                    <div className="bg-slate-700 h-full rounded-full transition-all" style={{ width: bar.traditionalWidth }} />
                  </div>
                </div>
                {/* Familstorm AI Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-brand-accent font-medium">
                    <span>{bar.aiLabel}</span>
                  </div>
                  <div className="w-full bg-brand-bg rounded-full h-3 overflow-hidden border border-brand-border">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full transition-all" style={{ width: bar.aiWidth }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. QA & Testing Metrics */}
      <section id="qa" className="py-20 px-6 max-w-6xl mx-auto w-full border-b border-brand-border">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">QA &amp; Testing Metrics</h2>
          <p className="text-brand-muted leading-relaxed">
            Continuous automated verification, rigorous test harnesses, and zero-defect architectural boundaries across every system.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {QA_METRICS.map((item) => (
            <div key={item.title} className="p-6 md:p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs uppercase tracking-wider text-brand-accent font-semibold">{item.system}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-bg text-brand-muted border border-brand-border">{item.tag}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mb-2">
                  <span className="text-brand-accent">{item.metric}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">{item.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Review Gates */}
      <section id="gates" className="py-20 px-6 max-w-6xl mx-auto w-full border-b border-brand-border">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Architecture &amp; Review Gates</h2>
          <p className="text-brand-muted leading-relaxed">
            A deterministic 5-stage gating pipeline enforcing architecture purity, test coverage, and human sign-off on every release.
          </p>
        </div>
        <div className="space-y-4">
          {REVIEW_GATES.map((g) => (
            <div key={g.gate} className="p-6 rounded-xl bg-brand-surface border border-brand-border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 hover:border-brand-accent/50 transition-colors">
              <div className="flex items-center gap-3 shrink-0">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-950/70 border border-blue-700/50 text-brand-accent font-mono font-bold text-base">
                  {g.number}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-brand-bg text-brand-accent border border-brand-border sm:hidden">
                  {g.tag}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-brand-text">{g.gate}</h3>
                  <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-brand-bg text-brand-accent border border-brand-border hidden sm:inline-block">
                    {g.tag}
                  </span>
                </div>
                <p className="text-sm text-brand-muted leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Collaboration Models */}
      <section id="collaboration" className="py-20 px-6 max-w-6xl mx-auto w-full border-b border-brand-border">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Collaboration Models</h2>
          <p className="text-brand-muted leading-relaxed">
            Flexible engagement structures designed for Japanese technology partners, global enterprises, and high-velocity startups.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {COLLABORATION_MODELS.map((model) => (
            <Card
              key={model.title}
              category={model.category}
              badge={model.badge}
              title={model.title}
              description={model.description}
              highlights={model.highlights}
            />
          ))}
        </div>
      </section>

      {/* 11. PDF One-Pager Export */}
      <section id="pdf" className="py-20 px-6 max-w-6xl mx-auto w-full border-b border-brand-border">
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-brand-surface to-brand-bg border border-brand-border text-center max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900/40 border border-blue-500/30 text-brand-accent text-xs font-semibold uppercase tracking-wider mb-4">
            Executive Summary
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-4">
            Download Capability Brief One-Pager
          </h2>
          <p className="text-sm sm:text-base text-brand-muted mb-8 leading-relaxed">
            A concise, printable executive summary detailing our multi-agent architecture, P0–P8 delivery pipeline, real-world case studies, and engagement models.
          </p>
          <div>
            <a
              href="/familstorm-capability-onepager.pdf"
              download
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 text-base font-semibold rounded-lg bg-brand-secondary text-white hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download One-Pager (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 12. Contact & CTA */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Initiate Collaboration</h2>
          <p className="text-brand-muted leading-relaxed">
            Directly connect with our engineering leadership to evaluate scope, request technical demonstrations, or explore collaboration models.
          </p>
        </div>
        <div className="max-w-xl mx-auto p-8 rounded-2xl bg-brand-surface border border-brand-border">
          <div className="text-center mb-6 pb-6 border-b border-brand-border">
            <h3 className="text-xl font-bold text-brand-text">Phạm Ngọc Hòa</h3>
            <p className="text-sm text-brand-accent font-medium mt-1">Co-Founder &amp; Technical Lead</p>
            <p className="text-xs text-brand-muted mt-1">Familstorm · Vietnam</p>
          </div>
          <div className="space-y-4">
            {CONTACT_LINKS.map((c) => (
              <div key={c.label} className="flex items-center justify-between p-3.5 rounded-lg bg-brand-bg border border-brand-border">
                <span className="text-xs uppercase tracking-wider text-brand-muted font-medium">{c.label}</span>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-semibold text-brand-accent hover:underline font-mono"
                >
                  {c.text}
                </a>
              </div>
            ))}
          </div>
          <p className="text-xs text-center text-brand-muted mt-6">
            Direct executive contact. No contact forms, no middle-layer delays.
          </p>
        </div>
        <footer className="mt-16 pt-8 border-t border-brand-border text-center text-xs text-brand-muted">
          <p>&copy; 2026 Familstorm. AI-Driven Development Studio. All rights reserved.</p>
        </footer>
      </section>
    </main>
  );
}
