import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [books, setBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("boipoka.json")
  //       .then((res) => res.json())
  //       .then((book) => setBooks(book));
  //   }, []);
  return (
    <div>
      <h1 className="text-center text-4xl h1y-4">All Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 p-2">
        {data?.map((book, i) => (
          <Book book={book} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Books;
