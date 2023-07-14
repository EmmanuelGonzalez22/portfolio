import { useState } from "react";
import { AccordionItem, AccordionItemDesk } from "../../../components";
import "./styles.scss";
import { useResponsiveComponent } from "../../../hooks";

const Accordion = () => {
  const faqs = [
    {
      id: 1,
      header: "Desarrollo web",
      text: `A través de un enfoque personalizado, desarrollo sitios web con las últimas tecnologías y tendencias del mercado. Sitios rápidos, seguros y escalables, con un rendimiento excepcional y una experiencia de usuario sin problemas.`,
      svg: "fas fa-code",
    },
    {
      id: 2,
      header: "Diseño responsive",
      text: `En un mundo cada vez más móvil, es crucial que tu sitio web se adapte a cualquier dispositivo. Mi enfoque se centra en el diseño responsive, creando sitios web que se ajustan y se ven increíbles en todas las pantallas, brindando una excelente experiencia de usuario.`,
      svg: "fas fa-mobile-screen",
    },
    {
      id: 3,
      header: "Optimización SEO",
      text: `Mejoro la visibilidad y el posicionamiento de tu sitio web en los motores de búsqueda. A través de la optimización técnica, la estructura de URL, la optimización de palabras clave y la mejora de la velocidad de carga, te ayudo a aumentar el tráfico orgánico, para atraer más visitantes.`,
      svg: "fas fa-chart-line",
    },
    {
      id: 4,
      header: "Integración de API's y servicios externos",
      text: `Conexión de sitios web con API y servicios externos, como redes sociales, sistemas de pago o servicios de terceros, para ampliar la funcionalidad y aprovechar recursos adicionales.`,
      svg: "fas fa-link",
    },
  ];
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  const responsive = useResponsiveComponent(1152);

  return (
    <ul className='accordion__list'>
      {responsive
        ? faqs.map((faq, index) => {
            return (
              <AccordionItem
                key={index}
                active={active}
                handleToggle={handleToggle}
                faq={faq}
              />
            );
          })
        : faqs.map((faq, index) => {
            return <AccordionItemDesk key={index} faq={faq} />;
          })}
    </ul>
  );
};

export { Accordion };
