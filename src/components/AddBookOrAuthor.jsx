import React from "react";
import AddBook from "./AddBook";
import AddAuthor from "./AddAuthor";

//apollo client
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../gql/queries";

const AddBookOrAuthor = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <AddBook />
        <AddAuthor />
      </div>
    </ApolloProvider>
  );
};

export default AddBookOrAuthor;
