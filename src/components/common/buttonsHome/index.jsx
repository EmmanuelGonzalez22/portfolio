import { Link } from "react-scroll";
import { useDownload, useIcons } from "../../../hooks";
import { t } from "i18next";

const ButtonsHome = () => {
  const Icon = useIcons("circle__icon");
  const URL_CV =
    "https://www.dropbox.com/scl/fi/9fd8i3wq1an4z9ydkpsaj/CV-Emmanuel-Gonzalez.pdf?rlkey=6iqah7zeiz1iyyjhlzekk3ay3&dl=1";
  const { downloadFileAtURL, isDownload, msg } = useDownload(URL_CV);
  return (
    <>
      <button
        className='button'
        onClick={(e) => {
          downloadFileAtURL(URL_CV);
        }}
      >
        {t(msg)} {!isDownload && <Icon icon='fas fa-arrow-down' />}
      </button>
      <a
        href='https://wa.me/5492944690230/?text=%C2%A1Hola%21%20%C2%BFEst%C3%A1s%20buscando%20un%20desarrollador%20web%20altamente%20motivado%20y%20comprometido%3F%20%C2%A1Escr%C3%ADbeme%20y%20hablemos%20sobre%20las%20oportunidades%20actuales%20y%20c%C3%B3mo%20puedo%20contribuir%20al%20crecimiento%20de%20tu%20organizaci%C3%B3n%21'
        target='_blank'
        className='button'
      >
        {t("button_wsp")} <Icon icon='fab fa-whatsapp' />!
      </a>
      <Link className='button' to='about' offset={-6.5 * 14}>
        {t("button_about")}
      </Link>
    </>
  );
};

export { ButtonsHome };
