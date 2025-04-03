import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="w-full mb-5 px-4  text-gray-500 flex items-center justify-between">
      <p>&copy; {currentYear} Samir Tiwari. All rights reserved.</p>
      <div className="flex flex-row items-center justify-center gap-3">
        <a
          className="  text-gray-700  cursor-pointer   dark:text-white/60"
          href="https://www.linkedin.com/in/samirtiwari2061/"
          target="_blank"
        >
          <BsLinkedin size={20} />
        </a>

        <a
          className="  text-gray-700  cursor-pointer   dark:text-white/60"
          href="https://github.com/tiwarisamir"
          target="_blank"
        >
          <FaGithubSquare size={20} />
        </a>
        <a
          className="  text-gray-700  cursor-pointer   dark:text-white/60"
          href="https://blog.samirt.com.np"
          target="_blank"
        >
          <FaHashnode size={20} />
        </a>
      </div>
    </footer>
  );
}
