type SectionHeaderProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ kicker, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-9 space-y-4">
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-header/80">
          {kicker}
        </p>
      )}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="h-[2px] w-28 rounded bg-gradient-to-r from-accent via-accent/80 to-transparent" />
      {subtitle && <p className="max-w-2xl text-base leading-relaxed text-text">{subtitle}</p>}
    </div>
  );
}
