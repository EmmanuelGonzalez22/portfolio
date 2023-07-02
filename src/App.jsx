import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { NavBar, Footer } from "./components";
import { About, Contact, Home, Projects, Services } from "./pages";
import { useScroll } from "./hooks";

function App() {
  useScroll();

  const sections = [
    { name: "home", component: <Home /> },
    { name: "about", component: <About /> },
    { name: "services", component: <Services /> },
    { name: "projects", component: <Projects /> },
    { name: "contact", component: <Contact /> },
  ];

  const sectionRefs = sections.map(() => useInView({ threshold: 0.3 }));

  return (
    <>
      <NavBar />
      <main>
        {sections.map((section, index) => (
          <Element name={section.name} key={section.name}>
            <div className='element' ref={sectionRefs[index][0]}>
              {sectionRefs[index][1] && section.component}
            </div>
          </Element>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
