import { useEffect, useState } from "react";
import client from "../lib/graphqlClient";
import { GET_SINGLE_POST } from "../lib/queries";
import { HashnodePost, SinglePostResponse } from "../lib/types";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<HashnodePost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!slug) return;

        const variables = {
          slug: slug as string,
          hostname: "YOUR_HASHNODE_HOSTNAME", // e.g., 'yourblog.hashnode.dev'
        };

        const data = await client.request<SinglePostResponse>(
          GET_SINGLE_POST,
          variables
        );
        setPost(data.post);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-red-500 text-center py-8">Error: {error}</div>;
  if (!post) return <div className="text-center py-8">Post not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <article className="prose lg:prose-xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-lg mb-8"
          />
        )}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.contentMarkdown || post.content || ""}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPost;
