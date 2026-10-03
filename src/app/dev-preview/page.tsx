"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/Card";
import { CtaButton } from "@/components/CtaButton";

export default function DevPreviewPage() {
  if (process.env.NODE_ENV === "production" && !process.env.ENABLE_DEV_PREVIEW) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 text-brand-muted bg-brand-bg">
        <p>Development preview disabled in production.</p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col">
      <Nav />
      <Hero />
      <SectionWrapper id="preview-cards" badge="Preview Showcase" title="Shared Card Components" subtitle="Testing Card responsive layouts and CtaButton variants.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card
            variant="showcase"
            category="Showcase Example"
            badge="Featured"
            title="Phương Trí Platform"
            description="Enterprise Web & Digital Ecosystem authored via multi-agent pipelines."
            tags={["Next.js", "Go", "PostgreSQL"]}
            highlights={["Integrated audio/video player and VietQR booking flow.", "100% components and tests authored test-first."]}
            footer={<CtaButton variant="outline" size="sm" href="#showcase">View Details</CtaButton>}
          />
          <Card
            variant="collaboration"
            category="Collaboration Model"
            title="Dedicated Agent Squad"
            description="Continuous development capacity managed by Principal Lead."
            highlights={["Full pipeline autonomy (AM, TL, FE, BE, QA, DevOps)", "Strict 400 LOC PR limits and deterministic review gates"]}
            footer={<CtaButton mailto="contact@familstorm.com" variant="primary" size="sm">Inquire via Email</CtaButton>}
          />
        </div>
        <div className="p-6 rounded-xl bg-brand-surface border border-brand-border">
          <h3 className="text-lg font-bold mb-4">CTA Button Variants &amp; Accessibility</h3>
          <div className="flex flex-wrap items-center gap-4">
            <CtaButton variant="primary" href="#test">Primary Link</CtaButton>
            <CtaButton variant="secondary" href="#test">Secondary Link</CtaButton>
            <CtaButton variant="outline" mailto="lead@familstorm.com">Mailto CTA</CtaButton>
            <CtaButton variant="ghost" tel="+84912345678">Tel CTA</CtaButton>
            <CtaButton variant="outline" iconOnly ariaLabel="Settings icon action" onClick={() => {}}>
              <span aria-hidden="true">⚙</span>
            </CtaButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
