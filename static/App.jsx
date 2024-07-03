import { Header } from "./Header.jsx";
import { Panels } from "./Panels.jsx";
import { Footer } from "./Footer.jsx";

import { useState } from "./React";

/**
 * @returns {JSX.Element}
 */
export const App = () => {
  const [theme, setTheme] = useState("dark");

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme}>
      <div className="min-h-screen h-full text-gray-600 dark:text-gray-400 dark:bg-gray-900">
        <Header handleChangeTheme={handleChangeTheme} theme={theme} />
        <Panels />
        <Footer />
      </div>
    </div>
  );
};
