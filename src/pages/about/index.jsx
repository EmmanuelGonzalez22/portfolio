import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "./styles.scss";
const About = () => {
  const { t } = useTranslation();

  return (
    <section className='about__container'>
      <article className='title__container'>
        <h1 className='about__title'>Emmanuel González</h1>
        <h3>
          {t("about_title")} <span>{t("about_title_span")}</span>
        </h3>
      </article>
      <article className='info__about-container'>
        <div className='info__about'>
          <p className='text__one'>{t("about_paragraph1")}</p>
          <p className='text__two'>{t("about_paragraph2")}</p>
        </div>
        <div className='button__about'>
          <p className='text__three'>{t("about_paragraph3")}</p>
          <Link to='contact' offset={-6.5 * 14} className='button'>
            {t("about_button_contact")}
          </Link>
        </div>
      </article>
      <div className='about__background'></div>
    </section>
  );
};

export { About };
