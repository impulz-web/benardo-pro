import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface PricingPlan {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Consultation",
    price: "KES 1,000",
    priceNote: "/ hour",
    description: "Perfect for creators and businesses that need clarity, direction, and expert advice before investing.",
    features: [
      "1-on-1 expert guidance",
      "Music business & digital strategy insights",
      "Website & branding consultation",
      "Actionable growth plan",
    ],
    ctaText: "Book Session",
    ctaHref: "/contact",
  },
  {
    name: "Starter Website",
    price: "KES 15,000",
    priceNote: "One-time",
    description: "Ideal for individuals and startups looking to establish a strong, professional online presence without complexity.",
    features: [
      "Homepage (high-converting design)",
      "About page (brand storytelling)",
      "Contact form (lead generation ready)",
      "FREE domain name included",
      "Mobile responsive design",
      "Basic SEO setup",
    ],
    ctaText: "Get Started",
    ctaHref: "/contact",
  },
  {
    name: "Business Website",
    price: "KES 30,000",
    priceNote: "One-time",
    description: "Designed for growing businesses that need a powerful, scalable, and credible online presence.",
    features: [
      "Everything in Starter",
      "Up to 5–7 pages",
      "Advanced UI/UX design",
      "Performance optimization",
      "Integrated analytics",
      "Custom branding elements",
    ],
    ctaText: "Build My Website",
    ctaHref: "/contact",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "E-commerce Website",
    price: "KES 50,000",
    priceNote: "One-time",
    description: "Built for brands ready to sell online, automate sales, and scale revenue.",
    features: [
      "Everything in Business",
      "Full online store functionality",
      "Payment gateway integration (M-Pesa, Cards, etc.)",
      "Product management system",
      "Order & inventory management",
      "Conversion-optimized checkout",
    ],
    ctaText: "Launch My Store",
    ctaHref: "/contact",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      {/* Background gradient accents */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(97,206,112,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(255,0,80,0.06),transparent_50%)]" />

      <Container>
        <div className="text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Pricing Plans
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            Invest in Your Digital Presence
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base text-text sm:text-lg">
            Choose the plan that fits your goals. Every package is designed to deliver measurable ROI — more clients, better branding, and real online sales.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 ${
                plan.highlighted
                  ? "border-accent/40 bg-surface-strong shadow-[0_20px_60px_rgba(97,206,112,0.15)] hover:shadow-[0_24px_70px_rgba(97,206,112,0.25)]"
                  : "border-white/10 bg-surface hover:border-white/20 hover:shadow-[0_24px_55px_rgba(0,0,0,0.45)]"
              } hover:-translate-y-1`}
            >
              {/* Most Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-bold text-black shadow-[0_4px_12px_rgba(97,206,112,0.4)]">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-5">
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-black tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  {plan.priceNote && (
                    <span className="text-sm text-text-muted">{plan.priceNote}</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-text-muted">
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="mb-7 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-text">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-auto">
                <Button
                  href={plan.ctaHref}
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  {plan.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/10 bg-surface px-8 py-5">
            <span className="text-sm font-medium text-text-muted">
              Built for creators, startups & businesses
            </span>
            <div className="flex items-center gap-4 text-xs text-text">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quality Guaranteed
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                On-Time Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Dedicated Support
              </span>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg font-semibold text-foreground sm:text-xl">
            Invest in your digital presence today.{" "}
            <span className="text-accent">Let's build something that makes you money.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}