import { notFound } from "next/navigation";
import { Metadata } from "next";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getPostSlugs, getSinglePost } from "@/lib/queries";
import { Post } from "@/lib/types";
import { BASE_URL } from "@/lib/constant";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const DEFAULT_META = {
    title: "Blog | Samir Tiwari",
    description:
      "Explore blogs by Samir Tiwari, where you can find insightful articles, tutorials, and thoughts on various topics.",
  };

  try {
    const post = await getSinglePost(params.slug);

    if (!post) return { title: "Post not found" };

    const title = post.title ?? "Blog | Samir Tiwari";
    const description = (post.seo?.description || post.brief) ?? "";
    const image = post.coverImage?.url;
    const url = post.url;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        images: image ? [{ url: image }] : undefined,
        type: "article",
      },
      twitter: {
        card: image ? "summary_large_image" : "summary",
        title,
        description,
        images: image ? [image] : undefined,
      },
    };
  } catch (error) {
    return {
      ...DEFAULT_META,
      openGraph: {
        ...DEFAULT_META,
        url: new URL(`${BASE_URL}/blog/${params.slug}`),
      },
      twitter: {
        ...DEFAULT_META,
        card: "summary_large_image",
      },
    };
  }
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getSinglePost(params.slug);

  if (!post) notFound();

  const title = post.title ?? "";
  const image = post.coverImage?.url;

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 prose lg:prose-xl">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {image && (
        <img src={image} alt={title} className="w-full rounded-lg mb-8" />
      )}
      <MarkdownRenderer content={post.content?.markdown ?? ""} />
    </article>
  );
}
