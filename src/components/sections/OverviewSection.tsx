import React from "react";
import { Badge } from "../Badge";
import { GlowCard } from "../GlowCard";
import { SectionWrapper } from "../SectionWrapper";

export interface PillarCard {
  number: string;
  badge: string;
  title: string;
  body: string;
}

export interface OverviewSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  cards?: PillarCard[];
  className?: string;
}

const DEFAULT_CARDS: PillarCard[] = [
  {
    number: "01",
    badge: "2-3 Specialists",
    title: "Core Human Leadership",
    body: "2–3 Senior Specialists (System Architect / Principal Engineer, Product & Account Lead) directing strategy and architectural integrity.",
  },
  {
    number: "02",
    badge: "Governance",
    title: "Human Responsibility",
    body: "High-level system architecture, scope boundary definition, security policy enforcement, and final release approvals.",
  },
  {
    number: "03",
    badge: "80-90% Autonomous",
    title: "Agent Autonomy Ratio",
    body: "A lean core directs autonomous agent teams, eliminating the overhead, communication drag, and inconsistency of large manual dev benches.",
  },
];

export function OverviewSection({
  id = "overview",
  eyebrow = "FOUNDATION",
  title = "Familstorm Overview",
  description = "Familstorm is an engineering studio based in Vietnam pioneering AI-Driven Development. We orchestrate an end-to-end multi-agent AI system governed by deterministic quality gates and human-in-the-loop architecture oversight.",
  cards = DEFAULT_CARDS,
  className = "",
}: OverviewSectionProps) {
  return (
    <SectionWrapper id={id} withBorder className={className}>
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <span className="text-xs font-bold tracking-widest text-brand-accent uppercase block mb-3">
          {eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <GlowCard key={card.number} className="hover:-translate-y-1">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-sky-400 font-bold text-lg">
                {card.number}
              </div>
              <Badge variant="accent">{card.badge}</Badge>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
            <p className="text-brand-muted text-sm leading-relaxed">{card.body}</p>
          </GlowCard>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default OverviewSection;
