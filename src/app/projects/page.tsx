import type { Metadata } from "next";
import { FooterCta } from "@/components/site/footer-cta";
import { Navbar } from "@/components/site/navbar";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description: "View all projects at Hotcoreweb Services.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeader
              kicker="Projects"
              title="My Portfolio & Projects"
              subtitle="All my projects are hosted at Hotcoreweb Services"
            />

            <div className="mt-12 text-center">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-surface to-accent/10 p-10 shadow-[0_24px_55px_rgba(0,0,0,0.45)]">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Visit My Projects
                </h3>
                <p className="text-sm leading-relaxed text-text mb-8">
                  Check out all my work and projects at Hotcoreweb Services
                </p>
                <Button href="https://hws.hotcorebeatz.com/" size="lg">
                  Browse Projects →
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <FooterCta />
      </main>
    </div>
  );
}
