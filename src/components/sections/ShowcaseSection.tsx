import React from "react";
import { Badge } from "../Badge";
import { GlowCard } from "../GlowCard";
import { SectionWrapper } from "../SectionWrapper";

export interface ShowcaseProject {
  title: string;
  domain: string;
  category: string;
  description: string;
  stack: string[];
  metrics: string[];
  statusText?: string;
  link?: { href: string; label: string };
}

export interface ShowcaseSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  projects?: ShowcaseProject[];
  className?: string;
}

const DEFAULT_PROJECTS: ShowcaseProject[] = [
  {
    title: "Phương Trí Platform",
    domain: "phuongtri.com",
    category: "Enterprise Web & Ecosystem",
    description: "A multimedia publishing and online consultation platform built for a commercial client with automated VietQR billing and lecture streaming.",
    stack: ["Next.js (SSR/SSG)", "Go REST Backend", "PostgreSQL", "Docker"],
    metrics: [
      "100% agent authored code, Go micro-services, and Playwright E2E coverage",
      "AES-256 database column encryption, 2FA (TOTP), and RBAC audit logging",
      "VietQR automated billing integration with instant payment verification",
    ],
    statusText: "Delivered & Active",
    link: { href: "https://phuongtri.com", label: "Visit Platform →" },
  },
  {
    title: "Modular 2D Game System",
    domain: "Lego-Block v3.0",
    category: "2D Hexagonal Grid System",
    description: "A complex 2D hex-grid Modular Game System built to stress-test architectural discipline and automated verification under AI-driven development.",
    stack: ["Phaser 3 / TypeScript", "Godot Engine 4.x", "Native SQLite (GDExtension)", "Cross-Platform"],
    metrics: [
      "Modular scenes with 60fps canvas rendering and asset hot-swap support",
      "46+ automated test suites (100% PASS) run headlessly in CI",
      "10-phase pluggable Step Pipeline with 7 domain-driven event buses",
    ],
    statusText: "Verified in CI",
  },
];

export function ShowcaseSection({
  id = "showcase",
  eyebrow = "PROVEN TRACK RECORD",
  title = "Selected Project Showcase",
  description = "Real systems delivered via Familstorm AI-driven pipelines — from full-stack enterprise web to complex 2D game engines.",
  projects = DEFAULT_PROJECTS,
  className = "",
}: ShowcaseSectionProps) {
  return (
    <SectionWrapper id={id} withBorder className={`bg-slate-950/40 ${className}`.trim()}>
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <span className="text-xs font-bold tracking-widest text-sky-400 uppercase block mb-3">{eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <GlowCard key={p.title} className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <Badge variant="accent">{p.category}</Badge>
                <span className="text-xs font-mono text-slate-400">{p.domain}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{p.description}</p>
              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2.5 mb-8">
                {p.metrics.map((m, idx) => (
                  <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-sky-400 font-bold shrink-0">✓</span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-400">{p.statusText ? `Status: ${p.statusText}` : "Active"}</span>
              {p.link ? (
                <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-400 hover:text-sky-300 transition-colors">
                  {p.link.label}
                </a>
              ) : (
                <span className="font-semibold text-slate-500">Benchmark Engine</span>
              )}
            </div>
          </GlowCard>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default ShowcaseSection;
