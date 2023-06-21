import { Carousel } from "../../components";
import "./styles.scss";

const Projects = () => {
  return (
    <section className='projects__container'>
      <h3>
        Mis <span>trabajos</span> recientes
      </h3>
      <h1 className='projects__title'>Proyectos</h1>
      <article className='carousel__container'>
        <Carousel />
      </article>
    </section>
  );
};
export { Projects };
