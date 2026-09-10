import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-20 sm:py-28">
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Selected Work
          </h2>
          <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Proyek yang sudah dikerjakan & konsep produk internal.
          </p>
        </div>
        <p className="max-w-sm text-sm text-muted">
          Tiga di antaranya adalah proyek yang benar-benar sudah dibangun dan
          diuji tim Superworks. Sisanya adalah konsep produk internal yang
          sedang dikembangkan.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.slug} className="card flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-accent-2">
                {project.category}
              </span>
              <span
                className={`badge !py-1 !text-[11px] ${
                  project.kind === "shipped"
                    ? "!border-accent-2/40 !text-accent-2"
                    : ""
                }`}
              >
                {project.kind === "shipped" ? "Shipped" : "Concept"}
              </span>
            </div>

            <h3 className="text-lg font-semibold leading-snug">
              {project.title}
            </h3>

            <p className="flex-1 text-sm text-muted">{project.description}</p>

            {project.highlight && (
              <p className="text-xs font-medium text-foreground/80">
                {project.highlight}
              </p>
            )}

            <div className="flex flex-wrap gap-2 border-t border-surface-border pt-4">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-background-elevated px-2 py-1 text-xs text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
