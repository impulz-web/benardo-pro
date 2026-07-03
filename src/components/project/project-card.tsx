import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-[26px] border border-white/10 bg-surface p-5 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(97,206,112,0.35)] hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
      {project.thumbnail ? (
        <div className="mb-4 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={project.thumbnail}
            alt={`${project.name} thumbnail`}
            width={1200}
            height={700}
            className="h-44 w-full object-cover"
          />
        </div>
      ) : null}

      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{project.name}</h3>
        <span className="text-xs font-semibold text-accent">{project.outcome}</span>
      </div>

      <p className="text-sm leading-relaxed text-text">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex text-sm font-semibold text-foreground transition group-hover:text-accent"
      >
        View case study →
      </Link>

      {project.liveSiteUrl ? (
        <a
          href={project.liveSiteUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex text-sm font-semibold text-accent underline-offset-4 transition hover:underline"
        >
          View full site ↗
        </a>
      ) : null}
    </article>
  );
}
