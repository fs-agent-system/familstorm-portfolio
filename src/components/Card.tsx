import React from "react";

export interface CardProps {
  variant?: "default" | "showcase" | "collaboration";
  title?: string;
  category?: string;
  description?: string;
  tags?: string[];
  highlights?: string[];
  badge?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function Card({
  title,
  category,
  description,
  tags,
  highlights,
  badge,
  footer,
  children,
  className = "",
}: CardProps) {
  return (
    <div className={`p-6 sm:p-8 rounded-xl bg-brand-surface border border-brand-border transition-colors hover:border-brand-accent/50 flex flex-col justify-between ${className}`}>
      <div>
        {(category || badge) && (
          <div className="flex items-center justify-between gap-3 mb-3">
            {category && <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">{category}</span>}
            {badge && <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-900/40 text-brand-accent border border-blue-500/30">{badge}</span>}
          </div>
        )}
        {title && <h3 className="text-xl sm:text-2xl font-bold text-brand-text mb-2">{title}</h3>}
        {description && <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-4">{description}</p>}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded bg-slate-800 text-brand-accent border border-brand-border font-mono">{tag}</span>
            ))}
          </div>
        )}
        {highlights && highlights.length > 0 && (
          <ul className="space-y-2 mb-4 text-xs sm:text-sm text-brand-muted">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-brand-accent font-bold mt-0.5">✓</span>
                <span className="leading-normal">{item}</span>
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
      {footer && <div className="mt-6 pt-4 border-t border-brand-border">{footer}</div>}
    </div>
  );
}
