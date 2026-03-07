import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
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

export function Button({
  children,
  href,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition duration-200 ${variantStyles[variant]} ${className ?? ""}`.trim();

  if (href) {
    if (external) {
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
