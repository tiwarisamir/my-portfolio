import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiAdobeillustrator } from "react-icons/si";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    work: "Freelancer",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Apr 2024 - present",
  },
  {
    title: "Graphic Designer",
    work: " Freelancer",
    description:
      "I've also done graphic design on Upwork as a freelancer, though I'm not very active there now and only take on projects when my previous clients contact me.",
    icon: React.createElement(SiAdobeillustrator),
    date: "Nov 2019 - Present",
  },
  {
    title: "Exam Coordinator",
    work: "Saral Shikshya - Full Time",
    description:
      "I have also worked as an Exam Coordinator at Saral Shikshya, where I coordinated with colleges, teachers, and students to develop exam questions, conduct weekly exams, and publish results.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2023 - Oct 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Kura",
    description:
      "A real-time chat application that allows users to communicate through text messages.",
    tags: ["React", "NodeJs", "Mongoose", "MUI", "Redux", "Socket.io"],
    codeUrl: "https://github.com/tiwarisamir/kura-the-chat-app",
    liveUrl: "https://kura-liard.vercel.app",
    imageUrl: "/kura.JPG",
  },
  {
    title: "Pasal",
    description:
      "A comprehensive e-commerce platform that facilitates product browsing, shopping cart functionality.",

    tags: ["React", "TypeScript", "Express", "Firebase", "SASS", "Redux"],

    codeUrl: "https://github.com/tiwarisamir/pasal-the-e-commerce-app",
    liveUrl: "https://pasal-eta.vercel.app",
    imageUrl: "/pasal.JPG",
  },
  {
    title: "Chanda",
    description:
      "A platform for individuals, creators, and companies to raise funds from the public.",

    tags: ["React", "Next.js", "Mongoose", "Tailwind"],
    codeUrl: "https://github.com/tiwarisamir/chanda-the-crowdfunding-app",
    liveUrl: "https://chanda-opal.vercel.app",
    imageUrl: "/Chanda.JPG",
  },
] as const;

export const skillsData = [
  "/html.webp",
  "/css-3.webp",
  "/js.webp",
  "/typescript.webp",
  "/react.webp",
  "/nextjs.webp",
  "/nodejs.webp",
  "/git.webp",
  "/Tailwind CSS.webp",
  "/mongodb.webp",
  "/redux.webp",
  "/express.webp",
] as const;
