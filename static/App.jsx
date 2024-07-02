import { Header } from "./Header.jsx";
import { Panels } from "./Panels.jsx";
import { Footer } from "./Footer.jsx";

/**
 * @returns {JSX.Element}
 */
export const App = () => {
  return (
    <>
      <Header />
      <Panels />
      <Footer />
    </>
  );
};
