import { useTranslation } from "react-i18next";
import { useIcons } from "../../hooks";
import { ButtonsHome } from "../../components";
import avatar from "../../assets/img/avatar-svg.svg";
import vite from "../../assets/img/vite.svg";
import "./styles.scss";

const Home = () => {
  const Icon = useIcons("circle__icon");
  const { t } = useTranslation();

  return (
    <section className='home__container'>
      <article className='social__container'>
        <ul className='social__list'>
          <li className='social__item'>
            <a href='https://github.com/EmmanuelGonzalez22' target='_blank'>
              <Icon icon='fab fa-github' />
            </a>
          </li>
          <li className='social__item'>
            <a
              href='https://www.linkedin.com/in/emmanuel-gonzalez-desarrollador-web/'
              target='_blank'
            >
              <Icon icon='fab fa-linkedin' />
            </a>
          </li>
          <li className='social__item'>
            <a
              href='https://wa.me/5492944690230/?text=%C2%A1Hola%21%20%C2%BFEst%C3%A1s%20buscando%20un%20desarrollador%20web%20altamente%20motivado%20y%20comprometido%3F%20%C2%A1Escr%C3%ADbeme%20y%20hablemos%20sobre%20las%20oportunidades%20actuales%20y%20c%C3%B3mo%20puedo%20contribuir%20al%20crecimiento%20de%20tu%20organizaci%C3%B3n%21'
              target='_blank'
            >
              <Icon icon='fab fa-whatsapp' />
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
          <div className='avatar__container--circle'>
            <Icon icon='fab fa-css3-alt' />
          </div>
          <div className='avatar__container--circle'>
            <Icon icon='fab fa-bootstrap' />
          </div>
          <div className='avatar__container--circle'>
            <Icon icon='fab fa-react' />
          </div>
          <div className='avatar__container--circle'>
            <Icon icon='fab fa-npm' />
          </div>
          <div className='avatar__container--circle'>
            <Icon icon='fab fa-js-square' />
          </div>
          <div className='avatar__container--circle'>
            <Icon icon='fab fa-html5' />
          </div>
          <div className='avatar__container--circle'>
            <Icon icon='fab fa-git-alt' />
          </div>
          <div className='avatar__container--circle'>
            <Icon icon='fab fa-github-square' />
          </div>
          <div className='avatar__container--circle'>
            <Icon icon='fab fa-sass' />
          </div>
          <div className='avatar__container--circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              className='circle__icon'
            >
              <path
                d='M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z'
                fill='#ffa000'
              />
              <path
                d='M13.445 8.543l2.972 5.995-11.97 11.135z'
                fill='#f57f17'
              />
              <path
                d='M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z'
                fill='#ffca28'
              />
              <path
                d='M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z'
                fill='#ffa000'
              />
            </svg>
          </div>
          <div className='avatar__container--circle'>
            <img src={vite} alt='ViteJS' className='circle__icon' />
          </div>
        </div>
        <div className='info__profile'>
          <div>
            <h1 className='home__title'>
              <span>{"<h1> "}</span>
              {t("home_title")}
              <span>{" <h1/>"}</span>
            </h1>
            <h2 className='home__subtitle'>{t("home_subtitle")}</h2>
          </div>
          <h4>{t("home_description")}</h4>
          <div className='buttons__profile'>
            <ButtonsHome />
          </div>
        </div>
      </article>
    </section>
  );
};

export { Home };
