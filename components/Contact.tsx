"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useRef } from "react";
import toast from "react-hot-toast";
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-16  "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Get in touch</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Feel free to reach out to me directly at{" "}
        <a className="underline" href="mailto:samirtiwari2061@gmail.com">
          samirtiwari2061@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-white"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          if (emailRef.current) emailRef.current.value = "";
          if (messageRef.current) messageRef.current.value = "";
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-slate-700 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-hidden"
          ref={emailRef}
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-slate-700 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-hidden"
          ref={messageRef}
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
