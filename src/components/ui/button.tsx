import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-accent bg-accent !text-black visited:!text-black active:!text-black hover:bg-hover",
  secondary:
    "border border-border-soft bg-surface text-foreground hover:border-accent hover:bg-surface-strong",
  ghost: "border border-transparent bg-transparent text-foreground hover:bg-surface",
  destructive: "border border-danger bg-transparent text-danger hover:bg-danger/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-xs",
  md: "min-h-10 px-4 text-sm",
  lg: "min-h-11 px-6 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external,
  type = "button",
  ...buttonProps
}: ButtonProps) {
  const isExternal = external ?? (href?.startsWith("http://") || href?.startsWith("https://"));
  
  const classes = `inline-flex items-center justify-center rounded-control font-semibold tracking-tight transition-colors duration-200 ${sizeStyles[size]} ${variantStyles[variant]} ${className ?? ""}`.trim();

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

  return <button {...buttonProps} type={type} className={classes}>{children}</button>;
}
