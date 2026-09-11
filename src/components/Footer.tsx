"use client";

import { company, team } from "@/lib/data";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang].footer;
  const fahrizal = team.find((m) => m.slug === "fahrizal");
  const names = `Alvie & ${fahrizal?.name.split(" ")[0]}`;

  return (
    <footer className="border-t border-surface-border">
      <div className="section-shell flex flex-col items-center gap-4 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {company.name}. {t.builtBy(names)}
        </p>
        <div className="flex gap-4">
          {fahrizal?.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
