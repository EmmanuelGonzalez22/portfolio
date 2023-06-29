import { Link } from "react-scroll";
import { useIcons } from "../../hooks";
import avatar from "../../assets/img/avatar.svg";
import "./styles.scss";

const Home = () => {
  const {
    bootstrap,
    css,
    git,
    githubSquare,
    html,
    js,
    npm,
    react,
    sass,
    github,
    linkedin,
    whatsapp,
    download,
  } = useIcons("circle__icon");
  return (
    <section className='home__container'>
      <article className='social__container'>
        <ul className='social__list'>
          <li className='social__item'>
            <a href='https://github.com/EmmanuelGonzalez22' target='_blank'>
              {github}
            </a>
          </li>
          <li className='social__item'>
            <a
              href='https://www.linkedin.com/in/emmanuel-gonzalez-935470227/'
              target='_blank'
            >
              {linkedin}
            </a>
          </li>
          <li className='social__item'>
            <a
              href='https://wa.me/5492944690230/?text=%C2%A1Hola%21%20%C2%BFEst%C3%A1s%20buscando%20un%20desarrollador%20web%20altamente%20motivado%20y%20comprometido%3F%20%C2%A1Escr%C3%ADbeme%20y%20hablemos%20sobre%20las%20oportunidades%20actuales%20y%20c%C3%B3mo%20puedo%20contribuir%20al%20crecimiento%20de%20tu%20organizaci%C3%B3n%21'
              target='_blank'
            >
              {whatsapp}
            </a>
          </li>
        </ul>
      </article>
      <article className='profile__container'>
        <div className='svg__profile'>
          <div className='avatar__container'>
            <svg
              className='avatar__background'
              viewBox='0 0 550 591'
              xmlns='http://www.w3.org/2000/svg'
            >
              <mask id='maskBlob' mask-type='alpha'>
                <path
                  d='M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z'
                />
              </mask>
              <g mask='url(#maskBlob)'>
                <path
                  d='M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z'
                />

                <rect x='37' width='476' height='630' fill='url(#pattern0)' />
              </g>
              <rect x='37' width='476' height='300' fill='url(#pattern1)' />
              <defs>
                <pattern
                  id='pattern0'
                  patternContentUnits='objectBoundingBox'
                  width='1'
                  height='1'
                >
                  <use
                    href='#imageBlob'
                    transform='matrix(0.00143057 0 0 0.00108108 0.0404062 0)'
                  />
                </pattern>
                <pattern
                  id='pattern1'
                  patternContentUnits='objectBoundingBox'
                  width='1'
                  height='1'
                >
                  <use
                    href='#imageBlob'
                    transform='matrix(0.00143057 0 0 0.00226984 0.0404062 0)'
                  />
                </pattern>
                <image
                  className='avatar'
                  id='imageBlob'
                  width='640'
                  height='925'
                  href={avatar}
                />
              </defs>
            </svg>
          </div>
          <div className='avatar__container--circle'>{css}</div>
          <div className='avatar__container--circle'>{bootstrap}</div>
          <div className='avatar__container--circle'>{react}</div>
          <div className='avatar__container--circle'>{npm}</div>
          <div className='avatar__container--circle'>{js}</div>
          <div className='avatar__container--circle'>{html}</div>
          <div className='avatar__container--circle'>{git}</div>
          <div className='avatar__container--circle'>{githubSquare}</div>
          <div className='avatar__container--circle'>{sass}</div>
        </div>
        <div className='info__profile'>
          <div>
            <h1 className='home__title'>
              <span>{"<h1> "}</span>¡Hola! Soy Emmanuel
              <span>{" <h1/>"}</span>
            </h1>
            <h2 className='home__subtitle'>Front-end Developer</h2>
          </div>
          <h4>
            Innovación, pasión y calidad en cada línea de código que escribo.
          </h4>
        </div>
      </article>
      <article className='buttons__container'>
        <a
          className='button'
          href='https://www.dropbox.com/s/ibfr4yag36w4czp/Cv%20Emmanuel%20Gonzalez.pdf?dl=0'
          download
          target='_blank'
        >
          Descargar CV {download}
        </a>
        <a
          href='https://wa.me/5492944690230/?text=%C2%A1Hola%21%20%C2%BFEst%C3%A1s%20buscando%20un%20desarrollador%20web%20altamente%20motivado%20y%20comprometido%3F%20%C2%A1Escr%C3%ADbeme%20y%20hablemos%20sobre%20las%20oportunidades%20actuales%20y%20c%C3%B3mo%20puedo%20contribuir%20al%20crecimiento%20de%20tu%20organizaci%C3%B3n%21'
          target='_blank'
          className='button'
        >
          ¡Conversemos {whatsapp}!
        </a>
        <Link
          className='button'
          to='about'
          offset={-6.5 * 16}
          smooth={true}
          duration={500}
        >
          ¡Conóceme más!
        </Link>
      </article>
    </section>
  );
};

export { Home };
