import { TerminalIcon, BracketsIcon, CollabIcon } from "@/public/SVG/svg";

export const SkillsData = [
  {
    SVG: TerminalIcon,
    title: "Front-end Development",
    about:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    heading: "Front-end Toolbox",
    list: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "ReactJS",
      "Redux",
      "React Router",
      "React Query",
      "NextJS",
      "TailwindCSS",
    ],
  },
  {
    SVG: BracketsIcon,
    title: "Back-end Development",
    about:
      "I love crafting server-side solutions, turning concepts into reliable and scalable backend systems.",
    heading: "Back-end Toolbox",
    list: ["NodeJS", "ExpressJS", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    SVG: CollabIcon,
    title: "Tools & Collaboration",
    about:
      "Mastering a variety of tools and collaborating seamlessly – Just to add perfect toppings to my skill set.",
    heading: "Toolbox",
    list: ["Git", "GitHub", "Trello"],
  },
];
