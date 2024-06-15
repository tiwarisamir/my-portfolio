"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">Full-Stack Developer</span> with
        expertise in the <span className="font-medium">MERN stack</span>,
        including <span className="underline">React.js,</span>{" "}
        <span className="underline">Next.js,</span>{" "}
        <span className="underline">Node.js,</span>{" "}
        <span className="underline">Express,</span>{" "}
        <span className="underline">MongoDB,</span> and{" "}
        <span className="underline">TypeScript</span>. I build scalable web
        applications and handle both front-end and back-end development,
        focusing on performance and user experience. I am always looking to
        learn new technologies.
      </p>
    </motion.section>
  );
}
