import { Carousel } from "../../components";
import "./styles.scss";

const Projects = () => {
  return (
    <section className='projects__container'>
      <article className='title__container'>
        <h1 className='projects__title'>Proyectos</h1>
        <h3>
          Mis <span>trabajos</span> recientes
        </h3>
      </article>
      <article className='carousel__container'>
        <Carousel />
      </article>
    </section>
  );
};
export { Projects };
