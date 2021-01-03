import React, { useState } from "react";

//apollo client
import { ApolloProvider, useMutation } from "@apollo/client";
import { apolloClient, addNewAuhtor } from "../gql/queries";

const AddAuthor = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  //gql mutation
  const [addAuthor] = useMutation(addNewAuhtor);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, age });
    if (name !== "" && age !== "") {
      addAuthor({ variables: { name, age } });
      setName("");
      setAge("");
    }
  };
  return (
    <ApolloProvider client={apolloClient}>
      <div style={{ height: "45vh" }}>
        <h3>Add A New Author</h3>
        <form className="addBookorAuthor">
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Age:
            <input type="number" name="age" value={age} onChange={(e) => setAge(Number(e.target.value))} />
          </label>
          <div>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </form>
      </div>
    </ApolloProvider>
  );
};

export default AddAuthor;
