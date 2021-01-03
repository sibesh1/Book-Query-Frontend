import BookList from "./components/BookList";
import AddBookOrAuthor from "./components/AddBookOrAuthor";
import FindABook from "./components/FindABook";

function App() {
  return (
    <div className="App">
      <h1>Book Query Service</h1>
      <div className="components">
        <div className="left-side">
          <BookList />
          <FindABook />
        </div>
        <hr style={{ height: "98%", backgroundColor: "#ADF7B6", width: "2%" }} />
        <AddBookOrAuthor />
      </div>
    </div>
  );
}

export default App;
