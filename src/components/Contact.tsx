"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { company } from "@/lib/data";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang].contact;

  return (
    <section id="contact" className="section-shell py-20 sm:py-28">
      <div className="glow-bg card flex flex-col items-start gap-6 p-8 sm:p-12">
        <span className="badge">
          <Mail size={14} className="text-accent" />
          {t.badge}
        </span>
        <h2 className="max-w-lg text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.title}
        </h2>
        <p className="max-w-md text-sm text-muted">{t.desc}</p>
        <a
          href={`mailto:${company.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {company.email}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
