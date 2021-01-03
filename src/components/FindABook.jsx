import React, { useState, useEffect } from "react";

//apollo client
import { ApolloProvider } from "@apollo/client";
import { apolloClient, getAllBooks } from "../gql/queries";

const FindABook = () => {
  //get all the books on 1st render
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getAllBooks().then((result) => {
      setBooks(result.data.books);
    });
  }, []);

  //getting the entered bookname and querying it
  const [bookName, setBookName] = useState("");
  const [relatedBooks, setRelatedBooks] = useState([]);
  const handleClick = async () => {
    if (bookName !== "") {
      const booksWithSimilarName = await books.filter((book) => book["name"].toLowerCase().includes(bookName));
      setRelatedBooks(booksWithSimilarName);
    }
    setBookName("");
  };
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <h3>Query A Book</h3>
        <input
          type="text"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          placeholder="Type A Book's Name"
        />
        <button onClick={(e) => handleClick()} style={{ marginLeft: "0.2rem" }}>
          Search
        </button>
        <button onClick={(e) => setRelatedBooks([])} style={{ marginLeft: "0.2rem" }}>
          Clear
        </button>
        <ul style={{ display: "grid", justifyContent: "center", gridGap: "0.5rem" }}>
          {relatedBooks.map((book, index) => (
            <li key={book["name"]}>
              <p>
                {index + 1}. Name - {book["name"]}
              </p>
              <p>Genre - {book["genre"]}</p>
              <p>
                Author: Name - {book["author"]["name"]} ,Age-{book["author"]["age"]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </ApolloProvider>
  );
};

export default FindABook;
