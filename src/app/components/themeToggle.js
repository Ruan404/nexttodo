'use client'

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { SunIcon, MoonIcon } from "./icons";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="switchTheme">
      <span
        className="switchThemeBtn"
        onClick={() => toggleTheme("light")}
        disabled={theme === "light"}
      >
        <SunIcon id="sun"/>
      </span>
      <span
        className="switchThemeBtn"
        onClick={() => toggleTheme("dark")}
        disabled={theme === "dark"}
      >
        <MoonIcon id="moon"/>
      </span>
    </div>
  );
};

export default ThemeToggle;
