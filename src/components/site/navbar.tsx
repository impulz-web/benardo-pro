import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const isExternal = (href: string) => href.startsWith("http://") || href.startsWith("https://");

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(11,11,11,0.55)] backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide text-foreground">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => {
            if (isExternal(item.href)) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground transition hover:text-accent"
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground transition hover:text-accent"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button href="/contact" className="hidden sm:inline-flex">
          Book a call
        </Button>
      </Container>
    </header>
  );
}
