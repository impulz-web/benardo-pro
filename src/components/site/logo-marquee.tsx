import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { brands, type Brand, type BrandSize } from "@/data/brands";

const ICON_SIZE: Record<BrandSize, string> = {
  sm: "h-6",
  md: "h-7",
  lg: "h-9",
  xl: "h-11",
};

function BrandMark({ brand }: { brand: Brand }) {
  if (brand.mark.kind === "icon") {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${ICON_SIZE[brand.mark.size]} w-auto`}
      >
        <path d={brand.mark.path} />
      </svg>
    );
  }

  return (
    <span className="text-xl font-bold uppercase leading-none tracking-[-0.01em]">
      {brand.mark.text}
    </span>
  );
}

function BrandRow({ clone = false }: { clone?: boolean }) {
  return (
    <ul
      className={`logo-marquee-group${clone ? " logo-marquee-clone" : ""}`}
      aria-hidden={clone || undefined}
    >
      {brands.map((brand) => (
        <li
          key={brand.id}
          className="flex h-10 shrink-0 items-center text-text-muted transition-colors duration-300 hover:text-foreground"
        >
          {brand.mark.kind === "icon" && <span className="sr-only">{brand.name}</span>}
          <BrandMark brand={brand} />
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee() {
  return (
    <section className="py-14 sm:py-18">
      <Container>
        <SectionHeader
          kicker="Trusted By"
          title="Companies I Work With"
          subtitle="Platforms, payment providers and Kenyan businesses I've partnered with to build and ship digital products."
        />

        <div className="logo-marquee">
          <div className="logo-marquee-track">
            <BrandRow />
            <BrandRow clone />
          </div>
        </div>
      </Container>
    </section>
  );
}
