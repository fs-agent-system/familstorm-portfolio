import React from "react";
import { Badge } from "../Badge";
import { GlowCard } from "../GlowCard";
import { SectionWrapper } from "../SectionWrapper";

export interface StatItem { value: string; label: string; detail: string; }
export interface ComparisonBar { metric: string; traditional: string; familstorm: string; speedup: string; traditionalWidth?: string; familstormWidth?: string; }
export interface ReviewGate { number: string; name: string; tag: string; rule: string; }

export interface MetricsSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  stats?: StatItem[];
  bars?: ComparisonBar[];
  gates?: ReviewGate[];
  className?: string;
}

const DEFAULT_STATS: StatItem[] = [
  { value: "2.5x–3x", label: "Turnaround Velocity", detail: "Faster delivery vs traditional teams" },
  { value: "24–48h", label: "Module Cycle", detail: "TDR to passing staging deployment" },
  { value: "6–8 wks", label: "Full Platform", detail: "Enterprise platform production ready" },
  { value: "60%–70%", label: "Effort Reduction", detail: "Fewer engineering hours needed" },
  { value: "50%–60%", label: "TCO Cost Savings", detail: "Lower total cost of ownership" },
];

const DEFAULT_BARS: ComparisonBar[] = [
  { metric: "Standard Module Cycle", traditional: "1–2 weeks", familstorm: "24–48 hours", speedup: "5x faster", traditionalWidth: "100%", familstormWidth: "20%" },
  { metric: "Full Platform Delivery", traditional: "4–6 months", familstorm: "6–8 weeks", speedup: "3x faster", traditionalWidth: "100%", familstormWidth: "35%" },
  { metric: "Engineering Headcount", traditional: "8–10 engineers", familstorm: "2–3 specialists", speedup: "70% leaner", traditionalWidth: "100%", familstormWidth: "25%" },
  { metric: "Human Labor Hours", traditional: "100% baseline", familstorm: "30%–40% effort", speedup: "60–70% saved", traditionalWidth: "100%", familstormWidth: "35%" },
];

const DEFAULT_GATES: ReviewGate[] = [
  { number: "01", name: "Gate 1: Scope Lock & Sizing", tag: "Architecture Contract", rule: "PRs strictly capped at ≤ 400 LOC to ensure deterministic reviewability." },
  { number: "02", name: "Gate 2: CI-Smoke Gate", tag: "Test-First Scaffold", rule: "Automated build, linter, typecheck, and unit test pass required before review." },
  { number: "03", name: "Gate 3: Dual Parallel Review", tag: "Dual Code Review", rule: "Simultaneous independent approvals required from Technical Lead and QA Agent." },
  { number: "04", name: "Gate 4: Architectural Boundary Audit", tag: "End-to-End Regression", rule: "Headless boundary scripts run in CI to reject architectural leaks." },
  { number: "05", name: "Gate 5: Manager Release Approval", tag: "Human Production Sign-off", rule: "Immutable release-candidate SHA signed off by Human Lead before deploy." },
];

export function MetricsSection({
  id = "metrics",
  eyebrow = "QUANTIFIABLE METRICS",
  title = "Velocity & Rigorous QA",
  description = "Measurable output advantages benchmarked against traditional engineering benchmarks.",
  stats = DEFAULT_STATS,
  bars = DEFAULT_BARS,
  gates = DEFAULT_GATES,
  className = "",
}: MetricsSectionProps) {
  return (
    <SectionWrapper id={id} withBorder className={className}>
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <span className="text-xs font-bold tracking-widest text-sky-400 uppercase block mb-3">{eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">{description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 sm:mb-16">
        {stats.map((stat, idx) => (
          <div key={stat.label} className={`card-glass p-5 rounded-xl text-center flex flex-col justify-between ${idx === stats.length - 1 ? "col-span-2 md:col-span-1" : ""}`}>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">{stat.label}</div>
            </div>
            <div className="text-xs text-slate-400 leading-tight mt-1">{stat.detail}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <GlowCard className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
            <h3 className="text-lg font-bold text-white">Delivery Velocity Comparison</h3>
            <Badge variant="accent">Benchmarks</Badge>
          </div>
          <div className="space-y-6">
            {bars.map((bar) => (
              <div key={bar.metric} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold gap-2">
                  <span className="text-white truncate">{bar.metric}</span>
                  <span className="text-sky-400 font-mono shrink-0">{bar.speedup}</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: bar.traditionalWidth || "100%" }} />
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-sky-400 h-full rounded-full" style={{ width: bar.familstormWidth || "25%" }} />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                  <span>Traditional: {bar.traditional}</span>
                  <span className="text-sky-300 font-semibold font-mono">Familstorm: {bar.familstorm}</span>
                </div>
              </div>
            ))}
          </div>
        </GlowCard>

        <GlowCard className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
            <h3 className="text-lg font-bold text-white">Deterministic Quality Gates</h3>
            <Badge variant="info">5-Stage Review</Badge>
          </div>
          <div className="space-y-3.5">
            {gates.map((gate) => (
              <div key={gate.number} className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-xs font-mono font-bold text-sky-400 px-2 py-1 bg-blue-950 rounded border border-blue-800 shrink-0">
                  {gate.number}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-bold text-white">{gate.name}</span>
                    <span className="text-[11px] font-mono text-sky-400 bg-sky-950/50 border border-sky-500/20 px-1.5 py-0.5 rounded">
                      {gate.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{gate.rule}</p>
                </div>
              </div>
            ))}
          </div>
        </GlowCard>
      </div>
    </SectionWrapper>
  );
}

export default MetricsSection;
