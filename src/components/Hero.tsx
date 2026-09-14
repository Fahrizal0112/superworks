"use client";

import { useState } from "react";
import { ArrowUpRight, Terminal, CheckCircle2, ChevronRight } from "lucide-react";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang].hero;
  const [activeTab, setActiveTab] = useState<"overview" | "arch" | "sla">("overview");

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Ambient background atmosphere */}
      <div className="ambient-glow" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="section-shell relative z-10 flex flex-col gap-12 lg:gap-16">
        {/* Top Hero Content */}
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          {/* Status availability badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              {t.availability}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs font-semibold text-indigo-400">
              {t.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.08]">
            {t.headingPrefix}{" "}
            <span className="gradient-text-accent block sm:inline">
              {t.headingHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-base text-slate-300/90 sm:text-lg sm:leading-relaxed font-normal">
            {t.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(99,102,241,0.35)] transition-all duration-200 hover:shadow-[0_6px_30px_rgba(99,102,241,0.5)] hover:brightness-110 active:scale-[0.98]"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.2] active:scale-[0.98]"
            >
              <span>{t.ctaSecondary}</span>
            </a>
          </div>
        </div>

        {/* Interactive Studio Live Terminal Showcase */}
        <div className="relative w-full rounded-2xl border border-white/[0.1] bg-[#0a0c14]/90 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.1)] overflow-hidden">
          {/* Terminal Title Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.07] px-4 py-3 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <Terminal size={13} className="text-indigo-400" />
                {t.terminal.header}
              </span>
            </div>

            {/* Terminal Tabs & Status */}
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <div className="flex rounded-lg bg-white/[0.04] p-0.5 border border-white/[0.06] text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab("overview")}
                  className={`rounded-md px-2.5 py-1 transition-colors ${
                    activeTab === "overview" ? "bg-indigo-600 text-white font-medium" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("arch")}
                  className={`rounded-md px-2.5 py-1 transition-colors ${
                    activeTab === "arch" ? "bg-indigo-600 text-white font-medium" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("sla")}
                  className={`rounded-md px-2.5 py-1 transition-colors ${
                    activeTab === "sla" ? "bg-indigo-600 text-white font-medium" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Quality SLA
                </button>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-teal-300">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                {t.terminal.status}
              </span>
            </div>
          </div>

          {/* Terminal Content Body */}
          <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed">
            {activeTab === "overview" && (
              <div className="space-y-3">
                <div className="text-slate-500 text-xs">
                  $ superworks studio --status inspect --verbose
                </div>
                {t.terminal.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="text-slate-400 sm:w-48 shrink-0 flex items-center gap-1.5">
                      <ChevronRight size={13} className="text-indigo-400" />
                      {item.label}:
                    </span>
                    <span className={item.accent ? "text-teal-300 font-semibold" : "text-slate-200"}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "arch" && (
              <div className="space-y-3 text-slate-300">
                <div className="text-slate-500 text-xs">
                  $ superworks arch --inspect-topology
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                    <span className="text-indigo-400 font-semibold block mb-1">Frontend & Edge</span>
                    <span className="text-slate-400 text-xs">Next.js 16 (App Router), React 19, Turbopack, TailwindCSS, Edge Routing</span>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                    <span className="text-teal-400 font-semibold block mb-1">Backend & Microservices</span>
                    <span className="text-slate-400 text-xs">Golang & Node.js services, Midtrans Payments, PostgreSQL, Redis</span>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                    <span className="text-indigo-400 font-semibold block mb-1">Cloud Infrastructure</span>
                    <span className="text-slate-400 text-xs">Google Cloud Platform (GCP), AWS, Docker Containerization, CI/CD</span>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                    <span className="text-teal-400 font-semibold block mb-1">Applied AI Systems</span>
                    <span className="text-slate-400 text-xs">PyTorch, One-Class GNNs, OpenAI API, MLflow Model Tracking</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "sla" && (
              <div className="space-y-3 text-slate-300">
                <div className="text-slate-500 text-xs">
                  $ superworks governance --verify-standards
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span>Founder-led code reviews on 100% of production pull requests</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span>Multi-region automated cloud backup with recovery point objective &lt; 15 mins</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span>Clean modular code structure designed for client independence & zero vendor lock-in</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Grid Bar */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:gap-6 pt-2">
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6 backdrop-blur-md transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.04]"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </span>
              </div>
              <span className="mt-1 text-sm font-semibold text-slate-200">
                {stat.label}
              </span>
              {stat.sub && (
                <span className="text-xs text-slate-400 mt-0.5">
                  {stat.sub}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

