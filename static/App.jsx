import { Header } from "./Header.jsx";
import { Panels } from "./Panels.jsx";
import { Footer } from "./Footer.jsx";

/**
 * @returns {JSX.Element}
 */
export const App = () => {
  return (
    <div className="h-screen text-gray-400 bg-gray-900">
      <Header />
      <Panels />
      <Footer />
    </div>
  );
};
