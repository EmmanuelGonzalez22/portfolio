import { CarouselSkills, Accordion } from "../../components";
import "./styles.scss";
const Services = () => {
  return (
    <section className='services__container'>
      <article className='title__container'>
        <h1>Servicios</h1>
        <h3>
          Que puedo <span>ofrecerte</span>
        </h3>
      </article>
      <article className='accordion__container'>
        <Accordion />
      </article>
      <article className='skills__container'>
        <CarouselSkills />
      </article>
    </section>
  );
};
export { Services };
