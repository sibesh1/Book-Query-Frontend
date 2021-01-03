import React, { useState, useEffect } from "react";

//apollo client
import { ApolloProvider, useMutation } from "@apollo/client";
import { apolloClient, getAuthorsName, addNewBook } from "../gql/queries";

const AddBook = () => {
  //get the authors names from gqlserver
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    getAuthorsName().then((result) => {
      setAuthors(result.data.authors);
    });
  }, [setAuthors]);

  //form states
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setauthorId] = useState("");

  //gql mutation addNewBook
  const [addBook] = useMutation(addNewBook);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, genre, authorId });
    if (name !== "" && genre !== "" && authorId !== "") {
      addBook({ variables: { name, genre, authorId } });
      setName("");
      setGenre("");
      setauthorId("");
    }
  };
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <h3>Add A New Book</h3>
        <form className="addBookorAuthor">
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            Genre:{" "}
            <input
              type="text"
              name="genre"
              value={genre}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
          </label>
          <label>
            Select Author:{" "}
            <select
              value={authorId}
              onChange={(e) => {
                setauthorId(e.target.value);
              }}
            >
              <option>Select Author</option>
              {authors.map((author) => (
                <option value={author["id"]} key={author["id"]}>
                  {author["name"]}
                </option>
              ))}
            </select>
          </label>
          <div>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </form>
      </div>
    </ApolloProvider>
  );
};

export default AddBook;
