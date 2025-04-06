"use client";
import { BLOGS_PER_PAGE, HASHNODE_USERNAME } from "@/lib/constant";
import { Queries } from "@/lib/queries";
import { IBlogPostsResponse } from "@/lib/types";
import { useQuery } from "@apollo/client";
import client from "../lib/apolloClient";
import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeading";

const BlogList = () => {
  const { loading, error, data } = useQuery<IBlogPostsResponse>(
    Queries.getPosts,
    {
      client,
      variables: {
        username: HASHNODE_USERNAME,
        pageSize: BLOGS_PER_PAGE,
        page: 1,
      },
    }
  );

  return (
    <div className="max-w-6xl mx-auto  py-8">
      <SectionHeading>Blogs</SectionHeading>

      {loading && (
        <div className="w-full flex justify-center items-center py-8">
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center py-8">
          Error: {error.message}
        </div>
      )}

      {!loading && !error && (
        <div className="flex flex-col gap-6">
          <div className="w-full flex justify-between text-sm text-zinc-600 dark:text-zinc-300 font-medium">
            <button className="  cursor-pointer underline underline-offset-3">
              Previous
            </button>
            <button className=" cursor-pointer  underline underline-offset-3">
              Next
            </button>
          </div>
          <div className="w-full flex flex-col  gap-6">
            {data?.user?.posts?.edges?.map((post) => (
              <BlogCard key={post.node.id} blog={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
