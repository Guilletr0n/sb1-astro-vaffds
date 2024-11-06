import { GraphQLClient } from 'graphql-request';

// Replace with your Hygraph API endpoint
const hygraphClient = new GraphQLClient('YOUR_HYGRAPH_API_ENDPOINT');

export const getArticles = async () => {
  const query = `
    query Articles {
      articles {
        id
        title
        slug
        excerpt
        createdAt
      }
    }
  `;

  const { articles } = await hygraphClient.request(query);
  return articles;
};

export const getArticleBySlug = async (slug: string) => {
  const query = `
    query ArticleBySlug($slug: String!) {
      article(where: { slug: $slug }) {
        id
        title
        content
        createdAt
      }
    }
  `;

  const { article } = await hygraphClient.request(query, { slug });
  return article;
};