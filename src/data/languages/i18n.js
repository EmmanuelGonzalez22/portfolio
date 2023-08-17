import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en/translation.json";
import translationES from "./es/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    fallbackLng: "en", // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
