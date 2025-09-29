export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "NextWatch",
    year: 2024,
    description: "A streaming platform for movies, documentaries, and anime.",
    url: "https://next-watch-nine.vercel.app/",
  },
  {
    title: "VoiceNet",
    year: 2023,
    description: "A social voice network where users share voice messages.",
    url: "https://p6-groupeb.com/pascal/VoiceNet/accueil.php?id=9",
  },
  {
    title: "Linko",
    year: 2023,
    description: "Real-time messaging platform that allows users to communicate instantly.",
    url: "https://linko-app.vercel.app/",
  },
  {
    title: "Ebamage-Maketplace",
    year: 2023,
    description: "API Backend Built e-commerce backend with Node.js/Express: OTP auth (Brevo), Device Token sessions, Product CRUD, Store management.",
    url: "https://github.com/YAOP77/Ebamage-marketplace",
  },
];
