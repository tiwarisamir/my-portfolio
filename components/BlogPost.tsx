"use client";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Queries } from "@/lib/queries";
import { HASHNODE_HOST } from "@/lib/constant";
import { ISingleBlogResponse } from "@/lib/types";
import client from "@/lib/apolloClient";
import { useRouter } from "next/router";
import MarkdownRenderer from "./MarkdownRenderer";

const BlogPost = ({ slug }: { slug: string }) => {
  const { loading, error, data } = useQuery<ISingleBlogResponse>(
    Queries.getSinglePost,
    {
      client,
      variables: { slug, host: HASHNODE_HOST },
    }
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {loading && (
        <div className="w-full h-[80vh] flex justify-center items-center py-8">
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div className="text-red-500 text-center py-8">
          Error: {error.message}
        </div>
      )}

      {!loading && !error && data?.publication?.post && (
        <article className="prose lg:prose-xl">
          <h1 className="text-sm font-bold mb-4">
            {data?.publication?.post?.title}
          </h1>
          {data?.publication?.post?.coverImage && (
            <img
              src={data?.publication?.post?.coverImage?.url || ""}
              alt={data?.publication?.post?.title || "cover image"}
              className="w-full rounded-lg mb-8"
            />
          )}

          <MarkdownRenderer
            content={data?.publication?.post?.content?.markdown || ""}
          />
        </article>
      )}
    </div>
  );
};

export default BlogPost;
