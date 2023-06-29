import perfil from "../../assets/img/alyona-grishina-BBmi4nJjKk8-unsplash.webp";
import "./styles.scss";
const About = () => {
  return (
    <section className='about__container'>
      <h1 className='about__title'>Sobre mí</h1>
      <article className='info__about-container'>
        <p className='text__one'>
          Soy un desarrollador Frontend con sede en Bariloche, Argentina. Tengo
          experiencia en la construcción de aplicaciones web con JavaScript,
          React JS, HTML, CSS y más.
        </p>
        <p className='text__two'>
          Actualmente estoy buscando trabajo como desarrollador Frontend. Si
          tienes alguna pregunta o deseas ponerte en contacto, por favor
          contáctame.
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
    </section>
  );
};

export { About };
