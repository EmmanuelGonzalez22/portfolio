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
        <p className='text__one'>
          Desarrollador Front-end con sede en Bariloche, Argentina. Tengo
          experiencia en la construcción de aplicaciones web con JavaScript,
          React JS, HTML, CSS y más.
        </p>
        <p className='text__two'>
          Como profesional en programación Front-end, estoy listo para aplicar
          mis conocimientos. Si tienes alguna pregunta, por favor contáctame.
        </p>
        <p className='text__three'>
          Enfocado en cada día aprender algo nuevo, y ser un poquito mejor que
          ayer.
        </p>

        <aside className='aside__about'>
          {/* <div>
            <img src={perfil} alt='Perfil' />
          </div> */}
        </aside>
      </article>
      <div>
        <Link to='contact' offset={-6.5 * 16} className='button'>
          ¡Contactame!
        </Link>
      </div>
    </section>
  );
};

export { About };
