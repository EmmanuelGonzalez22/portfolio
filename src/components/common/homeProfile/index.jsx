import { useTranslation } from "react-i18next";

const HomeProfile = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1 className='home__title'>
          <span>{"<h1> "}</span>
          {t("home_title")}
          <span>{" <h1/>"}</span>
        </h1>
        <h2 className='home__subtitle'>{t("home_subtitle")}</h2>
      </div>
      <h4>{t("home_description")}</h4>
    </>
  );
};

export { HomeProfile };
