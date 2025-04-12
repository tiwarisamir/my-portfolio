import { getPosts } from "@/lib/queries";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import SectionHeading from "@/components/SectionHeading";

export const dynamic = "force-dynamic";

interface BlogPageProps {
  searchParams: { page?: string };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const postsConnection = await getPosts(currentPage);
  const edges = postsConnection?.edges ?? [];
  const hasNextPage = postsConnection?.pageInfo?.hasNextPage ?? false;

  return (
    <div className="max-w-6xl mx-auto py-8">
      <SectionHeading>Blogs</SectionHeading>

      <div className="flex flex-col gap-6">
        {edges.map(({ node }) => (
          <BlogCard key={node.id} blog={{ node }} />
        ))}
      </div>
      <Pagination currentPage={currentPage} hasNextPage={hasNextPage} />
    </div>
  );
}
