import {
  ArchitectureSection,
  Card,
  Hero,
  MetricsSection,
  OverviewSection,
  ShowcaseSection,
  WorkflowSection,
} from "@/components";

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
      <ArchitectureSection />

      {/* 4. Development Workflow */}
      <WorkflowSection />

      {/* 5. Selected Project Showcase */}
      <ShowcaseSection />

      {/* 6. Velocity & Rigorous QA */}
      <MetricsSection />

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
