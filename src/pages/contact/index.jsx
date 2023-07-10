import { ContactForm } from "../../components";
import { onSubmit } from "../../helpers";
import "./styles.scss";

const Contact = () => {
  return (
    <section className='contact__container'>
      <article className='title__container'>
        <h1 className='contact__title'>Contacto</h1>
        <h3>
          Vamos a <span>hablar</span>
        </h3>
      </article>
      <ContactForm onSubmit={onSubmit} />
    </section>
  );
};
export { Contact };
