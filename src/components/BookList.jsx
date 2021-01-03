import React, { useState } from "react";

//apollo client
import { ApolloProvider } from "@apollo/client";
import { apolloClient, getAllBooks } from "../gql/queries";

const BookList = () => {
  //get all books from gql server
  const [books, setBooks] = useState([]);
  const showAllBooks = () => {
    getAllBooks().then((result) => {
      setBooks(result.data.books);
    });
  };

  return (
    <ApolloProvider client={apolloClient}>
      <div className="book-list">
        <h3>Get All Books</h3>
        <button onClick={(e) => showAllBooks()}>Show All Books</button>
        <button onClick={() => setBooks([])}>Hide All Books</button>
        <ul className="book-slides">
          {books !== [] &&
            books.map((book, index) => {
              return (
                <div key={book["name"]}>
                  <p>
                    <span>{index + 1}.</span>Name - {book["name"]}
                  </p>
                  <p>
                    {"  "}Genre - {book["genre"]}
                  </p>
                  <p>
                    {"  "}Author: Name - {book["author"]["name"]} , Age - {book["author"]["age"]}
                  </p>
                </div>
              );
            })}
        </ul>
      </div>
    </ApolloProvider>
  );
};

export default BookList;
