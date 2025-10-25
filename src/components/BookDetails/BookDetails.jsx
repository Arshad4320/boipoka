import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(id, data);
  return (
    <div>
      <p>Book details page</p>
    </div>
  );
};

export default BookDetails;
