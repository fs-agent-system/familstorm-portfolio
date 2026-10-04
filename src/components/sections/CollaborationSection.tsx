import React from "react";
import { Badge } from "../Badge";
import { CtaButton } from "../CtaButton";
import { GlowCard } from "../GlowCard";
import { SectionWrapper } from "../SectionWrapper";

export interface CollaborationModel {
  code: string;
  badge: string;
  title: string;
  subtitle?: string;
  desc: string;
  bullets: string[];
  ctaText?: string;
  ctaHref?: string;
}

export interface CollaborationSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  models?: CollaborationModel[];
  className?: string;
}

const DEFAULT_MODELS: CollaborationModel[] = [
  {
    code: "Model 01", badge: "Dedicated Pod",
    title: "AI-Driven Dedicated Team (AI-ODC)",
    desc: "High-throughput dedicated pod delivering continuous features and accelerated module cycles.",
    bullets: ["Autonomous agent execution", "Daily transparent progress", "Zero recruitment delay"],
    ctaText: "Discuss Pod Setup", ctaHref: "#contact",
  },
  {
    code: "Model 02", badge: "Milestone-Based",
    title: "Turnkey System Development", subtitle: "Fixed-Scope Module Delivery",
    desc: "Fixed-scope delivery for enterprise web, high-throughput APIs, and complex game systems.",
    bullets: ["Rigid TDR contract specification", "Predictable delivery timeline", "Full code & test ownership"],
    ctaText: "Request Scope Lock", ctaHref: "#contact",
  },
  {
    code: "Model 03", badge: "Pilot Program",
    title: "Technical Partnership / JV", subtitle: "2-Week Architecture & Velocity Pilot",
    desc: "Co-development of proprietary AI-native software products targeting international markets.",
    bullets: ["Co-Development & shared IP synergy", "Rapid proof-of-concept", "Deep domain integration"],
    ctaText: "Explore JV Model", ctaHref: "#contact",
  },
  {
    code: "Model 04", badge: "Joint Venture",
    title: "Strategic Investment & M&A", subtitle: "Co-Development & Technology Transfer",
    desc: "Open to equity partnership or acquisition by technology groups adopting AI-native dev.",
    bullets: ["Proven P0-P8 pipeline IP", "High operational leverage", "Strategic Capital & turnkey tooling"],
    ctaText: "Direct Inquiries", ctaHref: "#contact",
  },
];

export function CollaborationSection({
  id = "collaboration",
  eyebrow = "ENGAGEMENT",
  title = "Collaboration Models",
  description = "Tailored partnership structures designed for international tech enterprises, fast-growth ventures, and strategic investors.",
  models = DEFAULT_MODELS,
  className = "",
}: CollaborationSectionProps) {
  return (
    <SectionWrapper id={id} withBorder className={className}>
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <span className="text-xs font-bold tracking-widest text-sky-400 uppercase block mb-3">{eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {models.map((model) => (
          <GlowCard key={model.code} className="p-6 rounded-2xl flex flex-col justify-between h-full group hover:border-sky-500/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <Badge variant="accent" className="font-mono text-[11px] px-2.5 py-0.5 rounded-md">{model.badge}</Badge>
                <span className="text-xs font-mono text-slate-500">{model.code}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 leading-snug">{model.title}</h3>
              {model.subtitle && <div className="text-xs font-semibold text-sky-400/90 mb-2 font-mono">{model.subtitle}</div>}
              <p className="text-slate-400 text-xs mb-4 leading-relaxed">{model.desc}</p>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                {model.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-sky-400 shrink-0">&bull;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CtaButton href={model.ctaHref || "#contact"} variant="outline" size="sm" className="w-full text-center py-2 text-xs font-semibold rounded-lg bg-blue-600/20 text-sky-300 border-blue-500/40 hover:bg-blue-600 hover:text-white transition-all">
              {model.ctaText || "Get in Touch"}
            </CtaButton>
          </GlowCard>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default CollaborationSection;
