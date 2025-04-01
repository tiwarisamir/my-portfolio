"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { FaBlog, FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-3xl mx-auto text-center sm:text-left"
    >
      <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start  ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-2 sm:gap-4 max-w-md"
        >
          <h1 className="text-3xl sm:text-4xl font-bold">Hello, I'm Samir👋</h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium mt-1">
            Full-Stack Developer
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            I'm a MERN stack developer with experience in building scalable web
            applications and PaaS products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="/Samir Tiwari.jpg"
            alt="Samir Tiwari"
            width="180"
            height="220"
            quality="95"
            priority
            className="h-40 w-32 sm:h-48 sm:w-48 rounded-full object-cover border-4 border-white shadow-xl"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto sm:mx-0">
          I specialize in React.js, Next.js, Node.js, Express, MongoDB, and
          TypeScript, focusing on high-performance applications. Always eager to
          learn and collaborate, I blend technical expertise with creative
          problem-solving.
        </p>
      </motion.div>

      <motion.div
        className="mt-6 flex flex-col sm:flex-row items-center gap-3 text-base font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <a
          className="group bg-gray-900 text-white px-6 py-3 flex items-center gap-2 rounded-lg focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="/Samir Tiwari_CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="group bg-white px-6 py-3 flex items-center gap-2 rounded-lg focus:scale-110 hover:scale-110 active:scale-105 transition border border-gray-300 dark:bg-white/10"
          href="https://blog.samirt.com.np/"
          target="_blank"
        >
          Blog <FaBlog />
        </a>
      </motion.div>
    </section>
  );
}
