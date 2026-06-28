// ─────────────────────────────────────────────────────────────
// Personnalisez ce fichier : informations personnelles + projets.
// Les URLs `live` pointent vers vos déploiements Vercel.
// ─────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Moussa",
  fullName: "Moussa", // ← remplacez par votre nom complet
  title: "Développeur Fullstack",
  tagline:
    "Je conçois des produits web complets — de la base de données à la dernière animation — avec autant de soin pour le code que pour le pixel.",
  about: [
    "Développeur fullstack, je travaille aussi bien sur l'architecture d'une API et la modélisation de données que sur la direction artistique d'une interface.",
    "Cette double casquette — ingénierie et design — me permet de livrer des produits cohérents de bout en bout, où la technique sert toujours l'expérience.",
    "Les quatre projets ci-dessous illustrent cette polyvalence : deux applications fullstack avec authentification et temps réel, et deux sites vitrines centrés sur l'esthétique et la performance.",
  ],
  email: "moussa.bam.pro@gmail.com",
  github: "https://github.com/MoussaBamba93400", // ← votre profil GitHub
  linkedin: "https://www.linkedin.com/in/moussabamba20/", // ← votre profil LinkedIn
};

export const SKILLS = [
  "TypeScript",
  "JavaScript",
  "Laravel",
  "PHP",
  "Docker",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Supabase",
  "Tailwind CSS",
  "CSS / Design Systems",
  "REST API",
  "Vercel",
];

export type ProjectKind = "Fullstack" | "Vitrine";

export type Project = {
  slug: string;
  name: string;
  kind: ProjectKind;
  description: string;
  tags: string[];
  live: string; // URL de la démo déployée
  repo: string; // URL du dépôt GitHub
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "taskflow",
    name: "TaskFlow",
    kind: "Fullstack",
    description:
      "Dashboard Kanban avec authentification, projets et tâches en drag & drop. API REST Express et base Postgres sécurisée par RLS.",
    tags: ["Next.js", "Express", "Supabase", "dnd-kit"],
    live: "https://taskflow-rho-teal.vercel.app/", // ← URL de votre déploiement
    repo: "https://github.com/MoussaBamba93400/taskflow", // ← lien GitHub
    accent: "#3b82f6",
  },
  {
    slug: "devconnect",
    name: "DevConnect",
    kind: "Fullstack",
    description:
      "Micro-réseau social pour développeurs : feed paginé, profils publics, likes et commentaires. API Express et authentification Supabase.",
    tags: ["Next.js", "Express", "Supabase", "REST"],
    live: "https://devconnect-nine-jade.vercel.app/",
    repo: "https://github.com/MoussaBamba93400/devconnect",
    accent: "#6366f1",
  },
  {
    slug: "flavor",
    name: "Flavor",
    kind: "Vitrine",
    description:
      "Site vitrine pour un restaurant gastronomique. Direction artistique « luxe discret », galerie avec lightbox et animations au scroll.",
    tags: ["Next.js", "CSS Modules", "next/image"],
    live: "https://flavor-9xjcggc5o-moussabulls2-8201s-projects.vercel.app/",
    repo: "https://github.com/MoussaBamba93400/flavor",
    accent: "#c9a96e",
  },
  {
    slug: "archex",
    name: "Archex",
    kind: "Vitrine",
    description:
      "Site vitrine pour une agence d'architecture. Minimalisme suisse, grille stricte, pages projets et reveals géométriques.",
    tags: ["Next.js", "CSS Modules", "SSG"],
    live: "https://archex-nc0zdvini-moussabulls2-8201s-projects.vercel.app",
    repo: "https://github.com/MoussaBamba93400/archex",
    accent: "#c45d3e",
  },
];
