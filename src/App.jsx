import { Element } from "react-scroll";
import { NavBar, Footer } from "./components";
import { About, Contact, Home, Projects, Services } from "./pages";
import { useScroll } from "./hooks";
import ScrollReveal from "scrollreveal";

function App() {
  useScroll();

  /* const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  sr.reveal(".home__container"); */

  return (
    <>
      <NavBar />
      <main>
        <Element name='home' className='test'>
          <Home />
        </Element>
        <Element name='about'>
          <About />
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
      </main>
      <Footer />
    </>
  );
}

export default App;

/* function App() {
  const sections = [
    { name: "home", isVisible: false },
    { name: "about", isVisible: false },
    { name: "services", isVisible: false },
    { name: "projects", isVisible: false },
    { name: "contact", isVisible: false },
  ];

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleScroll = (event) => {
      const deltaY = event.deltaY;

      if (!isScrolling) {
        setIsScrolling(true);

        if (deltaY > 0) {
          // Desplazarse a la siguiente sección
          scrollToNextSection();
        } else if (deltaY < 0) {
          // Desplazarse a la sección anterior
          scrollToPreviousSection();
        }

        // Bloquear cambios adicionales de sección durante 800ms
        setTimeout(() => {
          setIsScrolling(false);
        }, 650);
      }
    };

    // Agregar el listener del evento wheel al montar el componente
    window.addEventListener("wheel", handleScroll);

    // Limpiar el listener del evento wheel al desmontar el componente
    return () => {
      window.removeEventListener("wheel", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isScrolling]);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      delay: 0,
      duration: 0,
      smooth: true,
      offset: -6.5 * 16,
    });
  };

  const scrollToNextSection = () => {
    const currentSectionIndex = sections.findIndex(
      (section) => section.isVisible
    );
    const nextSectionIndex = currentSectionIndex + 1;

    if (nextSectionIndex < sections.length) {
      const nextSection = sections[nextSectionIndex].name;
      scrollToSection(nextSection);
    }
  };

  const scrollToPreviousSection = () => {
    const currentSectionIndex = sections.findIndex(
      (section) => section.isVisible
    );
    const previousSectionIndex = currentSectionIndex - 1;

    if (previousSectionIndex >= 0) {
      const previousSection = sections[previousSectionIndex].name;
      scrollToSection(previousSection);
    }
  };

  const handleSectionVisibilityChange = (isVisible, sectionName) => {
    const updatedSections = sections.map((section) =>
      section.name === sectionName ? { ...section, isVisible } : section
    );
    setSections(updatedSections);
  };

  return (
    <>
      <NavBar />
      <main>
        {sections.map((section) => (
          <IntersectionObserver
            key={section.name}
            onChange={(isVisible) =>
              handleSectionVisibilityChange(isVisible, section.name)
            }
          >
            <Element name={section.name}>
              {section.isVisible && (
                <>
                  {section.name === "home" && <Home />}
                  {section.name === "about" && <About />}
                  {section.name === "services" && <Services />}
                  {section.name === "projects" && <Projects />}
                  {section.name === "contact" && <Contact />}
                </>
              )}
            </Element>
          </IntersectionObserver>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App; */
