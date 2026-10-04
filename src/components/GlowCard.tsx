import React from "react";

export interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "div" | "article" | "section";
}

export function GlowCard({ children, className = "", onClick, as: Component = "div" }: GlowCardProps) {
  return (
    <Component onClick={onClick} className={`card-glass rounded-2xl p-6 sm:p-8 transition-all duration-300 ${className}`.trim()}>
      {children}
    </Component>
  );
}
