"use client";

import { company, team } from "@/lib/data";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang].footer;
  const fahrizal = team.find((m) => m.slug === "fahrizal");
  const names = `Alvie & Muchammad Fahrizal`;

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#05060a] py-14">
      <div className="section-shell flex flex-col gap-10">
        {/* Top Tier: Brand, Status & Quick Links */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#07080c]">
                  <span className="text-[10px] font-bold text-white">SW</span>
                </div>
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                {company.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              {company.tagline} · {company.location}
            </p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400">
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-teal-400/90 transition-colors hover:text-teal-300 font-mono"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                <span>WhatsApp: {company.phoneDisplay}</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={`mailto:${company.email}`}
                className="text-slate-400 transition-colors hover:text-white font-mono"
              >
                {company.email}
              </a>
            </div>
          </div>

          {/* System Operational Status Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-teal-500/20 bg-teal-500/5 px-3.5 py-1.5 text-xs font-mono text-teal-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span>{t.status}</span>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Social Links */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. {t.builtBy(names)}
          </p>

          <div className="flex flex-wrap items-center gap-5">
            {fahrizal?.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-slate-400 transition-colors hover:text-white"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={11} className="text-slate-500" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

