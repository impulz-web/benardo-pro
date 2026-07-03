import type { Metadata } from "next";
import { FooterCta } from "@/components/site/footer-cta";
import { Navbar } from "@/components/site/navbar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Benard M.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeader
              kicker="Contact"
              title="Choose Your Service"
              subtitle="Select the service you need below"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-surface p-8 text-center shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)]">
                <h3 className="text-2xl font-bold text-foreground">Media Production</h3>
                <p className="mt-4 text-sm leading-relaxed text-text">
                  For audio production, beat making, and media services
                </p>
                <div className="mt-8">
                  <Button href="https://www.hotcorebeatz.com/contact" size="lg">
                    Contact Media Production →
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-surface p-8 text-center shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)]">
                <h3 className="text-2xl font-bold text-foreground">Web Development</h3>
                <p className="mt-4 text-sm leading-relaxed text-text">
                  For web development, software, and tech services
                </p>
                <div className="mt-8">
                  <Button href="https://hws.hotcorebeatz.com/pricing" size="lg">
                    Contact Web Development →
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <FooterCta />
      </main>
    </div>
  );
}
