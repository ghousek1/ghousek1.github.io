import { React, useState, useEffect } from "react";
import "../App.css";
import { ThemeContext } from "./ThemeContext";

function ThemeContextDefaultProvider(props) {
  const [userThemeMode, setUserThemeMode] = useState("light");

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setUserThemeMode(colorScheme);
      });

      toggleUserThemeMode();
      toggleCSSVariables();
  }, []);

  const lightThemeCSSVariables = [
    {
      name: "--custom-background-color",
      value: "#ffffff",
    },
    {
      name: "--custom-first-heading-color",
      value: "#141212",
    },
    
    {
      name: "--custom-header-lines-color",
      value: "#4b4f58",
    },
  ];

  const darkThemeCSSVariables = [
    {
      name: "--custom-background-color",
      value: "#090909",
    },
    {
      name: "--custom-first-heading-color",
      value: "#c7d2f5",
    },
    
    {
      name: "--custom-header-lines-color",
      value: "#545a65",
    },
  ];

  const toggleUserThemeMode = () => {
    setUserThemeMode(userThemeMode === "dark" ? "light" : "dark");
    toggleCSSVariables();
  };

  const toggleCSSVariables = () => {
    const themeCSSVariables = userThemeMode === "light" ? lightThemeCSSVariables : darkThemeCSSVariables;
    themeCSSVariables.map((cssVar) => {
      document.documentElement.style.setProperty(cssVar.name, cssVar.value);
    });
  };

  return (
    <>
      <ThemeContext.Provider value={[userThemeMode, toggleUserThemeMode]}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeContextDefaultProvider;
