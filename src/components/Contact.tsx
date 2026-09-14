"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Copy, Check, Clock } from "lucide-react";
import { company } from "@/lib/data";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang].contact;
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(0);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(company.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const currentTopic = t.topics[selectedTopic] || "General Inquiry";
  const mailtoHref = `mailto:${company.email}?subject=${encodeURIComponent(`Project Inquiry: ${currentTopic}`)}`;

  return (
    <section id="contact" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#0e111d] to-[#070910] p-8 sm:p-14 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
          {/* Subtle ambient gradient inside card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-10">
            {/* Top Badge & Header */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-400 mb-5">
                <Mail size={13} />
                {t.badge}
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]">
                {t.title}
              </h2>

              <p className="mt-4 text-base text-slate-300/90 leading-relaxed font-normal max-w-xl">
                {t.desc}
              </p>
            </div>

            {/* Quick Topic Selection */}
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                {t.topicsLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {t.topics.map((topic, idx) => {
                  const isSelected = selectedTopic === idx;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(idx)}
                      className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium transition-all duration-150 ${
                        isSelected
                          ? "border border-indigo-500/50 bg-indigo-600/20 text-indigo-200 shadow-sm"
                          : "border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-white/[0.14] hover:text-white"
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions: Direct Email & Copy Button */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={mailtoHref}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(99,102,241,0.35)] transition-all duration-200 hover:shadow-[0_6px_28px_rgba(99,102,241,0.5)] hover:brightness-110 active:scale-[0.98]"
              >
                <span>{company.email}</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.2] active:scale-[0.98]"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-teal-400" />
                    <span className="text-teal-300">{t.copiedToast}</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="text-slate-400" />
                    <span>{t.copyEmail}</span>
                  </>
                )}
              </button>
            </div>

            {/* SLA and Commitment Footnote */}
            <div className="flex flex-wrap items-center gap-6 border-t border-white/[0.07] pt-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 font-medium">
                <Clock size={14} className="text-teal-400" />
                <span>{t.sla}</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <span>Direct partner review with CEO & CTO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

