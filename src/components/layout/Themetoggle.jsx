import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { setTheme, themeName } = useTheme();
  const options = ["light", "dark", "blue", "green"];

  return (
    <div className="p-2 flex gap-2">
      {options.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`px-3 py-1 rounded ${
            themeName === t ? "bg-gray-300 dark:bg-gray-700" : "bg-gray-100 dark:bg-gray-800"
          }`}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;