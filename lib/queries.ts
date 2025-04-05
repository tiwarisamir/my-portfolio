import request, { gql } from "graphql-request";
import { get } from "http";
import { IBlogCount, IBlogPostsResponse, ISingleBlogResponse } from "./types";
import { BLOGS_PER_PAGE, HASHNODE_HOST, HASHNODE_USERNAME } from "./constant";

const Queries = {
  getPostCount: gql`
    query getPostCount($username: String!) {
      user(username: $username) {
        posts(page: 1, pageSize: 1) {
          totalDocuments
        }
      }
    }
  `,
  getPosts: gql`
    query getPosts($username: String!, $pageSize: Int!, $page: Int!) {
      user(username: $username) {
        posts(pageSize: $pageSize, page: $page) {
          edges {
            node {
              id
              title
              readTimeInMinutes
              publishedAt
              updatedAt
              publication {
                id
              }
              brief
              slug
              tags {
                name
              }
              author {
                name
              }
            }
          }
          pageInfo {
            hasNextPage
            nextPage
          }
        }
      }
    }
  `,
  getSinglePost: gql`
    query getSinglePost($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          title
          subtitle
          readTimeInMinutes
          brief
          publishedAt
          seo {
            description
          }
          tags {
            name
          }
          coverImage {
            url
          }
          content {
            markdown
          }
          author {
            name
          }
        }
      }
    }
  `,
};

export const GET_POSTS = gql`
  query getPosts($username: String!) {
    user(username: $username) {
      posts(first: 4) {
        edges {
          node {
            id
            title
            readTimeInMinutes
            publishedAt
            updatedAt
            publication {
              id
            }
            brief
            slug
            tags {
              name
            }
            author {
              name
            }
          }
        }
        pageInfo {
          hasNextPage
          nextPage
        }
      }
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query GetSinglePost($slug: String!, $hostname: String!) {
    post(slug: $slug, hostname: $hostname) {
      title
      brief
      content
      contentMarkdown
      coverImage
      dateAdded
    }
  }
`;

class blogError extends Error {
  constructor(message: string, error: unknown) {
    super(error instanceof Error ? error.message : message);
    this.name = "blogFetchError";
  }
}

const fetchRequest = async <T>(
  query: string,
  variables: Record<string, unknown>
): Promise<T> => {
  try {
    return await request<T>(
      process.env.NEXT_PUBLIC_HASHNODE_URI!,
      query,
      variables
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new blogError("Failed to fetch data from Hashnode API", error);
  }
};

export const getBlogCount = async () => {
  const res = await fetchRequest<IBlogCount>(Queries.getPostCount, {
    username: HASHNODE_USERNAME,
  });
  return res?.user?.posts?.totalDocuments ?? 0;
};

export const getBlogPosts = async (page: number) => {
  const res = await fetchRequest<IBlogPostsResponse>(Queries.getPosts, {
    username: HASHNODE_USERNAME,
    page,
    pageSize: BLOGS_PER_PAGE,
  });
  console.log("from func : ", res);
  return res?.user?.posts ?? [];
};

export const getSinglePost = async (slug: string) => {
  const res = await fetchRequest<ISingleBlogResponse>(Queries.getSinglePost, {
    slug,
    host: HASHNODE_HOST,
  });
  return res?.data?.publication?.post ?? null;
};
