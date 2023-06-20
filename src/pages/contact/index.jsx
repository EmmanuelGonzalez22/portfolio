import { ContactForm } from "../../components";
import { onSubmit } from "../../helpers";
import "./styles.scss";

const Contact = () => {
  return (
    <section className='contact__container'>
      <h1 className='contact__title'>Contacto</h1>
      <ContactForm onSubmit={onSubmit} />
    </section>
  );
};
export { Contact };
