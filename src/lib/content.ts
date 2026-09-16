import type { Lang } from "./language-context";

type ProjectText = {
  title: string;
  category: string;
  description: string;
  highlight?: string;
};

export type Dict = {
  nav: {
    services: string;
    about: string;
    team: string;
    projects: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    availability: string;
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    terminal: {
      header: string;
      status: string;
      items: { label: string; value: string; accent?: boolean }[];
    };
    stats: { value: string; label: string; sub?: string }[];
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    items: Record<string, { title: string; desc: string }>;
  };
  about: {
    kicker: string;
    title: string;
    description: string;
    pillars: { title: string; desc: string }[];
  };
  team: {
    kicker: string;
    title: string;
    subtitle: string;
    members: Record<
      string,
      { role: string; bio: string; focus: string[] }
    >;
  };
  projects: {
    kicker: string;
    title: string;
    note: string;
    shippedLabel: string;
    conceptLabel: string;
    filterAll: string;
    filterShipped: string;
    filterAI: string;
    filterCloud: string;
    items: Record<string, ProjectText>;
  };
  achievements: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  tech: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  contact: {
    badge: string;
    title: string;
    desc: string;
    copyEmail: string;
    copiedToast: string;
    copyPhone: string;
    copiedPhoneToast: string;
    sendDirect: string;
    whatsappCTA: string;
    sla: string;
    topicsLabel: string;
    topics: string[];
  };
  footer: {
    status: string;
    builtBy: (names: string) => string;
  };
};

export const content: Record<Lang, Dict> = {
  id: {
    nav: {
      services: "Layanan",
      about: "Tentang",
      team: "Tim",
      projects: "Proyek",
      contact: "Kontak",
      cta: "Hubungi Kami",
    },
    hero: {
      badge: "Studio Software Boutique",
      availability: "Terbuka untuk Kemitraan Q2/Q3 2025",
      headingPrefix: "Kami merancang & membangun",
      headingHighlight: "software kelas dunia.",
      subtitle:
        "Superworks adalah studio rekayasa perangkat lunak yang dijalankan langsung oleh CEO & CTO. Kami mengubah visi bisnis yang kompleks menjadi produk digital berkinerja tinggi, arsitektur cloud tangguh, dan sistem AI terapan.",
      ctaPrimary: "Lihat Karya Kami",
      ctaSecondary: "Konsultasi Proyek",
      terminal: {
        header: "superworks.terminal — active session",
        status: "PRODUCTION_READY",
        items: [
          { label: "Core Execution", value: "Direct Founder Ownership (Zero Bureaucracy)", accent: true },
          { label: "Engineering Scope", value: "Fullstack Web · Cloud Native · Applied AI" },
          { label: "Cloud Platforms", value: "GCP · AWS · Alibaba Cloud (Multi-region)" },
          { label: "Track Record", value: "3 National Developer Competition Wins (IDTC, UMCC, MAGE X)", accent: true },
        ],
      },
      stats: [
        { value: "2", label: "Founders", sub: "CEO & CTO Hand-on" },
        { value: "3", label: "Juara Kompetisi", sub: "Developer Nasional" },
        { value: "6+", label: "Produk & Sistem", sub: "Rilis & Inovasi" },
        { value: "100%", label: "Direct Ownership", sub: "Kualitas Tanpa Kompromi" },
      ],
    },
    services: {
      kicker: "Kapabilitas & Solusi",
      title: "Rekayasa perangkat lunak dari ide hingga skala produksi.",
      subtitle:
        "Kami memadukan strategi produk yang tajam dengan eksekusi teknis tingkat lanjut untuk membangun solusi yang cepat, stabil, dan scalable.",
      items: {
        "web-saas": {
          title: "Web Apps & Modern SaaS",
          desc: "Pengembangan platform web modern berperforma tinggi dengan Next.js, React 19, dan TypeScript. Desain antarmuka responsif, arsitektur termodularisasi, dan load speed sub-detik untuk pengalaman pengguna maksimal.",
        },
        "cloud-devops": {
          title: "Cloud Infrastructure & DevOps",
          desc: "Arsitektur cloud tangguh di GCP, AWS, dan Alibaba Cloud. Containerization Docker, pipeline CI/CD terotomasi, load balancing, serta monitoring server 24/7 dengan target zero-downtime.",
        },
        "applied-ai": {
          title: "Applied AI & Data Systems",
          desc: "Penerapan machine learning praktis: One-Class Graph Neural Networks untuk deteksi anomali transaksi, integrasi LLM cerdas, dan pipeline MLOps reproducible dengan MLflow.",
        },
        "product-mvp": {
          title: "Product MVP & Payment Integrations",
          desc: "Akselerasi produk dari ide ke pasar dalam hitungan minggu. Integrasi payment gateway (Midtrans, PayLink), sistem otorisasi multi-level, dan REST/GraphQL API yang siap diuji pengguna nyata.",
        },
      },
    },
    about: {
      kicker: "Filosofi Studio",
      title: "Studio ramping dengan kapabilitas end-to-end tanpa batas.",
      description:
        "Superworks dibangun oleh dua partner komplementer: satu memimpin visi bisnis dan strategi produk, satu lagi mengarahkan arsitektur teknis dan rekayasa cloud/AI. Klien kami berkolaborasi langsung dengan para pengambil keputusan utama — memastikan setiap baris kode dan keputusan arsitektur selaras dengan tujuan bisnis Anda.",
      pillars: [
        {
          title: "Direct Founder Access",
          desc: "Tidak ada perantara atau project manager berlapis. Anda berdiskusi dan berkolaborasi langsung dengan CEO dan CTO yang menulis kode.",
        },
        {
          title: "Fullstack & Cloud-Native",
          desc: "Dari desain alur pengguna, backend berkonkurensi tinggi, hingga deployment multi-cloud yang siap menampung lonjakan traffic.",
        },
        {
          title: "Engineering Rigor",
          desc: "Setiap solusi dibangun dengan standar rekayasa ketat: modular, terdokumentasi, scalable, dan siap diaudit keamanannya.",
        },
      ],
    },
    team: {
      kicker: "Kepemimpinan Studio",
      title: "Dua partner, satu sinergi eksekusi yang solid.",
      subtitle: "Kombinasi keahlian produk dan ketangguhan arsitektur teknis untuk mewujudkan produk digital terbaik.",
      members: {
        alvie: {
          role: "CEO & Co-Founder",
          bio: "Alvie memimpin visi produk dan strategi bisnis Superworks. Berfokus pada penajaman proposisi nilai klien, validasi alur bisnis, serta memastikan setiap solusi perangkat lunak yang diluncurkan memberikan dampak riil dan terukur terhadap pertumbuhan bisnis.",
          focus: [
            "Strategi Produk & Go-to-Market",
            "Pengembangan Bisnis & Kemitraan",
            "Validasi Solusi Digital",
            "Product Architecture",
          ],
        },
        fahrizal: {
          role: "CTO & Co-Founder",
          bio: "Muchammad Fahrizal memimpin rekayasa teknis, arsitektur sistem, infrastruktur cloud, dan riset AI/ML di Superworks. Lulusan Informatika Institut Teknologi Nasional Bandung dengan rekam jejak memenangkan berbagai kompetisi developer nasional serta pengalaman langsung di ekosistem GCP, AWS, dan Alibaba Cloud.",
          focus: [
            "Cloud Infrastructure (GCP / AWS)",
            "High-concurrency Backend & API",
            "Applied AI / Graph Neural Networks",
            "Fullstack Engineering",
          ],
        },
      },
    },
    projects: {
      kicker: "Karya Pilihan & Inovasi",
      title: "Produk yang sudah dirilis dan riset sistem internal.",
      note: "Portofolio mencakup solusi nyata yang telah dideploy ke pengguna serta inisiatif produk internal yang sedang dikembangkan.",
      shippedLabel: "Rilis Produksi",
      conceptLabel: "Konsep & R&D",
      filterAll: "Semua Karya",
      filterShipped: "Rilis Produksi",
      filterAI: "AI & Machine Learning",
      filterCloud: "Cloud & Sistem",
      items: {
        "kopi-kita": {
          title: "Kopi Kita — Online Café Ordering System",
          category: "Web Application · FinTech",
          description:
            "Sistem pemesanan kafe nirsentuh berbasis QR Code: pelanggan memindai kode di meja, memilih menu dari peramban HP, dan melakukan pembayaran online instan tanpa antre di kasir.",
          highlight: "Mereduksi waktu antrean kasir hingga 70% & rekonsiliasi pembayaran otomatis via Midtrans",
        },
        "ocgnn-anomaly-detection": {
          title: "OCGNN — Ethereum Anomaly Detection",
          category: "Applied AI / Blockchain Security",
          description:
            "Sistem deteksi anomali transaksi blockchain Ethereum menggunakan One-Class Graph Neural Network. Memetakan akun sebagai node multi-fitur dan transaksi sebagai edge untuk mendeteksi ancaman secara presisi.",
          highlight: "95.78% akurasi · 99.81% recall · 88.34% F1-score pada dataset Ethereum riil",
        },
        "sentiment-pulse": {
          title: "Sentiment Pulse — Sentiment Analysis Automation",
          category: "AI / MLOps Pipeline",
          description:
            "Pipeline otomatis untuk mengklasifikasikan data teks menjadi sentimen positif/negatif secara real-time. Terhubung langsung ke database, memakai model bahasa OpenAI untuk analisis, dan MLflow untuk experiment tracking sampai deployment.",
          highlight: "Pipeline ML otomatis end-to-end dengan campur tangan manual minimal",
        },
        cloudpulse: {
          title: "CloudPulse — Multi-Cloud Monitoring Dashboard",
          category: "Cloud Ops / Internal Systems",
          description:
            "Dashboard pemantauan terpusat untuk memantau resource di berbagai provider cloud (GCP, AWS) sekaligus — melacak uptime, estimasi biaya, audit log, dan peringatan dini anomali sistem.",
          highlight: "Visibilitas infrastruktur terpadu tanpa berpindah konsol provider",
        },
        dokuhub: {
          title: "DokuHub — Document & Certification Portal",
          category: "Enterprise Web / Security",
          description:
            "Platform manajemen arsip dan sertifikasi digital dengan kontrol akses berbasis peran (RBAC), dirancang untuk institusi yang membutuhkan penyimpanan berkas resmi dengan audit trail yang ketat.",
          highlight: "Keamanan dokumen tingkat enterprise dengan jejak audit transparan",
        },
        paylink: {
          title: "PayLink — Payment Gateway Integration Kit",
          category: "High-throughput API / FinTech",
          description:
            "Modul backend terstandarisasi untuk mengintegrasikan payment gateway ke platform digital — dirancang untuk performa tinggi pada transaksi top-up, langganan, dan checkout digital.",
          highlight: "Arsitektur Go yang ringan dan tahan lonjakan request transaksi",
        },
      },
    },
    achievements: {
      kicker: "Rekam Jejak Teruji",
      title: "Prestasi di panggung kompetisi developer bergengsi.",
      subtitle: "Keahlian rekayasa kami ditempa dan diakui secara objektif melalui kejuaraan kompetisi teknologi nasional.",
    },
    tech: {
      kicker: "Standar Teknologi",
      title: "Teknologi modern yang kami andalkan sehari-hari.",
      subtitle: "Kami memilih perangkat rekayasa terbaik untuk memastikan kecepatan, keamanan, dan skalabilitas jangka panjang.",
    },
    contact: {
      badge: "Mulai Kolaborasi",
      title: "Mari diskusikan visi produk digital Anda bersama kami.",
      desc: "Kirim pesan atau hubungi kami langsung via WhatsApp atau email. Kami akan merespons dalam waktu singkat untuk menjadwalkan sesi konsultasi mendalam.",
      copyEmail: "Salin Alamat Email",
      copiedToast: "Alamat email berhasil disalin!",
      copyPhone: "Salin No. WhatsApp",
      copiedPhoneToast: "Nomor WhatsApp berhasil disalin!",
      sendDirect: "Kirim Email Sekarang",
      whatsappCTA: "Chat WhatsApp",
      sla: "Waktu respon rata-rata < 24 jam",
      topicsLabel: "Topik Diskusi:",
      topics: [
        "Web App & SaaS Development",
        "Cloud Architecture & DevOps",
        "Applied AI & Machine Learning",
        "Product MVP & Consultation",
      ],
    },
    footer: {
      status: "Semua sistem & layanan studio beroperasi optimal",
      builtBy: (names) => `Dirancang & direkayasa oleh ${names}.`,
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      team: "Team",
      projects: "Work",
      contact: "Contact",
      cta: "Let's Talk",
    },
    hero: {
      badge: "Boutique Software Studio",
      availability: "Open for Q2/Q3 2025 Partnerships",
      headingPrefix: "We engineer & deliver",
      headingHighlight: "world-class software.",
      subtitle:
        "Superworks is a software engineering studio run hands-on by its CEO & CTO. We turn complex business visions into high-performance digital products, resilient cloud architectures, and applied AI systems.",
      ctaPrimary: "Explore Our Work",
      ctaSecondary: "Book Discovery",
      terminal: {
        header: "superworks.terminal — active session",
        status: "PRODUCTION_READY",
        items: [
          { label: "Core Execution", value: "Direct Founder Ownership (Zero Bureaucracy)", accent: true },
          { label: "Engineering Scope", value: "Fullstack Web · Cloud Native · Applied AI" },
          { label: "Cloud Platforms", value: "GCP · AWS · Alibaba Cloud (Multi-region)" },
          { label: "Track Record", value: "3 National Developer Competition Wins (IDTC, UMCC, MAGE X)", accent: true },
        ],
      },
      stats: [
        { value: "2", label: "Founders", sub: "CEO & CTO Hands-on" },
        { value: "3", label: "Competition Titles", sub: "National Developer Wins" },
        { value: "6+", label: "Products & Systems", sub: "Shipped & In Innovation" },
        { value: "100%", label: "Direct Ownership", sub: "Uncompromised Craft" },
      ],
    },
    services: {
      kicker: "Capabilities & Solutions",
      title: "End-to-end software engineering from concept to scale.",
      subtitle:
        "We unite sharp product strategy with advanced technical execution to build solutions that are fast, dependable, and built to scale.",
      items: {
        "web-saas": {
          title: "Web Apps & Modern SaaS",
          desc: "High-performance modern web platforms built with Next.js, React 19, and TypeScript. Fluid responsive interfaces, modular component architecture, and sub-second load times for peak conversion.",
        },
        "cloud-devops": {
          title: "Cloud Infrastructure & DevOps",
          desc: "Resilient cloud architecture on GCP, AWS, and Alibaba Cloud. Containerized Docker microservices, automated CI/CD pipelines, load balancing, and 24/7 monitoring targeting zero-downtime.",
        },
        "applied-ai": {
          title: "Applied AI & Data Systems",
          desc: "Practical machine learning applications: One-Class Graph Neural Networks for transaction anomaly detection, intelligent LLM integration, and reproducible MLOps with MLflow.",
        },
        "product-mvp": {
          title: "Product MVP & Payment Integrations",
          desc: "Accelerate your product from idea to market in weeks. Turnkey payment gateway integrations (Midtrans, PayLink), role-based auth systems, and robust APIs ready for real customers.",
        },
      },
    },
    about: {
      kicker: "Studio Philosophy",
      title: "Lean studio agility with limitless end-to-end execution.",
      description:
        "Superworks is forged by two complementary partners: one driving product vision and business strategy, the other leading system architecture and cloud/AI engineering. Our clients partner directly with the principal builders — ensuring every line of code directly furthers your business milestones.",
      pillars: [
        {
          title: "Direct Founder Access",
          desc: "No layers of account managers or project middlemen. You communicate directly with the CEO and CTO who write and review the code.",
        },
        {
          title: "Fullstack & Cloud-Native",
          desc: "From thoughtful user journeys and high-throughput backends to multi-cloud deployment topologies ready for surging traffic.",
        },
        {
          title: "Engineering Rigor",
          desc: "Every build meets stringent engineering standards: modular code, comprehensive documentation, and audit-ready security.",
        },
      ],
    },
    team: {
      kicker: "Leadership",
      title: "Two complementary leaders, one unified drive.",
      subtitle: "Combining product intuition with deep engineering prowess to deliver exceptional digital outcomes.",
      members: {
        alvie: {
          role: "CEO & Co-Founder",
          bio: "Alvie directs Superworks' product vision and business strategy. He specializes in clarifying value propositions, validating business workflows, and ensuring every software solution delivers genuine, measurable impact to bottom-line growth.",
          focus: [
            "Product Strategy & Go-to-Market",
            "Business Development & Partnerships",
            "Digital Solution Validation",
            "Product Architecture",
          ],
        },
        fahrizal: {
          role: "CTO & Co-Founder",
          bio: "Muchammad Fahrizal oversees technical execution, system architecture, cloud infrastructure, and AI/ML initiatives at Superworks. A Computer Science graduate from Institut Teknologi Nasional Bandung with multiple national developer competition championships and deep cloud expertise.",
          focus: [
            "Cloud Infrastructure (GCP / AWS)",
            "High-concurrency Backend & APIs",
            "Applied AI / Graph Neural Networks",
            "Fullstack Engineering",
          ],
        },
      },
    },
    projects: {
      kicker: "Selected Work & Innovation",
      title: "Shipped production applications and internal R&D systems.",
      note: "Our portfolio features battle-tested systems deployed to real users alongside proprietary internal platforms currently being engineered.",
      shippedLabel: "Shipped",
      conceptLabel: "Concept & R&D",
      filterAll: "All Work",
      filterShipped: "Shipped",
      filterAI: "AI & Machine Learning",
      filterCloud: "Cloud & Systems",
      items: {
        "kopi-kita": {
          title: "Kopi Kita — Online Café Ordering System",
          category: "Web Application · FinTech",
          description:
            "A contactless café ordering system powered by QR codes: patrons scan at their table, browse the menu in mobile browsers, and settle payments instantly without standing in cashier queues.",
          highlight: "Reduces cashier wait time by up to 70% with automated Midtrans settlement",
        },
        "ocgnn-anomaly-detection": {
          title: "OCGNN — Ethereum Anomaly Detection",
          category: "Applied AI / Blockchain Security",
          description:
            "An Ethereum transaction anomaly detection system powered by a One-Class Graph Neural Network. Models accounts as multi-featured nodes and transactions as edges to flag illicit activities with high precision.",
          highlight: "95.78% accuracy · 99.81% recall · 88.34% F1-score on live Ethereum transaction graph",
        },
        "sentiment-pulse": {
          title: "Sentiment Pulse — Sentiment Analysis Automation",
          category: "AI / MLOps Pipeline",
          description:
            "An automated pipeline classifying streaming text into polarity scores in real time. Plugs directly into databases, utilizing OpenAI models for inference and MLflow for end-to-end experiment tracking and deployment.",
          highlight: "Zero-touch continuous ML pipeline with automated evaluation",
        },
        cloudpulse: {
          title: "CloudPulse — Multi-Cloud Monitoring Dashboard",
          category: "Cloud Ops / Internal Systems",
          description:
            "A unified observability dashboard aggregating resources across disparate cloud providers (GCP, AWS) — tracking uptime, cost burns, security logs, and anomaly triggers in a unified pane of glass.",
          highlight: "Single-pane infrastructure visibility eliminating console switching",
        },
        dokuhub: {
          title: "DokuHub — Document & Certification Portal",
          category: "Enterprise Web / Security",
          description:
            "A role-based digital asset and certificate repository designed for organizations demanding strict compliance, tamper-evident record keeping, and rigorous audit trails.",
          highlight: "Enterprise-grade credential validation with transparent audit trails",
        },
        paylink: {
          title: "PayLink — Payment Gateway Integration Kit",
          category: "High-throughput API / FinTech",
          description:
            "A standardized, high-performance Go backend kit for embedding payment gateways into digital storefronts — optimized for high concurrency during promotions, subscriptions, and top-ups.",
          highlight: "Lightweight Go microservice resilient against traffic spikes",
        },
      },
    },
    achievements: {
      kicker: "Proven Pedigree",
      title: "Tested & recognized on national developer stages.",
      subtitle: "Our engineering depth is objectively verified through prestigious national developer championships.",
    },
    tech: {
      kicker: "Engineering Standards",
      title: "The modern tech stack we rely on every day.",
      subtitle: "We curate best-in-class tooling to guarantee performance, maintainability, and long-term scalability.",
    },
    contact: {
      badge: "Initiate Partnership",
      title: "Let's discuss how we can engineer your digital vision.",
      desc: "Send us a note or chat directly with us via WhatsApp or email. We'll connect promptly to schedule a technical discovery session.",
      copyEmail: "Copy Email Address",
      copiedToast: "Email address copied to clipboard!",
      copyPhone: "Copy WhatsApp No.",
      copiedPhoneToast: "WhatsApp number copied to clipboard!",
      sendDirect: "Send Email Directly",
      whatsappCTA: "Chat on WhatsApp",
      sla: "Average response time < 24 hours",
      topicsLabel: "Inquiry Focus:",
      topics: [
        "Web App & SaaS Development",
        "Cloud Architecture & DevOps",
        "Applied AI & Machine Learning",
        "Product MVP & Consultation",
      ],
    },
    footer: {
      status: "All studio systems and services operational",
      builtBy: (names) => `Designed & engineered by ${names}.`,
    },
  },
};

