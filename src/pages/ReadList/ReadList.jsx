import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getItemIntoDb } from "../../utility/addToDb";
import Book from "../Book/Book";

const ReadList = () => {
  const data = useLoaderData();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const bookId = getItemIntoDb();
    const books = bookId.map((id) => parseInt(id));
    const filteredData = data.filter((book) => books.includes(book.bookId));
    setFilteredData(filteredData);
  }, []);
  return (
    <div>
      {" "}
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
          <h2>Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
