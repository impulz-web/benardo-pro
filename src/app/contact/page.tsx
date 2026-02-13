import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { FooterCta } from "@/components/site/footer-cta";
import { Navbar } from "@/components/site/navbar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";
import { getServicesOffered } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Benardo Pro.",
};

export default async function ContactPage() {
  const services = await getServicesOffered().catch(() => []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="py-20 sm:py-28">
          <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-header/85">Contact</p>
              <h1 className="mt-4 text-4xl font-black tracking-[-0.02em] text-foreground sm:text-5xl">
                Let&apos;s build your next product.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-text">
                Share your goals, timeline, and constraints. I&apos;ll respond with a practical plan and build path.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={`mailto:${siteConfig.email}`} className="w-full sm:w-auto">Email me</Button>
                <Button href={siteConfig.whatsappUrl} external className="w-full sm:w-auto">
                  WhatsApp me
                </Button>
                <Button href="/projects" variant="secondary" className="w-full sm:w-auto">
                  View case studies
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/12 bg-surface p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
              <h2 className="text-lg font-bold text-foreground">Tell me about your project</h2>
              <p className="mt-2 text-sm text-text">
                Fill in the form and I&apos;ll get back to you with a tailored plan.
              </p>

              <ContactForm services={services} />

              <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-text">
                <li>
                  <span className="font-semibold text-foreground">Email:</span> {siteConfig.email}
                </li>
                <li>
                  <span className="font-semibold text-foreground">Call / WhatsApp:</span> {siteConfig.phone}
                </li>
                <li>
                  <span className="font-semibold text-foreground">Response time:</span> Within 24 hours
                </li>
                <li>
                  <span className="font-semibold text-foreground">Typical kickoff:</span> 3–7 days
                </li>
              </ul>
            </div>
          </Container>
        </section>

        <FooterCta />
      </main>
    </div>
  );
}
