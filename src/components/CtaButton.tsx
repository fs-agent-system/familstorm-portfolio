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
  const isExternal = Boolean(resolvedHref && /^(https?:|\/\/)/.test(resolvedHref));
  const base = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg cursor-pointer select-none";

  const sizeStyles = {
    sm: iconOnly ? "p-2 min-h-[36px] min-w-[36px] rounded-lg" : "px-4 py-2 text-xs uppercase tracking-wider rounded-lg min-h-[36px]",
    md: iconOnly ? "p-3 min-h-[44px] min-w-[44px] rounded-xl" : "px-6 py-2.5 text-sm sm:text-base rounded-xl min-h-[44px]",
    lg: iconOnly ? "p-4 min-h-[48px] min-w-[48px] rounded-xl" : "px-8 py-3.5 text-base sm:text-lg rounded-xl min-h-[48px]",
  }[size];

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-sky-500/40 active:bg-blue-700",
    secondary: "card-glass text-slate-200 hover:text-white hover:border-slate-500 active:bg-slate-800/80",
    outline: "bg-transparent text-slate-200 border border-slate-700 hover:border-sky-400 hover:text-sky-400 active:bg-slate-800/50",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-slate-800/50 active:bg-slate-800/80",
  }[variant];

  const classes = `${base} ${sizeStyles} ${variantStyles} ${className}`.trim();
  const label = ariaLabel || (iconOnly ? "Action button" : undefined);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (resolvedHref?.startsWith("#")) {
      const elem = document.getElementById(resolvedHref.substring(1));
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", resolvedHref);
      }
    }
    onClick?.();
  };

  if (resolvedHref) {
    return <a href={resolvedHref} className={classes} aria-label={label} onClick={handleAnchorClick} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>;
  }
  return <button type={type} className={classes} aria-label={label} onClick={onClick}>{children}</button>;
}
