import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface IBlogCount {
  user: {
    posts: {
      totalDocuments: number;
    };
  };
}

export interface PostNode {
  id: string;
  title: string;
  readTimeInMinutes: number;
  publishedAt: string;
  updatedAt: string | null;
  publication: {
    id: string;
  };
  brief: string;
  slug: string;
  tags: {
    name: string;
  }[];
  author: {
    name: string;
  };
}

export interface IBlogPostsResponse {
  user: {
    posts: {
      edges: {
        node: PostNode;
      }[];
      pageInfo: {
        hasNextPage: boolean;
        nextPage: string | null;
      };
    };
  };
}

interface Seo {
  description?: string | null;
}

interface Tag {
  name: string;
}

interface CoverImage {
  url?: string | null;
}

interface Content {
  markdown?: string | null;
}

interface Author {
  name?: string | null;
}

interface Post {
  title?: string | null;
  subtitle?: string | null;
  readTimeInMinutes?: number | null;
  brief?: string | null;
  publishedAt?: string | null;
  seo?: Seo | null;
  tags?: Tag[] | null;
  coverImage?: CoverImage | null;
  content?: Content | null;
  author?: Author | null;
}

interface Publication {
  post?: Post | null;
}

interface Data {
  publication?: Publication | null;
}

export interface ISingleBlogResponse {
  data?: Data | null;
}

export interface HashnodePost {
  title: string;
  brief: string;
  slug: string;
  coverImage: string;
  dateAdded: string;
  contentMarkdown?: string;
  content?: string;
}

export interface HashnodeResponse {
  user: {
    publication: {
      posts: HashnodePost[];
    };
  };
}

export interface SinglePostResponse {
  post: HashnodePost;
}
