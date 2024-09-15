"use client";

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { SunIcon, MoonIcon } from "./icons";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="switchTheme shadow-border relative flex gap-1 rounded-lg bg-transparent p-1">
      <span
        className={`${theme === "light" ? "text-swith-theme" : "text-swith-theme/50"} z-10 h-6 w-6`}
        onClick={() => toggleTheme("light")}
        disabled={theme === "light"}
      >
        <SunIcon />
      </span>
      <span
        className={`${theme === "dark" ? "text-swith-theme" : "text-swith-theme/50"} z-10 h-6 w-6`}
        onClick={() => toggleTheme("dark")}
        disabled={theme === "dark"}
      >
        <MoonIcon />
      </span>
    </div>
  );
};

export default ThemeToggle;
