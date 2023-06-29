import { useEffect, useState } from "react";
import { scroller } from "react-scroll";

const useScroll = () => {
  const sections = [
    "home",
    "about",
    "services",
    "projects",
    "contact",
    "footer",
  ];

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleScroll = (event) => {
      const deltaY = event.deltaY;

      if (!isScrolling) {
        setIsScrolling(true);

        if (deltaY > 0) {
          scrollToNextSection();
        } else if (deltaY < 0) {
          scrollToPreviousSection();
        }

        // Bloquear cambios adicionales de sección durante 650ms
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
    const currentSectionIndex = sections.indexOf(scroller.getActiveLink());
    const nextSectionIndex = currentSectionIndex + 1;

    if (nextSectionIndex < sections.length) {
      const nextSection = sections[nextSectionIndex];
      scrollToSection(nextSection);
    }
  };

  const scrollToPreviousSection = () => {
    const currentSectionIndex = sections.indexOf(scroller.getActiveLink());
    const previousSectionIndex = currentSectionIndex - 1;

    if (previousSectionIndex >= 0) {
      const previousSection = sections[previousSectionIndex];
      scrollToSection(previousSection);
    }
  };
};

export { useScroll };
