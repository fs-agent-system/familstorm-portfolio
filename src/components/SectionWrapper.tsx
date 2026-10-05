import React from "react";
import { Badge } from "./Badge";
import { Container } from "./Container";

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
  hasGlow?: boolean;
  withBorder?: boolean;
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
  hasGlow = false,
  withBorder = true,
}: SectionWrapperProps) {
  const border = withBorder ? "border-b border-brand-border" : "";
  const glow = hasGlow ? "hero-glow relative overflow-hidden" : "";

  return (
    <Component id={id} className={`w-full py-[3.5rem] md:py-[6rem] ${border} ${glow} ${className}`.trim()}>
      <Container className={containerClassName}>
        {(badge || title || subtitle) && (
          <div className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 ${headerClassName}`.trim()}>
            {badge && <div className="mb-4"><Badge variant="accent" pulse>{badge}</Badge></div>}
            {title && <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text mb-4 tracking-tight">{title}</h2>}
            {subtitle && <p className="text-base sm:text-lg text-brand-muted leading-relaxed">{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </Component>
  );
}
