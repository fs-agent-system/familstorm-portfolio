"use client";

import React, { useState, useEffect } from "react";
import { CtaButton } from "./CtaButton";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavProps {
  brandName?: string;
  items?: NavItem[];
  mobileItems?: NavItem[];
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

const DEFAULT_MOBILE_ITEMS: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Architecture", href: "#architecture" },
  { label: "Workflow", href: "#workflow" },
  { label: "Showcase", href: "#showcase" },
  { label: "Metrics", href: "#metrics" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "Contact", href: "#contact" },
];

export function Nav({
  brandName = "Familstorm",
  items = DEFAULT_ITEMS,
  mobileItems = DEFAULT_MOBILE_ITEMS,
  ctaLabel = "Get in Touch",
  ctaHref = "#contact",
  className = "",
}: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleScroll = (href: string) => {
    if (href.startsWith("#")) {
      const elem = document.getElementById(href.substring(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-brand-bg/90 backdrop-blur-md border-b border-brand-border ${className}`.trim()}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo & Name */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("#hero");
          }}
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded shrink-0"
          aria-label={`${brandName} Home`}
        >
          <div
            className="w-8 h-8 rounded-lg bg-brand-secondary flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/30 group-hover:bg-brand-accent transition-colors"
            aria-hidden="true"
          >
            F
          </div>
          <span className="text-lg sm:text-xl font-bold text-brand-text tracking-tight group-hover:text-brand-accent transition-colors">
            {brandName}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-2 lg:gap-6"
        >
          {items.map((item) => {
            const isAnchor = item.href.startsWith("#");
            const isPdf = item.href.endsWith(".pdf");
            return (
              <a
                key={item.href}
                href={item.href}
                {...(isPdf ? { download: true } : {})}
                onClick={
                  isAnchor
                    ? (e) => {
                        e.preventDefault();
                        handleScroll(item.href);
                      }
                    : undefined
                }
                className="text-xs lg:text-sm text-brand-muted hover:text-brand-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded px-1 py-0.5 whitespace-nowrap"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <CtaButton href={ctaHref} variant="primary" size="sm" className="shrink-0">
              {ctaLabel}
            </CtaButton>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-brand-muted hover:text-brand-text hover:bg-brand-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent transition-colors cursor-pointer"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Expandable Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-brand-border bg-brand-bg/95 backdrop-blur-xl px-4 py-4 space-y-3"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {mobileItems.map((item) => {
              const isAnchor = item.href.startsWith("#");
              const isPdf = item.href.endsWith(".pdf");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  {...(isPdf ? { download: true } : {})}
                  onClick={
                    isAnchor
                      ? (e) => {
                          e.preventDefault();
                          handleScroll(item.href);
                        }
                      : () => setIsOpen(false)
                  }
                  className="px-3 py-2 rounded-lg text-base font-medium text-brand-muted hover:text-brand-text hover:bg-brand-surface transition-colors"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-brand-border/60">
            <CtaButton
              href={ctaHref}
              variant="primary"
              size="sm"
              className="w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              {ctaLabel}
            </CtaButton>
          </div>
        </div>
      )}
    </header>
  );
}