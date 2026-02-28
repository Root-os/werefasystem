import { useState } from "react";
import { Home, Users, Settings, Menu } from "lucide-react"; // install lucide-react

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Users", icon: Users, path: "/users" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Overlay for mobile */}
      {!isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 lg:hidden"
          onClick={() => setIsOpen(true)}
        />
      )}

      <aside
        className={`fixed z-20 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-6 font-bold text-xl text-indigo-600">My Dashboard</div>

        {/* Menu */}
        <nav className="mt-10">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="flex items-center gap-3 px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-700 rounded-lg transition"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.title}</span>
            </a>
          ))}
        </nav>

        {/* Collapse button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute bottom-6 left-6 p-2 rounded-lg bg-indigo-50 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-gray-700 transition"
        >
          <Menu className="w-5 h-5 text-indigo-600" />
        </button>
      </aside>
    </>
  );
};

export default Sidebar;