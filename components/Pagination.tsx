"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Pagination: React.FC = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page = parseInt(router.query.page as string) || 1;
    setCurrentPage(page);
  }, [router.query.page]);

  const handlePageChange = (newPage: number) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: newPage },
    });
  };

  return (
    <div className="w-full flex justify-between text-sm text-zinc-600 dark:text-zinc-300 font-medium">
      <button
        className="cursor-pointer underline underline-offset-3"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        className="cursor-pointer underline underline-offset-3"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
