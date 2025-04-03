import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group w-fit bg-gray-900 text-white dark:bg-white/10 border border-gray-300  px-6 py-3 flex items-center justify-center gap-2 rounded-lg focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-105 transition  "
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane
            size={15}
            className="text-xs  transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          />{" "}
        </>
      )}
    </button>
  );
}
