import React from "react";
import { GlowCard } from "../GlowCard";
import { SectionWrapper } from "../SectionWrapper";

export interface ContactChannel {
  type: string;
  label?: string;
  value: string;
  href: string;
  icon?: "phone" | "mail" | "code" | string;
  external?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterNavProps {
  legal?: string;
  links?: FooterLink[];
  className?: string;
}

export interface ContactSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  channels?: ContactChannel[];
  legal?: string;
  links?: FooterLink[];
  className?: string;
}

const DEFAULT_CHANNELS: ContactChannel[] = [
  { type: "Phone", label: "Direct Phone", value: "+84 372 395 110", href: "tel:+84-372-395-110", icon: "phone" },
  { type: "Email", label: "Direct Email", value: "ngochoacth53@gmail.com", href: "mailto:ngochoacth53@gmail.com", icon: "mail" },
  { type: "GitHub", label: "GitHub Org", value: "github.com/familstorm", href: "https://github.com/familstorm", icon: "code", external: true },
];

const DEFAULT_LINKS: FooterLink[] = [
  { label: "Back to Top", href: "#hero" },
  { label: "Print / PDF", href: "/print" },
  { label: "Capability (PDF)", href: "/familstorm-onevalue-capability-quote.pdf" },
  { label: "Dev Preview", href: "/dev-preview" },
];

function ChannelIcon({ icon }: { icon?: string }) {
  if (icon === "phone") {
    return (
      <svg className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    );
  }
  if (icon === "mail") {
    return (
      <svg className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  return (
    <svg className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

export function FooterNav({
  legal = "© 2026 Familstorm. Autonomous AI-Driven Software Engineering. All rights reserved.",
  links = DEFAULT_LINKS,
  className = "",
}: FooterNavProps) {
  return (
    <footer className={`pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 ${className}`.trim()}>
      <div className="text-center sm:text-left">{legal}</div>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            {...(link.href.endsWith(".pdf") ? { download: true } : {})}
            className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent rounded"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export function ContactSection({
  id = "contact",
  eyebrow = "GET IN TOUCH",
  title = "Initiate an AI-Driven Engineering Pilot",
  description = "Discuss your upcoming platform, module acceleration, or technical partnership.",
  channels = DEFAULT_CHANNELS,
  legal = "© 2026 Familstorm. Autonomous AI-Driven Software Engineering. All rights reserved.",
  links = DEFAULT_LINKS,
  className = "",
}: ContactSectionProps) {
  return (
    <SectionWrapper id={id} withBorder={false} className={className}>
      <div className="max-w-4xl mx-auto text-center">
        <GlowCard className="p-8 sm:p-12 md:p-14 rounded-3xl border border-blue-500/30 shadow-2xl shadow-blue-950/50">
          <div className="mb-8 sm:mb-10">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase block mb-3">{eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">{title}</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">{description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            {channels.map((channel) => (
              <a
                key={channel.type}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-sky-400 hover:bg-slate-900/90 transition-all flex flex-col items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <ChannelIcon icon={channel.icon} />
                  <span className="text-xs text-slate-400 uppercase tracking-wider group-hover:text-slate-300 transition-colors">
                    {channel.label || channel.type}
                  </span>
                </div>
                <span className="text-sm font-semibold text-white font-mono truncate max-w-full group-hover:text-sky-300 transition-colors">
                  {channel.value}
                </span>
              </a>
            ))}
          </div>

          <FooterNav legal={legal} links={links} />
        </GlowCard>
      </div>
    </SectionWrapper>
  );
}

export default ContactSection;
