import { Link } from "react-scroll";
import perfil from "../../assets/img/alyona-grishina-BBmi4nJjKk8-unsplash.webp";
import "./styles.scss";
const About = () => {
  return (
    <section className='about__container'>
      <h3>
        Sobre <span>mí</span>
      </h3>
      <h1 className='about__title'>Emmanuel González</h1>
      <article className='info__about-container'>
        <div className='info__about'>
          <p className='text__one'>
            Desarrollador Front-end con sede en Bariloche, Argentina. Tengo
            experiencia en la construcción de aplicaciones web con JavaScript,
            React JS, HTML, CSS y más.
          </p>
          <p className='text__two'>
            Como profesional en programación Front-end, estoy listo para aplicar
            mis conocimientos. Si tienes alguna pregunta, por favor contáctame.
          </p>
        </div>
        <p className='text__three'>
          Enfocado en cada día aprender algo nuevo, y ser un poquito mejor que
          ayer.
        </p>
        <Link to='contact' offset={-6.5 * 16} className='button'>
          ¡Contactame!
        </Link>
      </article>
      <div className='about__background'></div>
    </section>
  );
};

export { About };
