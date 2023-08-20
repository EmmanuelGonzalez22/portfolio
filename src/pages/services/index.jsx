import { useTranslation } from "react-i18next";
import { CarouselSkills, Accordion } from "../../components";
import "./styles.scss";
const Services = () => {
  const { t } = useTranslation();

  return (
    <section className='services__container'>
      <article className='title__container'>
        <h1>{t("services_title")}</h1>
        <h3>
          {t("services_subtitle")} <span>{t("services_subtitle_span")}</span>
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
