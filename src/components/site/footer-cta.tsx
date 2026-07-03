import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function FooterCta() {
  return (
    <section className="py-18 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-surface p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)] sm:p-10">
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Let&apos;s build something clean, fast, and profitable.
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-text sm:text-base">
              Tell me what you&apos;re shipping, your deadline, and your constraints — I&apos;ll reply with a clear execution plan.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" className="w-full sm:w-auto">Book a call</Button>
              <Button href={`mailto:${siteConfig.email}`} variant="secondary">
                Email me
              </Button>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-24 h-64 w-64 rounded-full bg-header/10 blur-3xl" />
        </div>
      </Container>
    </section>
  );
}
