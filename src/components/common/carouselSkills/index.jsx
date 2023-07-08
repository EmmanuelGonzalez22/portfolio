import React, { useEffect, useRef } from "react";
import { useIcons } from "../../../hooks";
import "./styles.scss";

const CarouselSkills = () => {
  const Icon = useIcons("icon__slide");

  const containerRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = iconRef.current;

    const cloneText = text.cloneNode(true);
    container.appendChild(cloneText);

    const scroll = () => {
      if (container.scrollLeft >= text.offsetWidth) {
        container.scrollLeft -= text.offsetWidth;
      } else {
        container.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='carousel-container' ref={containerRef}>
      <div className='carousel-track' ref={iconRef}>
        <div className='slide'>
          <Icon icon='fab fa-css3-alt' />
        </div>
        <div className='slide'>
          <Icon icon='fab fa-bootstrap' />
        </div>
        <div className='slide'>
          <Icon icon='fab fa-react' />
        </div>
        <div className='slide'>
          <Icon icon='fab fa-npm' />
        </div>
        <div className='slide'>
          <Icon icon='fab fa-js-square' />
        </div>
        <div className='slide'>
          <Icon icon='fab fa-html5' />
        </div>
        <div className='slide'>
          <Icon icon='fab fa-git-alt' />
        </div>
        <div className='slide'>
          <Icon icon='fab fa-github-square' />
        </div>
        <div className='slide'>
          <Icon icon='fab fa-sass' />
        </div>
      </div>
    </div>
  );
};

export { CarouselSkills };
