import { Header } from "./Header.jsx";
import { Panels } from "./Panels.jsx";
import { Footer } from "./Footer.jsx";

/**
 * @returns {JSX.Element}
 */
export const App = () => {
  return (
    <>
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <Header />
          <Panels />
        </div>
      </section>
      <Footer />
    </>
  );
};
