export type ExperienceItem = {
  company: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Oracle Cerner",
    title: "Member of Technical Staff",
    location: "Bengaluru, India",
    period: "Sep 2021 – Present",
    bullets: [
      "Build and maintain high-performance, testable UI features for PowerChart / MPages.",
      "Owned modernization work to ensure Edge compatibility and reduce legacy browser constraints.",
      "Supported platform migration from IBM WebSphere to Oracle WebLogic across environments and release cycles.",
      "Collaborate with cross-functional teams, code reviews, and quality improvements via automation and practices.",
    ],
  },
  {
    company: "USTech Solutions (Client: Oracle Cerner)",
    title: "Software Engineer",
    location: "Bengaluru, India",
    period: "Feb 2021 – Sep 2021",
    bullets: [
      "Worked on Edge-compatibility upgrades for PowerChart components.",
      "Helped modernize legacy UI pieces for modern browser/runtime constraints.",
    ],
  },
  {
    company: "TeleradTech Pvt Ltd",
    title: "Software Engineer",
    location: "Bengaluru, India",
    period: "Jul 2018 – Dec 2020",
    bullets: [
      "Designed and developed UI templates and reporting screens.",
      "Built Node.js utilities (file upload/download and video streaming).",
      "Worked on data retrieval/manipulation with MS SQL Server and maintained web apps.",
    ],
  },
];
