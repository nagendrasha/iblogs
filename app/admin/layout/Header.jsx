import React from "react";

const Header = () => {
  return (
    <>
      <header className="text-white body-font bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Add Posts</a>
            <a className="mr-5 hover:text-gray-900">All Posts</a>
          </nav>
          <button className="inline-flex items-center text-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Profile
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
