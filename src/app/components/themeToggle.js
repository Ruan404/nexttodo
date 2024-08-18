'use client'

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SunSvgComponent from "./sun";
import MoonSvgComponent from "./moon";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="switchTheme">
      <span
        className="switchThemeBtn"
        onClick={() => toggleTheme("light")}
        disabled={theme === "light"}
      >
        <SunSvgComponent id="sun"></SunSvgComponent>
      </span>
      <span
        className="switchThemeBtn"
        onClick={() => toggleTheme("dark")}
        disabled={theme === "dark"}
      >
        <MoonSvgComponent id="moon"></MoonSvgComponent>
      </span>
    </div>
  );
};

export default ThemeToggle;
