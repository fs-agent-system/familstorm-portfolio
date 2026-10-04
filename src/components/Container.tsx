import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "main" | "section" | "article" | "header" | "footer";
}

export function Container({ children, className = "", as: Component = "div" }: ContainerProps) {
  return <Component className={`max-w-6xl mx-auto px-6 w-full ${className}`.trim()}>{children}</Component>;
}
