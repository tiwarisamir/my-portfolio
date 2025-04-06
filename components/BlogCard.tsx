import { IBlogPostsEdge } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { IoBookOutline } from "react-icons/io5";

const BlogCard = ({ blog }: { blog: IBlogPostsEdge }) => {
  return (
    <Link
      href={`/blog/${blog.node.slug}`}
      className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex flex-col gap-4 p-4"
    >
      <h3 className="text-lg font-semibold hover:underline hover:underline-offset-4">
        {blog?.node?.title}
      </h3>
      <div className="w-full  flex items-center    dark:text-gray-400 gap-2 overflow-x-auto scrollbar-hide">
        {blog?.node?.tags?.map((tag) => (
          <span
            key={tag.name}
            className="w-fit whitespace-nowrap bg-zinc-100 dark:bg-zinc-600 text-zinc-600  dark:text-zinc-300  text-xs font-medium  px-2.5 py-0.5 rounded"
          >
            {tag.name}
          </span>
        ))}
      </div>

      <p className="text-zinc-700 dark:text-zinc-400 my-2">
        {blog?.node?.brief}
      </p>
      <div className="flex gap-2 items-center text-sm text-gray-500 font-medium">
        <span className="flex items-center gap-1">
          <IoBookOutline /> {blog?.node?.readTimeInMinutes} min read
        </span>
        <span className="text-gray-400"> • </span>
        {new Date(blog?.node?.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </Link>
  );
};

export default BlogCard;
