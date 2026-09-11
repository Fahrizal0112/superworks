"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang].hero;

  return (
    <section id="top" className="glow-bg relative overflow-hidden pb-20 pt-20 sm:pt-28">
      <div className="section-shell relative flex flex-col items-start gap-6">
        <span className="badge">
          <Sparkles size={14} className="text-accent" />
          {t.badge}
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {t.headingPrefix}{" "}
          <span className="gradient-text">{t.headingHighlight}</span>
        </h1>

        <p className="max-w-xl text-base text-muted sm:text-lg">{t.subtitle}</p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t.ctaPrimary}
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#team"
            className="inline-flex items-center gap-2 rounded-full border border-surface-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            {t.ctaSecondary}
          </a>
        </div>

        <dl className="mt-10 grid w-full max-w-xl grid-cols-3 gap-6 border-t border-surface-border pt-8">
          {t.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-2xl font-semibold sm:text-3xl">{stat.value}</dt>
              <dd className="text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
