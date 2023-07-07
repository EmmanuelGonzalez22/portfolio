import { Accordion } from "../../components/containers";
import "./styles.scss";
const Services = () => {
  return (
    <section className='services__container'>
      <article className='title__services'>
        <h1>Servicios</h1>
        <h3>
          Que puedo <span>ofrecerte</span>
        </h3>
      </article>
      <Accordion />
    </section>
  );
};
export { Services };
