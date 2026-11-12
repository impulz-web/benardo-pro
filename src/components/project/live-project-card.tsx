import Image from "next/image";
import type { LiveProject } from "@/data/live-projects";

type LiveProjectCardProps = {
  project: LiveProject;
};

export function LiveProjectCard({ project }: LiveProjectCardProps) {
  return (
    <article className="group flex flex-col rounded-[26px] border border-white/10 bg-surface p-5 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(97,206,112,0.35)] hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
      <div className="mb-4 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            width={1200}
            height={750}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1c1c1c] via-[#151515] to-[#0e0e0e]">
            <span className="px-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              {project.name}
            </span>
          </div>
        )}
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {project.category}
      </p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
        {project.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text">
        {project.description}
      </p>

      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex text-sm font-semibold text-foreground transition group-hover:text-accent"
        >
          {project.urlLabel ?? project.url} ↗
        </a>
      ) : null}
    </article>
  );
}
