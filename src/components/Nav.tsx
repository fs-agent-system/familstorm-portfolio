import React from "react";
import { CtaButton } from "./CtaButton";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavProps {
  brandName?: string;
  items?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Architecture", href: "#architecture" },
  { label: "Workflow", href: "#workflow" },
  { label: "Showcase", href: "#showcase" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "PDF", href: "/familstorm-onevalue-capability-quote.pdf" },
];

export function Nav({
  brandName = "Familstorm",
  items = DEFAULT_ITEMS,
  ctaLabel = "Get in Touch",
  ctaHref = "#contact",
  className = "",
}: NavProps) {
  return (
    <header className={`sticky top-0 z-50 w-full bg-brand-bg/90 backdrop-blur-md border-b border-brand-border ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        <a href="#hero" className="text-lg sm:text-xl font-bold text-brand-text tracking-tight hover:text-brand-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded shrink-0">
          {brandName}
        </a>
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-2 lg:gap-6">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.href.endsWith(".pdf") ? { download: true } : {})}
              className="text-xs lg:text-sm text-brand-muted hover:text-brand-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded px-1 py-0.5 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <CtaButton href={ctaHref} variant="primary" size="sm" className="shrink-0">{ctaLabel}</CtaButton>
      </div>
    </header>
  );
}
