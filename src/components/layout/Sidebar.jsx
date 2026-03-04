import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiSettings, FiMenu } from "react-icons/fi";
import ThemeContext from "./ThemeContext";

const AppSidebar = ({ isOpen, toggleSidebar }) => {
  const { currentTheme } = useContext(ThemeContext);
  const location = useLocation();
  
  const menuItems = [
    { label: "Home", icon: <FiHome />, href: "/" },
    { label: "Profile", icon: <FiUser />, href: "/profile" },
    { label: "Settings", icon: <FiSettings />, href: "/settings" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full shadow-lg transition-all duration-300 z-30
      ${isOpen ? "w-64" : "w-16"} ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} ${
        currentTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <span className={`font-bold text-lg ${isOpen ? "block" : "hidden"}`}>MyApp</span>
        <button
          className={`text-gray-300 hover:text-white p-1 rounded-md focus:outline-none ${
            currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
          onClick={toggleSidebar}
        >
          <FiMenu size={20} />
        </button>
      </div>

      <nav className="mt-6 flex flex-col gap-2">
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.href}
            className={`flex items-center gap-4 p-3 rounded-md transition-colors
            ${!isOpen && "justify-center"} ${
              currentTheme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
            } ${
              location.pathname === item.href 
                ? (currentTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-200')
                : ''
            }`}
          >
            <span>{item.icon}</span>
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AppSidebar;