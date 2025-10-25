import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  console.log(book);
  return (
    <Link to={`/bookDetails/${book.bookId}`}>
      <div className="border rounded-md">
        <div className="p-10 bg-gray-100 flex items-center justify-center">
          <img className="h-28 w-36" src={book.image} alt="" />
        </div>
        <div className="p-4">
          <h2 className="text-xl ">{book.bookName}</h2>
          <span>By {book.author}</span>
          <div className="flex justify-between mt-4">
            <span> {book.category}</span>
            <span> {book.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
