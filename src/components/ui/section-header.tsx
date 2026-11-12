type SectionHeaderProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ kicker, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-9 space-y-3">
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {kicker}
        </p>
      )}
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="max-w-2xl text-base leading-relaxed text-text">{subtitle}</p>}
    </div>
  );
}
