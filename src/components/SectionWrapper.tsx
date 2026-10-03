import React from "react";

export interface SectionWrapperProps {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  as?: "section" | "div" | "article";
}

export function SectionWrapper({
  id,
  badge,
  title,
  subtitle,
  children,
  className = "",
  containerClassName = "",
  headerClassName = "",
  as: Component = "section",
}: SectionWrapperProps) {
  return (
    <Component id={id} className={`w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 border-b border-brand-border ${className}`}>
      <div className={`max-w-6xl mx-auto w-full ${containerClassName}`}>
        {(badge || title || subtitle) && (
          <div className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 ${headerClassName}`}>
            {badge && (
              <span className="inline-block py-1 px-3 rounded-full bg-blue-900/40 border border-blue-500/30 text-brand-accent text-xs font-semibold uppercase tracking-wider mb-4">
                {badge}
              </span>
            )}
            {title && <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-text mb-4 tracking-tight">{title}</h2>}
            {subtitle && <p className="text-base sm:text-lg text-brand-muted leading-relaxed">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </Component>
  );
}
