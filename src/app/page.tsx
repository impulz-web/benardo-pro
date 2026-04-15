import { FooterCta } from "@/components/site/footer-cta";
import { HeroImageSwitcher } from "@/components/site/hero-image-switcher";
import { Navbar } from "@/components/site/navbar";
import { ProjectCard } from "@/components/project/project-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { PricingSection } from "@/components/pricing/pricing-section";
import { getProjects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const projects = getProjects();

  const capabilities = [
    "Full-stack product builds",
    "Admin dashboards + auth roles",
    "Payments + subscriptions",
    "Performance + SEO",
    "Automations / AI workflows",
    "Deployment + CI",
  ];

  const process = ["Discover", "Design", "Build", "Ship", "Iterate"];

  const musicProductionServices = [
    {
      title: "Beat Making",
      description:
        "Custom, industry-ready beats crafted around your sound and artistic direction.",
    },
    {
      title: "Mixing",
      description:
        "Clean, balanced mixes that make every vocal and instrument sit perfectly in the track.",
    },
    {
      title: "Mastering",
      description:
        "Loud, polished masters optimized for streaming platforms, clubs, and radio playback.",
    },
    {
      title: "Vocal Production",
      description:
        "Professional vocal tuning, timing, and enhancement for a radio-ready final sound.",
    },
    {
      title: "Song Arrangement",
      description:
        "Structure and creative direction to turn rough ideas into complete, engaging records.",
    },
  ];

  const musicBusinessServices = [
    {
      title: "Music Distribution",
      description:
        "Release your music globally across major DSPs with proper metadata and delivery setup.",
    },
    {
      title: "Release Strategy",
      description:
        "Campaign planning for singles, EPs, and albums to maximize reach and listener growth.",
    },
    {
      title: "Royalties & Publishing Setup",
      description:
        "Guidance on collecting publishing, performance, and neighboring rights revenue correctly.",
    },
    {
      title: "Artist Branding",
      description:
        "Define your visual identity and positioning so your brand stays memorable and marketable.",
    },
    {
      title: "Playlist & DSP Pitching",
      description:
        "Strategic pitching support to improve your chances of playlist placements and discovery.",
    },
    {
      title: "Catalog Management",
      description:
        "Organize, track, and optimize your existing releases for long-term catalog performance.",
    },
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
              <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-7xl">
                I am a Fullstack Developer and Music Business Strategist
                <span className="mt-3 block h-[3px] w-28 rounded bg-gradient-to-r from-accent to-transparent lg:w-44" />
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
                I build fast, scalable web products with Next.js, TypeScript, and AI workflows.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                <Button href="/contact" className="w-full sm:w-auto">
                  Book a call
                </Button>
                <Button href="/projects" variant="secondary" className="w-full sm:w-auto">
                  View projects
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md rounded-[24px] border border-white/12 bg-surface p-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)] lg:ml-auto lg:-translate-y-4">
              <HeroImageSwitcher />

              <div className="mt-4 space-y-3">
                {[
                  "2+ years building products",
                  "production releases shipped",
                  "Next.js, TypeScript, AI-native systems",
                ].map((item) => (
                  <p key={item} className="rounded-full border border-white/12 bg-black/20 px-4 py-2 text-sm text-foreground">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10">
          <Container>
            <div className="flex flex-wrap items-center gap-2">
              {[
                "Next.js",
                "React",
                "Supabase",
                "Postgres",
                "Cloudflare",
                "Vercel",
                "Stripe",
              ].map((stack) => (
                <span key={stack} className="rounded-full border border-white/10 bg-surface px-3 py-1 text-xs font-medium text-text">
                  {stack}
                </span>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeader
              kicker="Featured Work"
              title="Outcome-focused projects"
              subtitle="A selection of systems and product builds designed to improve speed, conversion, and operational efficiency."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeader
              kicker="Music Production"
              title="Music Production Services"
              subtitle="High-quality production support from beat creation to release-ready audio finishing."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {musicProductionServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-surface p-6 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)]"
                >
                  <h3 className="text-lg font-bold leading-tight text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text">{service.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeader
              kicker="Music Business"
              title="Music Business Services"
              subtitle="Strategic services to help artists release smarter, grow faster, and monetize effectively."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {musicBusinessServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-surface p-6 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)]"
                >
                  <h3 className="text-lg font-bold leading-tight text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text">{service.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <PricingSection />

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeader
              kicker="Capabilities"
              title="A small set of high-impact skills"
              subtitle="Built to ship, scale, and convert — without bloated process."
            />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-surface p-5 text-sm font-medium text-foreground shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)]">
                  {item}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeader
              kicker="Process"
              title="Discover → Design → Build → Ship → Iterate"
              subtitle="Simple and transparent workflow for fast execution and predictable delivery."
            />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {process.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-surface p-5 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)]">
                  <p className="text-xs font-semibold text-accent">0{index + 1}</p>
                  <p className="mt-2 text-sm font-bold text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <FooterCta />
      </main>

      <footer className="pb-10">
        <Container>
          <p className="text-xs text-text-muted">© {new Date().getFullYear()} Benardo Pro. Minimal. Premium. Production-ready.</p>
        </Container>
      </footer>
    </div>
  );
}
