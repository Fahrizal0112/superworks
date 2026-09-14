"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { Sparkles, CheckCircle2, FlaskConical } from "lucide-react";

export default function Projects() {
  const { lang } = useLanguage();
  const t = content[lang].projects;
  const [activeFilter, setActiveFilter] = useState<"all" | "shipped" | "ai" | "cloud">("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "shipped") return project.kind === "shipped";
    if (activeFilter === "ai") return project.domain === "ai";
    if (activeFilter === "cloud") return project.domain === "cloud" || project.domain === "api";
    return true;
  });

  return (
    <section id="projects" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="section-shell">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-400 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              {t.kicker}
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              {t.title}
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 leading-relaxed">
            {t.note}
          </p>
        </div>

        {/* Filter Tabs Bar */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: t.filterAll },
            { id: "shipped", label: t.filterShipped },
            { id: "ai", label: t.filterAI },
            { id: "cloud", label: t.filterCloud },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-white text-slate-900 shadow-md scale-[1.02]"
                    : "border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const p = t.items[project.slug];
            if (!p) return null;

            const isShipped = project.kind === "shipped";

            return (
              <div
                key={project.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c0e18]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/[0.18] hover:bg-[#0f1224]/90 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]"
              >
                <div>
                  {/* Category and Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold tracking-wider uppercase font-mono text-indigo-400">
                      {p.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-mono font-semibold ${
                        isShipped
                          ? "border border-teal-500/30 bg-teal-500/10 text-teal-300"
                          : "border border-slate-700 bg-slate-800/60 text-slate-400"
                      }`}
                    >
                      {isShipped ? (
                        <CheckCircle2 size={11} className="text-teal-400" />
                      ) : (
                        <FlaskConical size={11} className="text-slate-400" />
                      )}
                      {isShipped ? t.shippedLabel : t.conceptLabel}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-300/85 leading-relaxed font-normal">
                    {p.description}
                  </p>

                  {/* Highlight Callout Box */}
                  {p.highlight && (
                    <div className="mt-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3 text-xs font-medium text-indigo-300 flex items-start gap-2">
                      <Sparkles size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>{p.highlight}</span>
                    </div>
                  )}
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-4">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[11px] font-mono text-slate-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

