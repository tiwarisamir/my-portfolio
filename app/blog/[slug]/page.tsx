import BlogPost from "@/components/BlogPost";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  return (
    <div>
      <BlogPost slug={slug} />
    </div>
  );
};

export default page;
