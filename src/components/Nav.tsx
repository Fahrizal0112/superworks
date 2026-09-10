"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { company } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

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

        <a
          href="#contact"
          className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-block"
        >
          Let&apos;s talk
        </a>

        <button
          aria-label="Toggle menu"
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
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
                Let&apos;s talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
