import { Carousel, CarouselMobile } from "../../components";
import { useResponsive } from "../../hooks";
import "./styles.scss";

const Projects = () => {
  const responsive = useResponsive(1152);
  return (
    <section className='projects__container'>
      <article className='title__container'>
        <h1 className='projects__title'>Proyectos</h1>
        <h3>
          Mis <span>trabajos</span> recientes
        </h3>
      </article>
      <article className='carousel__container'>
        {responsive ? <CarouselMobile /> : <Carousel />}
      </article>
    </section>
  );
};
export { Projects };
