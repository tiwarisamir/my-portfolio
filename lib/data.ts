import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiAdobeillustrator } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },

  {
    name: "Projects",
    hash: "/#projects",
  },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "/#contact",
  },
  {
    name: "Blog",
    hash: "/blog",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    work: "Bitspanda",
    description:
      "I'm now a Frontend Developer at Bitspanda where i am  working in different projects.",
    icon: React.createElement(FaReact),
    date: "Nov 2024 - present",
  },
  {
    title: "Frontend Developer",
    work: "Freelance",
    description:
      "I've worked as a Freelance Frontend Developer where I worked on a PaaS project for a food ordering system tailored for restaurants, enabling seamless online order management. I also Contributed to the development of a freelance worker hiring system.",
    icon: React.createElement(FaReact),
    date: "Apr 2024 - Oct 2024",
  },
  {
    title: "Graphic Designer",
    work: "Upwork",
    description:
      "I Collaborate with clients to create various design projects tailored to their specific requirements.",
    icon: React.createElement(SiAdobeillustrator),
    date: "Nov 2023 - Nov 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Create Basic Express Server",
    description: "An npm package for configuring express server.",
    tags: ["Server", "Express", "npm", "TypeScript"],
    codeUrl: "https://github.com/tiwarisamir/create-basic-express-server",
    liveUrl: "https://www.npmjs.com/package/create-basic-express-server",
    imageUrl: "/create_Server.JPG",
  },
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
