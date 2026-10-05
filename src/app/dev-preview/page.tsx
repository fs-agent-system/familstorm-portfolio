"use client";

import {
  SectionWrapper,
  Container,
  GlowCard,
  Badge,
  CtaButton,
  Nav,
  Hero,
} from "@/components";

export default function DevPreviewPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col">
      <Nav />
      <Hero />
      <SectionWrapper
        id="preview-tokens"
        hasGlow
        badge="Design Tokens"
        title="Theme & Base Primitives"
        subtitle="Verification of design tokens, layout wrappers, badges, glow cards, and CTA variants."
      >
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Badge variant="default" pulse>Default Badge</Badge>
          <Badge variant="accent" pulse>Accent Glow</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlowCard>
            <h4 className="text-lg font-bold text-white mb-2">GlowCard One</h4>
            <p className="text-sm text-slate-400 mb-4">Glassmorphic surface with 16px blur and hover glow.</p>
            <Badge variant="accent">Glass Surface</Badge>
          </GlowCard>
          <GlowCard>
            <h4 className="text-lg font-bold text-white mb-2">GlowCard Two</h4>
            <p className="text-sm text-slate-400 mb-4">Responsive across 1440px, 768px, 375px.</p>
            <Badge variant="info">Fluid Layout</Badge>
          </GlowCard>
          <GlowCard>
            <h4 className="text-lg font-bold text-white mb-2">GlowCard Three</h4>
            <p className="text-sm text-slate-400 mb-4">Matching Stitch redesign specification.</p>
            <Badge variant="success">Verified</Badge>
          </GlowCard>
        </div>

        <div className="card-glass p-6 rounded-2xl mb-8 flex flex-wrap items-center gap-4">
          <CtaButton variant="primary" size="lg" href="#preview-tokens">Primary Large Glow</CtaButton>
          <CtaButton variant="secondary" size="md" href="https://github.com/fs-agent-system">Secondary Glass</CtaButton>
          <CtaButton variant="outline" size="sm" mailto="lead@familstorm.com">Outline Mailto</CtaButton>
          <CtaButton variant="ghost" size="md" tel="+84900000000">Ghost Phone</CtaButton>
        </div>

        <Container className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-center">
          <p className="text-slate-300 text-sm">Standard Container component enforcing max-w-6xl mx-auto px-6 boundary.</p>
        </Container>
      </SectionWrapper>
    </div>
  );
}
