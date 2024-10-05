import React from "react";
import { useTheme } from "../app/context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className={` ${theme === 'light' ? 'bg-white text-gray-600' : 'bg-black text-white'} body-font`}>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="mr-5 hover:text-gray-900">iBlogs</a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">Products</a>
            <a className="mr-5 hover:text-gray-900">Blogs</a>
            <a className="mr-5 hover:text-gray-900">Pricing</a>
            <a className="mr-5 hover:text-gray-900">About Us</a>
          </nav>
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded mr-3"
          >
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
          <button className="inline-flex items-center mr-3 bg-gray-100 border-0 py-1 px-3 text-black focus:outline-none rounded text-base mt-4 md:mt-0">
            Log In
          </button>
          <button className="inline-flex items-center bg-black border-0 py-1 px-3 text-white focus:outline-none rounded text-base mt-4 md:mt-0">
            Sign Up
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
