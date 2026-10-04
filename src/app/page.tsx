import {
  ArchitectureSection,
  CollaborationSection,
  ContactSection,
  Hero,
  MetricsSection,
  OverviewSection,
  ShowcaseSection,
  WorkflowSection,
} from "@/components";

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

      {/* 7. Collaboration Models */}
      <CollaborationSection />

      {/* 8. PDF One-Pager Export */}
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

      {/* 9. Contact & Footer */}
      <ContactSection />
    </main>
  );
}
