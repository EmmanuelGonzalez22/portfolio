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
            <img src={avatar} alt='avatar' />
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
            <h1 className='home__title'>¡Hola! Me llamo Emmanuel</h1>
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
          Descargar CV
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
