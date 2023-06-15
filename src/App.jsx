import { Element } from "react-scroll";
import { NavBar, Footer } from "./components";
import { About, Contact, Home, Projects, Services } from "./pages";

function App() {
  return (
    <>
      <NavBar />
      <Element name='home'>
        <Home />
      </Element>
      <Element name='about'>
        {" "}
        <About />{" "}
      </Element>
      <Element name='services'>
        <Services />
      </Element>
      <Element name='projects'>
        <Projects />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
