import { getPosts } from "@/lib/queries";
import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

const Blogs = async () => {
  const postsConnection = await getPosts(1, 3);
  const edges = postsConnection?.edges ?? [];

  return (
    <div className="max-w-6xl mx-auto w-full py-8">
      <SectionHeading>Recent Blogs</SectionHeading>

      <div className="flex flex-col gap-6 mb-5">
        {edges.map(({ node }) => (
          <BlogCard key={node.id} blog={{ node }} />
        ))}
      </div>

      <Link
        href={"/blog"}
        className="text-sm underline underline-offset-4 text-zinc-400"
      >
        More Blog
      </Link>
    </div>
  );
};

export default Blogs;
