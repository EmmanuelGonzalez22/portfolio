import { useTranslation } from "react-i18next";
import { Carousel } from "../../components";
import "./styles.scss";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className='projects__container'>
      <article className='title__container'>
        <h1 className='projects__title'>{t("projects_title")}</h1>
        <h3>
          {t("projects_subtitle")} <span>{t("projects_subtitle_span")}</span>{" "}
          {t("projects_subtitle2")}
        </h3>
      </article>
      <article className='carousel__container'>
        <Carousel />
      </article>
    </section>
  );
};
export { Projects };
