import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Available themes
  const themes = {
    light: { sidebar: "bg-white text-black", body: "bg-gray-100 text-black" },
    dark: { sidebar: "bg-gray-900 text-white", body: "bg-gray-800 text-white" },
    ocean: { sidebar: "bg-blue-700 text-white", body: "bg-blue-100 text-black" },
    forest: { sidebar: "bg-green-800 text-white", body: "bg-green-100 text-black" },
    sunset: { sidebar: "bg-red-600 text-white", body: "bg-orange-100 text-black" },
  };

  const [themeName, setThemeName] = useState("light");

  // Optional: Persist theme in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("app-theme");
    if (saved && themes[saved]) setThemeName(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("app-theme", themeName);
  }, [themeName]);

  const toggleTheme = (name) => {
    if (themes[name]) setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ themeName, theme: themes[themeName], toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};