import React, { useState, FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sm:flex justify-between bg-gray-900 py-3 px-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl text-gray-500">
          ExcerTrakr
        </Link>
        <div className="sm:hidden">
          <button
            type="button"
            className="sm:hidden text-gray-500 hover:text-white focus:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? "flex flex-col" : "hidden"
        } sm:flex text-gray-500 px-0 pt-2 sm:px-2 sm:pt-0 pb-4 sm:p-0`}
      >
        <Link to="/" className="block py-1 px-0 sm:px-2 font-semibold rounded hover:bg-gray-800">
          Exercises
        </Link>
        <Link
          to="/create"
          className="py-1 px-0 sm:px-2 font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Create Exercise log
        </Link>
        <Link
          to="/user"
          className="py-1 px-0 sm:px-2 font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Create User
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
