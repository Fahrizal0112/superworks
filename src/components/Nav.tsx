"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { company } from "@/lib/data";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = content[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#services", label: t.services },
    { href: "#about", label: t.about },
    { href: "#team", label: t.team },
    { href: "#projects", label: t.projects },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-2xl border ${
          scrolled
            ? "bg-[#090b12]/85 backdrop-blur-xl border-white/[0.12] shadow-[0_16px_32px_-10px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.1)]"
            : "bg-[#090b12]/60 backdrop-blur-md border-white/[0.07] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)]"
        }`}
      >
        <nav className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
          {/* Brand Logo */}
          <a
            href="#top"
            className="group flex items-center gap-2.5 font-medium tracking-tight text-foreground transition-opacity hover:opacity-90"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-teal-400 p-[1px] shadow-sm shadow-indigo-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#07080c] transition-colors group-hover:bg-[#0c0e17]">
                <span className="text-xs font-bold tracking-tighter text-white">SW</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white leading-none">
                {company.name}
              </span>
              <span className="text-[10px] text-muted tracking-wider uppercase font-mono mt-0.5 hidden sm:block">
                Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-1 text-sm font-medium text-slate-400 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3.5 py-1.5 transition-all duration-150 hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Area & Language Switcher */}
          <div className="flex items-center gap-2.5">
            <LanguageSwitcher lang={lang} setLang={setLang} />

            <a
              href="#contact"
              className="group hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(99,102,241,0.25)] transition-all duration-200 hover:shadow-[0_4px_22px_rgba(99,102,241,0.4)] hover:brightness-110 active:scale-[0.98]"
            >
              <span>{t.cta}</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-foreground transition-colors hover:bg-white/[0.08] md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {open && (
          <div className="border-t border-white/[0.08] px-4 py-4 md:hidden">
            <ul className="flex flex-col gap-1 text-sm text-slate-300">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-center text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-95"
                >
                  <span>{t.cta}</span>
                  <ArrowUpRight size={15} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
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
      aria-label="Language Switcher"
      className="flex items-center rounded-xl border border-white/[0.08] bg-white/[0.03] p-0.5 text-xs font-medium"
    >
      {(["id", "en"] as const).map((code) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            className={`relative rounded-lg px-2.5 py-1 transition-all duration-200 ${
              isActive
                ? "bg-white/[0.12] text-white shadow-sm font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

