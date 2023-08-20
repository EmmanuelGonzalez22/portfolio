import { useTranslation } from "react-i18next";
import { ContactForm } from "../../components";
import { onSubmit } from "../../helpers";
import "./styles.scss";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className='contact__container'>
      <article className='title__container'>
        <h1 className='contact__title'>{t("contact_title")}</h1>
        <h3>
          {t("contact_subtitle")} <span>{t("contact_subtitle_span")}</span>{" "}
          {t("contact_subtitle2")}
        </h3>
      </article>
      <ContactForm onSubmit={onSubmit} />
    </section>
  );
};
export { Contact };
