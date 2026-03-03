import React, { useState } from "react";
import { FiHome, FiUser, FiSettings, FiMenu } from "react-icons/fi";

const AppSidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { label: "Home", icon: <FiHome />, href: "#" },
    { label: "Profile", icon: <FiUser />, href: "#" },
    { label: "Settings", icon: <FiSettings />, href: "#" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white shadow-lg transition-all duration-300
      ${isOpen ? "w-64" : "w-16"}`}
    >
      <div className="flex items-center justify-between p-4">
        <span className={`font-bold text-lg ${isOpen ? "block" : "hidden"}`}>MyApp</span>
        <button
          className="text-gray-300 hover:text-white p-1 rounded-md focus:outline-none"
          onClick={toggleSidebar}
        >
          <FiMenu size={20} />
        </button>
      </div>

      <nav className="mt-6 flex flex-col gap-2">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className={`flex items-center gap-4 p-3 rounded-md hover:bg-gray-800 transition-colors
            ${!isOpen && "justify-center"}`}
          >
            <span>{item.icon}</span>
            {isOpen && <span>{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default AppSidebar;