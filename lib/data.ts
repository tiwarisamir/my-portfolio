import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import kuraImg from "@/public/0.jpg";
import pasalImg from "@/public/2.jpg";
import chandaImg from "@/public/3.jpg";

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
    imageUrl: kuraImg,
  },
  {
    title: "Pasal",
    description:
      "I created a e-commerce app. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, sed ",
    tags: ["React", "TypeScript", "Next.js", "scss", "Redux"],
    imageUrl: pasalImg,
  },
  {
    title: "Chanda",
    description:
      "I created a fundrasing app. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, sed ",
    tags: ["React", "Next.js", "Mongoose", "Tailwind"],
    imageUrl: chandaImg,
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
