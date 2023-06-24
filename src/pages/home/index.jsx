import { Link } from "react-scroll";
import { useIcons } from "../../hooks";
import avatar from "../../assets/img/avatar.svg";
import "./styles.scss";

const Home = () => {
  const { bootstrap, css, git, githubSquare, html, js, npm, react, sass } =
    useIcons("circle__icon");
  return (
    <section className='home__container'>
      <article>
        <h1 className='home__title'>Hola, soy Emmanuel</h1>
        <h2 className='home__subtitle'>Frontend Developer</h2>
        <div className='profile__container'>
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
        <p>
          Soy un desarrollador Frontend con sede en Bariloche, Argentina. Tengo
          experiencia en la construcción de aplicaciones web con JavaScript,
          React, HTML, CSS y más.
        </p>
        <p>
          Actualmente estoy buscando trabajo como desarrollador Frontend. Si
          tienes alguna pregunta o deseas ponerte en contacto, por favor
          contáctame.
        </p>
      </article>
      <Link to='about' offset={-6.5 * 16} smooth={true} duration={500}>
        About me
      </Link>
    </section>
  );
};

export { Home };
