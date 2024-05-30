"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const rootTheme = (theme) => (document.documentElement.className = theme);

  useEffect(() => {
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = isDarkMode ? "dark" : "light";
    setTheme(initialTheme);
    rootTheme(initialTheme);
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme); //update theme value => change button disabled value
    rootTheme(newTheme); //assign the new theme
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
