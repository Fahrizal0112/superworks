"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { team } from "@/lib/data";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

const getLinkIcon = (label: string) => {
  if (label.toLowerCase().includes("github")) return <GithubIcon size={14} />;
  if (label.toLowerCase().includes("linkedin")) return <LinkedinIcon size={14} />;
  return <ExternalLink size={14} />;
};

export default function Team() {
  const { lang } = useLanguage();
  const t = content[lang].team;

  return (
    <section id="team" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
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

        {/* 2 Founders Executive Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {team.map((member) => {
            const memberText = t.members[member.slug];
            if (!memberText) return null;

            return (
              <div
                key={member.slug}
                className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0b0d17]/85 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-white/[0.18] hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)]"
              >
                {/* Photo Container with subtle dark gradient vignette */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#07080d]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-transparent to-transparent opacity-80" />
                  
                  {/* Founder Status Badge over image */}
                  <div className="absolute bottom-4 left-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-[#07080c]/85 px-3 py-1 text-xs font-medium text-white backdrop-blur-md shadow-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      {memberText.role}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400 mt-1">
                      {memberText.role}
                    </p>

                    <p className="mt-4 text-sm text-slate-300/85 leading-relaxed font-normal">
                      {memberText.bio}
                    </p>

                    {/* Focus Chips */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {memberText.focus.map((f) => (
                        <span
                          key={f}
                          className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-slate-300"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Section */}
                  {member.links && member.links.length > 0 && (
                    <div className="mt-8 flex flex-wrap items-center gap-2.5 border-t border-white/[0.07] pt-5">
                      {member.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300 transition-all duration-150 hover:border-white/[0.16] hover:bg-white/[0.08] hover:text-white"
                        >
                          {getLinkIcon(link.label)}
                          <span>{link.label}</span>
                          <ArrowUpRight size={12} className="text-slate-500" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

