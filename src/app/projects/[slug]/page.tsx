import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FooterCta } from "@/components/site/footer-cta";
import { Navbar } from "@/components/site/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getProjectBySlug, getProjects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="py-20 sm:py-24">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-header/85">Case Study</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl">{project.name}</h1>
            {project.liveSiteUrl ? (
              <a
                href={project.liveSiteUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-accent underline-offset-4 transition hover:underline"
              >
                {project.liveSiteLabel ?? project.liveSiteUrl}
              </a>
            ) : null}
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text sm:text-lg">{project.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            {project.images?.length ? (
              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                {project.images.map((imageSrc) => (
                  <div
                    key={imageSrc}
                    className="overflow-hidden rounded-3xl border border-white/12 bg-surface shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]"
                  >
                    <Image
                      src={imageSrc}
                      alt={`${project.name} screenshot`}
                      width={1400}
                      height={900}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            {project.fullDescription?.length ? (
              <article className="mt-5 rounded-3xl border border-white/12 bg-surface p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
                <h2 className="text-lg font-semibold text-foreground">Full Description</h2>
                <div className="mt-4 space-y-4">
                  {project.fullDescription.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-text sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ) : null}

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-white/12 bg-surface p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
                <h2 className="text-lg font-semibold text-foreground">Problem</h2>
                <p className="mt-3 text-sm leading-relaxed text-text">{project.problem}</p>
              </article>

              <article className="rounded-3xl border border-white/12 bg-surface p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
                <h2 className="text-lg font-semibold text-foreground">Approach</h2>
                <p className="mt-3 text-sm leading-relaxed text-text">{project.approach}</p>
              </article>
            </div>

            <div className="mt-5 rounded-3xl border border-white/12 bg-surface p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
              <h2 className="text-lg font-semibold text-foreground">Tech Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-white/12 bg-surface p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
                <h2 className="text-lg font-semibold text-foreground">Results</h2>
                <ul className="mt-4 space-y-2">
                  {project.results.map((result) => (
                    <li key={result} className="text-sm text-text">
                      • {result}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-white/12 bg-surface p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
                <h2 className="text-lg font-semibold text-foreground">What I’d Improve Next</h2>
                <ul className="mt-4 space-y-2">
                  {project.nextImprovements.map((item) => (
                    <li key={item} className="text-sm text-text">
                      • {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-8">
              <Button href="/projects" variant="secondary">
                ← Back to projects
              </Button>
            </div>
          </Container>
        </section>

        <FooterCta />
      </main>
    </div>
  );
}
