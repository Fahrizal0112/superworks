"use client";

import { Cloud, Code2, Layers } from "lucide-react";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

const icons = [Layers, Code2, Cloud];

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang].about;

  return (
    <section id="about" className="section-shell py-20 sm:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            {t.kicker}
          </h2>
          <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.title}
          </p>
          <p className="mt-4 text-muted">{t.description}</p>
        </div>

        <div className="flex flex-col gap-6">
          {t.pillars.map((pillar, i) => {
            const Icon = icons[i] ?? Layers;
            return (
              <div key={pillar.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-surface-border bg-surface text-accent">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-medium">{pillar.title}</h3>
                  <p className="mt-1 text-sm text-muted">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
