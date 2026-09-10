import { Trophy } from "lucide-react";
import { achievements, techStack } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="section-shell py-20 sm:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Track Record
          </h2>
          <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Diasah lewat kompetisi developer.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="card flex items-center justify-between gap-4 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Trophy size={16} />
                  </span>
                  <span className="text-sm">{a.title}</span>
                </div>
                <span className="shrink-0 text-sm font-medium text-accent-2">
                  {a.result}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Tech Stack
          </h2>
          <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Tools yang kami pakai sehari-hari.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
