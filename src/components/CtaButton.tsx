"use client";

import React from "react";

export interface CtaButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  mailto?: string;
  tel?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  iconOnly?: boolean;
  className?: string;
  onClick?: () => void;
}

export function CtaButton({
  children,
  variant = "primary",
  size = "md",
  href,
  mailto,
  tel,
  type = "button",
  ariaLabel,
  iconOnly = false,
  className = "",
  onClick,
}: CtaButtonProps) {
  const resolvedHref = mailto ? `mailto:${mailto}` : tel ? `tel:${tel}` : href;
  const base = "inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg cursor-pointer";
  const sizeStyles = {
    sm: iconOnly ? "p-2 min-h-[36px] min-w-[36px]" : "px-4 py-2 text-sm min-h-[36px]",
    md: iconOnly ? "p-3 min-h-[44px] min-w-[44px]" : "px-6 py-3 text-base min-h-[44px]",
    lg: iconOnly ? "p-4 min-h-[48px] min-w-[48px]" : "px-8 py-3.5 text-base sm:text-lg min-h-[48px]",
  }[size];
  const variantStyles = {
    primary: "bg-brand-secondary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20 active:bg-blue-700",
    secondary: "bg-brand-surface text-brand-text border border-brand-border hover:bg-brand-surface-hover active:bg-brand-surface",
    outline: "bg-transparent text-brand-text border border-brand-border hover:border-brand-accent hover:text-brand-accent active:bg-brand-surface",
    ghost: "bg-transparent text-brand-muted hover:text-brand-text hover:bg-brand-surface active:bg-brand-surface-hover",
  }[variant];
  const classes = `${base} ${sizeStyles} ${variantStyles} ${className}`.trim();
  const label = ariaLabel || (iconOnly ? "Action button" : undefined);

  if (resolvedHref) {
    return <a href={resolvedHref} className={classes} aria-label={label}>{children}</a>;
  }
  return <button type={type} className={classes} aria-label={label} onClick={onClick}>{children}</button>;
}
