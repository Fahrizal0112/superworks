"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { company } from "@/lib/data";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = content[lang].nav;

  const links = [
    { href: "#about", label: t.about },
    { href: "#team", label: t.team },
    { href: "#projects", label: t.projects },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-background/80 backdrop-blur-md">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-black">
            S
          </span>
          {company.name}
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} setLang={setLang} />

          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-block"
          >
            {t.cta}
          </a>

          <button
            aria-label="Toggle menu"
            className="text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-surface-border bg-background md:hidden">
          <ul className="section-shell flex flex-col gap-1 py-3 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-lg bg-foreground px-2 py-2.5 text-center font-medium text-background"
              >
                {t.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function LanguageSwitcher({
  lang,
  setLang,
}: {
  lang: "id" | "en";
  setLang: (lang: "id" | "en") => void;
}) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center rounded-full border border-surface-border bg-background-elevated p-0.5 text-xs font-medium"
    >
      {(["id", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            lang === code
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
