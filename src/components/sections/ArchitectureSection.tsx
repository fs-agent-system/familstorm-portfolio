import React from "react";
import { Badge } from "../Badge";
import { GlowCard } from "../GlowCard";
import { SectionWrapper } from "../SectionWrapper";

export interface DisciplineSpec {
  title: string;
  desc: string;
}

export interface ArchitectureSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  specs?: DisciplineSpec[];
  className?: string;
}

const DEFAULT_SPECS: DisciplineSpec[] = [
  { title: "Role Isolation", desc: "Agents communicate via GitHub issue contracts, PRs, and review gates. Zero direct uncontracted state leak." },
  { title: "Context Containment", desc: "Role playbooks, locked schemas, and deterministic test harnesses keep reasoning windows lean and focused." },
  { title: "Verification Automation", desc: "Zero code merges without green ci-smoke and dual TL+QA parallel sign-off." },
];

export function ArchitectureSection({
  id = "architecture",
  eyebrow = "SYSTEM TOPOLOGY",
  title = "AI Agent Architecture",
  description = "Our development ecosystem operates through specialized, role-isolated AI agents running on the Hermes Agent framework with deterministic boundaries.",
  specs = DEFAULT_SPECS,
  className = "",
}: ArchitectureSectionProps) {
  return (
    <SectionWrapper id={id} withBorder className={className}>
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <span className="text-xs font-bold tracking-widest text-sky-400 uppercase block mb-3">{eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">{description}</p>
      </div>

      <GlowCard className="p-4 sm:p-8 mb-8 sm:mb-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Multi-Tier Topology</span>
            <Badge variant="accent">Orchestration &amp; Execution</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="info">Human-in-the-Loop Oversight</Badge>
            <Badge variant="success">Deterministic Boundaries</Badge>
          </div>
        </div>

        <div className="overflow-x-auto -mx-2 px-2 pb-2">
          <svg viewBox="0 0 920 330" className="w-full h-auto min-w-[700px] block" role="img" aria-label="Familstorm AI Agent Architecture Diagram">
            <title>Familstorm AI Agent Architecture Diagram</title>
            <desc>Orchestration flow from AM/PC and Technical Lead to Domain Developers, UI/UX Designer, QA, and DevOps agents.</desc>
            <path d="M 270 90 L 270 130 M 650 90 L 650 130 M 115 130 L 805 130 M 115 130 L 115 165 M 345 130 L 345 165 M 575 130 L 575 165 M 805 130 L 805 165" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            <g>
              <rect x="110" y="20" width="320" height="70" rx="10" fill="#0F172A" stroke="#2563EB" strokeWidth="2" />
              <text x="130" y="47" fill="#38BDF8" fontSize="14" fontWeight="700">AM / PC (Account Manager &amp; PC)</text>
              <text x="130" y="69" fill="#94A3B8" fontSize="11">Intake parsing, scope locking, lifecycle coordination</text>
            </g>
            <g>
              <rect x="490" y="20" width="320" height="70" rx="10" fill="#0F172A" stroke="#2563EB" strokeWidth="2" />
              <text x="510" y="47" fill="#38BDF8" fontSize="14" fontWeight="700">TL (Technical Lead)</text>
              <text x="510" y="69" fill="#94A3B8" fontSize="11">Architecture blueprints, TDR contracts (≤ 400 LOC)</text>
            </g>
            <g>
              <rect x="15" y="165" width="200" height="135" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
              <text x="30" y="195" fill="#38BDF8" fontSize="13" fontWeight="700">Designer Agent</text>
              <text x="30" y="220" fill="#94A3B8" fontSize="11">UI/UX Design Brief JSONs</text>
              <text x="30" y="240" fill="#94A3B8" fontSize="11">Tokenized design systems</text>
              <text x="30" y="260" fill="#94A3B8" fontSize="11">UITokens.gd &amp; CSS tokens</text>
            </g>
            <g>
              <rect x="230" y="165" width="230" height="135" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
              <text x="245" y="195" fill="#38BDF8" fontSize="13" fontWeight="700">Domain Dev Agents</text>
              <text x="245" y="220" fill="#94A3B8" fontSize="11">Frontend (Next.js, Tailwind)</text>
              <text x="245" y="240" fill="#94A3B8" fontSize="11">Backend (Go, PostgreSQL)</text>
              <text x="245" y="260" fill="#94A3B8" fontSize="11">Game (Godot 4.x, GDScript)</text>
            </g>
            <g>
              <rect x="475" y="165" width="200" height="135" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
              <text x="490" y="195" fill="#38BDF8" fontSize="13" fontWeight="700">QA &amp; Verification</text>
              <text x="490" y="220" fill="#94A3B8" fontSize="11">TDD harness creation</text>
              <text x="490" y="240" fill="#94A3B8" fontSize="11">Playwright E2E suites</text>
              <text x="490" y="260" fill="#94A3B8" fontSize="11">Automated regression suites</text>
            </g>
            <g>
              <rect x="690" y="165" width="215" height="135" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
              <text x="705" y="195" fill="#38BDF8" fontSize="13" fontWeight="700">DevOps Agent</text>
              <text x="705" y="220" fill="#94A3B8" fontSize="11">CI/CD pipeline automation</text>
              <text x="705" y="240" fill="#94A3B8" fontSize="11">Docker containerization</text>
              <text x="705" y="260" fill="#94A3B8" fontSize="11">Staging &amp; production rollout</text>
            </g>
          </svg>
        </div>
      </GlowCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specs.map((item) => (
          <GlowCard key={item.title} className="p-6 rounded-xl hover:-translate-y-1">
            <h4 className="font-bold text-white mb-2 text-base">{item.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </GlowCard>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default ArchitectureSection;
