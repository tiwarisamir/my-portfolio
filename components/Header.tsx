"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import ProfileCard from "./ProfileCard";
import { usePathname } from "next/navigation";
import { SectionName } from "@/lib/types";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash.substring(1));
    };

    setCurrentHash(window.location.hash.substring(1));
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    let sectionName: SectionName = "Home";
    const pathSegments = pathname.split("/").filter((segment) => segment);
    const pathSection = pathSegments[0];

    if (pathSection) {
      const matchedLink = links.find(
        (link) => link.name.toLowerCase() === pathSection.toLowerCase()
      );
      if (matchedLink) sectionName = matchedLink.name as SectionName;
    } else if (currentHash) {
      const matchedLink = links.find(
        (link) => link.name.toLowerCase() === currentHash.toLowerCase()
      );
      if (matchedLink) sectionName = matchedLink.name as SectionName;
    }

    setActiveSection(sectionName);
  }, [pathname, currentHash, setActiveSection]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <header className="z-999 relative">
      <nav className="flex items-center justify-between fixed top-0 left-1/2 w-full max-w-3xl px-4 -translate-x-1/2 py-3 backdrop-blur-[0.5rem] dark:bg-zinc-900/80">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-4"
        >
          <Link href="/" className="flex items-center gap-3">
            <ProfileCard css="w-10 h-10" />
            <span className="text-2xl font-semibold">Samir Tiwari</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex w-[22rem] flex-wrap items-center justify-center gap-y-1 font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
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
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          <button
            ref={buttonRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-2xl p-2 dark:text-gray-300"
          >
            <GiHamburgerMenu />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 rounded-lg shadow-lg py-2"
              >
                {links.map((link) => (
                  <Link
                    key={link.hash}
                    href={link.hash}
                    className={clsx(
                      "block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700",
                      {
                        "text-gray-950 dark:text-slate-50 bg-gray-100 dark:bg-zinc-700":
                          activeSection === link.name,
                        "text-gray-700 dark:text-gray-300":
                          activeSection !== link.name,
                      }
                    )}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setIsDropdownOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
