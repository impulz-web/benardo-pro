import { FooterCta } from "@/components/site/footer-cta";
import { HeroImageSwitcher } from "@/components/site/hero-image-switcher";
import { Navbar } from "@/components/site/navbar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const technicalSkills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Stripe",
    "Node.js",
    "Vercel",
    "Cloudflare",
    "Git",
    "AI/ML Workflows"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[rgba(11,11,11,0.92)] via-[rgba(11,11,11,0.82)] to-[rgba(97,206,112,0.18)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(11,11,11,0.55),transparent_50%)]" />

          <Container className="relative z-10 grid min-h-[78vh] items-center gap-12 py-22 sm:py-28 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-header/85">
                {siteConfig.name}
              </p>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-8xl">
                Benard M
                <span className="mt-3 block h-[4px] w-40 rounded bg-gradient-to-r from-accent to-transparent lg:w-56" />
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
                Full-stack developer & media producer building digital products and creative experiences.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                <Button href="https://hws.hotcorebeatz.com/" className="w-full sm:w-auto">
                  Browse Projects
                </Button>
                <Button href="https://premium.chat/MrCrusher" className="w-full sm:w-auto">
                  Chat With Me
                </Button>
                <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md rounded-[24px] border border-white/12 bg-surface p-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)] lg:ml-auto lg:-translate-y-4">
              <HeroImageSwitcher />

              <div className="mt-4 space-y-3">
                {[
                  "Full-Stack Developer",
                  "Media Producer",
                  "Building products for creators",
                ].map((item) => (
                  <p key={item} className="rounded-full border border-white/12 bg-black/20 px-4 py-2 text-sm text-foreground">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeader
              kicker="Professional"
              title="What I Do"
              subtitle="Two distinct professional paths converging to create unique value"
            />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-surface p-8 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)]">
                <h3 className="text-2xl font-bold text-foreground">Full Stack Developer</h3>
                <p className="mt-4 text-sm leading-relaxed text-text">
                  Building fast, scalable web applications with modern technologies like Next.js, TypeScript, and AI workflows.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface p-8 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)]">
                <h3 className="text-2xl font-bold text-foreground">Media Producer</h3>
                <p className="mt-4 text-sm leading-relaxed text-text">
                  Creating professional audio production, beat making, and music business solutions for artists and creators.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeader
              kicker="Current Focus"
              title="What I'm Working On Right Now"
              subtitle="Founding and building two impactful ventures"
            />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-surface p-8 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)]">
                <p className="text-xs font-semibold text-accent">Founder</p>
                <h3 className="text-2xl font-bold text-foreground mt-2">Hotcorebeatz Production</h3>
                <p className="mt-4 text-sm leading-relaxed text-text">
                  Beat selling platform and studio management for independent artists and creators.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface p-8 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)]">
                <p className="text-xs font-semibold text-accent">Founder</p>
                <h3 className="text-2xl font-bold text-foreground mt-2">Hotcoreweb Services (HWS)</h3>
                <p className="mt-4 text-sm leading-relaxed text-text">
                  Software company focused on web development, digital products, and tech solutions for businesses.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeader
              kicker="Skills"
              title="Technical Skills"
              subtitle="Technologies and tools I work with daily"
            />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {technicalSkills.map((skill) => (
                <div key={skill} className="rounded-2xl border border-white/10 bg-surface p-5 text-sm font-medium text-foreground shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)]">
                  {skill}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-surface to-accent/10 p-10 text-center shadow-[0_24px_55px_rgba(0,0,0,0.45)]">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Ready to See My Work?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-base text-text sm:text-lg">
                Check out all my projects and portfolio at Hotcoreweb Services
              </p>
              <div className="mt-8">
                <Button href="https://hws.hotcorebeatz.com/" size="lg" className="text-lg px-10 py-6">
                  Browse Projects →
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <FooterCta />
      </main>

      <footer className="pb-10">
        <Container>
          <p className="text-xs text-text-muted">© {new Date().getFullYear()} Benard M. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}
