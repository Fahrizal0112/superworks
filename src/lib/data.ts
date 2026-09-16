export const company = {
  name: "Superworks",
  tagline: "Software Development & Applied AI Studio",
  email: "hello@superworks.id",
  phone: "08111235404",
  phoneDisplay: "+62 811-1235-404",
  whatsappUrl: "https://wa.me/628111235404",
  location: "Indonesia (Available Worldwide)",
  availability: "Available for Q2/Q3 2025 Partnerships",
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
      { label: "Portfolio", href: "https://porto-nine-azure.vercel.app/" },
    ],
  },
];

export type Project = {
  slug: string;
  stack: string[];
  kind: "shipped" | "concept";
  domain: "web" | "ai" | "cloud" | "api";
};

export const projects: Project[] = [
  { slug: "kopi-kita", stack: ["Golang", "Next.js", "Midtrans API", "PostgreSQL"], kind: "shipped", domain: "web" },
  { slug: "ocgnn-anomaly-detection", stack: ["Python", "PyTorch", "DGL", "NetworkX"], kind: "shipped", domain: "ai" },
  { slug: "sentiment-pulse", stack: ["OpenAI API", "MLflow", "Python"], kind: "shipped", domain: "ai" },
  { slug: "cloudpulse", stack: ["Next.js", "Node.js", "Docker", "GCP Monitoring API"], kind: "concept", domain: "cloud" },
  { slug: "dokuhub", stack: ["Laravel", "MySQL", "Role-based Access"], kind: "concept", domain: "web" },
  { slug: "paylink", stack: ["Go", "Node.js", "REST API"], kind: "concept", domain: "api" },
];

export type Achievement = {
  title: string;
  competition: string;
  institution: string;
  year: string;
  result: string;
  rank: 1 | 2 | 3;
};

export const achievements: Achievement[] = [
  {
    title: "Competition of Developer 2025",
    competition: "IDTC 2025",
    institution: "ITENAS Bandung",
    year: "2025",
    result: "1st Place (Champion)",
    rank: 1,
  },
  {
    title: "Competition of Developer 2024",
    competition: "UMCC 2024",
    institution: "Universitas Amikom",
    year: "2024",
    result: "2nd Place",
    rank: 2,
  },
  {
    title: "Competition of Developer 2024",
    competition: "MAGE X 2024",
    institution: "Institut Teknologi Sepuluh Nopember (ITS)",
    year: "2024",
    result: "3rd Place",
    rank: 3,
  },
];

export type TechCategory = {
  name: string;
  skills: string[];
};

export const techCategories: TechCategory[] = [
  {
    name: "Frontend & Web",
    skills: ["Next.js", "React 19", "TypeScript", "TailwindCSS", "Vue.js"],
  },
  {
    name: "Backend & Systems",
    skills: ["Golang", "Node.js", "Express.js", "Java Spring Boot", "Laravel", "Django"],
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["Google Cloud Platform", "AWS", "Alibaba Cloud", "Docker", "CI/CD", "Linux"],
  },
  {
    name: "AI, ML & Data",
    skills: ["PyTorch", "Python", "DGL", "OpenAI API", "MLflow", "NetworkX"],
  },
  {
    name: "Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "Redis", "Cloud Storage"],
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

export type Service = {
  id: string;
  icon: "code" | "cloud" | "brain" | "rocket";
  tags: string[];
};

export const services: Service[] = [
  {
    id: "web-saas",
    icon: "code",
    tags: ["Next.js", "React 19", "TypeScript", "High Performance"],
  },
  {
    id: "cloud-devops",
    icon: "cloud",
    tags: ["GCP", "AWS", "Docker", "Scalable APIs"],
  },
  {
    id: "applied-ai",
    icon: "brain",
    tags: ["Graph Neural Networks", "LLMs", "MLflow", "Data Intelligence"],
  },
  {
    id: "product-mvp",
    icon: "rocket",
    tags: ["Idea-to-Product", "Payment Gateways", "Rapid Iteration"],
  },
];
