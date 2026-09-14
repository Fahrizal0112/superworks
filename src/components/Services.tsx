"use client";

import { Code2, Cloud, BrainCircuit, Rocket } from "lucide-react";
import { services } from "@/lib/data";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

const iconMap = {
  code: Code2,
  cloud: Cloud,
  brain: BrainCircuit,
  rocket: Rocket,
};

export default function Services() {
  const { lang } = useLanguage();
  const t = content[lang].services;

  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="section-shell">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            {t.kicker}
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;
            const item = t.items[service.id];
            if (!item) return null;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c0e18]/80 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#0f1222]/90 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]"
              >
                <div>
                  {/* Service Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-500/20">
                    <Icon size={24} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-slate-300"
                    >
                      {tag}
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
