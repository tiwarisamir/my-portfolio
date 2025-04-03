"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-999 relative">
      {/* <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem]  rounded-none border border-white/40  bg-white/80 shadow-lg shadow-black/[0.1] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] w-full max-w-3xl px-4 sm:rounded-lg dark:bg-gray-950/60 dark:border-black/40 "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div> */}

      <nav className="flex items-center justify-between fixed top-0  left-1/2  w-full max-w-3xl px-4 -translate-x-1/2 py-3   backdrop-blur-[0.5rem]  dark:bg-zinc-900/80 ">
        <Link href="/" className="text-2xl font-semibold">
          Samir
        </Link>
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1  font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-slate-50 underline underline-offset-4":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {/* {link.name === activeSection && (
                  <motion.span
                    className="bg-slate-300 rounded-lg absolute inset-0 -z-10 dark:bg-gray-700"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )} */}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
