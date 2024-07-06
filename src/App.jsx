import { Texts } from "./Texts.js";
import { Header } from "./Header.jsx";
import { Panels } from "./Panels.jsx";
import { Footer } from "./Footer.jsx";

import { useState } from "react";

/**
 * @returns {"jp" | "en"}
 */
const getInitialLang = () => {
  const browserLang = navigator.language;
  return browserLang.startsWith("ja") ? "jp" : "en";
};

/**
 * @returns {"dark" | "light"}
 */
const chooseInitialTheme = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkMode ? "dark" : "light";
};

/**
 * @returns {JSX.Element}
 */
const App = () => {
  /** @type {["light" | "dark", Function]} */
  const [theme, setTheme] = useState(chooseInitialTheme());
  /** @type {[Texts, Function]} */
  const [texts, setTexts] = useState(new Texts(getInitialLang()));

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleChangeLang = () => {
    setTexts(new Texts(texts.anotherLang));
  };

  return (
    <div className={theme}>
      <div className="min-h-screen h-full text-gray-600 dark:text-gray-400 dark:bg-gray-900">
        <Header texts={texts} theme={theme} handleChangeLang={handleChangeLang} handleChangeTheme={handleChangeTheme} />
        <Panels texts={texts} />
        <Footer texts={texts} />
      </div>
    </div>
  );
};

export default App;
