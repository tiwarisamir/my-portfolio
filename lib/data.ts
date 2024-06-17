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

    tags: ["React", "TypeScript", "Next.js", "Firebase", "SASS", "Redux"],

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
