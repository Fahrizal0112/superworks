export const company = {
  name: "Superworks",
  tagline: "We design, engineer, and ship digital products end-to-end.",
  description:
    "Superworks adalah studio pengembangan software yang dibangun oleh dua orang yang saling melengkapi: satu memimpin arah bisnis dan produk, satu lagi memimpin eksekusi teknis. Kami membantu tim dan bisnis mengubah ide menjadi produk digital yang scalable — dari web app, backend & cloud infrastructure, sampai eksperimen AI/ML.",
  email: "hello@superworks.id",
  location: "Indonesia (Remote-first)",
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  focus: string[];
  links?: { label: string; href: string }[];
};

export const team: TeamMember[] = [
  {
    slug: "alvie",
    name: "Alvie",
    role: "CEO & Co-Founder",
    photo: "/team/alvie.jpg",
    bio: "Alvie memimpin visi produk dan arah bisnis Superworks. Fokusnya ada di menjembatani kebutuhan klien dengan solusi teknis yang tepat guna — mulai dari validasi ide, strategi produk, sampai memastikan setiap proyek yang dikerjakan tim benar-benar memberi dampak ke pengguna dan bisnis, bukan sekadar selesai secara teknis.",
    focus: [
      "Product Strategy",
      "Business Development",
      "Client Partnership",
      "Project Management",
    ],
  },
  {
    slug: "fahrizal",
    name: "Muchammad Fahrizal",
    role: "CTO & Co-Founder",
    photo: "/team/fahrizal.jpg",
    bio: "Fahrizal mengarahkan sisi teknis Superworks — arsitektur sistem, backend, cloud infrastructure, sampai eksplorasi AI/ML. Lulusan Informatika Institut Teknologi Nasional Bandung (GPA 3.61) dengan pengalaman langsung membangun sistem fullstack di berbagai perusahaan, mengelola layanan cloud di GCP/AWS/Alibaba Cloud, serta riset machine learning untuk deteksi anomali di jaringan blockchain.",
    focus: [
      "Cloud Architecture (GCP/AWS)",
      "Fullstack Engineering",
      "Backend & API Design",
      "AI/ML Experimentation",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Fahrizal0112" },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/muchammad-fahrizal",
      },
      { label: "Personal Portfolio", href: "https://porto-nine-azure.vercel.app/" },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  highlight?: string;
  kind: "shipped" | "concept";
};

export const projects: Project[] = [
  {
    slug: "kopi-kita",
    title: "Kopi Kita — Online Café Ordering System",
    category: "Web App · Payments",
    description:
      "Sistem pemesanan kafe berbasis QR code: pelanggan scan kode di meja, pesan langsung dari HP, dan membayar online tanpa harus antre ke kasir. Dibangun bareng dari nol oleh tim Superworks, dari desain alur pemesanan sampai integrasi pembayaran.",
    stack: ["Golang", "Next.js", "Midtrans API", "PostgreSQL"],
    highlight: "Mempercepat alur pesan & bayar, mengurangi antrean kasir",
    kind: "shipped",
  },
  {
    slug: "ocgnn-anomaly-detection",
    title: "OCGNN — Ethereum Anomaly Detection",
    category: "AI / Machine Learning",
    description:
      "Sistem deteksi anomali transaksi blockchain Ethereum menggunakan One-Class Graph Neural Network. Setiap akun direpresentasikan sebagai node (balance, degree, gas usage) dan transaksi sebagai edge, lalu dipelajari dengan pendekatan hypersphere learning untuk memisahkan akun normal dan mencurigakan.",
    stack: ["Python", "PyTorch", "DGL", "NetworkX"],
    highlight: "95.78% accuracy · 99.81% recall · 88.34% F1-score",
    kind: "shipped",
  },
  {
    slug: "sentiment-pulse",
    title: "Sentiment Pulse — Sentiment Analysis Automation",
    category: "AI / MLOps",
    description:
      "Pipeline otomatis untuk mengklasifikasikan data teks menjadi sentimen positif/negatif secara real-time. Terhubung langsung ke database, memakai model bahasa OpenAI untuk analisis, dan MLflow untuk experiment tracking, versioning, sampai deployment model.",
    stack: ["OpenAI API", "MLflow", "Python"],
    highlight: "Pipeline ML yang reproducible dengan campur tangan manual minimal",
    kind: "shipped",
  },
  {
    slug: "cloudpulse",
    title: "CloudPulse — Multi-Cloud Monitoring Dashboard",
    category: "Cloud / Internal Tool",
    description:
      "Dashboard internal untuk memantau resource di beberapa cloud provider sekaligus — uptime, biaya, log, dan alert — dalam satu tampilan. Dibuat untuk mempermudah tim Superworks (dan klien) mengawasi infrastruktur tanpa harus bolak-balik console provider.",
    stack: ["Next.js", "Node.js", "Docker", "GCP Monitoring API"],
    kind: "concept",
  },
  {
    slug: "dokuhub",
    title: "DokuHub — Document & Certification Portal",
    category: "Web App · Internal Systems",
    description:
      "Platform manajemen dokumen dan sertifikat berbasis peran, dirancang untuk institusi yang perlu mengelola arsip resmi (sertifikat, akreditasi, berkas legal) secara aman dan mudah diaudit.",
    stack: ["Laravel", "MySQL", "Role-based Access"],
    kind: "concept",
  },
  {
    slug: "paylink",
    title: "PayLink — Payment Gateway Integration Kit",
    category: "Backend / API",
    description:
      "Modul backend yang bisa dipakai ulang untuk mengintegrasikan payment gateway ke platform konten digital — cocok untuk kebutuhan seperti top-up, langganan, atau pembayaran dalam aplikasi hiburan dan gaming.",
    stack: ["Go", "Node.js", "REST API"],
    kind: "concept",
  },
];

export const achievements = [
  {
    title: "IDTC — ITENAS, Competition of Developer 2025",
    result: "1st Place",
  },
  {
    title: "UMCC — Amikom, Competition of Developer 2024",
    result: "2nd Place",
  },
  {
    title: "MAGE X — ITS, Competition of Developer 2024",
    result: "3rd Place",
  },
];

export const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "Express.js",
  "Golang",
  "Laravel",
  "Django",
  "Vue.js",
  "Java Spring Boot",
  "Flutter",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Google Cloud Platform",
  "AWS",
  "Alibaba Cloud",
  "TailwindCSS",
];
