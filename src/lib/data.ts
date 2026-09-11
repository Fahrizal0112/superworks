export const company = {
  name: "Superworks",
  email: "hello@superworks.id",
  location: "Indonesia (Remote-first)",
};

export type TeamMember = {
  slug: string;
  name: string;
  photo: string;
  links?: { label: string; href: string }[];
};

export const team: TeamMember[] = [
  {
    slug: "alvie",
    name: "Alvie",
    photo: "/team/alvie.jpg",
  },
  {
    slug: "fahrizal",
    name: "Muchammad Fahrizal",
    photo: "/team/fahrizal.jpg",
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
  stack: string[];
  kind: "shipped" | "concept";
};

export const projects: Project[] = [
  { slug: "kopi-kita", stack: ["Golang", "Next.js", "Midtrans API", "PostgreSQL"], kind: "shipped" },
  { slug: "ocgnn-anomaly-detection", stack: ["Python", "PyTorch", "DGL", "NetworkX"], kind: "shipped" },
  { slug: "sentiment-pulse", stack: ["OpenAI API", "MLflow", "Python"], kind: "shipped" },
  { slug: "cloudpulse", stack: ["Next.js", "Node.js", "Docker", "GCP Monitoring API"], kind: "concept" },
  { slug: "dokuhub", stack: ["Laravel", "MySQL", "Role-based Access"], kind: "concept" },
  { slug: "paylink", stack: ["Go", "Node.js", "REST API"], kind: "concept" },
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
