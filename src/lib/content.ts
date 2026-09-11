import type { Lang } from "./language-context";

type ProjectText = {
  title: string;
  category: string;
  description: string;
  highlight?: string;
};

type Dict = {
  nav: {
    about: string;
    team: string;
    projects: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
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
    items: Record<string, ProjectText>;
  };
  achievements: {
    kicker: string;
    title: string;
  };
  tech: {
    kicker: string;
    title: string;
  };
  contact: {
    badge: string;
    title: string;
    desc: string;
  };
  footer: {
    builtBy: (names: string) => string;
  };
};

export const content: Record<Lang, Dict> = {
  id: {
    nav: {
      about: "Tentang",
      team: "Tim",
      projects: "Proyek",
      contact: "Kontak",
      cta: "Hubungi Kami",
    },
    hero: {
      badge: "Studio software · 2 co-founder, satu tim",
      headingPrefix: "Kami mengubah ide menjadi",
      headingHighlight: "software yang siap pakai.",
      subtitle:
        "Kami mendesain, membangun, dan merilis produk digital dari ujung ke ujung. Superworks dijalankan oleh CEO & CTO yang langsung terjun ke setiap proyek — dari strategi produk sampai baris kode dan cloud infrastructure.",
      ctaPrimary: "Lihat proyek kami",
      ctaSecondary: "Kenalan sama tim",
      stats: [
        { value: "2", label: "Founders" },
        { value: "6+", label: "Produk & eksperimen" },
        { value: "3", label: "Kompetisi developer dimenangkan" },
      ],
    },
    about: {
      kicker: "About Superworks",
      title: "Studio kecil, cakupan kerja end-to-end.",
      description:
        "Superworks adalah studio pengembangan software yang dibangun oleh dua orang yang saling melengkapi: satu memimpin arah bisnis dan produk, satu lagi memimpin eksekusi teknis. Kami membantu tim dan bisnis mengubah ide menjadi produk digital yang scalable — dari web app, backend & cloud infrastructure, sampai eksperimen AI/ML.",
      pillars: [
        {
          title: "Product-first",
          desc: "Setiap proyek dimulai dari memahami masalah pengguna, bukan langsung loncat ke teknologi.",
        },
        {
          title: "Fullstack execution",
          desc: "Dari frontend, backend, sampai integrasi pembayaran & API pihak ketiga — dikerjakan end-to-end.",
        },
        {
          title: "Cloud-native",
          desc: "Terbiasa mendesain arsitektur di GCP, AWS, dan Alibaba Cloud yang siap untuk scale.",
        },
      ],
    },
    team: {
      kicker: "Tim Kami",
      title: "Dua orang, dua peran yang saling melengkapi.",
      members: {
        alvie: {
          role: "CEO & Co-Founder",
          bio: "Alvie memimpin visi produk dan arah bisnis Superworks. Fokusnya ada di menjembatani kebutuhan klien dengan solusi teknis yang tepat guna — mulai dari validasi ide, strategi produk, sampai memastikan setiap proyek yang dikerjakan tim benar-benar memberi dampak ke pengguna dan bisnis, bukan sekadar selesai secara teknis.",
          focus: [
            "Strategi Produk",
            "Pengembangan Bisnis",
            "Kemitraan Klien",
            "Manajemen Proyek",
          ],
        },
        fahrizal: {
          role: "CTO & Co-Founder",
          bio: "Fahrizal mengarahkan sisi teknis Superworks — arsitektur sistem, backend, cloud infrastructure, sampai eksplorasi AI/ML. Lulusan Informatika Institut Teknologi Nasional Bandung (GPA 3.61) dengan pengalaman langsung membangun sistem fullstack di berbagai perusahaan, mengelola layanan cloud di GCP/AWS/Alibaba Cloud, serta riset machine learning untuk deteksi anomali di jaringan blockchain.",
          focus: [
            "Arsitektur Cloud (GCP/AWS)",
            "Fullstack Engineering",
            "Desain Backend & API",
            "Eksplorasi AI/ML",
          ],
        },
      },
    },
    projects: {
      kicker: "Karya Pilihan",
      title: "Proyek yang sudah dikerjakan & konsep produk internal.",
      note: "Tiga di antaranya adalah proyek yang benar-benar sudah dibangun dan diuji tim Superworks. Sisanya adalah konsep produk internal yang sedang dikembangkan.",
      shippedLabel: "Rilis",
      conceptLabel: "Konsep",
      items: {
        "kopi-kita": {
          title: "Kopi Kita — Online Café Ordering System",
          category: "Aplikasi Web · Pembayaran",
          description:
            "Sistem pemesanan kafe berbasis QR code: pelanggan scan kode di meja, pesan langsung dari HP, dan membayar online tanpa harus antre ke kasir. Dibangun bareng dari nol oleh tim Superworks, dari desain alur pemesanan sampai integrasi pembayaran.",
          highlight: "Mempercepat alur pesan & bayar, mengurangi antrean kasir",
        },
        "ocgnn-anomaly-detection": {
          title: "OCGNN — Ethereum Anomaly Detection",
          category: "AI / Machine Learning",
          description:
            "Sistem deteksi anomali transaksi blockchain Ethereum menggunakan One-Class Graph Neural Network. Setiap akun direpresentasikan sebagai node (balance, degree, gas usage) dan transaksi sebagai edge, lalu dipelajari dengan pendekatan hypersphere learning untuk memisahkan akun normal dan mencurigakan.",
          highlight: "95.78% accuracy · 99.81% recall · 88.34% F1-score",
        },
        "sentiment-pulse": {
          title: "Sentiment Pulse — Sentiment Analysis Automation",
          category: "AI / MLOps",
          description:
            "Pipeline otomatis untuk mengklasifikasikan data teks menjadi sentimen positif/negatif secara real-time. Terhubung langsung ke database, memakai model bahasa OpenAI untuk analisis, dan MLflow untuk experiment tracking, versioning, sampai deployment model.",
          highlight: "Pipeline ML yang reproducible dengan campur tangan manual minimal",
        },
        cloudpulse: {
          title: "CloudPulse — Multi-Cloud Monitoring Dashboard",
          category: "Cloud / Internal Tool",
          description:
            "Dashboard internal untuk memantau resource di beberapa cloud provider sekaligus — uptime, biaya, log, dan alert — dalam satu tampilan. Dibuat untuk mempermudah tim Superworks (dan klien) mengawasi infrastruktur tanpa harus bolak-balik console provider.",
        },
        dokuhub: {
          title: "DokuHub — Document & Certification Portal",
          category: "Aplikasi Web · Internal Systems",
          description:
            "Platform manajemen dokumen dan sertifikat berbasis peran, dirancang untuk institusi yang perlu mengelola arsip resmi (sertifikat, akreditasi, berkas legal) secara aman dan mudah diaudit.",
        },
        paylink: {
          title: "PayLink — Payment Gateway Integration Kit",
          category: "Backend / API",
          description:
            "Modul backend yang bisa dipakai ulang untuk mengintegrasikan payment gateway ke platform konten digital — cocok untuk kebutuhan seperti top-up, langganan, atau pembayaran dalam aplikasi hiburan dan gaming.",
        },
      },
    },
    achievements: {
      kicker: "Track Record",
      title: "Diasah lewat kompetisi developer.",
    },
    tech: {
      kicker: "Tech Stack",
      title: "Tools yang kami pakai sehari-hari.",
    },
    contact: {
      badge: "Ada ide proyek?",
      title: "Mari obrolin kebutuhan produk atau software kamu.",
      desc: "Kirim email dan ceritakan sedikit tentang proyeknya — kami akan balas untuk diskusi lebih lanjut.",
    },
    footer: {
      builtBy: (names) => `Dibangun oleh ${names}.`,
    },
  },
  en: {
    nav: {
      about: "About",
      team: "Team",
      projects: "Projects",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      badge: "Software studio · 2 founders, one team",
      headingPrefix: "We turn ideas into",
      headingHighlight: "shipped software.",
      subtitle:
        "We design, engineer, and ship digital products end-to-end. Superworks is run by a CEO & CTO who get hands-on with every project — from product strategy to code and cloud infrastructure.",
      ctaPrimary: "See our work",
      ctaSecondary: "Meet the team",
      stats: [
        { value: "2", label: "Founders" },
        { value: "6+", label: "Products & experiments" },
        { value: "3", label: "Developer competitions won" },
      ],
    },
    about: {
      kicker: "About Superworks",
      title: "Small studio, end-to-end scope.",
      description:
        "Superworks is a software development studio built by two people who complement each other: one leads business and product direction, the other leads technical execution. We help teams and businesses turn ideas into scalable digital products — from web apps, backend & cloud infrastructure, to AI/ML experiments.",
      pillars: [
        {
          title: "Product-first",
          desc: "Every project starts with understanding the user's problem, not jumping straight to technology.",
        },
        {
          title: "Fullstack execution",
          desc: "From frontend and backend to payment and third-party API integrations — handled end-to-end.",
        },
        {
          title: "Cloud-native",
          desc: "Experienced designing architecture on GCP, AWS, and Alibaba Cloud that's ready to scale.",
        },
      ],
    },
    team: {
      kicker: "The Team",
      title: "Two people, two complementary roles.",
      members: {
        alvie: {
          role: "CEO & Co-Founder",
          bio: "Alvie leads Superworks' product vision and business direction. His focus is bridging client needs with the right technical solutions — from idea validation and product strategy to making sure every project the team delivers creates real impact for users and the business, not just technical completion.",
          focus: [
            "Product Strategy",
            "Business Development",
            "Client Partnership",
            "Project Management",
          ],
        },
        fahrizal: {
          role: "CTO & Co-Founder",
          bio: "Fahrizal leads Superworks' technical direction — system architecture, backend, cloud infrastructure, and AI/ML exploration. A Computer Science graduate from Institut Teknologi Nasional Bandung (GPA 3.61) with hands-on experience building fullstack systems across companies, managing cloud services on GCP/AWS/Alibaba Cloud, and researching machine learning for blockchain anomaly detection.",
          focus: [
            "Cloud Architecture (GCP/AWS)",
            "Fullstack Engineering",
            "Backend & API Design",
            "AI/ML Experimentation",
          ],
        },
      },
    },
    projects: {
      kicker: "Selected Work",
      title: "Shipped projects & internal product concepts.",
      note: "Three of these are projects actually built and tested by the Superworks team. The rest are internal product concepts currently in development.",
      shippedLabel: "Shipped",
      conceptLabel: "Concept",
      items: {
        "kopi-kita": {
          title: "Kopi Kita — Online Café Ordering System",
          category: "Web App · Payments",
          description:
            "An online café ordering system: customers scan a QR code at their table, order directly from their phone, and pay online without queueing at the cashier. Built from scratch by the Superworks team, from ordering flow design to payment integration.",
          highlight: "Speeds up the order & pay flow, reduces cashier queues",
        },
        "ocgnn-anomaly-detection": {
          title: "OCGNN — Ethereum Anomaly Detection",
          category: "AI / Machine Learning",
          description:
            "An anomaly detection system for Ethereum blockchain transactions using a One-Class Graph Neural Network. Each account is represented as a node (balance, degree, gas usage) and each transaction as an edge, learned with a hypersphere learning approach to separate normal accounts from suspicious ones.",
          highlight: "95.78% accuracy · 99.81% recall · 88.34% F1-score",
        },
        "sentiment-pulse": {
          title: "Sentiment Pulse — Sentiment Analysis Automation",
          category: "AI / MLOps",
          description:
            "An automated pipeline that classifies text data into positive/negative sentiment in real time. Connected directly to a database, using OpenAI's language model for analysis and MLflow for experiment tracking, versioning, and deployment.",
          highlight: "A reproducible ML pipeline with minimal manual intervention",
        },
        cloudpulse: {
          title: "CloudPulse — Multi-Cloud Monitoring Dashboard",
          category: "Cloud / Internal Tool",
          description:
            "An internal dashboard for monitoring resources across multiple cloud providers at once — uptime, cost, logs, and alerts — in a single view. Built to help the Superworks team (and clients) keep an eye on infrastructure without switching between provider consoles.",
        },
        dokuhub: {
          title: "DokuHub — Document & Certification Portal",
          category: "Web App · Internal Systems",
          description:
            "A role-based document and certificate management platform, designed for institutions that need to manage official records (certificates, accreditation, legal documents) securely and with a clear audit trail.",
        },
        paylink: {
          title: "PayLink — Payment Gateway Integration Kit",
          category: "Backend / API",
          description:
            "A reusable backend module for integrating payment gateways into digital content platforms — suited for use cases like top-ups, subscriptions, or in-app payments for entertainment and gaming apps.",
        },
      },
    },
    achievements: {
      kicker: "Track Record",
      title: "Sharpened through developer competitions.",
    },
    tech: {
      kicker: "Tech Stack",
      title: "Tools we use every day.",
    },
    contact: {
      badge: "Got a project idea?",
      title: "Let's talk about your product or software needs.",
      desc: "Send an email and tell us a bit about the project — we'll get back to you to discuss further.",
    },
    footer: {
      builtBy: (names) => `Built by ${names}.`,
    },
  },
};
