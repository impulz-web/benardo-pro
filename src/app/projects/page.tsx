import type { Metadata } from "next";
import { FooterCta } from "@/components/site/footer-cta";
import { Navbar } from "@/components/site/navbar";
import { ProjectCard } from "@/components/project/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { getProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and outcomes from production products and systems.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeader
              kicker="Projects"
              title="Case studies that focus on outcomes"
              subtitle="A curated set of production builds with measurable impact across conversion, speed, and operations."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>

        <FooterCta />
      </main>
    </div>
  );
}
