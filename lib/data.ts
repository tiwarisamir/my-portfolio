export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Kura",
    description:
      "I created a chat app. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, sed ",
    tags: [
      "React",
      "NodeJs",
      "MongoDB",
      "scss",
      "Mongoose",
      "Redux",
      "Socket.io",
    ],
    imageUrl: "/0.jpg",
  },
  {
    title: "Pasal",
    description:
      "I created a e-commerce app. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, sed ",
    tags: ["React", "TypeScript", "Next.js", "scss", "Redux"],
    imageUrl: "/2.jpg",
  },
  {
    title: "Chanda",
    description:
      "I created a fundrasing app. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, sed ",
    tags: ["React", "Next.js", "Mongoose", "Tailwind"],
    imageUrl: "/3.jpg",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
