import React from "react";
import { Badge } from "./Badge";
import { CtaButton } from "./CtaButton";
import { SectionWrapper } from "./SectionWrapper";

export interface TrustStatItem {
  value: string;
  label: string;
}

export interface HeroProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  trustStats?: TrustStatItem[];
  className?: string;
}

const DEFAULT_TRUST_STATS: TrustStatItem[] = [
  { value: "100%", label: "Deterministic Gates" },
  { value: "2.5x–3x", label: "Velocity Speedup" },
  { value: "≤ 400 LOC", label: "Atomic PR Rigor" },
];

export function Hero({
  badge = "Autonomous Engineering Studio",
  title = "Familstorm — AI-Driven Development",
  description = "Enterprise Software & Complex Systems Engineered via Multi-Agent AI Pipelines. Governed by deterministic quality gates and human-in-the-loop architecture oversight.",
  primaryCtaText = "Explore Architecture",
  primaryCtaHref = "#architecture",
  secondaryCtaText = "Initiate Pilot",
  secondaryCtaHref = "#contact",
  trustStats = DEFAULT_TRUST_STATS,
  className = "",
}: HeroProps) {
  return (
    <SectionWrapper
      id="hero"
      hasGlow
      withBorder
      containerClassName="text-center"
      className={className}
    >
      {badge && (
        <div className="mb-6 sm:mb-8 flex justify-center">
          <Badge
            variant="accent"
            pulse
            className="px-3.5 py-1.5 shadow-[0_0_20px_-3px_rgba(56,189,248,0.35)]"
          >
            {badge}
          </Badge>
        </div>
      )}

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 sm:mb-8 leading-[1.1] text-gradient">
        {title}
      </h1>

      <p className="text-lg sm:text-xl text-brand-muted max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-14">
        {primaryCtaText && (
          <CtaButton
            href={primaryCtaHref}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            {primaryCtaText}
          </CtaButton>
        )}
        {secondaryCtaText && (
          <CtaButton
            href={secondaryCtaHref}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            {secondaryCtaText}
          </CtaButton>
        )}
      </div>

      {trustStats && trustStats.length > 0 && (
        <div className="pt-8 border-t border-brand-border/60 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {trustStats.map((stat, i) => (
            <div key={i} className="p-3 text-center">
              <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
              <div className="text-xs text-brand-muted mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}

export default Hero;
