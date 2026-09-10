import { ArrowUpRight, Sparkles } from "lucide-react";
import { company } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="glow-bg relative overflow-hidden pb-20 pt-20 sm:pt-28">
      <div className="section-shell relative flex flex-col items-start gap-6">
        <span className="badge">
          <Sparkles size={14} className="text-accent" />
          Software studio · 2 founders, one team
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          We turn ideas into{" "}
          <span className="gradient-text">shipped software.</span>
        </h1>

        <p className="max-w-xl text-base text-muted sm:text-lg">
          {company.tagline} {company.name} dijalankan oleh CEO & CTO yang
          langsung terjun ke setiap proyek — dari strategi produk sampai baris
          kode dan cloud infrastructure.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Lihat proyek kami
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#team"
            className="inline-flex items-center gap-2 rounded-full border border-surface-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            Kenalan sama tim
          </a>
        </div>

        <dl className="mt-10 grid w-full max-w-xl grid-cols-3 gap-6 border-t border-surface-border pt-8">
          <div>
            <dt className="text-2xl font-semibold sm:text-3xl">2</dt>
            <dd className="text-sm text-muted">Founders</dd>
          </div>
          <div>
            <dt className="text-2xl font-semibold sm:text-3xl">6+</dt>
            <dd className="text-sm text-muted">Produk & eksperimen</dd>
          </div>
          <div>
            <dt className="text-2xl font-semibold sm:text-3xl">3</dt>
            <dd className="text-sm text-muted">Kompetisi developer dimenangkan</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
