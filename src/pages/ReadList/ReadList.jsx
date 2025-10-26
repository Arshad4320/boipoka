import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getItemIntoDb, getWishlistIntoDb } from "../../utility/addToDb";
import Book from "../Book/Book";

const ReadList = () => {
  const data = useLoaderData();
  const [filteredData, setFilteredData] = useState([]);

  const [wishlistData, setWishlistData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [short, setSort] = useState("");

  const handleSort = (type) => {
    setSort(type);
    if (type === "page") {
      const sortPage = [...filteredData].sort(
        (a, b) => a.totalPages - b.totalPages
      );

      setFilteredData(sortPage);
    }
    if (type === "ratings") {
      const sortRating = [...filteredData].sort((a, b) => a.rating - b.rating);
      setFilteredData(sortRating);
    }
  };
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const bookId = getItemIntoDb();
    const books = bookId.map((id) => parseInt(id));
    const filteredData = data.filter((book) => books.includes(book.bookId));
    setFilteredData(filteredData);
  }, []);
  useEffect(() => {
    const wishlistData = getWishlistIntoDb();

    const intData = wishlistData.map((id) => parseInt(id));

    const filteredWishlist = data.filter((id) => intData.includes(id.bookId));
    setWishlistData(filteredWishlist);
  }, []);
  return (
    <div>
      <div className="relative inline-block text-left">
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          Sort By :{short ? short : ""}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <ul className="py-1">
              <li
                onClick={() => handleSort("page")}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                Page Number
              </li>
              <li
                onClick={() => handleSort("ratings")}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                Rate
              </li>
            </ul>
          </div>
        )}
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          {filteredData.map((data) => (
            <Book key={data.bookId} book={data} />
          ))}
        </TabPanel>
        <TabPanel>
          {wishlistData.map((data) => (
            <Book key={data.bookId} book={data} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
