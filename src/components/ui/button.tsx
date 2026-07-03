import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-accent bg-accent !text-black visited:!text-black active:!text-black shadow-[0_12px_30px_rgba(97,206,112,0.3)] hover:brightness-105",
  secondary:
    "border border-border-soft bg-surface text-foreground hover:border-accent/45 hover:bg-surface-strong",
  ghost: "border border-transparent bg-transparent text-foreground hover:bg-surface",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external,
}: ButtonProps) {
  // Automatically detect external links (https/http)
  const isExternal = external ?? (href?.startsWith("http://") || href?.startsWith("https://"));
  
  const classes = `inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition duration-200 ${sizeStyles[size]} ${variantStyles[variant]} ${className ?? ""}`.trim();

  if (href) {
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes}>{children}</button>;
}
