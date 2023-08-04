import React, { useEffect, useRef } from "react";
import { useIcons } from "../../../hooks";
import vite from "../../../assets/img/vite.svg";
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
          <svg
            className='icon__slide'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 128 128'
          >
            <defs>
              <linearGradient
                id='a'
                x1='6'
                x2='235'
                y1='33'
                y2='344'
                gradientTransform='translate(0 .937) scale(.3122)'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' stopColor='#41d1ff' />
                <stop offset='1' stopColor='#bd34fe' />
              </linearGradient>
              <linearGradient
                id='b'
                x1='194.651'
                x2='236.076'
                y1='8.818'
                y2='292.989'
                gradientTransform='translate(0 .937) scale(.3122)'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' stopColor='#ffea83' />
                <stop offset='.083' stopColor='#ffdd35' />
                <stop offset='1' stopColor='#ffa800' />
              </linearGradient>
            </defs>
            <path
              fill='#ffcb74'
              d='M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0'
            />
            <path
              fill='#1c1c1c'
              d='M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0'
            />
          </svg>
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
