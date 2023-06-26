import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "../../../components";
import { useIcons } from "../../../hooks";
import "./styles.scss";

const ContactForm = ({ onSubmit }) => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const { whatsapp } = useIcons();

  return (
    <FormProvider {...methods}>
      <form
        className='contact__form'
        id='contactForm'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>¡No dudes en escribirme!</h3>
        <div className='input__form'>
          <FormInput
            autoComplete={"off"}
            label={"Nombre"}
            className='input'
            id={"name"}
            type={"text"}
            required={true}
            pattern={/^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/}
            errorMessage={"Ingrese solo letras"}
          />
        </div>
        <div className='emails__input'>
          <div className='input__form'>
            <FormInput
              autoComplete={"off"}
              label={"Email"}
              className='input'
              id='email'
              type={"text"}
              required={true}
              pattern={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
              errorMessage={"Ingrese un email válido"}
            />
          </div>
          <div className='input__form'>
            <FormInput
              autoComplete={"off"}
              label={"Confirmar email"}
              className='input'
              id={"emailConfirm"}
              type={"text"}
              required={true}
              errorMessage={"Los emails no coinciden"}
              match={"email"}
            />
          </div>
        </div>
        <div className='input__form textArea__form'>
          <FormInput
            textarea={true}
            className={"textArea"}
            name={"message"}
            id={"message"}
            required={true}
            label={"Mensaje"}
          />
        </div>
        <p id='form-message'></p>
        <div className='buttons__container'>
          <button type='submit' className='button' id='submit__button'>
            Enviar mensaje
          </button>
          <p>O si preferís...</p>
          <a
            href='https://wa.me/5492944690230/?text=%C2%A1Hola%21%20%C2%BFEst%C3%A1s%20buscando%20un%20desarrollador%20web%20altamente%20motivado%20y%20comprometido%3F%20%C2%A1Escr%C3%ADbeme%20y%20hablemos%20sobre%20las%20oportunidades%20actuales%20y%20c%C3%B3mo%20puedo%20contribuir%20al%20crecimiento%20de%20tu%20organizaci%C3%B3n%21'
            target='_blank'
            className='button'
          >
            ¡Conversemos por {whatsapp}!
          </a>
        </div>
      </form>
    </FormProvider>
  );
};

export { ContactForm };
