import { Link } from "react-scroll";
import "./styles.scss";
const About = () => {
  return (
    <section className='about__container'>
      <article className='title__container'>
        <h1 className='about__title'>Emmanuel González</h1>
        <h3>
          Sobre <span>mí</span>
        </h3>
      </article>
      <article className='info__about-container'>
        <div className='info__about'>
          <p className='text__one'>
            Desarrollador Frontend con sede en Bariloche, Argentina. Tengo
            experiencia en la construcción de aplicaciones web con JavaScript,
            React JS, HTML, CSS y más.
          </p>
          <p className='text__two'>
            Como profesional en programación Frontend, estoy listo para aplicar
            mis conocimientos. Si tienes alguna pregunta, por favor contáctame.
          </p>
        </div>
        <div className='button__about'>
          <p className='text__three'>
            Enfocado en cada día aprender algo nuevo, y ser un poco mejor que
            ayer.
          </p>
          <Link to='contact' offset={-6.5 * 14} className='button'>
            ¡Contáctame!
          </Link>
        </div>
      </article>
      <div className='about__background'></div>
    </section>
  );
};

export { About };
