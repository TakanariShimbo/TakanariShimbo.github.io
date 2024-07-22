import "./i18n/config";
import Menu from "./components/sections/Menu";
import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import History from "./components/sections/History";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <main>
      <Menu />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <History />
      <Footer />
    </main>
  );
}

export default App;
