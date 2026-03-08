import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiHome, 
  FiUser, 
  FiSettings, 
  FiMenu, 
  FiLayers, 
  FiBriefcase, 
  FiGitBranch, 
  FiClock, 
  FiStar 
} from "react-icons/fi";
import ThemeContext from "./ThemeContext";

const AppSidebar = ({ isOpen, toggleSidebar }) => {
  const { currentTheme } = useContext(ThemeContext);
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", icon: <FiHome />, href: "/" },
    { label: "Institutions", icon: <FiLayers />, href: "/institutions" },
    { label: "Branches", icon: <FiGitBranch />, href: "/branches" },
    { label: "Services", icon: <FiBriefcase />, href: "/services" },
    { label: "VIP Services", icon: <FiStar />, href: "/vip-services" },
    { label: "Appointments", icon: <FiClock />, href: "/appointments" },
    { label: "Urgent Appointments", icon: <FiClock />, href: "/urgent-appointments" },
    { label: "Users", icon: <FiUser />, href: "/users" },
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
        <span className={`font-bold text-lg ${isOpen ? "block" : "hidden"}`}>WEREFA</span>
        <button
          className={`p-1 rounded-md focus:outline-none ${
            currentTheme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
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