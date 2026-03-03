import React from "react";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FiBell size={20} />
        </button>
        <button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100">
          <FiUser size={20} />
          <span className="hidden md:block font-medium">John Doe</span>
        </button>
      </div>
    </header>
  );
};

export default Header;