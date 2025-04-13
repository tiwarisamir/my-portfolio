"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { useRef } from "react";
import toast from "react-hot-toast";
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  return (
    <section id="contact" ref={ref} className="mb-16  w-full">
      <SectionHeading>Get in touch</SectionHeading>

      <p className="text-gray-700 -mt-4 dark:text-white/80">
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
          className="h-14 px-4 rounded-lg border dark:border-zinc-600 dark:bg-zinc-800/80 dark:focus:bg-zinc-800 transition-all dark:outline-hidden placeholder-gray-500 dark:placeholder-gray-400"
          ref={emailRef}
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />

        <textarea
          className="h-52 my-3 rounded-lg p-4 border dark:border-zinc-600 dark:bg-zinc-800/80 transition-all dark:outline-hidden dark:focus:bg-zinc-800 placeholder-gray-500 dark:placeholder-gray-400"
          ref={messageRef}
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </section>
  );
}
