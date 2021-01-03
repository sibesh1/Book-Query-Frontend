//apollo client setup
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

//getting data from graphql server using apollo client
export const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

//mutations
export const addNewBook = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`;

export const addNewAuhtor = gql`
  mutation addAuthor($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`;

//queries
export const getAuthorsName = () => {
  return apolloClient.query({
    query: gql`
      {
        authors {
          name
          id
        }
      }
    `,
  });
};

export const getAllBooks = () => {
  return apolloClient.query({
    query: gql`
      {
        books {
          name
          genre
          author {
            name
            age
          }
        }
      }
    `,
  });
};
