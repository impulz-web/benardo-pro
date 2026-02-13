import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/12 bg-surface px-3 py-1 text-xs font-medium text-text">
      {children}
    </span>
  );
}
