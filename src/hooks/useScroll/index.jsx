import { useEffect, useState, useRef } from "react";
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
  const touchStartPosition = useRef(0);

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

        setTimeout(() => {
          setIsScrolling(false);
        }, 300);
      }
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      const deltaY = touch.clientY - touchStartPosition.current;

      if (!isScrolling) {
        setIsScrolling(true);

        if (deltaY > 15 || deltaY < -15) {
          if (deltaY > 0) {
            scrollToPreviousSection();
          } else {
            scrollToNextSection();
          }
        }

        setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      }
    };

    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      touchStartPosition.current = touch.clientY;
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      document.body.style.overflow = "auto";
    };
  }, [isScrolling]);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      delay: 0,
      duration: 0,
      smooth: true,
      offset: -6.5 * 14,
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
