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
        I am a Full-Stack Developer specializing in the MERN stack (React.js,
        Next.js, Node.js, Express, MongoDB, and TypeScript). I build scalable
        web applications, focusing on both front-end and back-end development to
        ensure top performance and user experience. I&apos;ve worked on a wide
        range of projects, including PaaS products, delivering solutions that
        meet diverse client needs. My background as a graphic designer on Upwork
        adds a creative edge to my technical skills, enabling me to create
        visually appealing and highly functional applications. I collaborate
        with clients from Upwork and beyond, always eager to learn new
        technologies and take on new challenges. If you&apos;re looking for
        someone to bring your vision to life with a perfect blend of design and
        development, let&apos;s connect and build something exceptional
        together.
      </p>
    </motion.section>
  );
}
