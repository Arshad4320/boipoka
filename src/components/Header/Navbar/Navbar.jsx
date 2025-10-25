import React, { useState } from "react";

import Button from "../../Button/Button";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = (
    <>
      <Link to="/" className="hover:text-blue-500 transition">
        Home
      </Link>
      <Link to="/about" className="hover:text-blue-500 transition">
        About
      </Link>
      <Link to="/readList" className="hover:text-blue-500 transition">
        Read List
      </Link>
    </>
  );

  return (
    <nav className=" text-green-400 py-4 px-6">
      {/* Desktop Navbar */}
      <div className=" flex justify-between items-center">
        <h2 className="text-2xl font-bold">Book Vibe</h2>

        {/* Menu Items (Desktop) */}
        <ul className="hidden lg:flex gap-6 text-lg">{router}</ul>

        {/* Button (Desktop) */}
        <Button text="Sign In" className="hidden lg:flex" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 text-green-400 py-4 rounded-lg mt-2">
          {router}
          <Button text="Sign In" className="flex lg:hidden" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
