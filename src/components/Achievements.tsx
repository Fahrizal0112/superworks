"use client";

import { Trophy, Medal, Layers, Code, Server, Cloud, BrainCircuit, Database } from "lucide-react";
import { achievements, techCategories } from "@/lib/data";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

const categoryIcons = {
  "Frontend & Web": Code,
  "Backend & Systems": Server,
  "Cloud & Infrastructure": Cloud,
  "AI, ML & Data": BrainCircuit,
  "Databases & Storage": Database,
};

export default function Achievements() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="relative py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Track Record / Competitions Won */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 mb-4 self-start">
              <Trophy size={13} />
              {t.achievements.kicker}
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
              {t.achievements.title}
            </h2>
            <p className="mt-4 text-base text-slate-400">
              {t.achievements.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {achievements.map((a) => {
                const isFirst = a.rank === 1;
                const isSecond = a.rank === 2;

                return (
                  <div
                    key={a.competition}
                    className={`group relative flex items-center justify-between gap-4 rounded-2xl border p-5 backdrop-blur-xl transition-all duration-200 ${
                      isFirst
                        ? "border-amber-500/30 bg-gradient-to-r from-amber-500/[0.08] via-transparent to-transparent shadow-[0_10px_30px_-10px_rgba(245,158,11,0.15)]"
                        : "border-white/[0.08] bg-[#0c0e18]/70 hover:border-white/[0.16]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border font-bold text-sm ${
                          isFirst
                            ? "border-amber-500/40 bg-amber-500/20 text-amber-300"
                            : isSecond
                            ? "border-slate-300/30 bg-slate-300/10 text-slate-200"
                            : "border-orange-500/30 bg-orange-500/10 text-orange-300"
                        }`}
                      >
                        {a.rank === 1 ? (
                          <Trophy size={20} className="text-amber-400" />
                        ) : (
                          <Medal size={20} />
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-base">
                            {a.competition}
                          </span>
                          <span className="rounded-md border border-white/[0.08] bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                            {a.year}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {a.institution}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold font-mono ${
                          isFirst
                            ? "bg-amber-400/10 text-amber-300 border border-amber-400/30"
                            : "bg-white/[0.06] text-slate-200 border border-white/[0.08]"
                        }`}
                      >
                        {a.result}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Categorized Engineering Stack */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 mb-4 self-start">
              <Layers size={13} />
              {t.tech.kicker}
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
              {t.tech.title}
            </h2>
            <p className="mt-4 text-base text-slate-400">
              {t.tech.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3.5">
              {techCategories.map((category) => {
                const Icon = categoryIcons[category.name as keyof typeof categoryIcons] ?? Code;

                return (
                  <div
                    key={category.name}
                    className="rounded-xl border border-white/[0.08] bg-[#0c0e18]/70 p-4 backdrop-blur-xl transition-colors hover:border-white/[0.14]"
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <Icon size={15} className="text-indigo-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-300">
                        {category.name}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-slate-300 transition-colors hover:border-indigo-500/30 hover:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

