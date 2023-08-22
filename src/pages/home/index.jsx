import { ButtonsHome, HomeAvatar, HomeProfile } from "../../components";
import { useIcons } from "../../hooks";
import "./styles.scss";

const Home = () => {
  const { Icon } = useIcons();

  return (
    <section className='home__container'>
      <article className='social__container'>
        <ul className='social__list'>
          <li className='social__item'>
            <a href='https://github.com/EmmanuelGonzalez22' target='_blank'>
              <Icon icon='fab fa-github' />
            </a>
          </li>
          <li className='social__item'>
            <a
              href='https://www.linkedin.com/in/emmanuel-gonzalez-desarrollador-web/'
              target='_blank'
            >
              <Icon icon='fab fa-linkedin' />
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
        </ul>
      </article>
      <article className='profile__container'>
        <HomeAvatar />
        <div className='info__profile'>
          <HomeProfile />
          <ButtonsHome />
        </div>
      </article>
    </section>
  );
};

export { Home };
