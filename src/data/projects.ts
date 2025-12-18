import type { Project } from "@/types/project";
import { IMAGES } from "@/assets/images";

export const PROJECTS: Project[] = [
  {
    title: "Shincoo Wedding",
    subtitle: "Budgeting + tasks + planning dashboard",
    description:
      "A personal web app to track wedding budget, category-wise spending, and to-dos in one place (no spreadsheets).",
    highlights: [
      "Budget summary (planned vs actual vs remaining) with category utilization",
      "To-do tracking with sorting, priorities, due dates, and quick actions",
      "Clean, consistent UI built for daily use",
    ],
    stack: ["React", "TypeScript", "Component-driven UI"],
    images: [
      { src: IMAGES.shincoo1, alt: "Shincoo Wedding – Budget screen" },
      { src: IMAGES.shincoo2, alt: "Shincoo Wedding – To-dos screen" },
    ],
    links: [],
  },
  {
    title: "Remittance Portal UI",
    subtitle: "Onboarding + KYC + quotes + history",
    description:
      "A remittance portal UI focused on form-heavy flows and reliable API-driven screens (quotes, client profile, documents, history).",
    highlights: [
      "Currency converter / quote card with fee + total cost breakdown",
      "Client profile with eligibility/limits and compliance documents",
      "Consistent UX for tables, filters, actions, and states",
    ],
    stack: ["React", "TypeScript", "REST APIs"],
    images: [
      { src: IMAGES.xlink1, alt: "Remittance portal – dashboard" },
      { src: IMAGES.xlink2, alt: "Remittance portal – profile overview" },
      { src: IMAGES.xlink3, alt: "Remittance portal – compliance documents" },
    ],
    links: [],
  },
];
