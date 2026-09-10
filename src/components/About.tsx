import { Cloud, Code2, Layers } from "lucide-react";
import { company } from "@/lib/data";

const pillars = [
  {
    icon: Layers,
    title: "Product-first",
    desc: "Setiap proyek dimulai dari memahami masalah pengguna, bukan langsung loncat ke teknologi.",
  },
  {
    icon: Code2,
    title: "Fullstack execution",
    desc: "Dari frontend, backend, sampai integrasi pembayaran & API pihak ketiga — dikerjakan end-to-end.",
  },
  {
    icon: Cloud,
    title: "Cloud-native",
    desc: "Terbiasa mendesain arsitektur di GCP, AWS, dan Alibaba Cloud yang siap untuk scale.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell py-20 sm:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            About {company.name}
          </h2>
          <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Studio kecil, cakupan kerja end-to-end.
          </p>
          <p className="mt-4 text-muted">{company.description}</p>
        </div>

        <div className="flex flex-col gap-6">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-surface-border bg-surface text-accent">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="mt-1 text-sm text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
