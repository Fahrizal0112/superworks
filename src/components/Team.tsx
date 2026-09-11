"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { team } from "@/lib/data";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function Team() {
  const { lang } = useLanguage();
  const t = content[lang].team;

  return (
    <section id="team" className="section-shell py-20 sm:py-28">
      <div className="mb-12 max-w-xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
          {t.kicker}
        </h2>
        <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.title}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {team.map((member) => {
          const memberText = t.members[member.slug];
          if (!memberText) return null;

          return (
            <div key={member.slug} className="card flex flex-col overflow-hidden">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-background-elevated">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-[center_15%]"
                  priority
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-accent">{memberText.role}</p>
                </div>

                <p className="text-sm text-muted">{memberText.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {memberText.focus.map((f) => (
                    <span key={f} className="badge">
                      {f}
                    </span>
                  ))}
                </div>

                {member.links && (
                  <div className="mt-auto flex flex-wrap gap-4 border-t border-surface-border pt-4 text-sm">
                    {member.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
