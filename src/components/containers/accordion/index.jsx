import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AccordionItem, AccordionItemDesk } from "../../../components";
import { useResponsive } from "../../../hooks";
import "./styles.scss";

const Accordion = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      id: 1,
      header: t("services_web"),
      text: t("services_web_desc"),
      svg: "fas fa-code",
    },
    {
      id: 2,
      header: t("services_responsive"),
      text: t("services_responsive_desc"),
      svg: "fas fa-mobile-screen",
    },
    {
      id: 3,
      header: t("services_seo"),
      text: t("services_seo_desc"),
      svg: "fas fa-chart-line",
    },
    {
      id: 4,
      header: t("services_API"),
      text: t("services_API_desc"),
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

  const responsive = useResponsive(1152);

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
