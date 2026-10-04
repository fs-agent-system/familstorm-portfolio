import React from "react";
import { Badge } from "../Badge";
import { GlowCard } from "../GlowCard";
import { SectionWrapper } from "../SectionWrapper";

export interface PipelineStep {
  phase: string;
  title: string;
  desc: string;
}

export interface ContributionItem {
  stage: string;
  ai: string;
  human: string;
  role: string;
}

export interface WorkflowSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: PipelineStep[];
  matrix?: ContributionItem[];
  className?: string;
}

const DEFAULT_STEPS: PipelineStep[] = [
  { phase: "P0–P2", title: "Intake & Scope Lock", desc: "Requirements converted to immutable scope contract and parent Epic." },
  { phase: "P3–P4", title: "Architecture & Design", desc: "TL drafts TDR; Designer produces tokenized Design Contract." },
  { phase: "P5", title: "Test-First Build", desc: "Dev agents implement test-first; all PRs capped at ≤ 400 LOC." },
  { phase: "P6", title: "Dual Parallel Review", desc: "Independent approval from TL (architecture) and QA (test completeness)." },
  { phase: "P7–P8", title: "Automated Deploy & Acceptance", desc: "Promotion to staging, headless E2E verification, manager-gated release." },
];

const DEFAULT_MATRIX: ContributionItem[] = [
  { stage: "Requirement & Scope Definition", ai: "60%", human: "40%", role: "Human locks business goals; AI structures scope & writes specs" },
  { stage: "Architecture & TDR Drafting", ai: "70%", human: "30%", role: "AI drafts modular contracts; Human Architect approves" },
  { stage: "Code Implementation", ai: "85%", human: "15%", role: "AI writes production code in small PRs (≤ 400 LOC); Human spot-checks" },
  { stage: "Unit & Integration Testing", ai: "90%", human: "10%", role: "AI writes mock fixtures, edge tests, and regression tests" },
  { stage: "E2E & Acceptance Testing", ai: "85%", human: "15%", role: "AI scripts Playwright/headless tests; Human validates visual fidelity" },
  { stage: "CI/CD & Deployment", ai: "80%", human: "20%", role: "AI configures containers & pipelines; Human controls deploy gate" },
];

export function WorkflowSection({
  id = "workflow",
  eyebrow = "METHODOLOGY",
  title = "Delivery Pipeline (P0–P8)",
  description = "Deterministic phase transitions with automated validation at every boundary.",
  steps = DEFAULT_STEPS,
  matrix = DEFAULT_MATRIX,
  className = "",
}: WorkflowSectionProps) {
  return (
    <SectionWrapper id={id} withBorder className={className}>
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <span className="text-xs font-bold tracking-widest text-sky-400 uppercase block mb-3">{eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12 sm:mb-16">
        {steps.map((step, idx) => (
          <div
            key={step.phase}
            className={`card-glass p-5 rounded-xl border-l-4 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
              idx === steps.length - 1 ? "border-l-sky-400" : "border-l-blue-500"
            }`}
          >
            <div>
              <div className="text-xs font-mono font-bold text-sky-400 mb-2">{step.phase}</div>
              <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <GlowCard className="overflow-hidden p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
          <h3 className="text-lg font-bold text-white">AI Autonomous Execution vs Human Governance</h3>
          <Badge variant="accent">Division of Responsibility</Badge>
        </div>
        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="w-full min-w-[620px] text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                <th className="py-3 px-4 font-semibold">Lifecycle Stage</th>
                <th className="py-3 px-4 font-semibold">AI Autonomous Execution</th>
                <th className="py-3 px-4 font-semibold">Human Oversight &amp; Approval</th>
                <th className="py-3 px-4 font-semibold">Division of Responsibility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {matrix.map((row) => (
                <tr key={row.stage} className="hover:bg-slate-800/20 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">{row.stage}</td>
                  <td className="py-3 px-4 text-sky-400 font-mono font-semibold">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-800 h-1.5 rounded-full overflow-hidden hidden sm:block">
                        <div className="bg-sky-400 h-full rounded-full" style={{ width: row.ai }} />
                      </div>
                      <span>{row.ai}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-800 h-1.5 rounded-full overflow-hidden hidden sm:block">
                        <div className="bg-blue-600 h-full rounded-full" style={{ width: row.human }} />
                      </div>
                      <span>{row.human}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-400">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowCard>
    </SectionWrapper>
  );
}

export default WorkflowSection;
