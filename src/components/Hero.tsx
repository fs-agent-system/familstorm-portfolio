import React from "react";
import { CtaButton } from "./CtaButton";

export interface HeroProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export function Hero({
  badge = "Autonomous Engineering Studio",
  title = "Familstorm — AI-Driven Development",
  description = "Enterprise Software & Complex Systems Engineered via Multi-Agent AI Pipelines. We orchestrate an end-to-end multi-agent AI system governed by deterministic quality gates and human-in-the-loop architecture oversight.",
  primaryCtaText = "Get in Touch",
  primaryCtaHref = "#contact",
  secondaryCtaText = "Explore Overview",
  secondaryCtaHref = "#overview",
  className = "",
}: HeroProps) {
  return (
    <section id="hero" className={`py-20 sm:py-24 lg:py-32 px-4 sm:px-6 max-w-6xl mx-auto w-full text-center border-b border-brand-border ${className}`}>
      {badge && (
        <span className="inline-block py-1 px-3 rounded-full bg-blue-900/40 border border-blue-500/30 text-brand-accent text-xs font-semibold uppercase tracking-wider mb-6">
          {badge}
        </span>
      )}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-text mb-6">{title}</h1>
      <p className="text-base sm:text-lg md:text-xl text-brand-muted max-w-3xl mx-auto mb-10 leading-relaxed">{description}</p>
      <div className="flex flex-wrap justify-center gap-4">
        {primaryCtaText && <CtaButton href={primaryCtaHref} variant="primary" size="lg">{primaryCtaText}</CtaButton>}
        {secondaryCtaText && <CtaButton href={secondaryCtaHref} variant="secondary" size="lg">{secondaryCtaText}</CtaButton>}
      </div>
    </section>
  );
}
