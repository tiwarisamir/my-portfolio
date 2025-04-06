import { gql } from "@apollo/client";

export const Queries = {
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
