import React from "react";
import { useLoaderData, useParams } from "react-router";
import { setItemIntoDb } from "../../utility/addToDb";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const bookData = data?.find((book) => book?.bookId === Number(id));

  const handleMarksRead = (id) => {
    setItemIntoDb(id);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex items-center justify-center bg-gray-100 p-16">
        <img className="h-72" src={bookData.image} alt="" />
      </div>
      <div>
        <h3 className="text-3xl font-semibold">{bookData.bookName}</h3>
        <span className="text-xl mt-6">By : {bookData.author}</span>
        <p className="text-[16px] text-justify py-12">
          <span className="font-semibold">Review :</span>
          {bookData.review}
        </p>
        <h3 className="flex gap-6 font-medium">
          Tags :
          {bookData?.tags.map((tag, i) => (
            <span key={i} className="text-green-600">
              {tag}
            </span>
          ))}
        </h3>
        <div className="flex gap-10 font-medium">
          <div className="flex flex-col text-gray-600">
            {" "}
            <span> Book Of page :</span>
            <span> Year of publishing :</span>
            <span>Rating :</span>
          </div>
          <div className="flex flex-col">
            <span>{bookData.totalPages}</span>
            <span>{bookData.yearOfPublishing}</span>
            <span>{bookData.rating}</span>
          </div>
        </div>

        <div className="flex gap-2 py-4">
          <button
            onClick={() => {
              handleMarksRead(id);
            }}
            className="bg-green-400 hover:text-green-400 hover:bg-white hover:border border-green-400 duration-500 rounded-md text-white px-6 py-2 text-center"
          >
            Mark as Read
          </button>
          <button className="bg-blue-400 hover:text-blue-400 hover:bg-white hover:border border-blue-400 duration-500 rounded-md text-white px-6 py-2 text-center">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
