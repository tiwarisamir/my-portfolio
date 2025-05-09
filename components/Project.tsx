"use client";

import { projectsData } from "@/lib/data";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  codeUrl,
  liveUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="bg-gray-100 w-full  border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col gap-5 h-full sm:group-even:ml-[18rem]">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 ">
            <a
              href={liveUrl}
              target="_blank"
              className="flex gap-2 items-center justify-center dark:bg-white/10  bg-zinc-800 text-white px-3 py-1 
                    rounded-md border border-slate-300 "
            >
              <span>Live</span>
              <BsArrowRight
                size={20}
                className="group-hover:translate-x-1 transition"
              />
            </a>
            <a
              href={codeUrl}
              target="_blank"
              className="flex gap-2 items-center justify-center px-3 py-1"
            >
              <span>Code</span>
              <BsArrowRight
                size={20}
                className="opacity-70 group-hover:translate-x-1 transition"
              />
            </a>
          </div>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className=" 
                text-xs uppercase  text-black rounded-full dark:text-white/70"
                key={index}
              >
                #{tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={452}
          height={320}
          className="absolute hidden sm:block top-10 -right-40  rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-hover:group-even:translate-x-3
        group-hover:group-even:translate-y-3
        group-hover:group-even:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </div>
    </motion.div>
  );
};

export default Project;
