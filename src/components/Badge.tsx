import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "warning" | "error" | "info";
  pulse?: boolean;
  className?: string;
}

const styles: Record<string, { b: string; d: string }> = {
  default: { b: "bg-blue-950/60 border-sky-500/30 text-sky-400 shadow-[0_0_15px_-3px_rgba(56,189,248,0.25)]", d: "bg-sky-400" },
  accent: { b: "bg-blue-950/60 border-sky-500/30 text-sky-400 shadow-[0_0_15px_-3px_rgba(56,189,248,0.25)]", d: "bg-sky-400" },
  success: { b: "bg-emerald-950/60 border-emerald-500/30 text-emerald-400", d: "bg-emerald-400" },
  warning: { b: "bg-amber-950/60 border-amber-500/30 text-amber-400", d: "bg-amber-400" },
  error: { b: "bg-red-950/60 border-red-500/30 text-red-400", d: "bg-red-400" },
  info: { b: "bg-sky-950/60 border-sky-500/30 text-sky-400", d: "bg-sky-400" },
};

export function Badge({ children, variant = "default", pulse = false, className = "" }: BadgeProps) {
  const s = styles[variant] || styles.default;
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${s.b} ${className}`.trim()}>
      {pulse && <span className={`w-2 h-2 rounded-full animate-pulse ${s.d}`} aria-hidden="true" />}
      {children}
    </span>
  );
}
