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
        <div className='slide'>
          <Icon icon='fab fa-node' />
        </div>
        <div className='slide'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
            width='50px'
            height='40px'
            className='icon__slide'
          >
            <path
              d='M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z'
              fill='#ffcb74'
            />
            <path d='M13.445 8.543l2.972 5.995-11.97 11.135z' fill='#ffcb74' />
            <path
              d='M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z'
              fill='#ffcb74'
            />
            <path
              d='M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z'
              fill='#ffcb74'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export { CarouselSkills };
