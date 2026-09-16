"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Copy, Check, Clock, Phone } from "lucide-react";
import { company } from "@/lib/data";
import { content } from "@/lib/content";
import { useLanguage } from "@/lib/language-context";

function WhatsAppIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.84 12.19 15.89C12.77 16.14 13.23 16.3 13.58 16.41C14.17 16.6 14.71 16.57 15.13 16.51C15.61 16.44 16.6 15.91 16.81 15.33C17.02 14.75 17.02 14.25 16.96 14.15C16.9 14.05 16.74 13.99 16.5 13.87C16.27 13.75 15.11 13.18 14.89 13.1C14.68 13.02 14.52 12.98 14.36 13.23C14.2 13.47 13.74 14.01 13.6 14.17C13.46 14.33 13.33 14.35 13.09 14.23C12.86 14.11 12.11 13.86 11.23 13.07C10.54 12.46 10.08 11.7 9.94 11.46C9.81 11.22 9.93 11.09 10.05 10.97C10.15 10.86 10.29 10.68 10.41 10.54C10.53 10.4 10.57 10.3 10.65 10.14C10.73 9.98 10.69 9.84 10.63 9.72C10.57 9.6 10.11 8.47 9.92 8C9.73 7.55 9.54 7.61 9.4 7.6C9.27 7.6 9.11 7.59 8.95 7.59C8.79 7.59 8.53 7.33 8.53 7.33Z"/>
    </svg>
  );
}

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang].contact;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(0);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(company.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(company.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const currentTopic = t.topics[selectedTopic] || "General Inquiry";
  const mailtoHref = `mailto:${company.email}?subject=${encodeURIComponent(`Project Inquiry: ${currentTopic}`)}`;
  const whatsappMessage = lang === "id"
    ? `Halo Superworks, saya tertarik untuk mendiskusikan kebutuhan proyek: ${currentTopic}.`
    : `Hello Superworks, I would like to discuss our project needs regarding: ${currentTopic}.`;
  const whatsappHref = `${company.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="relative py-20 sm:py-28 border-t border-white/[0.06] scroll-mt-24">
      <div className="section-shell">
        <div id="contact-box" className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#0e111d] to-[#070910] p-8 sm:p-14 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
          {/* Subtle ambient gradient inside card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-10">
            {/* Top Badge & Header */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-400 mb-5">
                <Phone size={13} />
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

            {/* Primary Action Buttons: hello@superworks.id & Contact Person */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* hello@superworks.id Button */}
              <a
                href={mailtoHref}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(99,102,241,0.35)] transition-all duration-200 hover:shadow-[0_6px_28px_rgba(99,102,241,0.5)] hover:brightness-110 active:scale-[0.98]"
              >
                <Mail size={16} />
                <span>{company.email}</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Contact Person (WhatsApp) Button */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all duration-200 hover:shadow-[0_6px_28px_rgba(16,185,129,0.45)] hover:brightness-110 active:scale-[0.98]"
              >
                <WhatsAppIcon size={18} />
                <span>{t.contactPerson}</span>
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Secondary Copy Actions */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Copy Email */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-slate-300 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.2] hover:text-white active:scale-[0.98]"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} className="text-teal-400" />
                    <span className="text-teal-300">{t.copiedToast}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-slate-400" />
                    <span>{t.copyEmail}</span>
                  </>
                )}
              </button>

              {/* Copy WhatsApp / Phone */}
              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-slate-300 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.2] hover:text-white active:scale-[0.98]"
              >
                {copiedPhone ? (
                  <>
                    <Check size={14} className="text-teal-400" />
                    <span className="text-teal-300">{t.copiedPhoneToast}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-slate-400" />
                    <span>{t.copyPhone}: {company.phone}</span>
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
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                <span>WhatsApp: {company.phoneDisplay} ({company.phone})</span>
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


