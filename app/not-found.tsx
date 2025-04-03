import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]  text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link
        href="/"
        className=" bg-gray-900 text-white dark:bg-white/10 border border-gray-300  px-6 py-3  rounded-lg focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
