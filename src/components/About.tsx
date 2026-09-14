"use client";

import { Users, Server, ShieldCheck, Globe2 } from "lucide-react";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

const pillarIcons = [Users, Server, ShieldCheck];

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang].about;

  return (
    <section id="about" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Manifesto & Narrative */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-400 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              {t.kicker}
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              {t.title}
            </h2>

            <p className="mt-5 text-base text-slate-300/90 sm:text-lg leading-relaxed font-normal">
              {t.description}
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                <Globe2 size={20} />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">Indonesia & Global Delivery</span>
                <span className="text-slate-400">Remote-first studio working across APAC & international timezones</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Pillars Bento Stack */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {t.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i] ?? ShieldCheck;
              return (
                <div
                  key={pillar.title}
                  className="group relative flex gap-5 rounded-2xl border border-white/[0.08] bg-[#0c0e18]/70 p-6 sm:p-7 backdrop-blur-xl transition-all duration-200 hover:border-white/[0.16] hover:bg-[#0f1222]/80"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-indigo-400 transition-colors group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300/85 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

