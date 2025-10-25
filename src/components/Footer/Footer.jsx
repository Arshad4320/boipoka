import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold">MyShop</h2>
        <p className="text-sm text-gray-400 mt-1">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-3">
          <a href="#" className="text-gray-400 hover:text-white transition">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
