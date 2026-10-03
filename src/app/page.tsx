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

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* 1. Hero */}
      <section id="hero" className="py-24 px-6 max-w-6xl mx-auto w-full text-center border-b border-brand-border">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-900/40 border border-blue-500/30 text-brand-accent text-xs font-semibold uppercase tracking-wider mb-6">
          Autonomous Engineering Studio
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-text mb-6">
          Familstorm — AI-Driven Development
        </h1>
        <p className="text-lg md:text-xl text-brand-muted max-w-3xl mx-auto mb-10 leading-relaxed">
          Enterprise Software &amp; Complex Systems Engineered via Multi-Agent AI Pipelines.
          We orchestrate an end-to-end multi-agent AI system governed by deterministic
          quality gates and human-in-the-loop architecture oversight.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-brand-secondary text-white hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/25">
            Get in Touch
          </a>
          <a href="#overview" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-brand-surface text-brand-text border border-brand-border hover:bg-brand-surface-hover transition-colors">
            Explore Overview
          </a>
        </div>
      </section>

      {/* 2. Overview */}
      <section id="overview" className="py-20 px-6 max-w-6xl mx-auto w-full border-b border-brand-border">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">Familstorm Overview</h2>
          <p className="text-brand-muted leading-relaxed">
            Familstorm is an engineering studio based in Vietnam pioneering AI-Driven Development (AI駆動開発). We do not use AI as an ad-hoc conversational assistant; rather, we orchestrate an end-to-end multi-agent AI system governed by deterministic quality gates and human-in-the-loop architecture oversight. We deliver enterprise-grade web applications, secure backends, and complex game systems at substantially higher speed and lower cost than traditional manual software teams.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-brand-surface border border-brand-border">
            <h3 className="text-lg font-semibold text-brand-accent mb-2">Core Human Engineering &amp; Leadership</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              2–3 Senior Specialists (System Architect / Principal Engineer, Product &amp; Account Lead) directing strategy and architectural integrity.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-brand-surface border border-brand-border">
            <h3 className="text-lg font-semibold text-brand-accent mb-2">Human Responsibility</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              High-level system architecture, scope boundary definition, security policy enforcement, and final release approvals.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-brand-surface border border-brand-border">
            <h3 className="text-lg font-semibold text-brand-accent mb-2">Operating Model</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              A lean core directs autonomous agent teams, eliminating the overhead, communication drag, and inconsistency of large manual dev benches.
            </p>
          </div>
        </div>
      </section>

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

      {/* Remaining Section Stubs */}
      <section id="metrics" className="min-h-[20vh] p-8 border-b border-gray-800">
        <h2 className="text-xl font-bold">Time &amp; Cost Metrics</h2>
      </section>
      <section id="qa" className="min-h-[20vh] p-8 border-b border-gray-800">
        <h2 className="text-xl font-bold">QA &amp; Testing Metrics</h2>
      </section>
      <section id="gates" className="min-h-[20vh] p-8 border-b border-gray-800">
        <h2 className="text-xl font-bold">Architecture &amp; Review Gates</h2>
      </section>
      <section id="collaboration" className="min-h-[20vh] p-8 border-b border-gray-800">
        <h2 className="text-xl font-bold">Collaboration Models</h2>
      </section>
      <section id="pdf" className="min-h-[20vh] p-8 border-b border-gray-800">
        <h2 className="text-xl font-bold">PDF One-Pager Export</h2>
      </section>
      <section id="contact" className="min-h-[20vh] p-8">
        <h2 className="text-xl font-bold">Contact &amp; CTA</h2>
      </section>
    </main>
  );
}
