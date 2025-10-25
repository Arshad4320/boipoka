import React from "react";
import Button from "../Button/Button";
import img from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="grid grid-cols-1 p-10  bg-gray-100 lg:mx-auto  lg:grid-cols-2   ">
      <div>
        <p className="text-4xl   lg:my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          possimus
        </p>
        <Button text={"Get Started"} className={"w-1/3 my-4"} />
      </div>
      <div>
        <img className="w-full" src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
