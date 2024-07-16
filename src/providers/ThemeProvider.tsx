import { useState, useEffect } from "react";
import { ThemeContext } from "../contexts";

const checkPrefersDarkTheme = () => {
  const prefersDarkTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkTheme;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(checkPrefersDarkTheme());

  const handleChangeTheme = (toDark: boolean) => {
    document.body.className = toDark ? "dark" : "light";
    setDarkTheme(toDark);
  };

  useEffect(() => {
    const matchDarkMedia = checkPrefersDarkTheme();
    handleChangeTheme(matchDarkMedia);
  }, []);

  const toggleTheme = () => {
    handleChangeTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
