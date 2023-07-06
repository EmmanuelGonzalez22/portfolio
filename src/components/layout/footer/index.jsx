import { useIcons } from "../../../hooks";
import "./styles.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const Icon = useIcons();

  return (
    <footer className='footer'>
      <section className='footer__container'>
        <article className='social__container'>
          <ul className='social__list'>
            <div className='social__list-decoration'></div>
            <li className='social__item'>
              <a href='https://github.com/EmmanuelGonzalez22' target='_blank'>
                <Icon icon='fab fa-github' />
              </a>
            </li>
            <li className='social__item'>
              <a
                href='https://www.linkedin.com/in/emmanuel-gonzalez-935470227/'
                target='_blank'
              >
                <Icon icon='fab fa-linkedin' />
              </a>
            </li>
            <li className='social__item'>
              <a
                href='https://www.instagram.com/emma.gonzalez.980/'
                target='_blank'
              >
                <Icon icon='fab fa-instagram' />
              </a>
            </li>
            <li className='social__item'>
              <a
                href='https://wa.me/5492944690230/?text=%C2%A1Hola%21%20%C2%BFEst%C3%A1s%20buscando%20un%20desarrollador%20web%20altamente%20motivado%20y%20comprometido%3F%20%C2%A1Escr%C3%ADbeme%20y%20hablemos%20sobre%20las%20oportunidades%20actuales%20y%20c%C3%B3mo%20puedo%20contribuir%20al%20crecimiento%20de%20tu%20organizaci%C3%B3n%21'
                target='_blank'
              >
                <Icon icon='fab fa-whatsapp' />
              </a>
            </li>
            <div className='social__list-decoration'></div>
          </ul>
        </article>
        <article className='copy__container'>
          <p>Copyright &copy; Emmanuel González - {currentYear}</p>
        </article>
      </section>
    </footer>
  );
};

export { Footer };
