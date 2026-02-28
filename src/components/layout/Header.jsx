import { useState } from "react";
import { Bell, User } from "lucide-react";

const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      {/* Left: Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Dashboard
      </h1>

      {/* Right: Notifications + Profile */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-200" />
        </button>

        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <User className="w-5 h-5 text-gray-600 dark:text-gray-200" />
            <span className="hidden md:inline text-gray-800 dark:text-gray-100 font-medium">
              John Doe
            </span>
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <a
                href="/profile"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Profile
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;